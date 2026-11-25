import { describe, it, expect } from "vitest";
import { formatFCFA, libelleEtatApi } from "../src/js/utils.js";

describe("formatFCFA", () => {
  it("formate un prix avec separateur de milliers", () => {
    expect(formatFCFA(1500)).toBe("1 500 FCFA");
    expect(formatFCFA(300)).toBe("300 FCFA");
    expect(formatFCFA(1250000)).toBe("1 250 000 FCFA");
  });

  it("gere une valeur invalide", () => {
    expect(formatFCFA("abc")).toBe("- FCFA");
  });
});

describe("libelleEtatApi", () => {
  it("indique que l'API est disponible", () => {
    expect(libelleEtatApi({ status: "ok" })).toBe("API disponible");
  });

  it("indique que l'API est indisponible", () => {
    expect(libelleEtatApi(null)).toBe("API indisponible");
  });
});
