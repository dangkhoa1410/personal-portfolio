import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import {BrowserRouter, Link} from 'react-router-dom'

import App from '../App'
import Projects from "../components/Projects/Projects";
import Nav from "../components/Nav/Nav";
import { projects } from "../utils/Jquery";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Summary from "../components/Summary/Summary";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

describe('App test', () => {
    it('correctly renders all components', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper.containsAllMatchingElements([Nav,Banner,About,Summary,Projects,Contact,Footer]))
    })

    it('renders three project info', () => {
        const wrapper = mount(<App/>)        
        const projectRender = wrapper.find({className:'col-sm-4 col-md-4 text-center mb-3'})
        expect(projectRender.length).toBe(3)
    })

})