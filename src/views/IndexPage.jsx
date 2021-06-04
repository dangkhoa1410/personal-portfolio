import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Summary from '../components/Summary'

const IndexPage = props => {
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

export default IndexPage