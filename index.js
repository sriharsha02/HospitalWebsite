function sendEmail(){
  let details = {
    patient_name : document.getElementById('name').value,
    patient_phone : document.getElementById('phone').value,
    patient_email : document.getElementById('email').value,
    mode_of_appointment : document.getElementById('appoinmentmode').value,
    symptoms_noticed : document.getElementById('symptoms').value


  }
  emailjs.send("service_qo57wmk", "template_c5l0ldl", details).then( function (res){
    alert("You Data has been sent to the concerned Doctor" + res.status)
  })
 
} 