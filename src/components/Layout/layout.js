import React from 'react';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import {Outlet} from 'react-router-dom'
import {Container} from "react-bootstrap";

const Layout = () => {
    return (
        <>
            <Header/>
            <section className='home'>
                <Container>
                    <h1 className='home__title'>Meal Store</h1>
                    <Outlet/>
                    </Container>
            </section>
            <Footer/>
        </>
    );
};

export default Layout;