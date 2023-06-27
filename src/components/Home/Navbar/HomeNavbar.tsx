import * as React from 'react';
import {
    Paper, 
    Typography, 
    Avatar,
    Button,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    Stack
} from "@mui/material"
import { useState, useEffect } from 'react';
import LogoIcon from '../../../assets/logo.png'
import { StyledBadge } from "./elements/StyledBadge";
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import MobileMenuLinks from './elements/MobileMenuLinks';
import MenuLinks from './elements/MenuLinks';
import { getUser, logoutUser } from '../../../redux/thunks/auth';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';

const HomeNavbar = () => {
    const dispatch = useDispatch<any>();
    const matcheBigDevices = useMediaQuery('(min-width:600px)');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const { loggedInUser, FetchUserLoading, FetchUserError, LogoutSuccess, LogoutError } = useSelector((state : any) => state.auth);

  useEffect(() => {
    if (!loggedInUser) {
      dispatch(getUser());
    }

    if (!FetchUserLoading && FetchUserError == "Please Login to continue!") {
        window.location.href = "/";
    }

  }, [loggedInUser, FetchUserError, FetchUserLoading]);


  const handleLogout = () => {
    dispatch(logoutUser())
    if (LogoutSuccess) {
        window.location.href = "/";
    } 
    if (LogoutError) {
        toast.error(LogoutError)
    } 
  }

  const shortenName = (name: string): string => {
    const words = name.split(" ");
    
    if (words.length > 1) {
      const lastNameInitial = words[words.length - 1].charAt(0);
      words[words.length - 1] = `${lastNameInitial}.`;
    }
    
    return words.join(" ");
  };

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
                {matcheBigDevices ? <Typography variant="h6" color="initial" fontWeight='bolder'>Magerwa VCC</Typography> : <MobileMenuLinks />}
            </Stack>
            {
            matcheBigDevices &&
                <MenuLinks />
            }
            {
                loggedInUser &&
                    <Button onClick={handleClick}>
                    <Stack direction="row" justifyContent="space-between" sx={{ cursor: 'pointer'}} gap={1} alignItems="center">
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                        <Avatar
                            sx={{ bgcolor: '#55BDB3' }} 
                            alt={loggedInUser?.names} 
                            src="/assets/logo.png" 
                        />
                        </StyledBadge>
                        {
                        matcheBigDevices &&
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="body1" color="initial" sx={{textTransform: 'capitalize'}}>{shortenName(loggedInUser?.names)}</Typography>
                            <KeyboardArrowDownSharpIcon/>
                        </Stack>
                        }
                    </Stack> 
                </Button>
            }
            {
                FetchUserLoading &&
                <Typography variant="body1" color="primary">Loading...</Typography>
            }   
        </Stack> 
        {
            !FetchUserLoading &&
                <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutSharpIcon sx={{ transform: 'rotate(180deg)' }}/>
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </MenuItem>
            </Menu>
        }
    </Paper>
  )
}

export default HomeNavbar