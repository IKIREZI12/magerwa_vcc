import { useState } from "react";
import {
    Paper, 
    Typography, 
    Button,
    Drawer,
    useMediaQuery,
    Stack
} from "@mui/material"
import LogoIcon from '../../assets/logo.png'
import LoginForm from "./Authentication/LoginForm";
import RegisterForm from "./Authentication/RegisterForm";

const Navbar = () => {
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const drawerWidth = matcheBigDevices ? 400 : '';
    const [open, setOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    const handleOpenPopup = () => {
        setOpen(true);
    }

    const handleClosePopup = () => {
        setOpen(false);
        setIsLogin(false);
    }

  return (
    <Paper
        sx={{
            paddingY: 1,
            paddingX: { xs: 2, lg: 4},
            borderRadius: '20px'
        }}
    >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
                <img  src={LogoIcon}  alt=""  width={50} height={50} />
                {matcheBigDevices && <Typography variant="h6" color="initial" fontWeight='bolder'>Magerwa VCC</Typography>}
            </Stack>
            
            <Stack direction="row" gap={3} justifyContent="space-between" alignItems="center">
                <Button variant="contained" color="primary" onClick={handleOpenPopup}>
                    {matcheBigDevices ? 'Create an account' : 'Sign Up'}
                </Button>
                <Button variant="outlined" color="primary" onClick={() => {
                        handleOpenPopup()
                        setIsLogin(true)
                    }}>
                    Login
                </Button>
            </Stack>
            
        </Stack>
       { 
        isLogin ?
            <Drawer
            anchor="right"
            open={open}
            onClose={handleClosePopup}
            PaperProps={{
                style: {
                  width: drawerWidth,
                  padding: 20,
                },
              }}
            >
                <LoginForm />
            </Drawer>
            :
            <Drawer
            anchor="right"
            open={open}
            onClose={handleClosePopup}
            PaperProps={{
                style: {
                  width: drawerWidth,
                  padding: 20,
                },
              }}
            >
                <RegisterForm />
            </Drawer>
        }  
    </Paper>
  )
}

export default Navbar