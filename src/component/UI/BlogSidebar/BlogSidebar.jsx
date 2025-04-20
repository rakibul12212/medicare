const BlogSidebar = () => {
  const data = {
    searchPlaceholder: "Search...",
    recentPosts: [
      "Get The Exercise Limited Mobility",
      "Transfusion Strategy And Heart Surgery",
      "Latest Equipment For The Heart Treatment",
      "What Is Future Of Blood Pressure Monitoring?",
      "Goals Setting The People Heart Is Healthy",
    ],
    recentComments: [
      {
        name: "workrightmart",
        comment: "on Get The Exercise Limited Mobility",
      },
      { name: "mpirjs", comment: "on Get The Exercise Limited Mobility" },
      { name: "mpirjs", comment: "on Is Running Really Good for the Heart?" },
      { name: "whocialtour", comment: "on Get the Exercise Limited Mobility" },
      {
        name: "workrightmart",
        comment: "on Get the Exercise Limited Mobility",
      },
    ],
    archives: ["December 2021", "October 2021"],
    categories: [
      "Announcements",
      "Assistance",
      "Discounts",
      "Healthcare",
      "Treatment",
      "Uncategorized",
    ],
    tags: ["Adventures", "Cardiac", "Care", "Doctors", "Health", "Hospital"],
    services: [
      "Angioplasty Services",
      "Cardiology Services",
      "Dental Services",
      "Endocrinology Services",
      "Eye Care Services",
      "Neurology Services",
      "Orthopaedics Services",
      "RIM Services",
    ],
  };

  return (
    <aside className="w-full lg:w-1/3 space-y-8">
      {/* Search */}
      <div className="bg-gray-100 p-6 shadow">
        <input
          type="text"
          placeholder={data.searchPlaceholder}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.recentPosts.map((post, idx) => (
            <li key={idx} className="hover:text-blue-600 cursor-pointer">
              {post}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Comments */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.recentComments.map((c, idx) => (
            <li key={idx}>
              <span className="font-medium">{c.name}</span> {c.comment}
            </li>
          ))}
        </ul>
      </div>

      {/* Archives */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Archives</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.archives.map((a, idx) => (
            <li key={idx}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.categories.map((cat, idx) => (
            <li key={idx}>{cat}</li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Tag</h3>
        <div className="flex flex-wrap gap-2 text-xs text-gray-700">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 rounded hover:bg-blue-100 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100 p-6 shadow">
        <h3 className="text-lg font-semibold mb-4">Services</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.services.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;
