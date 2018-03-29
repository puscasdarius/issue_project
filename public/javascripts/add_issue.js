$(document).ready(function(){
  var project_id;
  init();

  $('#new_project').on('click',function(){
     var project_name = $('#project_name').val();
     var user_id = localStorage.getItem('user_id');
     $.ajax({
       type:'POST',
       url:'/save_project/'+user_id,
       data:{project_name:project_name}
     }).done(function(){
       location.reload();
     });
  })

  function init(){
    $.ajax({
      type:'GET',
      url:'/add_issue'
    })
  }
})

function select_project(id){
  project_id = id;
  $('.select_project').css('display','none');
  $('first_page').css('display','flex');
  $('.paging').css('display','flex');

  window.location = window.location + '/'+project_id;
}
