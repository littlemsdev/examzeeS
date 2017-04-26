$(document).ready(function() {
  $( ".downl" ).click(function() {
    $('#readFileSection').show();
  });

  $("#sendAnswer").on('click', function(event){
    event.preventDefault();
    var student_number = $('input[name="student_number"]').val();
    var exam_id = $('input[name="exam_id"]').val();
    var answer_keys = $('textarea[name="answer_keys"]').val();

    var dataString = 'student_number=' + student_number + '&exam_id=' + exam_id + '&answer_keys=' + answer_keys + '&status=' + '3';

    $.ajax({
      type: "POST",
      url: "https://examzee-api.herokuapp.com/api/v1/student_grades",
      data: dataString,
      crossDomain: true,
      cache: false,
      success: function(data) {
        if(data == "success") {
          alert("Submitted successfully");
          window.location.href = "student.html";
        } else {
          alert("error");
        }
      }
    });

  });
});
