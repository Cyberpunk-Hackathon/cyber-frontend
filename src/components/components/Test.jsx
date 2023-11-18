import { useState } from 'react'
import { Button } from 'react-bootstrap'
import CsvModal from './CsvUploader/CsvModal'
import SimilarIssueCard from '../common/SimilarIssueCard'

const Test = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const issueData = {
    id: '15632',
    metadata: {
      summary:
        'PRFT - [Backend] - Driver List, Add, Edit, Delete - Frontend and QA',
      original_estimate: '',
      time_spent: '',
      work_ratio: '',
      story_points: '8.0',
      base_sp: '5',
      'Parent id': '',
    },
    distance: 0.7958333118343749,
    subtasks: [
      {
        id: '15633',
        metadata: {
          summary: 'Development - frontend',
          original_estimate: '97200',
          time_spent: '111600',
          work_ratio: '114%',
          story_points: '5',
          base_sp: '5',
          'Parent id': '15632',
        },
      },
      {
        id: '15634',
        metadata: {
          summary: 'Test case writing',
          original_estimate: '10800',
          time_spent: '19800',
          work_ratio: '183%',
          story_points: '5',
          base_sp: '5',
          'Parent id': '15632',
        },
      },
      {
        id: '15661',
        metadata: {
          summary: 'Functional testing',
          original_estimate: '46800',
          time_spent: '',
          work_ratio: '0%',
          story_points: '5',
          base_sp: '5',
          'Parent id': '15632',
        },
      },
    ],
  }
  return (
    <div>
      <div>
        <Button variant='primary' onClick={handleShow}>
          Open Modal
        </Button>

        <CsvModal showModal={showModal} handleClose={handleClose} />
      </div>
      <SimilarIssueCard issueData={issueData} />
    </div>
  )
}

export default Test
