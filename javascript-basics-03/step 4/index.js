let pass = document.getElementById('password');
let conf = document.getElementById('confirmation')
function checkPass () {

    if(pass.value !== conf.value) {
        pass.style.borderColor = "red",
        conf.style.borderColor = "red"
    }
}