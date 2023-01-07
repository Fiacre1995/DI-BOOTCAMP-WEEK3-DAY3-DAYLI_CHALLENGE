/** 
@author: DION FIACRE ARMEL
@description: Ne pouvoir saisir que des lettres dans la zone de texte
*/

/*======================== DAYLI CHALLENGE =======================*/

let VariableBody = document.getElementsByTagName("body")[0];
let CreerInput = document.createElement("input");
VariableBody.appendChild(CreerInput);

let VariableInput = document.getElementsByTagName("input")[0];
VariableInput.addEventListener("keydown", Fonction1);

function Fonction1(e){
    if(!(e.keyCode >= 65 && e.keyCode <=90) && e.keyCode != 8){
        e.preventDefault();
        console.log(e.keyCode)
    }
    
}
