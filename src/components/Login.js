import { Box, TextField, FormControlLabel, Checkbox, Avatar, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import React from 'react'

const Login = () => {
  const handleSubmit = (e) => {
    console.log('I am form')
  }
  return (
    <Box sx={{ width: '100%',
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   }}>
<Avatar sx={{ m: 1, bgcolor: "success.main" }}>
    <LockOutlinedIcon/>
  </Avatar>
  <Typography component="h1" variant="h5">
    Sign In
  </Typography>
    <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}
    >


    <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color='success'
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color='success'
          />
            <FormControlLabel
            control={<Checkbox value="remember" color="success" />}
            label="Remember me"
          />
</Box>
</Box>
  )
}

export default Login