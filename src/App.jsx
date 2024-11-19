import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </div>
  </Router>  )}
export default App