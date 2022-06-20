
let fibArray = [];
function getFib() {
    
    let fibNumber = document.getElementById("number").value;
    fibArray[0] = 0;
    fibArray[1] = 1;
    
    for (let i = 2; i < fibNumber+1; i++) {
        fibArray[i] = fibArray[i-2] + fibArray[i -1];
            
        }
        
        document.getElementById('fibonacciNumber').innerHTML = fibArray[fibNumber];
    }

document.getElementById('button').addEventListener("click", getFib);