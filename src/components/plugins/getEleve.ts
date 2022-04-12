import { useTokenStore } from "../../stores/token";
import { useEleveStore } from "../../stores/EleveStore"

const tokenStore = useTokenStore();
const eleveStore = useEleveStore();

export default async function EleveList() {
    let response = await fetch("http://127.0.0.1:8000/api/users",{
    method: "GET",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("liste des élèves", response);
    console.log("hydra", response["hydra:member"]);
    
    eleveStore.eleve = response["hydra:member"].filter((o:{roles:String[]}) => o.roles.includes("ROLE_ELEVE"));
    

    return response;   
}