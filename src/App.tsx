import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <Router>
            <Header />
            <AppRoutes />
            <Footer />
        </Router>
    </>
  )
}

export default App
