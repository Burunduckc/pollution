import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import './Styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
)
