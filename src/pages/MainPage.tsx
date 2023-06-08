import Navbar from "../components/Main/Navbar"
import Header from "../components/Main/Header"
import { Box } from "@mui/material"

const Home = () => {
  return (
    <Box
    sx={{
      paddingX: { xs: 2, lg: 10},
      paddingY: 5,
    }}
    >
      <Navbar />
      <Header />
    </Box>
    
  )
}

export default Home