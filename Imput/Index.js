function onClickSubmitButton(){

    let imputValue = document.getElementsById("imputText").value;
     if (imputValue > 0){
    alert ("Hey el numero es mayor que cero ");
    }

    if (imputValue < 0){
        alert ("Hey el numero es menor que cero ");
    }
    
    if (imputValue == 0){
    alert ("Intente otra vez");
    }

}

