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
let htmlFragment = ""
let cards = document.querySelector('#cards')

let mockData = [
    {Title: "Media Title 1"},
    {Title: "Media Title 2"},
    {Title: "Media Title 3"},
    {Title: "Media Title 4"},
    {Title: "Media Title 4"},
    {Title: "Media Title 4"},
]

mockData.forEach((obj, i) =>{
    htmlFragment += `
    <div id="card${i}" class="card">
    <div class="card__inner">
    <!-- front of movie suggestion card -->
    <div class="card__face card__face--front">
        <h2>${obj.Title}</h2>
    </div>
    <!-- back of movie suggestions -->
    <div class="card__face card__face--back">
    <div class="card__content">
    <div class="card__header"><p>Header Text</p></div>
    <div class="card__body"><p>Body Text</p></div>
    </div>
    </div>
    </div>
    </div>
    `
})

cards.innerHTML = htmlFragment

cards.addEventListener('click', event => {
    console.log(event.target.parentNode);
    console.log(event.target);
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
