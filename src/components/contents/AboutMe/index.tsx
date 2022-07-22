import fotoImg from "../../../assets/foto.jpeg";
import { Container, Img, TextBox } from "./styles";

export function AboutMe() {
    return (
        <Container>
            <Img src={fotoImg} alt="Minha foto" />

            <TextBox>
                <h2>Quem sou eu</h2>
                <h3>Desenvolvedor Front-End</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </TextBox>
        </Container>
    );
}
