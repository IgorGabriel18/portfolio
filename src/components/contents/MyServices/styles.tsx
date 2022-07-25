import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: ${({ theme }) => theme.shape.screen.max_width};
    height: max-content;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.shape.spacing.medium};
    display: grid;
    grid-template: repeat(2, auto) / 100%;
    justify-items: center;
    justify-content: space-around;
    align-items: center;
    row-gap: ${({ theme }) => theme.shape.spacing.big};

    h2 {
        font: ${({ theme }) => theme.typography.title};
        color: ${({ theme }) => theme.color_palette.brand};
        text-align: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.shape.screen.breakpoint}) {
        grid-template: 100% / repeat(2, auto);
    }
`;
