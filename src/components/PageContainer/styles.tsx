import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: auto;
    padding: ${({ theme }) => theme.shape.screen.top_bottom};
    background-color: ${({ theme }) => theme.color_palette.base};
`;
