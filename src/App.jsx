import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, NotFound, Quotes } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes/:symbol" element={<Quotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
