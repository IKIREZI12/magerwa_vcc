import { useLocation } from 'react-router-dom';
import {
    Link,
    Stack
} from "@mui/material"
import { NavLink } from 'react-router-dom';

const MenuLinks = () => {
    const location = useLocation();
    const hasRegisteredCar = true;

  return (
    <Stack direction={hasRegisteredCar ? "row-reverse" : "row"} justifyContent="space-between" gap={5} alignItems="center">
        <NavLink to="/registercar" style={{ textDecoration: "none" }}>
            <Link
                underline="none"
                color={location.pathname === '/registercar' ? 'primary' : 'initial'}
                sx={{
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-3px',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'currentColor',
                        visibility: location.pathname === '/registercar' ? 'visible' : 'hidden',
                        transform: location.pathname === '/registercar' ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease-in-out',
                    },
                }}
            >
                Car Registration
            </Link>
        </NavLink>
        
        <NavLink to="/auction" style={{ textDecoration: "none" }}>
            <Link
                underline="none"
                color={location.pathname === '/auction' ? 'primary' : 'initial'}
                sx={{
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-3px',
                        left: 0,
                        right: 0,
                        height: '1px',
                        background: 'currentColor',
                        visibility: location.pathname === '/auction' ? 'visible' : 'hidden',
                        transform: location.pathname === '/auction' ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease-in-out',
                    },
                }}
            >
                Auction
            </Link>
        </NavLink>
    </Stack>
  )
}

export default MenuLinks