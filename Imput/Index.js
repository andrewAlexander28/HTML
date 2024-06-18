function onClickSubmitButton(){

    let inputValue = document.getElementById("imputText").value;
     if (inputValue > 0){
        alert ("Hey el numero es mayor que cero ");
    }

    if (inputValue < 0){
        alert ("Hey el numero es menor que cero ");
    }
    
    if (inputValue == 0){
        alert ("Intente otra vez");
    }
}

