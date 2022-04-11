
import { useTokenStore } from "../../stores/token";

let error = "non autorisé";
const tokenStore = useTokenStore();
let tableauRoles = tokenStore.roles;

export default function isLog() {
    return tableauRoles === [] ? false : tableauRoles;
}