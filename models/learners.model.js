const mongoose = reqire('mongoose')

var learnerSchema = new mongoose.Schema({
    learner_name:{
        type:varchar
    },
    learner_email:{
        type:varchar
    },
    learner_password:{
        type:varchar
    }
})

mongoose.model('Learners', learnerSchema)