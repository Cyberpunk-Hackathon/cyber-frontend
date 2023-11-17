import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IssueCard from '../common/IssueCard';
import Predictor from '../components/Predictor';

const Homepage = () => {
    return (
        <Container fluid className='homepage'>
            <Row>
                <Col md={4}>
                    <div className='homepage-section-left'>
                        <div className='heading'>
                            <span>BACKLOG</span>
                        </div>
                        <div className='content'>
                            <IssueCard priority={2}/>
                            <IssueCard priority={0}/>
                            <IssueCard priority={1}/>
                            <IssueCard priority={1}/>
                            <IssueCard priority={1}/>
                            <IssueCard priority={1}/>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <Predictor/>
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;