import React, {useEffect} from 'react'
import '../static/CSS/Projects.css'
import {projects} from '../utils/Jquery/index'
import { useWindowSize } from '../utils/Hooks/useWindowSize'
import withStyling from '../HOC/withResizing'
import Info from './Info'
import img from '../static/images/luvtalklogo.png'

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
						projectInfo.map((proj,idx) => {
							return (
								<div key={idx} className = "col-sm-4 col-md-4 text-center mb-3">
									{/* <div className = {proj.className}>
										<h3>{proj.h3}</h3>
										<p>{proj.p}</p>
										<div className = "row">
											<div className = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
												<div className = "project-more-info">
													<a className = "btn btn-default btn-border" href = {proj.link}>More</a>
												</div>
											</div>
										</div>	
									</div> */}

									<div className={"card project-container " + proj.className}>
										<img className='card-img-top' src={proj.background}/>
										<div className="card-body">
											<div className="card-text">
												<p>{proj.p}</p>
												<a className = "btn btn-default btn-border btn-more" href = {proj.link}>More</a>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}					
				</div>

			</div>
		</div>
    )
}

// export default Projects

//Render with HOC
export default withStyling(Projects,projects)