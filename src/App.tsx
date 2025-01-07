import { Route, Routes } from "react-router-dom";
import { Layout } from "./component/Layout";
import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";

function App() {
  return (
    <>
     <Layout>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/crew" element={<Crew/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="*" element={"página no encontrada"} />
      </Routes>
     </Layout>
    </>
  );
}

export default App;
