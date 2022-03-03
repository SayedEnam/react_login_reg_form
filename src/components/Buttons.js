import {  Button, Grid, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <Box sx={{ width: '100%',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           }}>

          
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item xs={6}>
        <Link to="/login" style={{textDecoration:"none"}}>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{  mb: 2 }}
          color="success"
          >Sign in</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
        <Link to="/registration" style={{textDecoration:"none"}}>
          <Button
          
          type="submit"
          fullWidth
          variant="contained"
          
          sx={{  mb: 2,  }}
          >Registration</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Buttons