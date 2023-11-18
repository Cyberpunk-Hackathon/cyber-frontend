import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IssueCard from '../common/IssueCard';
import Predictor from '../components/Predictor';
import { useDispatch, useSelector } from 'react-redux';
import { getBacklogData, getIssueById, setBacklogData } from '../../redux/actions/backlog.actions';
import { setSelectedIssue } from '../../redux/actions/selected.actions';

const Homepage = () => {

    const dispatch = useDispatch()

    const { backlog } = useSelector(state => state.backlog)
    const { sprint, issue } = useSelector(state => state.selected)

    const [data, setData] = useState([])

    const onIssueClick = (item) => {
        dispatch(getIssueById(item.id))
    }

    const handleSearchChange = (e) => {
        if (e.target.value !== '') {
            let arr = backlog.filter((item) => item.fields.summary.toLowerCase().includes(e.target.value.toLowerCase()))
            setData(arr)
        }
        else {
            setData(backlog)
        }
    }

    useEffect(() => {
        setData(backlog)
    }, [backlog])

    return (
        <Container fluid className='homepage'>
            <Row>
                <Col md={4}>
                    <div className='homepage-section-left'>
                        <div className='test d-flex flex-column h-100'>
                            <div className='heading'>
                                <span>{sprint && sprint.name ? sprint.name : 'BACKLOG'}</span>

                                <input type='text' className='form-control' placeholder='Search' onChange={handleSearchChange} />
                            </div>
                            <div className='content'>
                                {
                                    data && data.length > 0 && data.map((item, index) => (
                                        <IssueCard priority={2} item={item} key={index} onclick={onIssueClick} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={8}>
                    {
                        issue ? <Predictor /> : <p>No issue selected</p>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;