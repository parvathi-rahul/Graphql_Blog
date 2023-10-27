const { getPost } = require("../services/post.services");

const QueryResolver={
    Query:{
        hello:()=>'Hello Graphql API Query',
        getPost: () => getPost(),
    }
};

module.exports={QueryResolver};