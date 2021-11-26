let name = document.getElementById('name');
let surname = document.getElementById('surname');
let city = document.getElementById('city');
document.querySelector('#reset').addEventListener('click',function reset() {
    
    let okbtn = confirm('do you want to continue?')
    if (okbtn == true){
        name.value = null;
        surname.value = null;
        city.value = null;
        return true
    }
})
