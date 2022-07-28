import React from 'react';
import './Technologies.css';
import { techs } from '../../helpers/techs';
import {} from '../../helpers/icons';

const technologies = techs.map(tech => ({ icon: tech.reactIcon }))

function Technologies() {
    return (

        <div className='technologies__container' >
            <div>
                <h1 style={{ textAlign: 'center' }}>Some of the technologies I use:</h1>

            </div>
            <div className='tech__cards__container'>

                {techs.map((elem, index) => {
                    return (
                        <div key={index} className="tech__card">

                            {/* <DevIcon className="tech__icons" icon={elem.iconName} /> */}
                            <span style={{ margin: '5px', fontSize: '1.5rem' }}>{elem.name}</span>
                        </div>
                    )
                })}

            </div>
        </div >
    )
}

export default Technologies