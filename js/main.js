let body = document.querySelector('body')
let container = document.querySelector('div')
let recTitle = document.querySelector('div')
let htmlFragment = ""
let cards = document.querySelector('#cards')
let movies = document.querySelector('#movies')
let shows = document.querySelector('#shows')
body.appendChild(container)
let col4 = document.getElementById('search-selection')
let ulTag = document.createElement('ul')
col4.innerHTML = ""
col4.appendChild(ulTag)
// fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)

let movieTvTitleFetch = title => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/${imdbKey}/${title}`)
    .then(result => result.json())
    .then(data => {
        // console.log(data.results);
        
        let htmlFragment = "";

        data.results.forEach(element => {
            // console.log(element.title, element.description, element.id);

            htmlFragment += `<li><a href="#" onclick="titleFetch('${element.id}'); return false;">${element.title} ${element.description}</a></li>`
            // htmlFragment += `<li><a href="#">${element.title} ${element.description}</a></li>`
        });

        ulTag.innerHTML = htmlFragment

        


})
}


// fetch(`https://imdb-api.com/en/API/Title/${key}/tt1375666/`)

let imdbInfo = "the office"

let tasteDiveMovieFetch = () => {
    fetch(`https://tastedive.com/api/similar?info=1&limit=50&q=${imdbInfo}&type=movies&k=${tasteDiveKey}`) //https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction
    .then(result=>result.json())
    .then(data=> {
        console.log(data);
        console.log(data.Similar.Results);
        makeCards(data, 'movie');
        htmlFragment = ""
    })
}

let tasteDiveShowFetch = () => {
    fetch(`https://tastedive.com/api/similar?info=1&limit=50&q=${imdbInfo}&type=shows&k=${tasteDiveKey}`) //https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction
    .then(result=>result.json())
    .then(data=> {
        console.log(data);
        console.log(data.Similar.Results);
        makeCards(data, 'show');
        htmlFragment = ""
    })
}

//! function call
tasteDiveShowFetch();
tasteDiveMovieFetch();

function makeCards(data, type) {

    data.Similar.Results.forEach((mediaObj, i) => {
        if (i < 3) {
            htmlFragment += `
            <div id="card${i}" class="card">
            <div class="card__inner">
            <!-- front of movie suggestion card -->
            <div class="card__face card__face--front">
                <h2>${mediaObj.Name}</h2>
            </div>
            <!-- back of movie suggestions -->
            <div class="card__face card__face--back">
            <div class="card__content">
            <div class="card__body">
            <p>
                ${mediaObj.wTeaser}
            </p>
                <p><a id="wiki" href="${mediaObj.wUrl}" target="_blank">${mediaObj.Name} Wikipedia Page</a></p>
            </div>
            </div>
            </div>
            </div>
            </div>
            `
            console.log(mediaObj.Name);
        }
    if (type == 'show') {
        shows.innerHTML = htmlFragment
    }
    else if (type == 'movie') {
        movies.innerHTML = htmlFragment
    }
    })
}


let titleFetch = ttCode => {
    fetch(`https://imdb-api.com/en/API/Title/${imdbKey}/${ttCode}/`)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        console.log('ehllo');

        ulTag.innerHTML = ""

        ulTag.innerHTML = ""
        //poster.setAttribute('src', data.image)
        poster.src=data.image
        // clear col-5 div (blank the innerHTML)
        //image
        //fullTitle
        //imDbRating
        //genres 
        //runtimeStr 
        //contentRating

})
}

let poster = document.createElement('img')
col4.appendChild(poster)


// let input = document.querySelector('input')
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         console.log('enter');
//         movieTvTitleFetch(input.value)
//         console.log(input);
//     }
// })

const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);
// end of search clear code

//card flip event listener
cards.addEventListener('click', event => {
    // console.log(event.target.parentNode);
    // console.log(event.target);
    if(event.target.parentNode.classList.contains('card__inner')) {
        event.target.parentNode.classList.toggle('is-flipped')
    }
    else if (event.target.classList.contains('card__content') ||
            event.target.parentNode.classList.contains('card__face')) {
        event.target.parentNode.parentNode.classList.toggle('is-flipped')
    }
    else if (event.target.classList.contains('card__header') || 
            event.target.classList.contains('card__body')) {
        event.target.parentNode.parentNode.parentNode.classList.toggle('is-flipped')
    }
    else if (event.target.parentNode.classList.contains('card__header') ||
            event.target.parentNode.classList.contains('card__body'))
    event.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('is-flipped')
})

