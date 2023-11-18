import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IssueCard from '../common/IssueCard';
import Predictor from '../components/Predictor';
import { useDispatch, useSelector } from 'react-redux';
import { getBacklogData } from '../../redux/actions/backlog.actions';
import { setSelectedIssue } from '../../redux/actions/selected.actions';

const Homepage = () => {

    const dispatch = useDispatch()

    const { backlog } = useSelector(state => state.backlog)
    const { sprint } = useSelector(state => state.selected)

    const onIssueClick = (item) => {
        dispatch(setSelectedIssue({
            issue: item
        }))
    }

    return (
        <Container fluid className='homepage'>
            <Row>
                <Col md={4}>
                    <div className='homepage-section-left'>
                        <div className='heading'>
                            <span>{sprint && sprint.name ? sprint.name : 'BACKLOG' }</span>
                        </div>
                        <div className='content'>
                            {
                               backlog && backlog.length > 0 && backlog.map((item,index) => (   
                                    <IssueCard priority={2}  item={item} key={index} onclick={onIssueClick}/>
                                ))
                            }
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    <Predictor />
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;