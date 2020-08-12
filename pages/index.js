import Link from "next/link"

//internal
import { Layout } from "../components/Layout"


const Index = () => (
    <Layout title={"Home"}>
        <Link href="/about"><a>About</a></Link>
    </Layout>
)

export default Index