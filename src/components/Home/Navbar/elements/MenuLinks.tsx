import { useLocation } from 'react-router-dom';
import {
    Link,
    Stack
} from "@mui/material"

const MenuLinks = () => {
    const location = useLocation();
  return (
    <Stack direction="row" justifyContent="space-between" gap={5} alignItems="center">
        <Link
            href="/home"
            underline="none"
            color={location.pathname === '/home' ? 'primary' : 'initial'}
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
                    visibility: location.pathname === '/home' ? 'visible' : 'hidden',
                    transform: location.pathname === '/home' ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                },
                }}
        >
            Home
        </Link>
        <Link
            href="/home/carRegistration"
            underline="none"
            color={location.pathname === '/home/carRegistration' ? 'primary' : 'initial'}
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
                    visibility: location.pathname === '/home/carRegistration' ? 'visible' : 'hidden',
                    transform: location.pathname === '/home/carRegistration' ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                },
            }}
        >
            Car Registration
        </Link>
        <Link
            href="/home/auction"
            underline="none"
            color={location.pathname === '/home/auction' ? 'primary' : 'initial'}
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
                    visibility: location.pathname === '/home/auction' ? 'visible' : 'hidden',
                    transform: location.pathname === '/home/auction' ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s ease-in-out',
                },
            }}
        >
            Auction
        </Link>
    </Stack>
  )
}

export default MenuLinks