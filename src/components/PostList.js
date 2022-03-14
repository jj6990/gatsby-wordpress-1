import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PostCard from "./PostCard";

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
  console.log(data);
  return <>This is the list post</>;
}
