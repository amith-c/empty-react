import React, { useEffect } from 'react';
import '../styles/contact.scss';
import { Cursor } from '../animations/Cursor';
// import { RouteTransitions } from '../animations/RouteTransitions';
import { ContactAnim } from '../animations/Contact';

const Contact = () => {

    useEffect(() => {
        new ContactAnim().intro()
        new Cursor().initializeTargets()
    }, []);

    return (
        <div className="contact">
            <div className="fluid-container text-align-center">
                <div className="contact-details py-30">
                    <div className="head-1">contact</div>
                    <a href="mailto:amithchalil@gmail.com"><div className="link target" style={{float: 'unset'}}>amithchalil@gmail.com</div></a>
                </div>

                <div className="social-details py-30">
                    <div className="head-1">follow me</div>
                    <a href="https://instagram.com/amithh___"><div className="link target" style={{float: 'unset'}}>Instagram</div></a> <br />
                    <a href="https://dribbble.com/helloitsamith" target='_blank' rel='noreferrer'><div className="link target" style={{float: 'unset'}}>Dribbble</div></a> <br />
                    <a href="https://instagram.com/amithh___" target='_blank' rel='noreferrer'><div className="link target" style={{float: 'unset'}}>Behance</div></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;