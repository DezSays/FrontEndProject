let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>Welcome!</h2>';
msg += 'At the top left corner of this page is a search bar. <br>';
msg += 'Enter a movie or television title and hit the ENTER button to search. <br>';
msg += 'A list of results will populate under the search bar. <br>';
msg += 'Select the title of your choosing. <br>';
msg += 'You will receive your selection\'s information on the left side of the screen and recommendations on the right side. <br>';
msg += 'Click on each recommendation to read the description along with its Wikipedia page at the bottom. <br>';
msg += 'Enjoy! <br>';
msg += "<img src='images/example.png' class=''></div>"


let divTag = document.createElement('div');  //<div></div>
divTag.innerHTML = msg;
divTag.setAttribute('id', 'note') //styling 

//bring in body
// let bod = document.getElementById('bod')

document.body.appendChild(divTag)

let close = document.getElementById('close')

close.addEventListener('click', e=>{

    document.body.removeChild(divTag)

})