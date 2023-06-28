import { useState, useEffect, ChangeEvent } from 'react';
import {Stack, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoIcon from '../../../assets/logo.png'
import { loginUser } from '../../../redux/thunks/auth';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const initialState = { email: '', password: '' };

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const matcheBigDevices = useMediaQuery('(min-width:600px)');
  const [formData, setFormData] = useState(initialState);
  const [loginMessage, setLoginMessage] = useState<string | null>('');
  const [loginMessageColor, setLoginMessageColor] = useState('initial');
  const { LoginSuccess, checkUser, LoginError, loading } = useSelector((state : any) => state.auth);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelSubmit = () =>{
    dispatch(loginUser(formData));
  }

  useEffect(() => {
    if (LoginSuccess) {
      setLoginMessage('Redirecting...');
      setLoginMessageColor('#357a38');
      if(checkUser?.hasRegisteredCar){
        navigate("/auction")
      }
      else{
        navigate("/registercar")
      }     
      toast.success(LoginSuccess)
    } 
    else if (LoginError) {
      setLoginMessage(LoginError);
      setLoginMessageColor('#da0000');
    } 
    else {
      setLoginMessage(null);
    }
  }, [LoginSuccess, LoginError]);

  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
              Login
            </Typography>

        <TextField 
          name="email" 
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
      { loginMessage && <Typography variant="body1" textAlign="center" color={loginMessageColor}>{loginMessage}</Typography> }
      <LoadingButton 
        fullWidth 
        size="large" 
        type="submit" 
        variant="contained"
        onClick={handelSubmit}
        loading={loading}
      >
        Login
      </LoadingButton>
      </Stack>

      { matcheBigDevices && <img  src={LogoIcon}  alt="car" style={{position: 'relative'}}/> } 
    </>
  );
}