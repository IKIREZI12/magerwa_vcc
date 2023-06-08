import { useState } from 'react';
import {Stack, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoIcon from '../../../assets/logo.png'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const matcheBigDevices = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
              Login
            </Typography>

        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      <LoadingButton fullWidth size="large" type="submit" variant="contained">
        Login
      </LoadingButton>
      </Stack>

      { matcheBigDevices && <img  src={LogoIcon}  alt="car" style={{position: 'relative'}}/> } 
    </>
  );
}