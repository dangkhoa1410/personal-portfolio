import React, { useEffect } from 'react'
import './Nav.css'
import logo from './images/logo.svg'
import {navigation} from '../../ultis/index'

const Nav = props => {
	useEffect(() => {
		navigation()
	},[])
	
    return (
        <div className = "navigation">
			<div className = "container-fluid flex space-between">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
							<a href = "index.html"><img src = {logo} alt="Logo"/></a>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav">
							<ul>
								<li><a href = "index.html">Home</a></li>
								<li><a href = "portfolio.html">Portfolio</a></li>
								<li><a href = "contact.html">Contact</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Nav