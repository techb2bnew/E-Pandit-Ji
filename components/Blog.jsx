export default function Blog() {
  const blogPosts = [
    {
      title: "Latest Planetary Transit in April 2026",
      description: "Learn about the upcoming planetary transits and how they affect your life",
      date: "April 15, 2026",
      image: "🪐",
    },
    {
      title: "How to Read Your Kundli Chart",
      description: "A beginner's guide to understanding your birth chart and planetary positions",
      date: "April 10, 2026",
      image: "📊",
    },
  ];

  return (
    <section
      id="blog"
      className="bg-[linear-gradient(135deg,#0f0f1e_0%,#1a1a2e_100%)] px-4 py-16 text-center text-white"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-2 text-[40px] font-bold text-[#ffd700]">
          Guidance In Our Blog
        </h2>
        <p className="mb-8 text-[16px] text-[#b0b0b0]">
          Find astrology tips and personalized guidance on all your questions
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 max-md:grid-cols-1">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="cursor-pointer overflow-hidden rounded-[10px] border-2 border-[rgba(255,215,0,0.2)] bg-[linear-gradient(135deg,rgba(255,215,0,0.05)_0%,rgba(255,215,0,0.02)_100%)] transition-all duration-300 hover:translate-y-[-5px] hover:border-[#ffd700] hover:shadow-[0_8px_20px_rgba(255,215,0,0.15)]"
            >
              <div className="border-b border-[rgba(255,215,0,0.2)] bg-[linear-gradient(135deg,rgba(255,215,0,0.2)_0%,rgba(255,215,0,0.1)_100%)] p-8 text-center text-[48px]">
                {post.image}
              </div>

              <h3 className="mx-4 mt-6 text-[19px] font-semibold text-[#ffd700]">
                {post.title}
              </h3>
              <p className="mx-4 my-2 text-[14px] leading-normal text-[#b0b0b0]">
                {post.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-[rgba(255,215,0,0.2)] p-4">
                <span className="text-[13px] text-[#808080]">{post.date}</span>
                <a
                  href="#"
                  className="font-semibold text-[#ffd700] no-underline transition-colors duration-300 hover:text-[#ffed4e]"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
