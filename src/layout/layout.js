import * as React from 'react'
import Footer from '../component/footer'
import Header from '../component/header'

const Layout = ({ children }) => (
    <main>
        <div className="container">
            <div className="row">
                <Header />
                <div className="col-12">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    </main>
)

export default Layout