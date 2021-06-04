import React, {useEffect} from 'react'
import '../static/CSS/Projects.css'
import {projects} from '../utils/Jquery/index'
import { useWindowSize } from '../utils/Hooks/useWindowSize'
import withStyling from '../HOC/withResizing'
import Info from './Info'

const Projects = props => {
	//Add project info here
	const projectInfo = Info.projectInfo

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