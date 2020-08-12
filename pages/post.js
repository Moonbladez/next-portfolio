import Link from "next/link"

import { Layout } from "../components/Layout"

const Post = ({ url }) => {
    return (
        <Layout title={url.query.title}>

            <Link href="/blog"><a>All Posts</a></Link>
        </Layout>
    )


}

export default Post