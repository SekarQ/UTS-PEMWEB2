function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Terima kasih, ${name}. Pesan Anda telah dikirim.\nEmail: ${email}\nPesan: ${message}`);

    document.getElementById('submitForm').reset();
}
``