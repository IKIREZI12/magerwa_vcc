import { useState, useEffect } from "react";
import NorthIcon from '@mui/icons-material/North';
import { Box } from "@mui/material"

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <Box
            sx={{
               position: 'fixed',
               bottom: 20,
               right: 20,
               zIndex: "99999999",
               cursor: "pointer" 
            }}
            onClick={scrollToTop}
        >
         < NorthIcon 
            sx={{
                background: "#55BDB3",
                borderRadius: "100%",
                fontSize: "40px",
                color: "white",
                padding: 1
            }}
         />
        </Box>
      )}
    </>
  );
};