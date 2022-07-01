// Packages
import { screen } from "@testing-library/react"

// utils
import { renderWithTheme } from "utils/tests/helpers"

// Components
import { Toggle } from "."

describe("<Toggle />", () => {
  it("should render Toggle component", () => {
    renderWithTheme(<Toggle />)
    expect(screen.getByLabelText(/Theme Toggle/i)).toBeInTheDocument()
  })
})
