import { styled } from "../../styles";

export const Container = styled("div", {
  maxWidth: "1120px",
  maxHeight: "330px",

  margin: "0 auto",
  padding: "0 2rem",

  display: "flex",
});

export const ImagePost = styled("img", {
  width: "55%",
  height: "100%",

  borderRadius: "20px",
});

export const ContentWrapper = styled("div", {
  marginLeft: "30px",
  position: "relative",
});

export const TitlePost = styled("h1", {
  color: "$textPrimary",

  lineHeight: "45px",
});

export const SubtitlePost = styled("p", {
  color: "$textSecondary",

  marginTop: "15px",
  lineHeight: "25px",
});

export const WrapperAuthorSession = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",

  bottom: "0",
  left: "0",
});

export const ImageAuthor = styled("img", {
  width: "50px",

  borderRadius: "20px",
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
