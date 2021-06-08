import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

import './index.css';
import { AppProvider } from './Components/context';

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Sidebar />
      </AppProvider>
    </>
  );
}

export default App;
