import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import {
  Button,
  Container,
  FormFile,
  FormInput,
  RadioGroup,
} from "../../../components";
import "./styles.css";

const radios = ["Design", "Food", "Art", "Technology", "Science"];

const CreateBlogPost = () => {
  const [value, setValue] = useState("");

  return (
    <Container className="create-blog-container">
      <h2 className="create-blog__heading">Create blog post</h2>

      <section className="create-blog__body">
        <main className="create-blog__text-editor">
          <FormInput
            className="create-blog__blog-title"
            placeholder="Blog title"
          />
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </main>
        <section className="create-blog__menu">
          <h3 className="create-blog__menu-heading">Publish</h3>
          <section className="create-blog__menu-body">
            <p className="create-blog__status">Status: Draft</p>
            <p className="create-blog__visibility">Visibility: Online</p>

            <FormFile color="black" variant="outline">
              Upload image
            </FormFile>

            <section className="create-blog__controls">
              <Button color="secondary">Save as draft</Button>
              <Button color="green">Update</Button>
            </section>

            <section className="create-blog__category">
              <h4 className="create-blog__category-heading">Category</h4>
              <RadioGroup name="category" values={radios} />
            </section>
          </section>
        </section>
      </section>
    </Container>
  );
};

export default CreateBlogPost;
