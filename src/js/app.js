import { API_URL } from "./config.js";
import { libelleEtatApi, formatFCFA } from "./utils.js";

async function verifierApi() {
  const zone = document.getElementById("etat-api");
  try {
    const reponse = await fetch(`${API_URL}/health`);
    const donnees = await reponse.json();
    zone.textContent = libelleEtatApi(donnees);
    zone.className = "etat ok";
  } catch (erreur) {
    zone.textContent = libelleEtatApi(null);
    zone.className = "etat ko";
  }
}

document.getElementById("exemple-prix").textContent = formatFCFA(1500);
verifierApi();
