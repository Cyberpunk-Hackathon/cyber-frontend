import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

const UploadCSV = () => {
  const token = sessionStorage.getItem('token')

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file && file.type === 'text/csv') {
      const form = new FormData()
      form.append('file', file)

      console.log('Uploading file...', file)

      axios
        .post('https://cyberpunk-api.onrender.com/upload', form, {
          timeout: 600000,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('File uploaded successfully', response.data)
        })
        .catch((error) => {
          console.error('Error uploading file', error)
        })
    } else {
      alert('Please upload a valid CSV file.')
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop a CSV file here, or click to select one</p>
      </div>
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
