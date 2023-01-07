if(document.formulaire.nom.value=="")
{alert("entrer votre nom");
document.formulaire.nom.focus();
return false;}
if(document.formulaire.courriel.value.indexof('@')==-1)
{alert("le format n'est pas correcte !! ajouter @!!");
document.formulaire.courriel.focus();
return false}