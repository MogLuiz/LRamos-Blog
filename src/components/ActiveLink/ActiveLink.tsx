// Packages
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { cloneElement, ReactElement } from "react"

interface IActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

const ActiveLink = ({
  children,
  shouldMatchExactHref,
  ...rest
}: IActiveLinkProps) => {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  // If the route doesn't need to be strictly equal, it just needs to start the same.
  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        isActive: isActive ? true : false
      })}
    </Link>
  )
}

export default ActiveLink
