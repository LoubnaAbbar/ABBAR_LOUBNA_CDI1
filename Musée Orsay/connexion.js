document.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll("#menu .tab");
        const contents = document.querySelectorAll("#content .content");
    
        // Gestion des onglets
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                if (tab.classList.contains("active")) {
                    tab.classList.remove("active");
                    contents.forEach((content) => content.classList.remove("visible"));
                } else {
                    tabs.forEach((t) => t.classList.remove("active"));
                    tab.classList.add("active");
    
                    const targetClass = tab.classList[1];
                    contents.forEach((content) => {
                        content.classList.remove("visible");
                        if (content.classList.contains(targetClass)) {
                            content.classList.add("visible");
                        }
                    });
                }
            });
        });
    
    const form = document.getElementById("myForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Empêche l'envoi du formulaire

        const errorList = document.getElementById("errorList");
        errorList.innerHTML = ""; // Réinitialise les erreurs

        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const flowerOptions = document.querySelectorAll("input[name='flower']");

        let hasError = false;

     

        // Vérification de l'email
        if (email.value.trim() === "") {
            showError(email, "L'email est requis.");
            hasError = true;
        } else {
            showSuccess(email);
        }

        // Vérification du mot de passe
        if (password.value.trim().length < 8) {
            showError(password, "Le mot de passe doit comporter au moins 8 caractères.");
            hasError = true;
        } else {
            showSuccess(password);
        }

        // Vérification de la confirmation du mot de passe
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Les mots de passe ne correspondent pas.");
            hasError = true;
        } else {
            showSuccess(confirmPassword);
        }

        // Vérification du QCM
        let isFlowerSelected = false;
        flowerOptions.forEach((option) => {
            if (option.checked) {
                isFlowerSelected = true;
            }
        });

        if (!isFlowerSelected) {
            const errorItem = document.createElement("li");
            errorItem.innerText = "Vous devez sélectionner une option pour la question QCM.";
            errorList.appendChild(errorItem);
            hasError = true;
        }

        // Si pas d'erreur, afficher un message de succès
        if (!hasError) {
            alert("Formulaire soumis avec succès !");
        }
    });

    // Fonction pour afficher une erreur
    function showError(field, message) {
        const errorItem = document.createElement("li");
        errorItem.innerText = message;
        document.getElementById("errorList").appendChild(errorItem);
        field.classList.add("error"); // Ajoute la classe d'erreur
        field.classList.remove("success"); // Retire la classe de succès
    }

    // Fonction pour afficher un succès
    function showSuccess(field) {
        field.classList.add("success"); // Ajoute la classe de succès
        field.classList.remove("error"); // Retire la classe d'erreur
    }

    // Sélectionnez le bouton et le corps du document
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Vérifiez si le mode sombre est déjà activé dans localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
}

// Ajoutez un événement au bouton pour activer/désactiver le mode sombre
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Fonction pour activer le mode sombre
function enableDarkMode() {
    body.classList.add('dark-mode');
    // Appliquez également la classe dark-mode aux éléments du formulaire
    document.querySelectorAll('header, main, form').forEach(element => {
        element.classList.add('dark-mode');
    });
    // Enregistrez le choix de l'utilisateur dans localStorage
    localStorage.setItem('dark-mode', 'enabled');
    toggleButton.textContent = "Mode Clair"; // Changez le texte du bouton
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    body.classList.remove('dark-mode');
    // Retirez également la classe dark-mode des éléments du formulaire
    document.querySelectorAll('header, main, form').forEach(element => {
        element.classList.remove('dark-mode');
    });
    // Enregistrez le choix de l'utilisateur dans localStorage
    localStorage.setItem('dark-mode', null);
    toggleButton.textContent = "Mode Sombre"; // Changez le texte du bouton
}

});
