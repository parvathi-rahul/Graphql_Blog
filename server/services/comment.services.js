const { Comment } = require("../modals/sequelize.modal");

const createComment = async (args, info) => {
  let commentInput = args.input;
  try {
    let comment = await Comment.create(commentInput);
    return comment;
  } catch (error) {
    throw Error(error);
  }
};

const deleteComment = (_,args) =>{
    Comment=Comment.filter((c)=>c.id!=args.id)
    return Comment
};



module.exports = { createComment , deleteComment};