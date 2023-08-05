import { Container } from "../components";
import { BlogPostDetails, RecommendedBlogs } from "../features/posts";

const posts = [
  {
    id: 1,
    title: "This is a title for testing how it will look.",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, adipisci.",
    img: "https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    title: "This is a title for testing how it will look.",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, adipisci.",
    img: "https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    title: "This is a title for testing how it will look.",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, adipisci.",
    img: "https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const BlogPostDetailsPage = () => {
  return (
    <Container className="blog-post__container">
      <BlogPostDetails />
      <RecommendedBlogs posts={posts} />
    </Container>
  );
};

export default BlogPostDetailsPage;
