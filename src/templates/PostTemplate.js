import React from "react";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PostTemplate(props) {
  console.log(props);
  const { content, title, featuredImage } = props.pageContext.data;
  const image = getImage(featuredImage.node.localFile)
  return (
    <div className="container">
      <div className="card-container">
        <div className="post-card">
          <h2>{title}</h2>
          <div className="post__content">{parse(content)}</div>
          <GatsbyImage image={image} alt="image description"/>
        </div>
      </div>
    </div>
  );
}
