import { useEffect } from "react";
import { useLocation } from 'react-router-dom'; 
import AppRoutes from "./routes"
import { Toaster } from "react-hot-toast";

const App = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      < AppRoutes />
      <Toaster 
        toastOptions={{
          duration: 6000,
        }}
        />
    </>
  )
}

export default App