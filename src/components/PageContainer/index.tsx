import { ReactNode } from "react";

import { Container } from "./styles";

interface IPageContainerProps {
    children: ReactNode;
}

export function PageContainer(props: IPageContainerProps) {
    return <Container>{props.children}</Container>;
}
