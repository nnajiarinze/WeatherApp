console.log('Client side javascript file is loaded!');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});


// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// }).catch((error) => {
//     console.log(error)
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading';

    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if(data.error){
                messageOne.textContent = `Error : ${data.error}`;
            }else{
                messageOne.textContent = `Location: ${data.location}`;
                messageTwo.textContent = `Forecast : ${data.forecast}`;
            }
          
        });
    });

});