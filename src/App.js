import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Popular from './components/popular';
function App() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Popular />
        <Home />
    </div>
  );
}
export default App;
