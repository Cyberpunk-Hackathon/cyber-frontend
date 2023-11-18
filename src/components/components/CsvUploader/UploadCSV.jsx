import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import '../../../assets/styles/_uploadCsv.scss'

const UploadCSV = ({ onUploadSuccess, handleUploadFinsished }) => {
  const token = sessionStorage.getItem('token')
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file && file.type === 'text/csv') {
        const form = new FormData()
        form.append('file', file)

        setLoading(true)

        axios
          .post('https://cyberpunk-api.onrender.com/upload', form, {
            timeout: 600000,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log('File uploaded successfully', response.data)
            onUploadSuccess()
          })
          .catch((error) => {
            console.error('Error uploading file', error)
          })
          .finally(() => {
            setLoading(false)
            handleUploadFinsished()
          })
      } else {
        alert('Please upload a valid CSV file.')
      }
    },
    [token]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div>
      {loading && <div className='overlay'></div>}
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop a CSV file here, or click to select one</p>
      </div>
      {loading && (
        <div className='loading-container'>
          <div className='loading-spinner'></div>
          <p>Uploading...</p>
        </div>
      )}
    </div>
  )
}

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
}

export default UploadCSV
