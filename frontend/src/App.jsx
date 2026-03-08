import "./App.css";
import SessionCreate from "./pages/SessionCreate";
import FileTransfer from "./pages/FileTransfer";
import P2PNetwork from "./pages/P2PNetwork";
import LoadingPage from "./pages/LoadingPage"; // Import the new page
import HowItWorks from "./pages/HowItWorks";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* P2PNetwork is outside Routes to ensure it remains 
         rendered as the persistent background across all pages 
      */}
      <P2PNetwork />

      <Routes>
        <Route path="/" element={<SessionCreate />} />
        <Route path="/transfer" element={<FileTransfer />} />
        <Route path="/:sessid" element={<LoadingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/about" element={<About />} />
        {/* <Route path="/sessid" element={<SessionCreate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
