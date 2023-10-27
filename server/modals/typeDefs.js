const {gql}=require('apollo-server-express')

const typeDefs=gql`
type Post {
    post_id: String
    title: String    
    description: String
    author: String
    publish_date: String
    comments: [Comment]
    
  }

  type Comment {
    comment_id: String
    text: String
    author: String
    post_id:String
  }

  input PostInput {
    post_id: String
    title: String    
    description: String
    author: String
    publish_date: String
  }

  input CommentInput {
    comment_id: String
    text: String
    author: String
    post_id: String
  }

  input deleteComment{
    comment_id: String
    text: String
    author: String
    post_id: String
  }

type Query{
    hello:String
    getPost: [Post]!
}
 type Mutation{
    hello:String
    createPost(input: PostInput): Post!
    createComment(input: CommentInput): Comment!
    deleteComment(id: ID): Comment!    
 }
 `
 
 module.exports={typeDefs}

