import React, {useEffect} from 'react'
import '../../static/CSS/Projects.css'
import {projects} from '../../utils/Jquery/index'
import { useWindowSize } from '../../utils/Hooks/useWindowSize'
import withStyling from '../../HOC/withResizing'

const Projects = props => {
	//Add project info here
	const projectInfo = [
		{
			className: 'luvtalk-project',
			h3: 'LUV TALK Website',
			p: 'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
			link: '#'
		},
		{
			className: 'personal-website-project',
			h3: 'Personal Website',
			p: 'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.',
			link: '#'
		},
		{
			className: 'strike-zone-project',
			h3: 'Strike Zone Analysis',
			p: 'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.',
			link: '#'
		}
]

    return (
        <div className = "projects" id="projects">
			<div className="container-fluid">
				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-12 col-md-12 text-center">
						<div className = "projects-header-quote">
							<h2>Sharing my endeavors and passions...</h2>
						</div>
					</div>
				</div>
				
				<div className = "row">				
					{/* Render project info here */}
					{
						projectInfo.map((val,idx) => {
							return (
								<div key={idx} className = "col-sm-4 col-md-4 text-center mb-3">
									<div className = {val.className}>
										<h3>{val.h3}</h3>
										<p>{val.p}</p>
										<div className = "row">
											<div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
												<div className = "project-more-info">
													<a className = "btn btn-default btn-border" href = {val.link}>More</a>
												</div>
											</div>
										</div>	
									</div>
								</div>
							)
						})
					}					
				</div>

				<div className = "row">
					<div className = "col col-sm-2 col-md-2 offset-sm-5">
						<div className = "see-more-button">
							<a className = "btn btn-default btn-border" href = "#">More Projects</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

// export default Projects

//Render with HOC
export default withStyling(Projects,projects)