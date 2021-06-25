const Courses = require("../models/Courses");
const { mutipleMongooseObjectToObject } = require("../../util/mongoose");

class MeController{

    //[GET] /me//stored/courses

    storedCourses(req, res,next){
        Promise.all([Courses.find({}),Courses.countDocumentsDeleted()])
            .then(([courses,deletedCount])=>
            res.render('me/stored-Courses',{
                deletedCount,
                courses: mutipleMongooseObjectToObject(courses)
            }),
            )
            .catch(next);
     

        // Courses.find({})
        // .then(courses => res.render('me/stored-Courses',{
        //     courses: mutipleMongooseObjectToObject(courses)
        // }))
        // .catch(next);
    }
    //[GET] /me//trash/courses

    trashCourses(req, res,next){
        Courses.findDeleted({})
            .then((courses) =>
                res.render('me/trash-Courses',{
                courses: mutipleMongooseObjectToObject(courses),
            }),
            )
            .catch(next);
    }

}
module.exports = new MeController;