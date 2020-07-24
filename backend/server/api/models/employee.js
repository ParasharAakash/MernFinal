const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [10, 'Must be less than 10 characters.'],
        required: [true, 'first name cannot be blank.'],
    },
    lastName: {
        type: String,
        minlength: [3, 'Must be at least 3 characters.'],
        maxlength: [100, 'Must be less than 10 characters.'],
        required: [true, 'last name cannot be blank.'],
    },
    email: {
        type: String,
        required: [true, 'email cannot be blank.'],
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    Phone_no: {
        type: String,
        required: [true, 'Contact Number cannot be blank.']
    },
    Permanent_address: {
        type: String,
        required: [true, 'Address cannot be blank.']
    },
    Photo:{
        type: String,
        required: [true, 'Photo cannot be blank.']
    },
    Course:{
        type:String,
        required:[true,'email required']
    },
    College:{
        type:String,
        required:[true,'college name is required']
    },
    year:{
        type:Number,
        required:[true,'year of passing required']
    },
    Percentage:{
        type:Number,
        required:[true,'percentage is required']
   },
   Company_Name:{
    type:String,
    required:[true,'company name is required']
   },
//    from:{
//        type:Date,
//         required:[true,'date is required']
//    },
//    to:{
//     type:Date,
//     required:[true,'date is required']
//    },
   Designation:{
    type:String,
    required:[true,'designation is required']
   },
   LinkedIn:{
    type:String,
    required:[true,'LINKEDIN Link is required']
   },
   GitHub:{
    type:String,
    required:[true,'github Link is required']
   },
   Facebook:{
    type:String,
    required:[true,'facebook Link is required']
   },
   Hobbies:{
    type:String
   }
});

const Employee = mongoose.model('Employee', employeesSchema);

module.exports = Employee;