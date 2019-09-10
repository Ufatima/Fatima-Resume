import React, { Component } from 'react';

class Blogs extends Component {
  constructor(props) {
    super(props);

    this.blogs = props.blogs;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="blogs">
        <div className="w-100">
          <h2 className="mb-5">Blogs</h2>
          <p>
            <a href={this.blogs.paragraphOne}>
              My first blog with Python django
            </a>  
          </p>
          <p className="mb-0">
            <a href={this.blogs.paragraphTwo}>
              Creative design and prototyping
            </a> 
          </p>
        </div>
      </section>
    );
  }
}

export default Blogs;
