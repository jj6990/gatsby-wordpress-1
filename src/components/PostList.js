import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";

export default function PostList() {
  const data = useStaticQuery(graphql`
    query PostList {
      allWpPost {
        nodes {
          id
          link
          content
          title
        }
      }
    }
  `);
  return (
    <div className="container">
      <div className="cards-container">
        {data.allWpPost.nodes.map((post, key) => {
          console.log(post);
          return (
            <a href={post.link} key={key} className="post-card">
              <h2>{post.title}</h2>
              <div className="post__content-preview">
                {parse(post.content.split(" ", 50).join(" "))}...
              </div>
              <button>Read More</button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
