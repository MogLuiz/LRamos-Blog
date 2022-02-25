import { styled } from "../../styles";

export const Container = styled("div", {
  maxWidth: "1120px",
  maxHeight: "330px",

  margin: "0 auto",
  padding: "$0 $32",

  display: "flex",
});

export const ImagePost = styled("img", {
  width: "55%",
  height: "100%",

  borderRadius: "$defaultImageRadius",
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
