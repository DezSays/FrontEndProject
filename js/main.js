
// fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)

// let movietvTitleFetch = title => {
//     fetch(`https://imdb-api.com/en/API/SearchTitle/${key}/the patriot`)
//     .then(result => result.json())
//     .then(data => {
//         console.log(data.results);

//         let ul = document.querySelector("ul")

//         data.results.forEach(element => {
//             console.log(element.title, element.description, element.id);

//             `<li><a href=#>${element.title} ${element.description}</li></a>`

            

        
//     });

    
// })
// }
// movietvTitleFetch()

// fetch(`https://imdb-api.com/en/API/Title/${key}/tt1375666/`)


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


let titleFetch = ttCode => {
    fetch(`https://imdb-api.com/en/API/Title/${key}/${ttCode}/`)
    .then(result => result.json())
    .then(data => {
        console.log(data);

})
}




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



const searchMovieTitleTrial = async () => {

    let movieArr = [];
    let pageIndex = 1;
    
    let movieTitle = await fetch(`https://imdb-api.com/en/API/SearchTitle/${key}/the patriot`)

    let resultsArr = await movieTitle.json();
    console.log(resultsArr);
}
searchMovieTitleTrial()

