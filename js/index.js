var users = []
    //localStorage.setItem("users", JSON.stringify(users));

function register() {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value;
    email = email.toLowerCase();
    var nameUser = document.getElementById('nameUser').value
    var password = document.getElementById('password').value
        //console.log(name + " " + lastName + " " + email + " " + nameUser + " " + password);

    var user = {
        "name": name,
        "lastName": lastName,
        "email": email,
        "userName": nameUser,
        "password": password
    }
    if (name && lastName && email && nameUser && password) {
        alert("Registro creado exitosamente")
        console.log("-------------")
        console.log(user);
        //Push añade o empuja al array, los nuevos users que vamos creando
        users.push(user);
        console.log("Usuarios", users)
        console.log("Usuario", user)

        for (var i = 0; i < users.length; i++) {
            console.log("------>", users[i])
        }


        //Guardar obejto como String
        localStorage.setItem("users", JSON.stringify(users));



    } else {

        var alerta = "solid 1px red"
        if (name == '') {
            document.getElementById('name').style.border = alerta
        }
        if (lastName == '') {
            document.getElementById('lastName').style.border = alerta
        }
        if (email == '') {
            document.getElementById('email').style.border = alerta
        }
        if (nameUser == '') {
            document.getElementById('userName').style.border = alerta
        }
        if (password == '') {
            document.getElementById('password').style.border = alerta
        }

    }



}

function signIn() {


    var userName2 = document.getElementById("userName2").value;
    var password2 = document.getElementById("password2").value;

    console.log(userName2, password2);
    var users = JSON.parse(localStorage.getItem("users"));
    console.log("------", users)


    for (var i = 0; i < users.length; i++) {

        console.log("------>", users[i].userName, " == ", userName2)
        console.log("------>", users[i].password, " == ", password2)
        if (users[i].userName == userName2 && users[i].password == password2) {
            alert(`Bienvenido, ${userName2}`);
            location.href = "principal_page.html";


        } else {
            alert("debe registratse ");
            location.href = "index.html";
        }
    }
}