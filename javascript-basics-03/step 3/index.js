function change (e) {
    var classes = e.getAttribute('class')
    classes = classes.slice(6)

    document.getElementById('text').style.color = classes
}