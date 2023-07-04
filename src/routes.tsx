import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterCar from "./pages/Home/RegisterCar";
import Auction from "./pages/Home/Auction/Auction";
import AuctionDetails from "./pages/Home/Auction/AuctionDetails";
import HomeLayout from "./pages/Home/HomeLayout";
import NotFoundPage from "./pages/NotFoundPage";
import Verified from "./pages/Verified";
import RegisteredCars from "./pages/Home/RegisteredCars";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registercar" element={<HomeLayout> <RegisterCar /> </HomeLayout>} />
        <Route path="/auction" element={<HomeLayout> <Auction /> </HomeLayout>} />
        <Route path="/auction/:id" element={<HomeLayout> <AuctionDetails /> </HomeLayout>} />
        <Route path="/yourcars" element={<HomeLayout> <RegisteredCars /> </HomeLayout>} />
        <Route path="/verified" element={<Verified />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  };
  
  export default AppRoutes;