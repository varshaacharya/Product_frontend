// import * as React from 'react';
// import { Box, ThemeProvider } from '@mui/system';

// export default function Checklist() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           primary: {
//             main: '#191514',
//             dark: '#191514',
//           },
//         },
//       }}
//     >
//       <Box
//         sx={{
//           width: 1230,
//           height: 550,
//           bgcolor: 'primary.main',
//           '&:hover': {
//             backgroundColor: 'primary.dark',
//             // opacity: [0.9, 0.8, 0.7],
//           },
//         }}
//       />
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#272525',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Checklist() {
  return (
    <Box sx={{ flexGrow: 1,height: 550, }}>
      <Grid container spacing={2} >
        <Grid item xs={12} >
          <Item>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
            </FormGroup>
          </Item>
        </Grid> 
      </Grid>
    </Box>
  );
}