const  name = document.getElementById('name');
const  email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

// Mencegah untuk submit
form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Mohon masukkan nama Anda')
    }

    e.preventDefault()
})