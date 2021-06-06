import React, {useEffect} from 'react'
import '../static/CSS/Projects.css'
import {projects} from '../utils/Jquery/index'
import withResizing from '../HOC/withResizing'
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
						projectInfo.map((proj,idx) => {
							return (
								<div key={idx} className = "col-sm-4 col-md-4 text-center mb-3">
									<div className={"card project-container " + proj.className}>										
										<a href={proj.link}><img className='card-img' src={proj.background}/></a>
										<div className="card-body">
												<div className="card-text">
													<p>{proj.p}</p>													
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
export default withResizing(Projects,projects)