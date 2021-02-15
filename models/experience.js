module.exports = function(sequelize, DataTypes) {

    const Experience = sequelize.define("Experience", {

        title: DataTypes.STRING,
        date: DataTypes.STRING,
        description: DataTypes.STRING


    })
    return Experience;
}


