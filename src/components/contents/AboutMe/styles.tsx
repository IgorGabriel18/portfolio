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

    @media screen and (min-width: ${({ theme }) => theme.shape.screen.breakpoint}) {
        grid-template: 100% / repeat(2, auto);
    }
`;

export const Img = styled.img`
    width: 16rem;
    height: 16rem;
    border-radius: ${({ theme }) => theme.shape.border.radius.circle};
`;

export const TextBox = styled.div`
    width: 100%;
    max-width: 35rem;
    height: max-content;
    display: grid;
    grid-template: repeat(3, auto) / 100%;
    row-gap: ${({ theme }) => theme.shape.spacing.small};

    h2 {
        font: ${({ theme }) => theme.typography.title};
        color: ${({ theme }) => theme.color_palette.brand};
        text-align: center;
    }

    h3 {
        font: ${({ theme }) => theme.typography.subtitle};
        color: ${({ theme }) => theme.color_palette.text.primary};
        text-align: center;
    }

    p {
        font: ${({ theme }) => theme.typography.text};
        color: ${({ theme }) => theme.color_palette.text.secondary};
        text-align: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.shape.screen.breakpoint}) {
        h2,
        h3,
        p {
            text-align: left;
        }
    }
`;
