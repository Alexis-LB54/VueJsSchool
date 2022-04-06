
import type { User } from "../types/userType";
import { useTokenStore } from "../../stores/token";
import jwt_decode from "jwt-decode";
const userStore = useTokenStore();

export default async function fetchLogin(user: User) {
  let response = await fetch("https://apidoctor.quidam.re/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((r) => r.json())
    .catch();
    console.log("utilisateur", user, "token", response);

    let token = response;
    let decoded = jwt_decode(token);
    console.log("token décodé", decoded);

    return response;
  }