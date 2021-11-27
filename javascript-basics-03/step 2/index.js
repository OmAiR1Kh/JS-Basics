document.onclick = (e) => {
    const id = e.target.id
        switch (id) {
            case "show":
                document.getElementById('texte').style.display = 'grid'
                break;
            case "hide":
                document.getElementById('texte').style.display = 'none'
            default:
                break;
        }
}