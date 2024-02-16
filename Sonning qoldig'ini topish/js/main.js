function inputNumber(){
    var input = document.getElementById("kiritiladiganSon").value;
    var number =  3;
    var answer = input % number;
    document.getElementById("answer").innerText = answer;
}