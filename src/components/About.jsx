import React from 'react'
import '../static/CSS/About.css'
import Info from './Info'

const About = props => {
	const about = Info.about
    return (
        <div className = "about" id="about">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "about-header">
							<h1>About Me</h1>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "about-header-quote">
							<h3>{about.headline}</h3>
						</div>
					</div>
				</div>
				<br></br>

				<div className = "row">
					<div className = "about-general-description ">
						<div className = "col-sm-8 col-md-8 ">
							<h2>General Overview</h2>
							<p>{about.overview}</p>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "statistic-row">
					<div className = "about-statistic-description">
						<div className = "col-sm-8 col-md-8">
							<h2>Statistics</h2>
							<h5><em>And for those that don't fancy reading:</em></h5>
							<br/>

							<p>{about.stat1}</p>
							<p>{about.stat2}</p>
							<p>{about.stat3}</p>
							<p>{about.stat4}</p>
	
						</div>
					</div>
					</div>
				</div>

				<div className = "row">
					<div className = "about-option-buttons">
						<div className = "col-sm-2 col-md-2">
							<a href = "#contact" className = "btn btn-default btn-black-border">Contact</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default About 