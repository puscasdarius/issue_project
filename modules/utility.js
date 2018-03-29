var mongoose = require('mongoose');
var Account = require('./account');
var Project = require('./project');
var Issue = require('./issue');
var chance = require('chance')();

var utility = {
  verify_user:function(req,res,next){
    var acc = new Account();
    var sent_data = req.body;
    var result = false;

    Account.findOne({name:sent_data.name,pass:sent_data.pass},function(err,data){
      if(err) throw err;
      if(data.length == 0)
        res.json({result:0});
      else
        res.json({result:data.id});
    });
  },
  register:function(req,res,next){
    var acc = new Account();
    var sent_data = req.body;

    acc.id = chance.natural();
    acc.name = sent_data.name;
    acc.pass = sent_data.pass;

    acc.save(function(err,acc){
      if(err) throw err;
      if(acc)
        res.json({result:acc.id});//registered
    })
  },
  save_project:function(req,res,next){
    var project = new Project();

    project.id = chance.natural();
    project.user_id = req.params.id;
    project.name = req.body.project_name;
    project.sprint_version = 0;
    project.issues = [];

    project.save(function(err,data){
      if(err)throw err;
      console.log(data);
      if(data)
        res.json({result:true});
    })
  },
  get_projects:function(req,res,next){
    Project.find(function(err,data){
      if(err) throw err;
      res.render('add_issue',{projects:data});
    })
  },
  get_issue:function(req,res,next){
    let project_id = req.params.id;
    Project.findOne({id:project_id},function(err,data){
      if(err)throw err;
      let sprint_version = data.sprint_version;
      Issue.find({project_id:project_id},function(err,data){
        if(err) throw err;
        console.log(sprint_version);
        res.render('issue_view',{issue_list:data,sprint_version:sprint_version});
      });
    })

  },
  get_issue_id:function(req,res,next){

    var project_id = req.paramas.project_id;
    Project.findOne({id:project_id},function(err,data){
      if(err) throw err;
      if(data)
        console.log(data);
    });
  },
  save_issue:function(req,res,next){
    let issue = req.body;
    let issue_obj = new Issue();

    issue_obj.id = chance.natural();
    issue_obj.project_id = issue.project_id
    issue_obj.type = issue.type;
    issue_obj.name = issue.name;
    issue_obj.sprint = issue.version;
    issue_obj.createdBy = issue.createdBy;
    issue_obj.description = issue.description;
    issue_obj.status = issue.state;
    // issue_obj.tasks:String,
    // issue_obj.createdAt:Date

    issue_obj.save(function(err,data){
      if(err) throw err;
      res.json({"issue_saved":"true"});
    });

  }
}

module.exports = utility;
