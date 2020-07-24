const mongoose=require("mongoose");
const Employees= require("../models/employee");
const bodyParser = require("body-parser");
const express = require('express');



const app = express();
app.use(bodyParser.json());

// adding details of a user
exports.pr = (req, res, next) => {
    console.log(req.body);
        const employee = new Employees({
          _id: new mongoose.Types.ObjectId(),
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email:req.body.email,
          contact:req.body.Contact,
          address:req.body.Permanent_address,
          photo:req.body.Photo,
          course:req.body.Course,
          college:req.body.College,
          year:req.body.year,
          percent:req.body.Percentage,
          company:req.body.Company,
          // from:req.body.from,
          // to:req.body.to,
          designation:req.body.Designation,
          linkedIn:req.body.LinkedIn,
          github:req.body.Github,
          facebook:req.body.Facebook,
          hobbies:req.body.Hobbies
        });
       employee
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: "Created employee successfully",
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          });
};

// exports.pr=(req, res,next) =>{
//   Employees.create(req.body)
//    .then((employee)=>{
//      console.log('Employee Added',employee);
//      res.statusCode = 200;
//      res.setHeader('Content-Type','application/json');
//      res.json(employee);
//    },(err)=>next(err))
//    .catch((err)=>next(err));
//    }

// exports.pr=(req, res) =>{
//   Employees.create(req, (err) => {
//     console.log(req.body);
//     if (err) {
//       console.log(err)
//       res.send('Error occured during registration');
//     }
//     else {
//       res.send('Employee Record Added....');
//     };
//   })
// };


// diplaying the details of all the employees
exports.employees_get_all = (req, res, next) => {
  Employees.find()
    .select("Firstname Lastname Email")
    .exec()
    .then(docs => {
      const response = {
        employees: docs.map(doc => {
          return {
            firstName: docs.firstName,
            lastName: docs.lastName,
            email:docs.email,
            id:docs.id
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

// details of a particular employee
exports.employees_get_employee = (req, res, next) => {
    const id = req.params.empId;
    Employees.findById(id)
      .select(" Firstname Lastname Email Contacttno Addresss Course College Year Percent CompanyyName From To Designation LinkedIn Github Facebookok Hobbies _id ")
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json({
            employee: doc,
          });
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };


//deleting a partiicular employee
exports.employees_delete = (req, res, next) => {
    const id = req.params.empId;
    Employees.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "employee deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
}