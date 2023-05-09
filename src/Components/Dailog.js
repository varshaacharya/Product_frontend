import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[700]),
    backgroundColor: grey[700],
    '&:hover': {
      backgroundColor: grey[900],
    },
  }));

function Dailog(){
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };


    return(
        <>
        <Stack spacing={2} direction="row" sx={{ position:'absolute',top:'15%',right:'10%',color:'grey','&:hover':{bgcolor:'darkgrey'}}}>
      
      <ColorButton variant="contained" onClick={handleClickOpen}><AddIcon></AddIcon>
      ADD ORGANIZATION
      </ColorButton>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ORGANIZATION DETAILS</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Organisation name"
            type="Text"
            fullWidth
            variant="standard"
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Organisation Address"
            type="Text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone number"
            type="Text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email-ID"
            type="email"
            fullWidth
            variant="standard"
          />
          
          <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Upload Logo"
            type="email"
            fullWidth
            variant="standard"
            />
          
      <IconButton color="primary" aria-label="upload picture" component="label" sx={{color:'black','&:hover':{bgcolor:'darkgrey'}}}>
      
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      
      </Stack>
      
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Contact person name"
            type="Text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{color:'black'}}onClick={handleClose}>Cancel </Button>
          <Button variant='contained' onClick={handleClose} sx={{bgcolor:'grey','&:hover':{bgcolor:'black'}}}>Submit</Button>
        </DialogActions>
      </Dialog>
        </>
    )
};
export default Dailog;