import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const IdeaDetailPage = () => {
  const { id } = useParams()
  const [idea, setIdea] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockIdea = {
      id: parseInt(id),
      title: "AI-Powered Personal Finance Assistant",
      author: "Sarah Chen",
      authorBio: "Senior Software Engineer with 8+ years in fintech and AI development",
      publishDate: "March 15, 2024",
      description: "A comprehensive AI assistant that helps users manage their finances by analyzing spending patterns, suggesting budget optimizations, and providing personalized investment advice based on individual goals and risk tolerance.",
      fullContent: `
        This innovative AI-powered personal finance assistant represents a paradigm shift in how individuals manage their financial lives. By leveraging advanced machine learning algorithms and natural language processing, the system provides personalized, actionable insights that adapt to each user's unique financial situation and goals.

        ## Key Features

        **Intelligent Spending Analysis**
        The system automatically categorizes and analyzes spending patterns across multiple accounts and payment methods, identifying trends, anomalies, and opportunities for optimization. Users receive detailed insights into their financial behavior with actionable recommendations.

        **Personalized Budget Optimization**
        Using predictive modeling, the assistant suggests budget adjustments based on income patterns, spending history, and financial goals. The system learns from user feedback to continuously improve its recommendations.

        **Investment Advisory**
        The platform provides personalized investment advice by analyzing risk tolerance, financial goals, market conditions, and individual circumstances. It offers portfolio suggestions and rebalancing recommendations tailored to each user's profile.

        **Goal-Based Financial Planning**
        Users can set short-term and long-term financial goals, and the system creates customized action plans with milestone tracking and progress monitoring.

        ## Technical Implementation

        The solution utilizes a microservices architecture with real-time data processing capabilities. Machine learning models are trained on anonymized financial data to provide accurate predictions and recommendations while maintaining strict privacy standards.

        ## Market Opportunity

        With the growing demand for personalized financial services and the increasing complexity of financial markets, this solution addresses a significant gap in the market for accessible, intelligent financial guidance.
      `,
      likes: 24,
      views: 342,
      tags: ["AI", "Finance", "Mobile App", "Machine Learning", "Fintech"],
      category: "Technology"
    }

    setTimeout(() => {
      setIdea(mockIdea)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading idea details...</p>
        </div>
      </div>
    )
  }

  if (!idea) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Idea Not Found</h1>
          <Link to="/" className="text-gray-400 hover:text-white">
            Return to Ideas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Ideas
        </Link>

        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md">
                {idea.category}
              </span>
              <span className="text-gray-500 text-sm">
                {idea.views} views
              </span>
            </div>
            <div className="flex items-center space-x-3">
              {/* Like Button */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                  isLiked
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-medium">{idea.likes + (isLiked ? 1 : 0)}</span>
              </button>

              {/* Bookmark Button */}
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isBookmarked
                    ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            {idea.title}
          </h1>

          <div className="flex items-center text-gray-400 mb-6">
            <span>by <span className="text-white font-medium">{idea.author}</span></span>
            <span className="mx-2">•</span>
            <span>{idea.publishDate}</span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {idea.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {idea.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none animate-fade-in">
          <div className="text-gray-300 leading-relaxed space-y-6">
            {idea.fullContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                )
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 p-6 bg-gray-900 border border-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2">About the Author</h3>
          <p className="text-gray-300 mb-4">{idea.authorBio}</p>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200">
            Follow {idea.author}
          </button>
        </div>
      </div>
    </div>
  )
}

export default IdeaDetailPage