import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getProjectData } from '../../redux/actions/project.actions';
import { setSelectedBoard, setSelectedProject, setSelectedSprint } from '../../redux/actions/selected.actions';
import { getBoardData } from '../../redux/actions/board.actions';
import { getSprintData } from '../../redux/actions/sprint.actions';
import { useNavigate } from 'react-router-dom';

const ProjectSelect = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { projects } = useSelector(state => state.projects)
    const { sprints } = useSelector(state => state.sprints)
    const { boards } = useSelector(state => state.boards)

    const handleProjectChange = (e) => {
        console.log('e',e);
        dispatch(setSelectedProject({
            project: e
        }))
        dispatch(getBoardData(e.id))
    }

    const handleBoardChange = (e) => {
        dispatch(setSelectedBoard({
            board: e
        }))
        dispatch(getSprintData(e.id))
    }

    const handleSprintChange = (e) => {
        dispatch(setSelectedSprint({
            sprint: e
        }))
    }

    useEffect(() => {
        dispatch(getProjectData())
    }, [])
    return (
        <div className='project-select'>
            <div className='content'>
                <label htmlFor="project">Select Project</label>
                <Select
                    options={projects}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    onChange={handleProjectChange}
                />
                <label htmlFor="project">Board</label>
                <Select
                    options={boards}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    onChange={handleBoardChange}
                />
                <label htmlFor="project">Sprint</label>
                <Select
                    options={sprints}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.id}
                    onChange={handleSprintChange}
                />

                <Button onClick={() => navigate('/dashboard')}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default ProjectSelect;