import styles from "@/styles/components/Blog.module.css";

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
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <h2>Guidance In Our Blog</h2>
        <p>Find astrology tips and personalized guidance on all your questions</p>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.title} className={styles.blogCard}>
              <div className={styles.imageArea}>{post.image}</div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className={styles.footer}>
                <span className={styles.date}>{post.date}</span>
                <a href="#" className={styles.readMore}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
