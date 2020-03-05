/* Para mostrar el nombre del usuario en el navbar*/
var users = JSON.parse(localStorage.getItem("users"));
document.getElementById("userNameItem").innerHTML = users[0].name + " " + users[0].lastName

/* Función Cerrar sesión*/
function cerrarSesion() {
    alert("Te esperamos pronto!!");
}




function mostrarDatosPerfil() {
    var users = JSON.parse(localStorage.getItem("users"));


    document.getElementById("inputName").value = users[0].name
    document.getElementById("inputLastName").value = users[0].lastName
    document.getElementById("inputEmail").value = users[0].email
    document.getElementById("inputUserName").value = users[0].userName
    document.getElementById("inputPassword").value = users[0].password


}

function edit() {
    var name = document.getElementById("inputName").value
    var lastName = document.getElementById("inputLastName").value
    var email = document.getElementById("inputEmail").value
    email = email.toLowerCase();
    var nameUser = document.getElementById("inputUserName").value
    var password = document.getElementById("inputPassword").value
        //console.log(name + " " + lastName + " " + email + " " + nameUser + " " + password);

    var user = {
        "name": name,
        "lastName": lastName,
        "email": email,
        "userName": nameUser,
        "password": password
    }
    if (name && lastName && email && nameUser && password) {
        alert("Registro actualizado exitosamente")
        console.log(user);
        //Push añade o empuja al array, los nuevos users que vamos creando
        localStorage.setItem("users", JSON.stringify(users[0].name = name));
        localStorage.setItem("users", JSON.stringify(users[0].lastName = lastName));
        localStorage.setItem("users", JSON.stringify(users[0].email = email));
        localStorage.setItem("users", JSON.stringify(users[0].userName = nameUser));
        localStorage.setItem("users", JSON.stringify(users[0].password = password));
        console.log("Usuario", user)

        for (var i = 0; i < users.length; i++) {
            console.log("------>", users[i])
        }


        //Guardar obejto como String
        localStorage.setItem("users", JSON.stringify(users));



    }



}