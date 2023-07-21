

const searchBar = document.querySelector("#searchbar");

searchBar.addEventListener("keyup", (e) => {

    const searchedLetters = e.target.value;
    const personnage = document.querySelectorAll(".personnage");

    filterElements(searchedLetters, personnage);

});


function filterElements (letters, elements) {

    if (letters.length > 0) {

        for (let i = 0; i < elements.length; i++) {

            if (elements[i].textContent.toLowerCase().includes(letters)) {

                elements[i].style.display = "block";

            } else {

                elements[i].style.display = "none";
            }
        } 
    } 

    if (letters.length == 0) {

        for (let i = 0; i < elements.length; i++) {

            elements[i].style.display = "block";
        }
    }
}

