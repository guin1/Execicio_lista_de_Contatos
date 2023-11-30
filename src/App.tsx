import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import store from './store'
import Home from './pages/Home'
import Formulario from './pages/Formulario'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
