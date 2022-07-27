import React from 'react';
import './Technologies.css';
import DevIcon from 'devicon-react-svg';
import { techs } from '../../helpers/techs';

function Technologies() {
    return (
        <div>
            <div className='technologies__container' id="technologies">
                <div>
                    <h1 style={{ textAlign: 'center' }}>Some of the technologies I use:</h1>
                </div>
            </div>
            <div className='tech__cards__container'>

                {techs.map((elem, index) => {
                    return (
                        <div key={index} className="tech__card">

                            <DevIcon className="tech__icons" icon={elem.iconName} />
                            <span style={{margin: '5px', fontSize: '1.5rem'}}>{elem.name}</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Technologies