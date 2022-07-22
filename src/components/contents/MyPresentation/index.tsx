import webdevImg from "../../../assets/webdev.svg";
import { Container, Img, TextsBox } from "./styles";

export function MyPresentation() {
    return (
        <Container>
            <Img src={webdevImg} alt="Imagem de apresentação" />

            <TextsBox>
                <h1>
                    Olá, seja bem-vindo
                    <br />
                    ao meu <span>portfólio</span>
                </h1>
                <p>
                    eu me chamo Igor e sou um
                    <br />
                    <span>Desenvolvedor Front-End</span>
                </p>
            </TextsBox>
        </Container>
    );
}
