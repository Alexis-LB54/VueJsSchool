
import { useTokenStore } from "../../stores/token";

let error = "non autorisé";

const isLog = () => {
    const tokenStore = useTokenStore();
    let tableauRoles = tokenStore.roles;
    return tableauRoles.length >= 1
}

export function isDirector() {
    const tokenStore = useTokenStore();
    let tableauRoles = tokenStore.roles;
    if (tableauRoles.indexOf("ROLE_DIRECTEUR") !== -1) {
        return true
    } return false
}

export function isTeacher() {
    const tokenStore = useTokenStore();
    let tableauRoles = tokenStore.roles;
    if (tableauRoles.indexOf("ROLE_PROF") !== -1) {
        return true
    } return false
}

export function isStudent() {
    const tokenStore = useTokenStore();
    let tableauRoles = tokenStore.roles;
    if (tableauRoles.indexOf("ROLE_ELEVE") !== -1) {
        return true
    } return false
}

export default isLog