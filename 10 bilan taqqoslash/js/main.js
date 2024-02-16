function InputNumber() {
    var Input = document.getElementById("kiritiladiganSon").value;
    var number = 10;
    if (Input > number) {
        document.getElementById("answer").innerHTML = parseInt(Input) + 3;
    }else if (Input == 0 && Input < number) {
        document.getElementById("answer").innerHTML = parseInt(Input) * 2;
    }else if (Input == number) {
        document.getElementById("answer").innerHTML = "22";
    }else{
        document.getElementById("answer").innerHTML = "Bu son manfiy sonku butun son kirit";
    }
}
