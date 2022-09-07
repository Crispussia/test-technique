import Postes from "../mocks/postes.js"
const getPostes =  ()=>{

    return Postes;

}

const getPoste =  (id )=>{
    return Postes.find((e)=> e.recordid===id);
}

const updatePoste = (id,newPoste) =>{

    var i=0;    
    Postes.forEach(poste => {
        if(poste.recordid == id){
            Postes[i] = newPoste;
            i++
        }
        else{
            i++;
        }

    });

}

const deletePoste =  (id )=>{
    var i= Postes.findIndex((e)=> e.recordid===id);
    Postes.splice(i,1) 

}

export {
    getPostes,
    getPoste,
    updatePoste,
    deletePoste
}





