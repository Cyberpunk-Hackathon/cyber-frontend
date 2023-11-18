import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { useParams } from 'react-router'
import info from '../../assets/images/info-circle.png'

const Predictor = () => {
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
  const [issue, setIssue] = useState('')
  const [suggetionStoryId, setSuggetionStoryId] = useState('')
  const [suggetionTime, setSuggetionTime] = useState('')
  const [testCases, setTestCases] = useState('')
  const { issueId } = useParams()
  const token = sessionStorage.getItem('token')

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

  const handleInputChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    })
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

  useEffect(() => {
    axios
      .get('https://cyberpunk-api.onrender.com/issue/', {
        headers: {
          accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
        params: {
          issueId: issueId,
        },
      })
      .then((response) => {
        setData(response.data)
        setAcceptanceCrieteria(response.data.acceptanceCrieteria)
        setTestCases(response.data.testCases)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [issueId, token])

  return (
    <div style={styles.container}>
      <div className='row'>
        <form>
          <div style={styles.checkBoxes}>
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
            <button style={styles.viewIssueBtn} type='button'>
              View Similar Issues
            </button>
            <hr style={styles.hr} />
          </div>
          <div style={styles.predictParent}>
            <div>
              <p style={styles.issue}>Issue ID : {issue} </p>
            </div>
            <div style={styles.predictButtonDiv}>
              <button
                style={styles.predictBtn}
                type='button'
                onClick={handleSubmit}
              >
                Predict
              </button>
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

          <div>
            <label>
              <div style={styles.group2}>
                <div style={styles.group2Heading}>Acceptance Criteria</div>
                <textarea
                  type='text'
                  name='acceptanceCrieteria'
                  style={styles.textField}
                  value={formState.acceptanceCrieteria}
                  onChange={(e) =>
                    handleInputChange('acceptanceCrieteria', e.target.value)
                  }
                />
              </div>
            </label>
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
        </form>
      </div>
      {/* <div className='row'>sss</div> */}
    </div>
  )
}

export default Predictor

const styles = {
  container: {
    padding: '0px',
    margin: '0px',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
}
