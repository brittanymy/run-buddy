// current date format
$('#currentDay').text(moment().format('dddd, MMMM Do'))

// save button 
$(".saveBtn").on("click",function(){
    var text= $(this).siblings('.description').val();
    var time= $(this).parent().attr("id")
    localStorage.setItem(time, text)
})

// save to local storage
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

// color code function
// if, else, else if to set colors 
// current hour red
// past grey
// future green

