import { CiEdit, CiTrash } from "react-icons/ci";
import { Button } from "../../../components";
import "./styles.css";
import { Link } from "react-router-dom";

const BlogPostDetails = () => {
  return (
    <main className="blog-post__content">
      <div className="blog-post__img-wrapper">
        <img src="" alt="" />
      </div>

      <header className="blog-post__header">
        <section className="blog-post__author">
          <div className="blog-post__author-img">
            <img src="" alt="" />
          </div>

          <section className="blog-post__post-details">
            <section className="blog-post__author-info">
              <Link className="blog-post__author-name">name</Link>
              <small className="blog-post__post-date">date 12/2/2022</small>
            </section>

            <section className="blog-post__controls">
              <Button className="blog-post__btn" color="yellow">
                <CiEdit />
              </Button>
              <Button className="blog-post__btn" color="red">
                <CiTrash />
              </Button>
            </section>
          </section>
        </section>
      </header>

      <section className="blog-post__body">
        <h2 className="blog-post__post-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>

        <article className="blog-post__article">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          similique. Quasi dicta fuga inventore sed amet error asperiores
          excepturi totam sunt magni, placeat explicabo ipsum ut eius quas
          dolores quaerat?
        </article>
      </section>
    </main>
  );
};

export default BlogPostDetails;
