// To be done, later.
exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: {
          gcms: { blogs },
        },
      } = await graphql(`
        {
          gcms {
            blogs(stage: PUBLISHED) {
              id
              slug
            }
          }
        }
      `)

    blogs.forEach(({ id, slug }) => createPage({
        path: `blogs/${slug}`,
        component: require.resolve("./src/components/BlogDetail.tsx"),
        context: {
            id,
        }
    }));
}