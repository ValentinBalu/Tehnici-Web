function afisare(){
    let mesaj=document.getElementById("scris");
    let msj="Nu iti gasesti cuvintele? Nu este nicio problema, nu te grabeste nimeni. Suntem aici pentru tine!";
    mesaj.innerHTML=msj;
}
setTimeout(afisare,4000);  
//4
document.addEventListener('DOMContentLoaded', function(){ time();},false);
function time(){
    let btn=document.getElementById("sub");
    let startDate=new Date();
    if(btn){
        btn.addEventListener('click',function(){
            let miliSec=new Date()-startDate;
            alert("Au trecut "+miliSec/1000+" secunde de la intrarea in pagina si pana la apasarea butonului de submit.");
        });
    }
}
//2
let index=0;
let mesajul=document.getElementById("mesajul");
aparitie();
function aparitie(){
    let mesaj=['Va ','multumim ','ca ','v-ati ','facut ','timp ','sa ','ne ','completati ','formularul ','de ','feedback!',' Parerea ','dumneavoastra ','conteaza ','pentru ','noi!']
    if(index<mesaj.length)
    {
        mesajul.innerHTML+=mesaj[index];
        index++;
    }
    let t=setTimeout(aparitie,333);
}