import React, { useState } from 'react'
import './portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [temmpData, setTempData] = useState({});


    const handleClose = () => setModalShow(false);

    const createModal = (e) => {
        return (
            <Modal
                show={modalShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{e.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {e.summary}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        )
    }


    const mapped = portfolioData.map((e, index) => {
        return (
            <Card key={index} id="portfolio__card__container">
                <Image className="portfolio__image"
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech
                        })
                        setModalShow(true)
                    }}
                    src={e.image}
                />
                <div className="portfolio__click__info"></div>




            </Card >

        )
    })


    return (
        <div className='portfolio__main__container' id='portfolio'>
            <h1>Portfolio</h1>
            <p>This is my GitHub page:
                <a href='https://github.com/elfsvet' target='_blank' rel='noopener'> https://github.com/elfsvet</a>
            </p>
            <Container fluid="lg" style={{ padding: '2rem 0' }}>
                <Row>
                    {mapped}
                </Row>
            </Container>

        </div>
    )
}

export default Portfolio