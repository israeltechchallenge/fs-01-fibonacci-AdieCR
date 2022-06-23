const num = document.getElementById('number');
const btn = document.getElementById('button');
const spinner = document.getElementById('spinner');
const alert = document.getElementById('alert');
const fibRes = document.getElementById('fibonacciNumber');
const url = 'http://localhost:5050/fibonacci/';


num.addEventListener("click", removeAlert)
function removeAlert(){
    alert.classList.add('d-none');
    number.style.borderColor='#CCCCCC';
    number.style.color='#373A3C';
    fibRes.classList.add('d-none');

}
function getFib(n){
    if (num.value>50){
        number.style.borderColor='#D9534F';
        number.style.color='#D9534F';
        alert.classList.remove('d-none');
        alert.style.borderColor = '#EBCCCC';
        alert.style.background = '#F2DEDE';
        alert.style.color ='#A94442';

    }else{
        spinner.classList.remove('d-none');
        fetch(n)
        .then((response) => {
            if (!response.ok){
                spinner.classList.add('d-none');
                response.text().then((errorText)=>{
                fibRes.innerText = "Server Error: " +errorText;
                fibRes.style.color ='#A94442';
                fibRes.classList.remove ('fs-4');
                fibRes.style.textDecoration = 'none';
                
                
                });
            }else{
                
                return response.json();
            }
        })
        .then((data) =>{
        
        spinner.classList.add('d-none');
        fibRes.classList.remove('d-none');
        fibRes.innerText = data.result;
        fibRes.classList.add ('fs-4');
        fibRes.style.color = '#373A3C';
        fibRes.style.textDecoration = "underline";
        });
}}

btn.addEventListener('click', function() {
    let fullUrl = url + parseInt(num.value);
    getFib(fullUrl);
});