import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import Recipecontext from './Context/Recipecontext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <Recipecontext>
         <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </Recipecontext>
)
