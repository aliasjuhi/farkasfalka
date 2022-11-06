import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import JelentkezesDuo from '../pages/verseny/JelentkezesDuo';
//






//


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:1100,
  bgcolor: '#7F7F7F',
  border: '1px solid #fff',
  boxShadow: 50,
  p: 4,
};

export default function QuadsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
       size="large"
       variant="outlined" color="error"
      onClick={handleOpen}>Duo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        herf= "versenyek/index.htmel"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >

        <Box sx={style}>

        <JelentkezesDuo/>

        </Box>
      </Modal>
    </div>
  );
}
