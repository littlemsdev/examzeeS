$(document).ready(function() {
  $("#sendAnswer").on('click', function(event){
    event.preventDefault();
    var student_number = $('input[name="student_number"]').val();
    var exam_id = $('input[name="exam_id"]').val();
    var student_answer = $('textarea[name="student_answer"]').val();

    var dataString = 'student_number=' + student_number + '&exam_id=' + exam_id + '&student_answer=' + student_answer;

    $.ajax({
      type: "POST",
      url: "http://192.168.1.7:8888/examzee/uploadExam.php",
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
