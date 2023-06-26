import AppRoutes from "./routes"
import { Toaster } from "react-hot-toast";

const App = () => {
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