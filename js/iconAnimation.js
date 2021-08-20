$('#navbtn').on('click', function () {
  $(this).toggleClass('is-active');
});

function check (status) {
  for (var x = 0; x < inputs.length; x++){
    inputs[x].checked = status;
  }
  if(status){
    setTimeout(function() { 
      check(false);
    }, 2000);
  }
  
}