$(document).ready(function(){
  //$('#field_warning').addClass('disable');
  //$("#register_warning").addClass('disable');
  $('#log_in').on('click',function(event){
    var url = "/log_in";
    send_data(url);
  })
  $('#register').on('click',function(event){
    var url = "/register";
    send_data(url);
  })

  function send_data(url){
    $('#field_warning').removeClass('enable').addClass('disable');

    var name = $('#input_name').val();
    var pass = $('#input_pass').val();

    if(name && pass){
      var ajax_object =
      {
        type:'POST',
        url:url,
        data:{name:name,pass:pass},
        success:console.log("object sent")
      };
      $.ajax(ajax_object).done(function(response){
        if(url == '/log_in'){
          if(response.result == 0){
            $("#register_warning").removeClass('disable').addClass('enable');
          }else{
            if(localStorage.getItem('user_id') == null)
              localStorage.setItem('user_id',JSON.stringify(response.result));
            document.location = document.location.href + 'home/'+response.result;
          }

        }
        if(url == '/register'){
          if(response.result == true){
            if(localStorage.getItem('user_id') == null)
              localStorage.setItem('user_id',JSON.stringify(response.result));
            document.location = document.location.href + 'home';
          }
        }

      })
    }else{
      $('#field_warning').removeClass('disable').addClass('enable');
    }
  }
});
