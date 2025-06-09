import { useState } from 'react'

const PostIdeaPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="animate-slide-up">
          <h1 className="text-4xl font-bold text-white mb-4">
            Share Your Idea
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Transform your vision into reality by sharing it with our community of innovators and creators.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Idea Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
              placeholder="Enter a compelling title for your idea"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="social-impact">Social Impact</option>
              <option value="environment">Environment</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 resize-none"
              placeholder="Describe your idea in detail. What problem does it solve? How does it work? What makes it unique?"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600"
              placeholder="Enter tags separated by commas (e.g., AI, mobile, startup)"
            />
            <p className="text-gray-500 text-sm mt-1">
              Add relevant tags to help others discover your idea
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Publish Idea
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostIdeaPage