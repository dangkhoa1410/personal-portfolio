import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import Projects from '../components/Projects/Projects'
import Summary from '../components/Summary/Summary'

const Index = props => {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Summary></Summary>
            <Projects></Projects>
            <Contact></Contact>
        </>
    )
}

export default Index