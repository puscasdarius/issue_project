var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
  id:Number,
  name:{type:String,required:true},
  pass:{type:String,required:true}
});

var Account = mongoose.model('Account',accountSchema);
module.exports = Account;
