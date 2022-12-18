import React from "react";

const Blog = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-h-100vh"} blog wrapper`}>
      <div className="blog-grid1">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 1</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid2">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 2</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid3">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 3</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid4">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 4</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid5">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 5</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid6">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 6</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
      <div className="blog-grid7">
        <div className="blog-details">
          <h2 className="blog-header">Blog Post 7</h2>
          <p className="blog-author">by Abir Tasrif, 18-Dec-22</p>
          <p className="blog-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="blog-after"></div>
      </div>
    </section>
  );
};

export default Blog;
