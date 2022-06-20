let fibArray = [];
let fibNumber = 10;
function getFib(number) {
    fibArray[0] = 0;
    fibArray[1] = 1;
    for (let i = 2; i < number+1; i++) {
        fibArray[i] = fibArray[i-2] + fibArray[i -1];
            
        }
    return fibArray[number]; 
        
    }
    let result = getFib(fibNumber);
    document.getElementById('fibonacciNumber').innerHTML = 'The Fibonacci of ' + fibNumber+ ' is ' +result+'.';