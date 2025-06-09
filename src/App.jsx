import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import IdeasPage from './pages/IdeasPage'
import ExplorePage from './pages/ExplorePage'
import PostIdeaPage from './pages/PostIdeaPage'
import IdeaDetailPage from './pages/IdeaDetailPage'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<IdeasPage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/post" element={<PostIdeaPage />} />
            <Route path="/idea/:id" element={<IdeaDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App