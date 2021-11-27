document.onmouseover = (e) => {
    const id = e.target.id
        if (id === "image1") {
            document.getElementById(id).style.border = '3px solid red';
        }
}