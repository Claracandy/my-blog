import Home from './components/Home'
import About from './components/About'
import Blog from './components/blog'
import './App.css' 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
import Counter from './components/Counter'


function App() {
  return (
    <Router>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path ="/counter" element={<Counter/>}/>
    </Routes>
    
    </div>
  </Router>  )}
export default App;