
const Course = require('../models/Courses');
const {moduleMongooseToObject, mutipleMongooseObjectToObject} = require('../../util/mongoose')

class SiteController{

   
    //[GET] /news
    index(req, res,next){

        //cách viết promise
        Course.find({})
        .then(courses =>{
            
           // courses = courses.map(courses => courses.toObject())
            res.render('home', {courses:mutipleMongooseObjectToObject(courses)});
                
        })
        .catch(next);

        //.catch(error => next(error));
        //cách viết callback

        // Course.find({},function(err,courses, next){
        //     if(!err){
        //         res.json(courses);
        //     } 
        //     else{
        //         next(err);
        //     }
           
        // })

        //res.render('home');
    }
    //[GET] /news/:slug
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController;