import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Fetchapi from './components/Fetchapi';
function App() {
  return (
    // Wrap the app in the provider
    <AuthProvider>
      <Navbar />
      <Fetchapi/>
    </AuthProvider>
  );
}

export default App;