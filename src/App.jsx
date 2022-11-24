import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Quotes } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes/:symbol" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
