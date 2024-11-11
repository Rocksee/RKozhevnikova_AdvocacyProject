let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    //body dark mode
    document.body.classList.toggle("dark-mode");

    //navbar dark mode
    const navbar = document.querySelector(".navbar"); // Using the class "navbar" instead of the <navbar> tag
    if (navbar) {
        navbar.classList.toggle("dark-mode");
    }

    //header dark mode
    const headerSections = document.getElementsByClassName("headerSection");
    for (let i = 0; i < headerSections.length; i++) {
        headerSections[i].classList.toggle("dark-mode");
    }
    //footer dark mode
    const footer = document.querySelector(".footer");
    if (footer) {
        footer.classList.toggle("dark-mode");
    }
};

themeButton.addEventListener("click", toggleDarkMode);

let signNowButton = document.getElementById("sign-now-button");
let count = 3;
const addSignature = () => {
    const nameInput = document.getElementById("name").value;
    const hometownInput = document.getElementById("hometown").value;
    const newSignature = document.createElement("p");
    newSignature.innerText = `💌 ${nameInput} from ${hometownInput} supports this.`;

    const signaturesSection = document.querySelector(".signatures");
    if (signaturesSection) {
        signaturesSection.appendChild(newSignature);
    }
};

const validateForm = () => {
    let containsErrors = false;
    const petitionInputs = document.getElementById("sign-petition").elements;

    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!email.value.includes('.com')) {
        containsErrors = true;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (!containsErrors) {
        addSignature();

        for (let i = 0; i < petitionInputs.length; i++) {
            petitionInputs[i].value = '';
        }
    }
};

signNowButton.addEventListener("click", validateForm);
