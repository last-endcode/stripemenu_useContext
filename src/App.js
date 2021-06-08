import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import SubMenu from './Components/SubMenu';
import './index.css';
import { AppProvider } from './Components/context';

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Hero />
        <SubMenu />
      </AppProvider>
    </>
  );
}

export default App;
