const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const emp=require('../controllers/Employee');
router=express.Router();

//adding details of employee
router.post('/emp/reg',emp.pr);
 
//displaying all the employees
router.get('/emp/view',emp.employees_get_all);

//displaying details of particular employee
router.get("/emp/view/:empId", emp.employees_get_employee);

//deleting a particular employee details 
router.delete("/emp/del/:empId", emp.employees_delete);
module.exports=router;