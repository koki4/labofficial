import Article1 from "./components/Article1"
import Article2 from "./components/Article2";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

// 例として、外部APIからデータをフェッチする場合
export async function getServerSideProps() {
  // 外部APIからデータをフェッチするロジック
  // const data = await fetchData();

  // フェッチしたデータをpropsとしてページコンポーネントに渡す
  return { props: { /* data */ } };
}

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