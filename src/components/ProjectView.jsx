import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectdata } from '../data/projectdata';
import '../styles/projectview.scss';
import { Cursor } from '../animations/Cursor';
import { ProjectViewAnim } from '../animations/ProjectView';

const ProjectView = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        new ProjectViewAnim().coverPage()
        new Cursor().initializeCursor()
    }, [])

    let { name } = useParams()
    let currentproject = (projectdata[name])

    return (
        <div className="view">
            <div className={`cover-page ${name}`}>
                <div className="cover__overlay">
                    <div className="fluid-container">
                        <div className="container" style={{ color: 'white' }}>
                            <div className="head-1" style={{ color: 'white' }}>{currentproject.title}</div>
                            <div className="body-white">{currentproject.description}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data py-70">

                <div className="fluid-container">

                    <div className="services-section py-50">
                        <span className="head-2 highlight">services</span> <br />
                        {currentproject.services.map(service => {
                            return <span className="chip">{service}</span>
                        })}
                    </div>

                    <div className="client py-50">
                        <span className="head-2 highlight">client</span> <br />
                        <div className="body-grey py-20">
                            {currentproject.client_description}
                        </div>
                    </div>

                    <div className="job py-50">
                        <span className="head-2">my <span className="highlight">job...</span></span> <br />
                        <div className="body-grey py-20">
                            {currentproject.job_description}
                        </div>
                        <a href={currentproject.project_link} target='_blank' rel='noreferrer'><button className="cta__main" style={{marginTop: '20px'}}>FINAL PRODUCT</button></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectView;