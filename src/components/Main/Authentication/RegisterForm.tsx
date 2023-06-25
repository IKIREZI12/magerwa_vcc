import { useState, useEffect, ChangeEvent } from 'react';
import {Stack, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createUser } from '../../../redux/thunks/auth';
import { useDispatch, useSelector } from "react-redux";

const initialState = { names: '', nationalId: '', email: '', password: '', repeatPassword: '' };

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [signUpMessage, setSignUpMessage] = useState<string | null>('');
  const [signUpMessageColor, setSignUpMessageColor] = useState('initial');
  const { SignUpSuccess, SignUpError, loading } = useSelector((state : any) => state.auth);
  const dispatch = useDispatch<any>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelSubmit = () =>{
    dispatch(createUser(formData));
  }

  useEffect(() => {
    if (SignUpSuccess) {
      setSignUpMessage(SignUpSuccess);
      setSignUpMessageColor('#357a38');
      setFormData(initialState)
    } 
    else if (SignUpError) {
      setSignUpMessage(SignUpError);
      setSignUpMessageColor('#da0000');
    } 
    else {
      setSignUpMessage(null);
    }
  }, [SignUpSuccess, SignUpError]);

  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
              Register
            </Typography>

        <TextField 
          name="names" 
          type='text' 
          label="Names"
          onChange={handleChange} 
        />
        <TextField 
          name="nationalId" 
          type='text' 
          label="National ID"
          onChange={handleChange} 
        />
        <TextField 
          name="email" 
          type='email' 
          label="Email address"
          onChange={handleChange} 
        />
        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
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
        <TextField
          name="repeatPassword"
          label="Repeat Password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
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
        { signUpMessage && <Typography variant="body1" textAlign="center" color={signUpMessageColor}>{signUpMessage}</Typography> }
        <LoadingButton 
          fullWidth 
          size="large" 
          type="submit" 
          variant="contained" 
          onClick={handelSubmit}
          loading={loading}
        >
          Create an account
        </LoadingButton>
      </Stack>

      
    </>
  );
}