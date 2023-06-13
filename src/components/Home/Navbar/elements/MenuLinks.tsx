import { useLocation } from 'react-router-dom';
import {
    Link,
    Stack
} from "@mui/material"

const MenuLinks = () => {
    const location = useLocation();
    const hasRegisteredCar = true;

  return (
    <Stack direction={hasRegisteredCar ? "row-reverse" : "row"} justifyContent="space-between" gap={5} alignItems="center">
        <Link
            href="/registercar"
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
        <Link
            href="/auction"
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
    </Stack>
  )
}

export default MenuLinks