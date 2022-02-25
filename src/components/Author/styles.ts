import { styled } from "../../styles";

export const WrapperAuthorSession = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",

  bottom: "0",
  left: "0",
});

export const ImageAuthor = styled("img", {
  width: "50px",

  borderRadius: "$defaultImageRadius",
});

export const AuthorInfo = styled("div", {
  marginLeft: "15px",
});

export const AuthorName = styled("p", {
  fontWeight: "bold",
  color: "$textPrimary",
});

export const PostDate = styled("p", {
  color: "$textSecondary",
  marginTop: "5px",
});
