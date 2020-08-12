import Link from "next/link"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"


//when route has changed
Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}



//when route has finished
Router.onRouteChangeComplete = () => {
    console.log("done")
    NProgress.done();
}
//errors
Router.onRouteChangeError = () => NProgress.done();

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
            </Head>
            <header>
                <nav>
                    <ul>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/hireme"><a>Hire Me</a></Link>
                        <Link href="/blog"><a>Blog</a></Link>



                    </ul>

                </nav>
            </header>
            <h1>{title}</h1>
            {children}
            <footer>&copy; {new Date().getFullYear()}</footer>
            <style jsx>
                {`
                .root {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                ul {
                    width: 100%;
                    display: flex;   
                    justify-content: space-around;    
                    font-size: 1.2rem;
                    background: rebeccapurple;
                    margin: 0;           
                    padding: 1rem 0.5rem;

                }

                a {
                    color: #fefefe;
                    text-decoration: none;
        
                }

                a:hover,
                a:focus {
                    text-decoration: underline;
                }
                `}
            </style>
        </>
    )

}


