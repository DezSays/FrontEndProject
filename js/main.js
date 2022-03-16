let body = document.querySelector('body')
let container = document.querySelector('div')
let recTitle = document.querySelector('div')

body.appendChild(container)


// fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)

// let movietvTitleFetch = title => {
//     fetch(`https://imdb-api.com/en/API/SearchTitle/${imdbKey}/the patriot`)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data.results);

//         data.results.forEach(element => {
//             console.log(element.title, element.description, element.id);

        
//     });

// })
// }


// fetch(`https://imdb-api.com/en/API/Title/${key}/tt1375666/`)


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


let titleFetch = ttCode => {
    fetch(`https://imdb-api.com/en/API/Title/${key}/${ttCode}/`)
    .then(result => result.json())
    .then(data => {
        console.log(data);

})
}



// search bar function to clear entered text
const clearInput = () => {  
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);
// end of search clear code

// card flip code
const card1 = document.querySelector(".cardJs1");
const card2 = document.querySelector(".cardJs2");
const card3 = document.querySelector(".cardJs3");
const card4 = document.querySelector(".cardJs4");

card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped');
});
card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped');
});
card3.addEventListener("click", function (e) {
    card3.classList.toggle('is-flipped');
});
card4.addEventListener("click", function (e) {
    card4.classList.toggle('is-flipped');
});

// let card = document.getElementsByClassName('card')

// card.addEventListener('click', event => {
//     if(event.target.classList.contains('cardJs')) {
//         event.target.classList.toggle('is-flipped')
//     }
// })