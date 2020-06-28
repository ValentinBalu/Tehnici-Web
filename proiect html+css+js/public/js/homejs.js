
let registru=document.querySelector("#register");
registru.addEventListener("click", function(event){
    let registru_box=document.querySelector(".login_form");
    if(registru_box.style.display=="none")
    {
        registru_box.style.display="block";
    }
    else
    {
        registru_box.style.display="none";
    }
});
let registru_cont=document.querySelector("#register_cont");
registru_cont.addEventListener("click",function(event){
    let registru_box=document.querySelector(".login_form");
    registru_box.style.display="none";
    let registru_box1=document.querySelector(".register_form");
    if(registru_box1.style.display=="none")
    {
        registru_box1.style.display="block";
    }
    else
    {
        registru_box1.style.display="none";
    }
 });

let slide=document.getElementById("nr");
let output=document.getElementById("varsta");
output.innerHTML=slide.value;
slide.oninput=function(){
    output.innerHTML=this.value;
}
 let users=[];

const addUser=(event)=>{
    event.preventDefault();

    let regparola=new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*#)[a-zA-Z0-9#]{8}");
    let parolatest=document.getElementById("parola1").value;
    if(regparola.test(parolatest)==false)
    {
        console.log(parolatest);
        alert("Parola nu respecta cerintele.")
        return;
    }

    let regemail=new RegExp("^[a-zA-Z0-9!#$&~_*<>-]+(\.[a-zA-Z0-9!#$&~_*<>-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$");
    let emailtest=document.getElementById("adresa").value;
    if(regemail.test(emailtest)==false)
    {
        alert("Email-ul nu este valid!");
        return;
    }
    let user={
        nume:document.getElementById("client1").value,
        parola:document.getElementById("parola1").value
    }

    users.push(user);
    console.log({users});
    let nume=document.getElementById("client1").value;
    let parola=document.getElementById("parola1").value;
    let emaill=document.getElementById("adresa").value;
    let angajare=document.getElementById("optional").value;
    let nr=document.getElementById("nr").value;
    alert("A fost inregistrat un nou client. Numele sau este "+nume+". Email-ul sau este "+emaill+". Are varsta de "+nr+" ani. Si este "+angajare+'.');
    document.forms[1].reset();
    localStorage.setItem("MyUserList",JSON.stringify(users));
    alert("Uitizatorul "+nume+" este logat!");
    document.getElementById("register").style.display="none";
    document.getElementById("nu_inreg").style.display="none";
    document.getElementById("register_cont").style.display="none";
    let registru_box=document.querySelector(".login_form");
    registru_box.style.display="none";
    let registru_box1=document.querySelector(".register_form");
    registru_box1.style.display="none";
    let logat="Bine ai venit, "+nume+"!";
    document.getElementById("bunvenit").innerHTML=logat;
}

document.getElementById("formbtn2").addEventListener("click",addUser);

const checkUser=(event)=>{
    event.preventDefault();
    let nume=document.getElementById("client").value;
    let parola=document.getElementById("parola").value;
    let lista_users=JSON.parse(localStorage.getItem("MyUserList"));
    for(i=0;i<lista_users.length;i++){
        if(nume==lista_users[i].nume && parola==lista_users[i].parola){
            alert("Uitizatorul "+nume+" este logat!");
            document.getElementById("register").style.display="none";
            document.getElementById("nu_inreg").style.display="none";
            document.getElementById("register_cont").style.display="none";
            let registru_box=document.querySelector(".login_form");
            registru_box.style.display="none";
            let registru_box1=document.querySelector(".register_form");
            registru_box1.style.display="none";
            let logat="Bine ai venit, "+nume+"!";
            document.getElementById("bunvenit").innerHTML=logat;
            return;
        }
    }
    alert("Nume sau parola incorecte!");
}

document.getElementById("formbtn1").addEventListener("click",checkUser);
document.getElementById("formbtn1").addEventListener("keyup",(e)=>{
    if(e.keyCode===13){
        checkUser();
    }
});

JSON.parse(localStorage.getItem("MyUserList"));
//12
let ore=[
    ['09:00:00','10:40:00'],
    ['12:00:00','13:30:00'],
    ['18:00:00','19:30:00'],
    ['00:00:00','03:12:00']
];

document.addEventListener('DOMContentLoaded', function(){ happyhour();},false);
function happyhour(){
    let today=new Date();
    let hours=today.getHours();
    let minutes=today.getMinutes();
    let val=hours*60+minutes;
    for(i=0;i<ore.length;i++){
        let nr1=0;
        let nr2=0;
        for(j=0;j<ore[i][0].length;j++){
            if(ore[i][0][j]!=':'){
                nr1=nr1*10+parseInt(ore[i][0][j]);
            }
            else{
                break;
                nr1=0;
            }
        }
        nr1=nr1*60;
        let nr3=0;
        nr3=parseInt(ore[i][0][3])*10+parseInt(ore[i][0][4]);
        nr1=nr1+nr3;
        for(j=0;j<ore[i][1].length;j++){
            if(ore[i][1][j]!=':'){
                nr2=nr2*10+parseInt(ore[i][1][j]);
            }
            else{
                break;
                nr2=0;
            }  
        }
        nr2=nr2*60;
        let nr4=0;
        nr4=parseInt(ore[i][1][3])*10+parseInt(ore[i][1][4]);
        nr2=nr2+nr4;
        if(val>=nr1 && val<=nr2){
            let happy=document.getElementById("happy");
            happy.style.display="block";
        }
    }
}
//1
let butonel=document.getElementById("varsta_btn");
butonel.addEventListener('click',function(event){
    event.preventDefault();
    let zi=document.getElementById("zi").value;
    let luna=document.getElementById("luna").value;
    let an=document.getElementById("an").value;
    let data_nastere=new Date(an,luna,zi)
    let data=new Date();
    let zi_c=data.getDate();
    let luna_c=data.getMonth();
    let an_c=data.getFullYear();
    let afisare=document.getElementById("varsta_afisata");
    let dif=data-data_nastere;
    let y=1000*60*60*24*30*12;
    let dif1=dif-parseInt(dif/y)*y-parseInt((dif-parseInt(dif/y)*y)/y*12)*y/12;
    afisare.innerHTML="Varsta utilizatorului este de "+(parseInt(dif/y))+" ani, "+(parseInt((dif-parseInt(dif/y)*y)/y*12))+" luni si "+(parseInt((dif1)/y*12*30))+" zile, ";
    timp();
    function timp(){
        let data=new Date();
        let ora=data.getHours();
        let minute=data.getMinutes();
        let secunde=data.getSeconds();
        let afisare1=document.getElementById("current");
        afisare1.innerHTML=ora+" ore, "+minute+" minute si "+secunde+" secunde.";
        let t=setTimeout(timp,1000);
    }
});