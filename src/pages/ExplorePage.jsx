const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center animate-slide-up">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Ideas
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover trending concepts, browse by categories, and find inspiration from the most innovative minds.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            { name: "Technology", count: 156, color: "bg-blue-500/20 border-blue-500/30" },
            { name: "Business", count: 89, color: "bg-green-500/20 border-green-500/30" },
            { name: "Social Impact", count: 67, color: "bg-purple-500/20 border-purple-500/30" },
            { name: "Environment", count: 43, color: "bg-emerald-500/20 border-emerald-500/30" },
            { name: "Health", count: 78, color: "bg-red-500/20 border-red-500/30" },
            { name: "Education", count: 92, color: "bg-yellow-500/20 border-yellow-500/30" }
          ].map((category, index) => (
            <div
              key={category.name}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`${category.color} border rounded-lg p-6 hover:scale-105 transition-transform duration-200 cursor-pointer animate-slide-up`}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
              <p className="text-gray-400">{category.count} ideas</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExplorePage