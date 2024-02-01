const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {
        const nameError =document.getElementById('name-error');
        nameError.classList.add('error-massage');

        nameError.innerText = "nama harus diisi!"
    }

    if (!email) {
        const nameError =document.getElementById('email-error');
        nameError.classList.add('error-massage');

        nameError.innerText = "email harus diisi!";
    }

    });
    let currentIndex = 0;

    const totalSlides = document.querySelectorAll(',slide').length;

    function nextSlides() {
        currentIndex = (currentIndex + 1) % totalSlides;
    }