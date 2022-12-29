import Header from 'src/components/Header'
import Nav from 'src/components/Nav'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Nav />
            {children}
        </>
    )
}