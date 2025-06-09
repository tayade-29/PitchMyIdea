import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/ideas"
              className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                isActive('/') || isActive('/ideas')
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-400'
              }`}
            >
              Ideas
            </Link>
            <Link
              to="/explore"
              className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                isActive('/explore')
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-400'
              }`}
            >
              Explore
            </Link>
            <Link
              to="/post"
              className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
                isActive('/post')
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-gray-400'
              }`}
            >
              Post Your Idea
            </Link>
          </div>

          {/* Center Logo/Heading */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-xl font-display font-semibold text-white tracking-tight">
              IdeaHub
            </Link>
          </div>

          {/* Right Profile */}
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar