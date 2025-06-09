import { useState, useEffect } from 'react'
import IdeaCard from '../Components/IdeaCard'

const IdeasPage = () => {
  const [ideas, setIdeas] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockIdeas = [
      {
        id: 1,
        title: "AI-Powered Personal Finance Assistant",
        author: "Sarah Chen",
        description: "A comprehensive AI assistant that helps users manage their finances by analyzing spending patterns, suggesting budget optimizations, and providing personalized investment advice based on individual goals and risk tolerance.",
        likes: 24,
        tags: ["AI", "Finance", "Mobile App", "Machine Learning"]
      },
      {
        id: 2,
        title: "Sustainable Urban Farming Platform",
        author: "Marcus Rodriguez",
        description: "An integrated platform connecting urban farmers with local communities, featuring crop planning tools, resource sharing, and a marketplace for locally grown produce to promote sustainable living.",
        likes: 18,
        tags: ["Sustainability", "Agriculture", "Community", "Environment"]
      },
      {
        id: 3,
        title: "Virtual Reality Learning Environments",
        author: "Dr. Emily Watson",
        description: "Immersive VR educational experiences that transform traditional learning by allowing students to explore historical events, conduct virtual science experiments, and practice skills in safe, controlled environments.",
        likes: 31,
        tags: ["VR", "Education", "Technology", "Innovation"]
      },
      {
        id: 4,
        title: "Blockchain-Based Supply Chain Transparency",
        author: "Alex Kim",
        description: "A blockchain solution that provides complete transparency in supply chains, allowing consumers to trace products from origin to shelf while ensuring ethical sourcing and authenticity verification.",
        likes: 15,
        tags: ["Blockchain", "Supply Chain", "Transparency", "Ethics"]
      },
      {
        id: 5,
        title: "Mental Health Support Network",
        author: "Dr. James Thompson",
        description: "A peer-to-peer mental health platform that connects individuals with similar experiences, provides access to professional resources, and creates supportive communities for mental wellness.",
        likes: 42,
        tags: ["Mental Health", "Community", "Support", "Wellness"]
      },
      {
        id: 6,
        title: "Smart City Traffic Optimization",
        author: "Lisa Park",
        description: "An intelligent traffic management system using IoT sensors and machine learning to optimize traffic flow, reduce congestion, and minimize environmental impact in urban areas.",
        likes: 27,
        tags: ["Smart City", "IoT", "Traffic", "Optimization"]
      }
    ]

    // Simulate loading
    setTimeout(() => {
      setIdeas(mockIdeas)
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading ideas...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Innovative Ideas
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore a curated collection of groundbreaking concepts and creative solutions from visionary minds around the world.
          </p>
        </div>

        {/* Filter/Sort Options */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <div className="flex items-center space-x-4">
            <select className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-gray-600">
              <option>All Categories</option>
              <option>Technology</option>
              <option>Business</option>
              <option>Social Impact</option>
              <option>Environment</option>
            </select>
            <select className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:border-gray-600">
              <option>Most Recent</option>
              <option>Most Liked</option>
              <option>Most Viewed</option>
            </select>
          </div>
          <div className="text-gray-400 text-sm">
            {ideas.length} ideas found
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div
              key={idea.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <IdeaCard idea={idea} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 font-medium">
            Load More Ideas
          </button>
        </div>
      </div>
    </div>
  )
}

export default IdeasPage