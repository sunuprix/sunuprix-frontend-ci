// Fonctions utilitaires testables (sans acces au DOM).

/** Formate un prix en FCFA : 1500 -> "1 500 FCFA". */
export function formatFCFA(montant) {
  const entier = Math.round(Number(montant));
  if (Number.isNaN(entier)) return "- FCFA";
  return entier.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " FCFA";
}

/** Retourne un libelle lisible pour l'etat de l'API. */
export function libelleEtatApi(reponse) {
  if (reponse && reponse.status === "ok") return "API disponible";
  return "API indisponible";
}
