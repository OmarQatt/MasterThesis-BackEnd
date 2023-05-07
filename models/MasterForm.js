module.exports = (sequelize, DataTypes) => {
    const Letter = sequelize.define("letter", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LetterName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studentNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teacherName: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        academicYear: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        semesterYear: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        collegeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departmentName: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    
    });
    return Letter;
};