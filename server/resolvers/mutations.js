// const MutationResolver={
//     Mutation:{
//         hello:()=>'Hello Graphical Api Mutation'
//     }
// }

// module.exports={MutationResolver}


const { createPost } = require("../services/post.services");
const { createComment } = require("../services/comment.services");
const { deleteComment } = require("../services/comment.services");

const MutationResolver = {
  Mutation: {
    hello: () => {
      return `Hello graphl API mutation`;
    },
    createPost: (parent, args, context, info) => createPost(args, info),
    createComment: (parent, args, context, info) => createComment(args, info),
    deleteComment: (parent, args, context, info) => deleteComment(args, info),
  },
};

module.exports = { MutationResolver };