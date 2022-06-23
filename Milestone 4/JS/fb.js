let num = document.getElementById('number');
let btn = document.getElementById('button');

let url = 'http://localhost:5050/fibonacci/';



function getFib(n){
    fetch(n)
    .then(response =>response.json())
    .then(data =>{
    document.getElementById('fibonacciNumber').innerText = data.result;
    console.log(data.result);
    console.log(data);

    })
    .catch((err) => console.log(err))
}

btn.addEventListener('click', function() {

    let fullUrl = url + parseInt(num.value);
    getFib(fullUrl);
});


