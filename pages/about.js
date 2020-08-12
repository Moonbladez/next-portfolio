
import { Component } from "react"
import fetch from "isomorphic-unfetch"
import { Layout } from "../components/Layout"



class About extends Component {

    static async getInitialProps() {
        const response = await fetch("http://api.github.com/users/moonbladez")
        const data = await response.json()


        return {
            user: data
        }
    }
    render() {
        const { user } = this.props
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
