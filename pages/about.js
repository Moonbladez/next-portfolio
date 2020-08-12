
import { Component } from "react"
import fetch from "isomorphic-unfetch"

import { Layout } from "../components/Layout"
import Error from "./_error"



class About extends Component {

    static async getInitialProps() {
        const response = await fetch("http://api.github.com/users/moonbladez")
        const statusCode = response.status > 200 ? response.status : false
        const data = await response.json()


        return {
            user: data,
            statusCode
        }
    }
    render() {
        const { user, statusCode } = this.props

        if (statusCode) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title={"About"}>
                <h2>{user.name}
                    <img src={user.avatar_url} alt={user.name} />
                </h2>
            </Layout>
        )
    }

}







export default About
