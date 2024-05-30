const inscription_form = document.getElementById('inscription_form');
const code = document.getElementById('code');
const password = document.getElementById('password');


inscription_form.addEventListener('submit', (event) => {
    event.preventDefault();
    const codeValue = code.value;
    const passwordValue = password.value;

    if (codeValue === "" || passwordValue === "") {
        alert("Veuillez entrer votre code et votre mot de passe pour commencer l'évaluation.");
        return;
    }

    // Check if the code is valid using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/codes/" + codeValue);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            if (data.isValid) {
                // The code is valid, proceed with the login
                window.location.href = "evaluation.html";
            } else {
                alert("Le code que vous avez entré est invalide. Veuillez vérifier votre code et réessayer.");
            }
        }
    };
    xhr.send();
});
