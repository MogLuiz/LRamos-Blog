import React from "react";
import Image from "next/image";

import { Container, ImagePost } from "./styles";

const MainCard: React.FC = () => {
  return (
    <Container>
      <ImagePost src="/imgProject.jpg" />
      <div>
        <button>The newest</button>
        <h1>
          Como utilizar a biblioteca de css in js Stitches? É uma boa ferramenta
          para mercado?
        </h1>
        <p>
          É extremamente válido o aprendizado da biblioteca Stitches no que
          tange css in js, ela tras consigo..
        </p>
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/58401291?v=4"
            width={80}
          />
          <div>
            <h3>By: Luiz</h3>
            <p>24/02/2022</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainCard;
