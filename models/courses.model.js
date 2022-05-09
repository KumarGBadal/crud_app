const mongoose = reqire('mongoose')

var courseSchema = new mongoose.Schema({
   course_id:{
        type:int
    },
    course_name:{
        type:varchar
    },
    course_description:{
        type:varchar
    }
})

mongoose.model('Courses', courseSchema)