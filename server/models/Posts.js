module.exports = (sequelize, Datatypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        postText: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
        },
    });


    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    };
return Posts;
};