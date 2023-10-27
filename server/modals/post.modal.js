module.exports=(sequelize,DataTypes,db)=>{
    const Post=sequelize.define("Post",{
        post_id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        publish_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        

    });

Post.associate=(models)=>{
    Post.hasMany(models.Comment,{as:"comments",foreignKey:"post_id"})
};
return Post;
}



// CREATE TABLE blogDb.Post (
//     post_id VARCHAR(100) PRIMARY KEY,
//     title VARCHAR(100),    
//     description VARCHAR(100),    
//     author VARCHAR(200),
//     publish_date DATE
// );

// INSERT INTO blogdb.Post (post_id, title, description, author, publish_date)
// VALUES (1, 'Post1', 'NA', 'author1', '2023-01-01')