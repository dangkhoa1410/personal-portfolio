import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import {BrowserRouter, Link} from 'react-router-dom'

import Nav from '../components/Nav/Nav'
import Portfolio from "../views/Portfolio";

describe('Navigation component', () => {
    it('renders Navigation div', () => {
        const wrapper = shallow(<Nav/>)
        expect(wrapper.hasClass('navigation'))
    })

    it('renders a link to Portfolio', () => {
        const wrapper = mount(<BrowserRouter><Nav/></BrowserRouter>)
        expect(wrapper.find(Link).at(2).props().to).toBe('/portfolio')
    })

})

