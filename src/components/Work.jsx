import React, { useEffect } from 'react';
import { WorkAnim } from '../animations/Work';
import '../styles/work.scss';

const Work = () => {

    useEffect(() => {
        new WorkAnim().intro()
    }, []);

    return (
        <div className="work pt-50">

            <div className="fluid-container py-70">
                <div className="head-1"><span className="highlight">work</span></div>
                <div className="body-black py-30">
                    Have a look at some of the projects I've been a part of...
                </div>

                <div className="card-container">
                    <div className="card" id='zoomin'>
                        <div className="card__content">
                            <div className="card__title">Zoomin</div>
                            <div className="body-white">Helping a talented photographer showcase her skill to the world.</div>
                            <span className="link">LEARN MORE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;