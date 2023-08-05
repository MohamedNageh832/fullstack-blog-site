import BlogPostCard from "../blog-post-cards/blog-post-card";
import "./styles.css";

const RecommendedBlogs = ({ posts }) => {
  return (
    <section className="recommended-blogs">
      <h2 className="recommended-blogs__heading">Other posts you may like</h2>

      <section className="recommended-blogs__posts">
        {posts.map((post, i) => (
          <BlogPostCard key={`blog-post-${i}`} data={post} vertical />
        ))}
      </section>
    </section>
  );
};

export default RecommendedBlogs;
