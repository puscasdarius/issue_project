var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = new Schema({
  id:Number,
  project_id:Number,
  type:String,
  name:String,
  sprint:Number,
  createdBy:String,
  description:String,
  status:Number,
  tasks:String,
  createdAt:Date
});

var Issue = mongoose.model('NewIssue',issueSchema);
module.exports = Issue;
