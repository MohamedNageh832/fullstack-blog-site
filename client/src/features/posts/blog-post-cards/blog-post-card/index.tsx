import { Link } from "react-router-dom";
import { BlogPostCardInterface } from "./types";
import Button from "../../../../components/button";

const BlogPostCard = (props: BlogPostCardInterface) => {
  const { data, vertical } = props;
  const { id, title, desc, img } = data;

  return (
    <div
      className={`blog-post-card${vertical ? " blog-post-card--vertical" : ""}`}
    >
      <section className="blog-post-card__body">
        <Link className="blog-post-card__title" to={`/blogs/${id}`}>
          <h4>{title}</h4>
        </Link>
        {!vertical && <p className="blog-post-card__desc">{desc}</p>}
        <Link className="blog-post-card__read-more" to={`/blogs/${id}`}>
          <Button color="green" variant="sharp-outline">
            Read more
          </Button>
        </Link>
      </section>

      <div className="blog-post-card__img-wrapper">
        <img className="blog-post-card__img" src={img} alt="Blog post image" />
      </div>
    </div>
  );
};

export default BlogPostCard;
