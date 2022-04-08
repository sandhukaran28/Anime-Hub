import "./App.css";
import { Route, Routes } from "react-router-dom";
import Anime from "./components/Anime";
import Home from "./components/Home";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/anime" caseSensitive={false} element={<Anime />} />
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
