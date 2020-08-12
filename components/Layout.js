import Link from "next/link"

export const Layout = ({ children, title }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/hireme"><a>Hire Me</a></Link>


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


