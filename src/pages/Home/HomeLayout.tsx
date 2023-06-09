import { ReactNode } from 'react';
import HomeNavbar from "../../components/Home/Navbar/HomeNavbar"
import { Box } from "@mui/material"

interface HomeLayoutProps {
    children: ReactNode;
  }

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Box
        sx={{
        paddingX: { xs: 2, lg: 10},
        paddingY: 5,
        }}
    >
        <HomeNavbar />
        {children}
    </Box>
  )
}

export default HomeLayout