import { useTokenStore } from "../../stores/token";
import { useMatiereStore } from "../../stores/MatiereStore"

const tokenStore = useTokenStore();
const matiereStore = useMatiereStore();

export default async function MatiereList() {
    let response = await fetch("http://127.0.0.1:8000/api/matieres",{
    method: "GET",
    headers: {
        Authorization: `Bearer ${tokenStore.token}`,
    }
    }).then((r) => r.json()).catch();
    console.log("liste des matières", response);
    console.log("hydra", response["hydra:member"]);
    
    matiereStore.matiere = response["hydra:member"]
    

    return response;   
}