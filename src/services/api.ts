import { API_URL } from "../constants/globals";

export const fetchCompanies = async () => fetch(`${API_URL}/companies`).then(res => res.json())
