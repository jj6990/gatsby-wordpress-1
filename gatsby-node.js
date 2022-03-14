const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postPages = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          link
        }
      }
    }
  `);

  console.log(JSON.stringify(postPages));
  postPages.data.allWpPost.nodes.forEach((node) => {
    console.log(node);
    createPage({
      path: node.link,
      component: path.resolve(`./src/templates/PostTemplate.js`),
      context: {
        data: node,
      },
    });
  });
};
