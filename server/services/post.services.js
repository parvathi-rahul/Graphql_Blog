// const { Post, Comment } = require("../modals/sequelize.modal");

// const getPost = async () => {
//   try {
//     let posts = await Post.findAll({
//       include: [
//         {
//           model: Comment,
//           as: "comments",
//         },
//       ],
//     });

//     return posts;
//   } catch (error) {
//     throw Error(error);
//   }
// };

// module.exports = { getPost };

const { Post, Comment } = require("../modals/sequelize.modal");

const getPost = async () => {
  try {
    let posts = await Post.findAll({
      include: [
        {
          model: Comment,
          as: "comments",
        },
      ],
    });

    return posts;
  } catch (error) {
    throw Error(error);
  }
};

const createPost = async (args, info) => {
  let input = args.input;
  console.log("Input", input);
  try {
    let posts = await Post.create(input);
    return posts;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

module.exports = { getPost, createPost };