import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { useParams } from 'react-router'
import info from '../../assets/images/info-circle.png'
import CsvModal from './CsvUploader/CsvModal'
import Test from './Test'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import SimilarIssueCard from '../common/SimilarIssueCard'

const Predictor = () => {

  const { issue } = useSelector(state => state.selected)

  const [formState, setFormState] = useState({
    checkboxes: [],
    technologies: [],
    complexity: '',
    acceptanceCrieteria: '',
    testCases: '',
  })

  const [data, setData] = useState([])
  const [predictedValue, setPredictedValue] = useState(0)
  const [acceptanceCrieteria, setAcceptanceCrieteria] = useState('')
  const [suggetionStoryId, setSuggetionStoryId] = useState('')
  const [suggetionTime, setSuggetionTime] = useState('')
  const [testCases, setTestCases] = useState('')

  const [showModal,setShowModal] = useState(false)

  const checkboxOptions = ['Frontend Dev.', 'Backend Dev.', 'Quality Assurance']
  const options1 = [
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'C', label: 'C' },
    { value: 'C#', label: 'C#' },
    { value: 'Ruby', label: 'Ruby' },
  ]

  const options2 = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
  ]

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

  const handleInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleModalShow = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleSubmit = () => {
    console.log(formState)

    const data = {
      checkboxes: formState.checkboxes,
      technologies: formState.technologies,
      complexity: formState.complexity,
      acceptanceCrieteria: formState.acceptanceCrieteria,
      testCases: formState.testCases,
    }
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div style={{height: '370px', overflow:'scroll'}}>
          <SimilarIssueCard issueData={issueData}/>
            <SimilarIssueCard issueData={issueData}/>
            <SimilarIssueCard issueData={issueData}/>
            <SimilarIssueCard issueData={issueData}/>
          </div>
        </Modal.Body>
      </Modal>

      <div style={styles.container}>
        <form>
          <div className='row'>
            <div className='col-12' style={styles.checkBoxes}>
              {checkboxOptions.map((option, index) => (
                <label key={index}>
                  <div style={styles.checkBoxGroup}>
                    {option}
                    <input
                      style={styles.checkBoxField}
                      type='checkbox'
                      name='checkboxes'
                      checked={formState.checkboxes.includes(option)}
                      onChange={(e) => {
                        const isChecked = e.target.checked
                        const updatedCheckboxes = isChecked
                          ? [...formState.checkboxes, option]
                          : formState.checkboxes.filter(
                            (value) => value !== option
                          )
                        handleInputChange('checkboxes', updatedCheckboxes)
                      }}
                    />
                  </div>
                </label>
              ))}
            </div>

            <div>
              <div style={styles.group1}>
                <div style={styles.fieldHeading}>Technologies</div>
                <div style={styles.dropdown}>
                  <Select
                    name='technologies'
                    styles={{ width: '50%' }}
                    options={options1}
                    isMulti
                    placeholder='Select an option'
                    onChange={(selectedOptions) =>
                      handleInputChange('technologies', selectedOptions)
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={styles.group1}>
                <div style={styles.fieldHeading}>Complexity</div>
                <div style={styles.dropdown}>
                  <Select
                    name='complexity'
                    options={options2}
                    placeholder='Select an option'
                    onChange={(selectedOption) =>
                      handleInputChange('complexity', selectedOption.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <div style={styles.suggetionGroup}>
                {suggetionStoryId && suggetionTime && (
                  <div style={styles.suggetionGroup}>
                    <div>
                      <img src={info} alt='info' />
                    </div>
                    <div>
                      <p style={styles.suggetionPharagraph}>
                        Story ID {suggetionStoryId} was done in {suggetionTime}{' '}
                        which has a scenario similar to the current issue.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <button style={styles.viewIssueBtn} type='button' onClick={handleModalShow}>
                View Similar Issues
              </button>
              <hr style={styles.hr} />
            </div>
            <div style={styles.predictParent}>
              <div>
                <p style={styles.issue}>Issue ID : {issue?.id + " " + issue?.key}</p>
              </div>
              <div style={styles.predictButtonDiv}>
                <button
                  style={styles.predictBtn}
                  type='button'
                  onClick={handleSubmit}
                >
                  Predict
                </button>
                <div className='d-flex align-items-center'>
                  <div className='me-2 '>Predicted story points: </div>
                  <p
                    type='text'
                    name='predictedValue'
                    style={
                      predictedValue > 0
                        ? { ...styles.predictValueBox, ...styles.predictedValue }
                        : { ...styles.predictValueBox, ...styles.predictedValue0 }
                    }
                    disabled={true}
                  >
                    {predictedValue}
                  </p>
                </div>
              </div>
            </div>

            <div>

              <div style={styles.group2}>
                <div style={styles.group2Heading}>Acceptance Criteria</div>
                <div style={styles.acceptanceCrieteria} className='mb-3'>
                  {
                    <div dangerouslySetInnerHTML={{ __html: issue?.renderedFields.description }} />
                  }
                </div>
              </div>
            </div>

            <div>
              <label>
                <div style={styles.group2}>
                  <div style={styles.group2Heading}>Test Cases</div>
                  <textarea
                    type='text'
                    name='testCases'
                    style={styles.textField}
                    value={formState.testCases}
                    onChange={(e) =>
                      handleInputChange('testCases', e.target.value)
                    }
                  />
                </div>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Predictor

const styles = {
  container: {
    padding: '0px',
    margin: '0px',
    width: '100%',
    overflowY: 'scroll',
    height: `calc(100vh - 80px)`
  },
  row: {
    display: 'flex',
    width: '100vw',
    padding: '0px',
    margin: '0px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  group1: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: '10px',
  },
  group2: {
    display: 'flex',
    flexDirection: 'column',
  },

  fieldHeading: {
    width: '150px',
    textAlign: 'left',
    marginBottom: '5vh',
  },
  group2Heading: {
    textAlign: 'left',
  },

  checkBoxGroup: {
    justifyContent: 'space-around',
    paddingRight: '40px',
  },

  checkBoxField: {
    margin: '10px',
  },

  predictButtonDiv: {
    paddingRight: '5vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
  },

  predictBtn: {
    backgroundColor: '#0C66E4',
    color: 'white',
    height: '50px',
    width: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    margin: '5px',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    marginRight: '3vw',
  },

  viewIssueBtn: {
    backgroundColor: '#0C66E4',
    color: 'white',
    height: '45px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    margin: '5px',
    fontSize: '18px',
    fontWeight: '500',
    letterSpacing: '0.5px',
    marginRight: '3vw',
  },

  errorMessage: {
    color: 'red',
    fontSize: '12px',
    textAlign: 'left',
  },

  textField: {
    height: '250px',
    width: '70vw',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '5px',
    margin: '5px',
  },

  dropdown: {
    width: '50%',
  },

  predictValueBox: {
    textAlign: 'center',
    height: '50px',
    width: '100px',
    borderRadius: '5px',
    border: '1px solid #00D44A',
    paddingTop: '10px',
    margin: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
  },

  predictedValue: {
    backgroundColor: '#00D44A',
  },

  predictedValue0: {
    backgroundColor: '#D9D9D9',
  },

  suggetionPharagraph: {
    textAlign: 'left',
    color: '#FF3030',
  },

  checkBoxes: {
    marginBottom: '5vh',
    paddingTop: '50px',
  },
  predictParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  hr: {
    width: '70vw',
    height: '2px',
    backgroundColor: '#ccc',
    marginTop: '7vh',
  },

  issue: {
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: '700',
  },

  suggetionGroup: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },

  acceptanceCrieteria: {
    width: '100%',
    height: '250px',
    overflow: 'scroll',
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '20px',
  }
}
