import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
       <Navbar />
       <Outlet></Outlet>
    </div>
  );
}
export default App;
