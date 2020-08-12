import Link from "next/link"
import { Layout } from "../components/Layout.js"

const Error = ({ statusCode }) => {
    return (
        <Layout title="This is not the page you were looking for">
            {statusCode ? `Could not find the userData: Status Code: ${statusCode}` : `Page Not found`}
            <Link href="/">Home</Link>
        </Layout>
    )

}

export default Error


