import { 
    NextPage, 
    GetStaticProps,
    NextPageContext,
} from "next"
import Head from "next/head"

// ページコンポーネントのpropsの型定義
type SSGProps = {}


// SSG向けのページを実装
const SSG: NextPage<SSGProps> = () => {
    return (
        <div>
            {/* Headerコンポーネントで包むとその要素は<head>タグに配置される */}
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページは静的製によってビルド時に生成されたページです。
                </p>
            </main>
            <p>
                このページは静的サイト生成によってビルド時に生成されたページです。
            </p>
        </div>
    )
}

// SSG
export const getStaticProps: GetStaticProps<SSGProps> async (context) => {
    const timestamp = new Date().toLocaleString()
}

export default SSG