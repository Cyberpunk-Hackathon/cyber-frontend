import React from 'react'

const SimilarIssueCard = ({ issueData }) => {
  const { id, metadata, subtasks } = issueData

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <span style={styles.issueId}>ID - {id}</span>
        <span style={styles.storyPoint}>
          Story Points - {metadata.story_points}
        </span>
      </div>
      <div style={styles.subHeading}>
        <span style={styles.issueTitle}>Summary</span>
        <span style={styles.issueDescription}>{metadata.summary}</span>
      </div>
      <div style={styles.content}>
        {subtasks.map((subtask, index) => (
          <div key={index} style={styles.issueContent}>
            <span style={styles.issueContentHeading}>
              {subtask.metadata.summary}
            </span>
            <span style={styles.issueStoryPoint}>
              {subtask.metadata.story_points}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SimilarIssueCard

const styles = {
  container: {
    backgroundColor: '#F5F5F5',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  issueId: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  storyPoint: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  issueTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  issueDescription: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  issueContent: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: '10px',
    margin: '10px',
    borderRadius: '6px',
  },
  issueContentHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  issueStoryPoint: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
}
