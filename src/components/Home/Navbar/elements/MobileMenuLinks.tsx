import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  Link,
  Button,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MobileMenuLinks = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        style={{
            background: 'white',
            borderColor: '#55BDB3',
            display: 'flex',
            alignSelf: 'center'
        }}
        aria-controls="basic-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
            <Stack gap={2}>
                <Link href='/home' underline='none' color='initial'>Home</Link>
                <Link href='/home/carRegistration' underline='none' color='initial'>Car Registration</Link>
                <Link href='/home/auction' underline='none' color='initial'>Auction</Link>
            </Stack>
          
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MobileMenuLinks;
