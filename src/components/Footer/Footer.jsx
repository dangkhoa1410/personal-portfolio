import React from 'react'
import './Footer.css'
import email from './images/email.svg'
import facebook from './images/facebook.svg'
import linkedin from './images/linkedin.svg'
import pinterest from './images/pinterest.svg'

const Footer = props => {
    return (
        <div className = "footer">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "media-links flex justify-content-center">
						<div className = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div className = "facebook">
								<a href = "#"><img className = "img-responsive" src = {facebook} alt="Icon"/></a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "linkedin">
								<a href = "#"><img className = "img-responsive" src = {linkedin} alt="Icon"/></a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "pinterest">
								<a href = "#"><img className = "img-responsive" src = {pinterest} alt="Icon"/></a>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "email-icon">
								<a href = "#"><img className = "img-responsive" src = {email} alt="Icon"/></a>
							</div>
						</div>
					</div>
				</div>

				<div className = "row text-center">
					<div className = "col-sm-6 col-md-6 text-right">
						<div className = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6 text-left">
						<div className = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<h4><a href = "/">Home</a></h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<h4><a href = "/portfolio">Portfolio</a></h4>
							<ul>
								<li><a href = "/portfolio">Project1</a></li>
								<li><a href = "/portfolio">Project2</a></li>
								<li><a href = "/portfolio">Project3</a></li>
								<li><a href = "/portfolio">See All</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<h4><a href = "/portfolio">Resume</a></h4>
							<ul>
								<li><a href = "/portfolio">Download</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<h4><a href = "/contact">Contact</a></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Footer