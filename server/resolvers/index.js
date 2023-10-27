const {QueryResolver}=require('./queries')
const {MutationResolver}=require('./mutations')

const resolvers={
    Query:Object.assign({},QueryResolver.Query),
    Mutation:Object.assign({},MutationResolver.Mutation)

}
module.exports={resolvers}