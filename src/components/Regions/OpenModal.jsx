import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './Modal.css'


export default function BasicModal({item}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'white'}}>Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className='Modal'>
          <div className='modalDescription'>
            <img src={item.image} alt='' className='ModalImage'/>
            <div>
              <h2>{item.name}</h2>
              <p>{item.international}</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
