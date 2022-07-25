import { AboutMe } from "../../components/contents/AboutMe";
import { MyPresentation } from "../../components/contents/MyPresentation";
import { MyServices } from "../../components/contents/MyServices";

export function Home() {
    return (
        <>
            <MyPresentation />
            <AboutMe />
            <MyServices />
        </>
    );
}
