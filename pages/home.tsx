import Article1 from "./components/Article1"
import Article2 from "./components/Article2";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

export default function Home() {
    return (
        <div>
            <>
                <ResponsiveNavbar></ResponsiveNavbar>
                <Article1 />
                <Article2 />
            </>
        </div>
    );
}
