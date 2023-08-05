import BlogPostCard from "./blog-post-card";
import "./styles.css";

const BlogPostCards = ({ posts }) => {
  return (
    <section className="blog-post-cards">
      {posts.map((post, i) => (
        <BlogPostCard key={`Blog-post-${i}`} data={post} />
      ))}
    </section>
  );
};

export default BlogPostCards;
