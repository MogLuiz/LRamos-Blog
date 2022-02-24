import { styled } from "../../styles";

export const Label = styled("label", {
  marginLeft: "30px", // Retirar

  position: "relative",

  width: "100px",
  height: "50px",

  background: "$bgSecondary",
  borderRadius: "10px",
});

export const Input = styled("input", {
  appearance: "none",

  "&:checked ~ span": {
    left: "50px",
  },

  "&:checked ~ span svg": {
    color: "rgba(255, 255, 255, 1)",
    filter:
      "drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff)",
  },
});

export const Span = styled("span", {
  position: "absolute",

  top: "0",
  left: "0",

  width: "50px",
  height: "50px",

  background: "$bgPrimary",

  border: "6px solid $bgSecondary",
  borderRadius: "14px",

  cursor: "pointer",

  transition: "0.5s",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    color: "rgba(255, 255, 255, 0.25)",
    fontSize: "1.3em",
    transition: "0.5s",
  },
});
