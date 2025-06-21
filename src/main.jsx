import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import "./styles/globals.css"
import {Provider} from "react-redux";
import store from "@/store/index.js";
import {MessageProvider} from "@/context/MessageContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <MessageProvider>
                <Router>
                    <App/>
                </Router>
            </MessageProvider>
        </Provider>
    </StrictMode>,
)
