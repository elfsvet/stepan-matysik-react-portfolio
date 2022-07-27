import React, { useEffect } from 'react';
import './Navigation.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navigationLinks } from '../../helpers/navigationLinks'
// const createLinks = () => {
//     return navigationLinks.map((e, index) => (
//         <Nav.Item>

//             <Nav.Link
//                 key={index}
//                 href={e.ref}
//             >
//                 {e.name}
//             </Nav.Link>
//         </Nav.Item>
//     ))
// }

const NavigationBar = ({ currentCategory, handleCategoryChange }) => {


    // useEffect(() => {
    //     console.log(currentCategory.name)
    //     document.title = currentCategory.name
    // }, [currentCategory]);

    console.log(`currentCategory: ${currentCategory}`)

    return (
        <div id='home'>
            <Navbar className='navigation-container' collapseOnSelect expand="md" style={{ zIndex: 2 }}>
                <Navbar.Brand href="#home" style={{ marginLeft: '1rem' }}>
                    Stepan Matysik
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifyContent: "flex-end", marginRight: "1rem", borderColor: "none" }}>
                    <Nav className='links' style={{ margin: '0 1rem' }}>
                        {/* {createLinks()} */}
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('HOME')}
                                href={"#home"}
                            >
                                HOME
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('ABOUT')}
                                href={"#about"}
                            >
                                ABOUT
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('TECHNOLOGIES')}
                                href={"#technologies"}
                            >
                                TECHNOLOGIES
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('PORTFOLIO')}
                                href={"#portfolio"}
                            >
                                PORTFOLIO
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>

                            <Nav.Link
                                // key={index}
                                onClick={() => handleCategoryChange('CONTACT')}
                                href={"#contact"}
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav.Item>






                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;