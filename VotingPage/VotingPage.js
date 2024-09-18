src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.js"
src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"

// Encryption key (must be shared with the C# program)
const encryptionKey = 'Pizzeriagurka'; // Use a secure key in production

function generateQRCode() {
    // Get user input
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (!name || !password) {
        alert('Please enter both name and password.');
        return;
    }

    // Combine name and password
    const combinedData = name + ':' + password;

    // Encrypt the combined data using AES encryption
    const encryptedData = CryptoJS.AES.encrypt(combinedData, encryptionKey).toString();

    // Clear any previous QR code
    document.getElementById('qrcode').innerHTML = '';

    // Generate QR code from the encrypted data
    new QRCode(document.getElementById("qrcode"), encryptedData);
}