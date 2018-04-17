import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Image from '../components/Image.js'

class Post extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const res = await fetch(`http://18.218.187.95/wp-json/wp/v2/events?slug=${slug}`);
    const spost = await res.json();
    const post = spost[0];
    return { post }
  };

  render() {
    return (
      <Layout>
      <h1>{this.props.post.title.rendered}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: this.props.post.content.rendered
        }}
      />
      </Layout>
    );
  }
}

export default Post
