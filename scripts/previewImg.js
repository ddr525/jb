document.querySelector('input[name="img"]').onchange = evt => {
    const [file] = evt.target.files
    
    if(!document.querySelector('#preview')){
        const img = document.createElement('img')
        img.width = "300"
        img.height = "300"
        img.id = "preview"
        console.log(evt.target)
        document.querySelector('.form-img').style.border = "none"
        document.querySelector('.form-img').appendChild(img)
    }
    if (file) {
        document.querySelector('#preview').src = URL.createObjectURL(file)
    }
}