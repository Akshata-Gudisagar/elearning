function Login() {

    //getting the input value from the input field
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const tag = document.getElementById("email")
    const aaa = document.getElementById("password")

    //error element 

    const emailError = document.getElementById("email-error")
    const passError = document.getElementById("pass-error")


    const email_regex = /[a-z0-9-.]+@(?=.*abginc)([a-z])+\.[a-z]{2,3}$/;
    const pass_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/



    if (email == "") {
        emailError.innerHTML = ("*Please enter your email address");
        tag.style.border = "1px solid red"
        console.log(tag)
    } else {
        if (email_regex.test(email) === false) {
            emailError.innerHTML = ("*Please enter a valid email address");
        } else {
            emailError.innerHTML = ("");
        }
    }
    if (password == "") {
        passError.innerHTML = ("*password required")
        aaa.style.border = "1px solid red"
        console.log(aaa)
    }
    else if (pass_regex.test(password) === false) {
        passError.innerHTML = ("*Please Enter Strong Password")
      
    }

    else if (!password.length >= 11) {
        passError.innerHTML = ("Please enter the password 10 charecter ")
    }
    else {
        if (email !== "") {
            if (email.match(email_regex)) {
                aaa.style.border = "1px solid green"
                var getName = email.split("@")
                console.log(getName[0].toLocaleUpperCase())

               localStorage.setItem("email",email ) 
               localStorage.setItem("password",password)
               location.href = './Admin.html'
            }

        }

    }

}