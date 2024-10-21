import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import './index.css'
import { RecipesProvider } from './RecipesContext';
// import { AuthProvider } from './context/AuthContext'; 

const container = document.getElementById('root'); 
const root = createRoot(container); 

root.render(
  <RecipesProvider>
    <App />
  </RecipesProvider>

);

