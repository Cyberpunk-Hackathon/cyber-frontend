import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PredictorLoaderModal = () => {
  const [show, setShow] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [tip, setTip] = useState('');

  const tips = [
    'Tip 1: Our team is working hard to process your request. Thank you for your patience!',
    'Tip 2: Did you know? Optimizing backend processes ensures faster response times for future requests.',
    'Tip 3: The backend is crunching numbers and handling data securely for you.',
    'Tip 4: Grab a coffee! Complex tasks are underway in the backend to enhance your experience.',
    'Tip 5: Patience is key. Your request is in the queue and will be processed shortly.',
    'Tip 6: Fun fact: Behind the scenes, our servers are optimizing performance for a smoother user experience.',
    'Tip 7: The backend elves are hard at work ensuring your data is processed accurately and efficiently.',
    "Tip 8: Meanwhile in the backend, we're ensuring the security and integrity of your information.",
    'Tip 9: This loading screen is brought to you by the powerful algorithms running in the backend!',
    'Tip 10: Our servers are flexing their muscles to handle the heavy lifting of your request.',
  ];

  const handleClose = () => setShow(false);

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }

        return prev + 5;
      });
    }, 1000);

    return interval;
  };

  console.log(uploadProgress);

  const handleClick = async () => {
    setIsUploading(true);
    setShow(true);

    const progressInterval = startSimulatedProgress();

    await new Promise((resolve) => {
      setTimeout(resolve, 30000);
    });

    clearInterval(progressInterval);
    setUploadProgress(100);

    setShow(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Button</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}

      >
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{tip}</Modal.Body>
        <Modal.Footer>
          {isUploading ? (
            <div className='w-full mt-4 max-w-xs mx-auto'>
              {isUploading ? (
                <div className='flex gap-1 justify-center text-small text-zinc-700 text-center pt-2'>
                  <Spinner animation='border'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                  Redirecting.....
                </div>
              ) : null}
              <div>
                <ProgressBar now={uploadProgress} />
              </div>
            </div>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PredictorLoaderModal