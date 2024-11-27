import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
import Counter from './components/Counter'
import Form from './components/Form'
import AddBlog from './components/AddBlog'
import BlogList from './components/BlogList'
import WizardForm from './components/WizardForm'
import DataFetch from './components/Placeholder'
import TitleUpdater from './components/TitleUpdater'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'
import { useContext } from 'react'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeWrapper />
      </Router>
    </ThemeProvider>
  )
}
const ThemeWrapper = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />
      <div className='theme-toggle-container'>
        <button 
          className='theme-toggle-btn'
          onClick={toggleTheme}
          >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/Form' element={<Form/>} />
        <Route path='/AddBlog' element={<AddBlog />} />
        <Route path='/Bloglist' element={<BlogList />} />
        <Route path='/WizardForm' element={<WizardForm />} />
        <Route path='/DataFetch' element={<DataFetch />} />
        <Route path='/TitleUpdater' element={<TitleUpdater />} />
      </Routes>
    </div>
  )
}



export default App;