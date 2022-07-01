// Packages
import React from "react"

// Styles
import {
  AuthorInfo,
  AuthorName,
  ImageAuthor,
  PostDate,
  WrapperAuthorSession
} from "./styles"

const Author = () => (
  <WrapperAuthorSession>
    <ImageAuthor src="https://avatars.githubusercontent.com/u/58401291?v=4" />
    <AuthorInfo>
      <AuthorName>Luiz Henrique</AuthorName>
      <PostDate>24/02/2022</PostDate>
    </AuthorInfo>
  </WrapperAuthorSession>
)

export default Author
