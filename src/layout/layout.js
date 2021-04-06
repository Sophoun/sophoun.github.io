import * as React from 'react'
import Footer from '../component/footer'
import Header from '../component/header'


const Layout = ({ children }) => (
    <main>
        <Header />
        <div>
            <h1>Layout</h1>
            {children}
        </div>
        <Footer />
    </main>
)

export default Layout