let produits=[{code:"001",libelle:"Clavier",prix:12.5},
              {code:"002",libelle:"Ecran LCD",prix:350},
              {code:"003",libelle:"Souris USB",prix:"6.5"},
              {code:"004",libelle:"Micro-casque",prix:"60"},
              {code:"005",libelle:"Flash disque 128Go",prix:"25"},
            ];
function Chercher_produit(code){
    let i=0;
    while(i<produits.length){
        if(produits[i].code==code)
            return produits[i];
        else i++
    }
    return null;
}
function Calcul(){
    let elem_MHT=document.getElementById("MHT");
    let elem_MTTC=document.getElementById("MTTC");
    let prix=parseFloat(document.getElementById("prix").textContent);
    let qte=parseInt(data.qte.value);
    let taux=parseFloat(data.tva.value);
    let res=prix*qte*(1+taux);
    elem_MHT.innerHTML=prix*qte;
    elem_MTTC.innerHTML=res.toFixed(3);
    
}
function Afficher_produit(){
    let product=Chercher_produit(data.product.value);
    let elem_libelle=document.getElementById("libelle");
    let elem_prix=document.getElementById("prix");
    let elem_MHT=document.getElementById("MHT");
    let elem_MTTC=document.getElementById("MTTC");
    if (product!=null){
        elem_libelle.innerHTML=product.libelle;
        elem_prix.innerHTML=product.prix;
    }
    else{
        elem_libelle.innerHTML="";
        elem_prix.innerHTML="";
        elem_MHT.innerHTML="";
        elem_MTTC.innerHTML="";
    }      
}

function Efface(){
    let elem_code=document.getElementById("product");
    let elem_libelle=document.getElementById("libelle");
    let elem_prix=document.getElementById("prix");
    let elem_qte=document.getElementById("qte");
    let elem_MHT=document.getElementById("MHT");
    let elem_MTTC=document.getElementById("MTTC");
    elem_libelle.innerHTML="";
    elem_prix.innerHTML="";
    data.product.value="";
    data.tva.value="0.09";
    elem_qte.value="";
    elem_MHT.innerHTML="";
    elem_MTTC.innerHTML=""
}

let left=400;
function animation(){
    let id1=setInterval(afficher,100);
    let  msg_anim=document.getElementById("msg_anime");
    let text=document.getElementById("msg").value;
    msg_anim.innerHTML=text;
    function afficher(){
        if (left>=0)
            left-=10;
            
        else
            left="400";
        
        msg_anim.style.left=left+"px";
    }
}