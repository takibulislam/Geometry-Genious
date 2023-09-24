function calculate (inputFirst,inputSecond){
    const inputOne = parseFloat(document.getElementById(inputFirst).value);
    const inputTwo = parseFloat(document.getElementById(inputSecond).value);

    const inputElement1 = document.getElementById(inputFirst);
    const inputElement2 = document.getElementById(inputSecond);

    if(isNaN(inputOne) || isNaN(inputTwo)){
        if(isNaN(inputOne)){
            inputElement1.style.border = "2px solid";
            inputElement1.style.borderColor = "red";
        }else{
            inputElement1.style.borderColor = "";
        }
        if(isNaN(inputTwo)){
            inputElement2.style.border = "2px solid";
            inputElement2.style.borderColor = "red";
        }else{
            inputElement2.style.borderColor = "";
        }
        alert("please add valid numberic charcter")
    }
    else{
        inputElement2.style.borderColor = "";
        inputElement1.style.borderColor = "";
        const multiply = inputOne * inputTwo;
        return multiply;
    }
}
document.getElementById("triangle").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-triangle", "input-b-triangle")
    const additionalValue = 0.5;
    const finalResult = multiplicationResult * additionalValue;

    // set Area Calculation 
    const calculateResult = document.getElementById("triangle-result");
    calculateResult.innerText = finalResult;
})
document.getElementById("rectangle").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-rectangle", "input-b-rectangle");

    // set Area Calculation 
    const calculateResult = document.getElementById("rectangle-result");
    calculateResult.innerText = multiplicationResult;
})
document.getElementById("parallelogram").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-parallelogram", "input-b-parallelogram");

    // set Area Calculation 
    const calculateResult = document.getElementById("parallelogram-result");
    calculateResult.innerText = multiplicationResult;
})
document.getElementById("rhombus").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-rhombus", "input-b-rhombus")
    const additionalValue = 0.5;
    const finalResult = multiplicationResult * additionalValue;

    // set Area Calculation 
    const calculateResult = document.getElementById("rhombus-result");
    calculateResult.innerText = finalResult;
})
document.getElementById("pentagon").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-pentagon", "input-b-pentagon")
    const additionalValue = 0.5;
    const finalResult = multiplicationResult * additionalValue;

    // set Area Calculation 
    const calculateResult = document.getElementById("pentagon-result");
    calculateResult.innerText = finalResult;
})
document.getElementById("ellipse").addEventListener("click", function(){
    const multiplicationResult = calculate("input-a-ellipse", "input-b-ellipse")
    const additionalValue = 3.14;
    const finalResult = multiplicationResult * additionalValue;

    // set Area Calculation 
    const calculateResult = document.getElementById("ellipse-result");
    calculateResult.innerText = finalResult;
})
