console.log("Rendered_pixelz");

// send mail
function SendMail(){
    var params = {
        fullName : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("subject").value
    }
    emailjs.send("service_p8drppc", "template_i2pectn", params).then(function (res){
        alert("Success! " + res.status);
    });
}



// send mail
function SendMail2(){
    var params2 = {
        email_id : document.getElementById("email2").value,
        message : document.getElementById("subject2").value
    }
    emailjs.send("service_p8drppc", "template_i2pectn", params2).then(function (res2){
        alert("Success! " + res2.status);
    });
}