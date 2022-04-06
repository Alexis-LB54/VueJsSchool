
import type { User } from "../types/userType";
import { useUserStore } from "../../stores/token";
const userStore = useUserStore();

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

    return response;
  }


export async function fetchConsults(token: string) {
  let response = await fetch("https://apidoctor.quidam.re/api/consultations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userStore.token}`,
    },
  })
    .then((response) => response.json())
    .catch((e) => {
      console.warn("error", e);
    });
    console.log(response, "coucou 2");

    return response;
}