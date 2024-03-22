const form = document.forms.namedItem('login')
let inp = document.querySelector('.inp')
let select = document.querySelector('select')

form.onsubmit = (event) => {
    event.preventDefault()
    let fm = new FormData(form)
    let error = false
    let option = false
    let user = {
        //name: fm.get('name'),
        //age: fm.get('age')
    }

    fm.forEach((val, key) => {
        user[key] = val

        if (val.length === 0) {
            error = true
        }

        if (select.value === "none") {
            option = true;
        }

    })


    if (error === true) {
        alert('Fill all files')
        return
    }

    if (option === true) {
        alert('choose the lesson')
        return
    }

    console.log(user);
alert('After 10 years you will be Senior')
    
    // form.submit();
}
