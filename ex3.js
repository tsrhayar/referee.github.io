function validation(){
    var distance = document.getElementById('distance').value;
    var frais = Number(document.getElementById('frais').value);
    var fraisTotal;
    
    if (distance==''){
        alert("veuillez entrer la distance");
        distance=0;
    }else if(frais==0){
        alert("veuillez choisir la division")
    }else if(frais>=2000 && distance<300){
        fraisTotal=distance*2+frais;
    }else if(frais>=2000 && distance>=300){
        fraisTotal=distance*2+1250+frais;
    }else if(frais<2000 && distance<300){
        fraisTotal=distance*2+frais;
    }else if(frais<2000 && distance>=300){
        fraisTotal=distance*2+500+frais;
    }
    alert(fraisTotal + " DH");
}
