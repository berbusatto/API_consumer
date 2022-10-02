let a =1
let b =2*a

function requestOfServer() {
    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=OlaMundo"
    }).done(function(data) { 
        document.getElementById('developer').innerHTML = data.name

        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company

        $("#show-values").css('display', 'block')

    });
}

function submitDataOfUser() {
    const nameOfUser = $("#name").val()
    const lasNameOfUser = $("#lastname").val()
    const ageOfUser = $("#age").val()      

    $.ajax({
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type":"application/json; charset=UTF-8",
          "Access-Control-Allow-Origin":"*"
        },
        "data": JSON.stringify({
            name:nameOfUser,
            lastName:lasNameOfUser,
            age:ageOfUser
        }) 
    }).done(function(response) {
        if (response.success) {
            $("#success-record-msg").css('display', 'block')
            $("#name").val('')
            $("#lastname").val('')
            $("#age").val('')
        }
    });  
} 

function closeSuccessMsg(){
    // COM JQUERY
    $('#success-record-msg').css('display', 'none')

    // JS VANILLA
    //document.getElementById('success-record-msg').style.display = 'none'
}

function submitCar(){
    const carName = $("#name").val()
    const carModel = $("#car_model").val()
    const carYear = $("#year").val()
    const carMotor = $("#motorization").val()
   
    $.ajax({
        "url": "http://localhost:8000/carinsert",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json; charset=UTF-8"
        },
        "data": JSON.stringify({
            name:carName,
            car_model:carModel,
            year:carYear,
            motorization:carMotor
        }) 
    }).done(function(response) {
        if (response.success) {
            $("#success-record-msg").css('display', 'block')
            $("#name").val('')
            $("#model").val('')
            $("#year").val('')
            $("#motorization").val('')
        }
    });  
}