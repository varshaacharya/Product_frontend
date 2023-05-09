import * as React from 'react';
import Box from '@mui/material/Box';
import Table1 from './Table';
import Dailog from './Dailog';




export default function CenteredTabs() {

  return (
    <>
      <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* dailog section starts */}
      <Dailog/>
       {/* dailog section ends */}

       {/* table section starts */}
      <Table1/> 
      {/* table section ends */}
    </Box>
  
    </>
  );
}















