function requestOfServer(){

    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=Odnumalo"
    }).done(function(data) { 
        document.getElementById('developer').innerHTML = data.manager_developer
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable
        document.getElementById('company-site').innerHTML = data.website_company

        $("#show-values").css('display', 'block')


    });
}