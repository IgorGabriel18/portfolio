import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: ${({ theme }) => theme.shape.screen.max_width};
    height: max-content;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.shape.spacing.medium};
    display: grid;
    grid-template:
        "item1"
        "item2";
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    row-gap: ${({ theme }) => theme.shape.spacing.big};

    @media screen and (min-width: ${({ theme }) => theme.shape.screen.breakpoint}) {
        min-height: ${({ theme }) => theme.shape.screen.min_height};
        grid-template: "item2 item1";
    }
`;

export const Img = styled.img`
    width: 16rem;
    height: 16rem;
    grid-area: item1;
`;

export const TextsBox = styled.div`
    width: 100%;
    max-width: max-content;
    height: max-content;
    display: grid;
    grid-template: repeat(2, auto) / 100%;
    row-gap: ${({ theme }) => theme.shape.spacing.medium};
    grid-area: item2;

    h1 {
        font: ${({ theme }) => theme.typography.variant.my_presentation};
        color: ${({ theme }) => theme.color_palette.text.primary};
        text-align: center;
    }

    p {
        font: ${({ theme }) => theme.typography.subtitle};
        color: ${({ theme }) => theme.color_palette.text.secondary};
        text-align: center;
    }

    span {
        color: ${({ theme }) => theme.color_palette.brand};
    }

    @media screen and (min-width: ${({ theme }) => theme.shape.screen.breakpoint}) {
        h1,
        p {
            text-align: left;
        }
    }
`;
