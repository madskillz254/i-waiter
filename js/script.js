$(document).ready(function(){
  //start of function of about us button
  $("#aboutusbtn").click(function(){

  $("#btnspg").hide()
    $("#aboutuspg").show();

  })

  $("#tryusbtn").click(function(){
    $("#btnspg").hide();
  $("#selectionpg").show();//modify that selection page shows (selectionpg)
  })


  //functionality for login page
      $("#btn_submit").click(function(){
          var username = $("#txt_uname").val();
          var password = $("#txt_pwd").val();

          if( username != "Mugo Ndungu" && password != "123456" ){
            alert("Invalid Username Or Password");
          } else {
            location='signup.html';
          }
      });


      //selectbtn functionality button as anchor tag.
      $("#migrate").click(function(){
        location.href="signup.html";
      });
      $("#inhouse").click(function(){
        location.href="signup.html";
      });
      $("#both").click(function(){
        location.href="signup.html";
      });

      //end of function

//submit to dashboard transition
$("#signupbtn").click(function(){
  $("#signupg").hide();
  $("#dashboardpg").show();
})

//end of code

//dashboard code.
$(document).ready(function() {
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });
});

//end

})
