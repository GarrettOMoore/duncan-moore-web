import Header from 'src/components/Header'
import Nav from 'src/components/Nav'
import Footer from 'src/components/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Nav />
            {/* <div className="container mx-auto flex m-1 border-8 border-yellow-400"> */}
            <main className="container mx-auto m-1 p-2">
                {children}
            </main>
            {/* </div> */}
            <Footer />
        </>
    )
}