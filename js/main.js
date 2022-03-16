
let body = document.querySelector('body')
let container = document.querySelector('div')

body.appendChild(container)

let tasteDiveFetch = () => {
    fetch("https://tastedive.com/api/similar?q=the+patriot%2C+the+patriot+act") //https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction
    .then(result=>result.json())
    .then(data=> {
        console.log(data);
})
}

// fetch(`https://imdb-api.com/en/API/SearchMovie/${imdbKey}/the patriot`)
// .then(result => result.json())
// .then(data => {
//     console.log(data);

// })



const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
});

