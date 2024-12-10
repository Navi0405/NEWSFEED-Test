module.exports = (sequelize, Datatypes) => {
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    });

return Comments;
};