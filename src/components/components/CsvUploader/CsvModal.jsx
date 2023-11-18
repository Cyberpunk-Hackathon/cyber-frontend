import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import UploadCSV from './UploadCSV'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CsvModal = ({ showModal, handleClose }) => {
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleUploadSuccess = () => {
    setUploadSuccess(true)
    toast.success('File uploaded successfully!')
    handleClose()
  }

  const handleUploadFinsished = () => {
    setUploadSuccess(false)
  }

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload CSV</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!uploadSuccess ? (
          <UploadCSV
            onUploadSuccess={handleUploadSuccess}
            handleUploadFinsished={handleUploadFinsished}
          />
        ) : (
          <p>Upload successful! Closing modal...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CsvModal
