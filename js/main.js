
// fetch(`https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction`)



let movietvTitleFetch = title => {
    fetch(`https://imdb-api.com/en/API/SearchTitle/${key}/${title}`)
    .then(result => result.json())
    .then(data => {
        // console.log(data.results);

        let col5 = document.querySelector('.col-5')
        let ulTag = document.createElement('ul')
        ulTag.innerHTML = "";
        col5.appendChild(ulTag)
        let htmlFragment = "";

        let htmlFragment = ""
        data.results.forEach(element => {
            // console.log(element.title, element.description, element.id);
            // let liTag = document.createElement('li');
            // liTag.className = "liClass"
            // let aTag = document.createElement('a')
            // aTag.className = "aClass";
            // aTag.innerText = element.title + element.description
            // liTag.appendChild(aTag)

            // let aTag = document.createElement('a');
            // aTag.setAttribute('href', "#")
            // aTag.innerText = element.title + " " + element.description
            // col5.appendChild(aTag);

            // htmlFragment += `<li><a href="${titleFetch(element.id)}">${element.title} ${element.description}</a></li>`
            htmlFragment += `<li><a href="#">${element.title} ${element.description}</a></li>`
            // htmlFragment += liTag;
        
        });

        ulTag.innerHTML = htmlFragment

        // click event


})
}


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


let titleFetch = ttCode => {
    fetch(`https://imdb-api.com/en/API/Title/${keys}/${ttCode}/`)
    .then(result => result.json())
    .then(data => {
        console.log(data);

        // clear col-5 div (blank the innerHTML)
        //poster
        //title
        //year
        //rating

})
}

// let input = document.querySelector('input')
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         console.log('enter');
//         movietvTitleFetch(input.value)
//         console.log(input);
//     }
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

