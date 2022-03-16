// fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)

// let movietvTitleFetch = title => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/${key}/the patriot`)
    .then(result => result.json())
    .then(data => {
        console.log(data.results);

        data.results.forEach(element => {
            console.log(element.title, element.description, element.id);

        
    });

})
// }


// fetch(`https://imdb-api.com/en/API/Title/${key}/tt1375666/`)
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

