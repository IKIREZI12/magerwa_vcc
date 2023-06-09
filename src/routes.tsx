import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/Home/HomePage";
import RegisterCar from "./pages/Home/RegisterCar";
import Auction from "./pages/Home/Auction/Auction";
import AuctionDetails from "./pages/Home/Auction/AuctionDetails";
import HomeLayout from "./pages/Home/HomeLayout";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomeLayout> <HomePage /> </HomeLayout>} />
        <Route path="/home/carRegistration" element={<HomeLayout> <RegisterCar /> </HomeLayout>} />
        <Route path="/home/auction" element={<HomeLayout> <Auction /> </HomeLayout>} />
        <Route path="/home/auction/:id" element={<HomeLayout> <AuctionDetails /> </HomeLayout>} />
      </Routes>
    );
  };
  
  export default AppRoutes;