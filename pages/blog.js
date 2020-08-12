import Link from "next/link"

import { Layout } from "../components/Layout"

const PostLink = ({ title }) => (
    <li>
        <Link href={`/post?title=${title}`}><a>{title}</a></Link>
    </li>

)




const Blog = () => {
    return (
        <Layout title="My Blog">
            <ul>
                <PostLink title="react" />
                <PostLink title="angular" />

            </ul>

        </Layout>
    )


}

export default Blog
