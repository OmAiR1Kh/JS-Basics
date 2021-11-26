const form = document.getElementById("form");
form.addEventListener('submit', showValue)

function showValue(e){
    let name = document.getElementById('name').value;
    document.getElementById('container').innerHTML = name;
    e.preventDefault();
}

// return showValue();