
var inputBox = document.querySelector("input");
var result;

for(var i = 0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(event){
        var number = event.target.textContent;
        if(number != "=" && number != "AC"){
            if(number != "clear"){
                if(number != "X"){
                    result = inputBox.value += number;
                }
                
            }
            
        }
    })
}


function calculate(){
    var calculation = document.getElementById("equal");
    inputBox.value = "";
    var finalAnswer = eval(result);
    inputBox.value = finalAnswer;
    
    
}

function clearInputBox(){
    document.querySelector("input").value = " ";
}

function singleDeleted(){
    var num = document.querySelector("input").value;
    console.log(num);
    num = num.slice(0, -1);
    console.log(num);
    document.querySelector("input").value = num;

   
    
}


