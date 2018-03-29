$(document).ready(function(){
  //Issue Object


  function Issue(){
    this.version = $('#issue_version').val();
    this.type = $('#issue_type').val();
    this.state = $('#issue_state').val();
    this.name = $('#input_name').val();
    this.description = $('#input_des').val();
    this.createdBy = $('#user_name').val();
    let url = window.location.href.split('/');
    this.project_id = url[url.length-1].replace(/\D/g,'');


    this.send_issue = function(){
      $.ajax({
        type:'POST',
        url:'/save_issue',
        data:{
          project_id:this.project_id,
          version:this.version,
          type:this.type,
          state:this.state,
          name:this.name,
          description:this.description,
          createdBy:this.createdBy
        },
        success:function(response){
          if(response.issue_saved)
            alert("Issue was successfully saved!");
        }
      });
    }

    this.get_project_id = function(){
      return this.project_id;
    }

  }

  function next_func(){
    $('.first_page').css("display","none");
    $('.second_page').css('display','flex');
  }

  function prev_func(){
    $('.second_page').css("display","none");
    $('.first_page').css("display","flex");

  }

  function issue_select(){
    console.log("issue");
  }

  $('#add_issue').on('click',function(){
    let issue = new Issue();
    issue.send_issue();
  });
  $('#prev').on('click',function(){
    prev_func();
  })
  $('#next').on('click',function(){
    next_func();
  });

});
