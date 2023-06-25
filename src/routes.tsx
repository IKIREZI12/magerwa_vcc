import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterCar from "./pages/Home/RegisterCar";
import Auction from "./pages/Home/Auction/Auction";
import AuctionDetails from "./pages/Home/Auction/AuctionDetails";
import HomeLayout from "./pages/Home/HomeLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AddCar from "./pages/Home/Auction/AddCar";
import Verified from "./pages/Verified";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registercar" element={<HomeLayout> <RegisterCar /> </HomeLayout>} />
        <Route path="/addtoauction" element={<HomeLayout> <AddCar /> </HomeLayout>} />
        <Route path="/auction" element={<HomeLayout> <Auction /> </HomeLayout>} />
        <Route path="/auction/:id" element={<HomeLayout> <AuctionDetails /> </HomeLayout>} />
        <Route path="/verified" element={<Verified />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  };
  
  export default AppRoutes;