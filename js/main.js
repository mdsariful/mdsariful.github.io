
    $('#pay').hide();
    $('#done').hide();


$('#book').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submittinga
    $('#book').hide();
    alert("Thanks for booking with us!");
    $('#pay').show();

});

$('#pay').submit(function(ev) {
    ev.preventDefault(); // to stop the form from submittinga
    $('#pay').hide();
    $('#done').show();

});
function render(data){
  var html="<div class='commentbox'><div class='leftPanelImg'><img src='https://placeholdit.imgix.net/~text?w=100&h=100'/></div><div class='rightPanel'><span>"+data.name+"</span><div class='date'>"+data.date+"</p></div><p>"+data.body+"</p></div><div class='clear'></div></div>";
  $('#janina').append(html);

}


$(document).ready(function(){
  var comment=[
    {"name":"Md. Afique Amin Zian","date":"13 April 2018","body":"this is a comment"}
  ];
  for(var i=0;i<comment.length;i++){
    render(comment[i]);

  }
  $('#submit').click(function() {
    var addObj={
      "name": $('#fname').val(),
      "date":$('#date').val(),
      "body":$('#message').val()
    };

    comment.push(addObj);
    render(addObj);
    $('#fname').val('');
    $('#date').val('dd/mm/yyyy');
    $('#message').val('');
  });


});
