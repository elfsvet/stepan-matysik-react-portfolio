import React from 'react';
import './ContactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks'

const createLinks = () => {
    return navigationLinks.map((e, idx)=> (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}


function ContactMe() {
    return (
        <div className="contactMe__container" id="contact">
            <div className='contactMe__data__links'>
                <div>
                    <p>Fort Lauderdale, FL</p>
                    <p>Stepan Matysik</p>
                    <a href='mailto:stepanmatysik@gmail.com'>stepanmatysik@gmail.com</a>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{textAlign: 'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}

export default ContactMe
