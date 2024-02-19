function evenAndOdd(){
    var inputNumber = document.getElementById("sonKiritish").value;
    if(inputNumber % 2 == 0){
        document.getElementById("answer").innerHTML = inputNumber + " " + "bu juft son";
    }else if(inputNumber % 2 == 1) {
        document.getElementById("answer").innerHTML = inputNumber + " " + "bu toq son";
    }
}