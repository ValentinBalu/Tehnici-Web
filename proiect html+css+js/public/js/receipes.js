let list=[]
let star1=document.getElementById("prima");
star1.addEventListener("click",function (){
    document.getElementById("prima").style.display="none";
    document.getElementById("primas").style.display="block";
    let ok=1;
    for(i=0;i<list.length;i++){
        if(list[i]=="Croissant cu unt"){
            ok=0;
        }
    }
    if(ok==1){
        list.push("Croissant cu unt");
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
let star1p=document.getElementById("primas");
star1p.addEventListener("click",function(){
    document.getElementById("primas").style.display="none";
    document.getElementById("prima").style.display="block";
    for (i=0;i<list.length;i++){
        if(list[i]=="Croissant cu unt"){
            for(j=i;j<list.length;j++){
                list[j]=list[j+1];
            }
            list.pop();
        }
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
})

let star2=document.getElementById("adoua");
star2.addEventListener("click",function (){
    document.getElementById("adoua").style.display="none";
    document.getElementById("adouas").style.display="block";
    let ok=1;
    for(i=0;i<list.length;i++){
        if(list[i]=="Strudel cu visine"){
            ok=0;
        }
    }
    if(ok==1){
        list.push("Strudel cu visine");
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
let star2p=document.getElementById("adouas");
star2p.addEventListener("click",function(){
    document.getElementById("adouas").style.display="none";
    document.getElementById("adoua").style.display="block";
    for (i=0;i<list.length;i++){
        if(list[i]=="Strudel cu visine"){
            for(j=i;j<list.length;j++){
                list[j]=list[j+1];
            }
            list.pop();
        }
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});

let star3=document.getElementById("atreia");
star3.addEventListener("click",function (){
    document.getElementById("atreia").style.display="none";
    document.getElementById("atreias").style.display="block";
    let ok=1;
    for(i=0;i<list.length;i++){
        if(list[i]=="Chec traditional"){
            ok=0;
        }
    }
    if(ok==1){
        list.push("Chec traditional");
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
let star3p=document.getElementById("atreias");
star3p.addEventListener("click",function(){
    document.getElementById("atreias").style.display="none";
    document.getElementById("atreia").style.display="block";
    for (i=0;i<list.length;i++){
        if(list[i]=="Chec traditional"){
            for(j=i;j<list.length;j++){
                list[j]=list[j+1];
            }
            list.pop();
        }
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});

let star4=document.getElementById("apatra");
star4.addEventListener("click",function (){
    document.getElementById("apatra").style.display="none";
    document.getElementById("apatras").style.display="block";
    let ok=1;
    for(i=0;i<list.length;i++){
        if(list[i]=="Melc cu nuca"){
            ok=0;
        }
    }
    if(ok==1){
        list.push("Melc cu nuca");
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
let star4p=document.getElementById("apatras");
star4p.addEventListener("click",function(){
    document.getElementById("apatras").style.display="none";
    document.getElementById("apatra").style.display="block";
    for (i=0;i<list.length;i++){
        if(list[i]=="Melc cu nuca"){
            for(j=i;j<list.length;j++){
                list[j]=list[j+1];
            }
            list.pop();
        }
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});

let star5=document.getElementById("acincea");
star5.addEventListener("click",function (){
    document.getElementById("acincea").style.display="none";
    document.getElementById("acinceas").style.display="block";
    let ok=1;
    for(i=0;i<list.length;i++){
        if(list[i]=="Placinta cu urda si stafide"){
            ok=0;
        }
    }
    if(ok==1){
        list.push("Placinta cu urda si stafide");
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
let star5p=document.getElementById("acinceas");
star5p.addEventListener("click",function(){
    document.getElementById("acinceas").style.display="none";
    document.getElementById("acincea").style.display="block";
    for (i=0;i<list.length;i++){
        if(list[i]=="Placinta cu urda si stafide"){
            for(j=i;j<list.length;j++){
                list[j]=list[j+1];
            }
            list.pop();
        }
    }
    console.log(list);
    localStorage.setItem("MyFavoritesList",JSON.stringify(list));
});
//10
let indice=document.getElementById("submi");
indice.addEventListener('click',function(event){
    event.preventDefault();
    let rd1=document.getElementById("ara");
    let rd2=document.getElementById("rom");
    let rd3=document.getElementById("rom1");
    if(rd1.checked==true){
        let arab=document.getElementById("arab");
        arab.style.display="block";
        let roman=document.getElementById("roman");
        roman.style.display="none";
        let roman1=document.getElementById("roman1");
        roman1.style.display="none";
    }
    else if(rd2.checked==true){
        let roman=document.getElementById("roman");
        roman.style.display="block";
        let arab=document.getElementById("arab");
        arab.style.display="none";
        let roman1=document.getElementById("roman1");
        roman1.style.display="none";
    }
    else if(rd3.checked==true){
        let roman1=document.getElementById("roman1");
        roman1.style.display="block";
        let roman=document.getElementById("roman");
        roman.style.display="none";
        let arab=document.getElementById("arab");
        arab.style.display="none";
         }
    else{
        alert('Introduceti o optiune valida!')
    }

});

//2
let index=0;
let mesajul=document.getElementById("mesajul");
aparitie();
function aparitie(){
    let mesaj=['Va ','multumim ','ca ','ati ','ales ','sa ','incercati ','retetele ','noastre.',' Va ','uram ','mult ',' succes ','si ','pofta ','buna!']
    if(index<mesaj.length)
    {
        mesajul.innerHTML+=mesaj[index];
        index++;
    }
    let t=setTimeout(aparitie,333);
}
//3
const text=document.querySelector(".titlul");
const text1=text.textContent;
const SplitText=text1.split("");
text.textContent="";
for(let i=0;i<SplitText.length;i++){
    text.innerHTML+="<span>"+SplitText[i]+"</span>";
}
let char=0;
let timer=setInterval(litera,100);

function litera(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add("tranzitie");
    const span1=text.querySelectorAll('span')[SplitText.length-char-1]
    span1.classList.add("tranzitie");
    char++;
    if(char===(SplitText.length/2)){
        complet();
        return;
    }
}

function complet(){
    clearInterval(timer);
    timer=null;
}