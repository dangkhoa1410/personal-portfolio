import React, { useEffect } from 'react'
import './Nav.css'
import logo from './images/logo.svg'
import {navigation} from '../../ultis/index'
import { Link } from 'react-router-dom'

const Nav = props => {
	// useEffect(() => {
	// 	navigation()
	// },[])
	
    return (
        <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1">
						<div className="logo">
							<Link>
							<img src = {logo} alt="Logo"/>
							</Link>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11">
						<div className = "primary-nav">
							<ul>
								<li><Link to = "/">Home</Link></li>
								<li><Link to = "/portfolio">Portfolio</Link></li>
								<li><Link to = "/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Nav