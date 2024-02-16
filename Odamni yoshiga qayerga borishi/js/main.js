function age(){
    var inputAge = document.getElementById("ageWork").value;
    if( inputAge >= 1 && inputAge <= 7 ){
        document.getElementById("demo").innerHTML = inputAge + " " + "yosh." + "Bunday yoshdagilar uyda yoki bog'chaga borishadi";
    }else if(inputAge > 7 &&  inputAge <= 18){
        document.getElementById("demo").innerHTML = inputAge + " " + "yosh." + "Bunday yoshdagilar maktabga borishadi"
    }else if(inputAge > 18 && inputAge <= 21){
        document.getElementById("demo").innerHTML = inputAge + " " + "yosh." + "Bunday yoshdagilar universitetga  borishadi"
    }else if(inputAge > 21 && inputAge <= 40){
        document.getElementById("demo").innerHTML = inputAge + " " + "yosh." + "Bunday yoshdagilar ishga  borishadi"
    }else if(inputAge > 40 ){
        document.getElementById("demo").innerHTML = inputAge + " " + "yosh." + "Bunday yoshdagilar uyda nafaqasini olib o'tirishadi"
    }else{
        alert("Hatolik");
    }
}