let postul=document.getElementById("post");
postul.addEventListener("click",function(event){
    let selectare=document.getElementById("post").value;
if(selectare=="Produse de post"){
    document.getElementById("numepost").style.display="block";
    document.getElementById("numenepost").style.display="none"; 
}
if(selectare=="Produse din ingrediente de provenienta animala"){
    document.getElementById("numenepost").style.display="block"; 
    document.getElementById("numepost").style.display="none";
}
})

const lista=document.querySelector("#lista-produse");
const adauga=document.querySelector("#adaugabtn");

function defineste(){
    const stergeArray=document.querySelectorAll(".sterge");
    stergeArray.forEach( sters=>{
        sters.addEventListener("click",async function(){
            let id=sters.parentElement.dataset.id;
            console.log("id-ul elementului de sters este ",sters.parentElement.dataset.id);
            let URL="http://localhost:3000/sterge-produs/"+id;
            console.log(URL);
            const nouaListaProduse=await deleteProdus(URL);
            afiseazaProduse(nouaListaProduse);
        })
    });
};
async function afiseazaProduse() {

    const response = await fetch('http://localhost:3000/lista-produse');

    console.log("response", response)

    const produseArray = await response.json();
    console.log("produseArray", produseArray)

    lista.innerHTML = ''

    produseArray.forEach(produs => {
        console.log(produs)
        const tempProdus = `<div class="produs" data-id=${produs.id}>
        <h3>Nume : ${produs.nume}</h3>
        <h3>Tip : ${produs.tip}</h3>
        <h3>Pret lei : ${produs.pret}</h3>
        <img src="../public/css/images/produs.jpg" alt="nu">
        <br>
        <button class="sterge">Sterge din cos</button>
        </div>`

        lista.insertAdjacentHTML("beforeend", tempProdus);
    });
    defineste();
};

adauga.addEventListener("click",async function(){
    const tip=document.querySelector("#post").value;
    let nume=''
    if(tip=="Produse de post"){
        nume=document.querySelector("#numepost").value;
    }
    if(tip=="Produse din ingrediente de provenienta animala"){
        nume=document.querySelector("#numenepost").value;
    }
    const pret=document.querySelector("#pret").value;
    const produsNou={
        nume,
        tip,
        pret
    }
    const listaProduseNoua=await postData('http://localhost:3000/adauga-produs',produsNou);
    console.log("Data",listaProduseNoua);
    afiseazaProduse(listaProduseNoua);
});

async function postData(url='',data={}){
    const response=await fetch(url,{
        method : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

async function deleteProdus(url=''){
    const response=await fetch(url,{
        method:'DELETE',
    })
    return response.json();
};

afiseazaProduse();




