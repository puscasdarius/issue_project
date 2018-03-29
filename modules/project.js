var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  id:Number,
  user_id:Number,
  sprint_version:Number,
  name:String,
  issues:String
});

var Project = mongoose.model('NewProject',projectSchema);
module.exports = Project;
