# SunuPrix - Frontend (`sunuprix-frontend-ci`)

Interface web de **SunuPrix**, plateforme de consultation et de comparaison des prix observes dans les marches senegalais.
Ce depot correspond au depot `frontend-ci` de l'enonce : il contient l'interface (HTML/CSS/JavaScript), les tests, le Dockerfile et le pipeline CI.

## Stack
HTML, CSS, JavaScript (modules ES), Vitest, nginx, Docker, GitHub Actions.

## Structure
```
src/            interface (index.html, css/, js/)
tests/          tests Vitest
nginx.conf      configuration du serveur web (sonde /healthz)
Dockerfile      image nginx servant src/
```

## Lancer en local
```bash
npm install
npx serve src        # ou ouvrir src/index.html avec l'extension Live Server de VS Code
```
L'URL de l'API est definie dans `src/js/config.js` (par defaut `http://localhost:8000`).

## Tests
```bash
npm install
npm test
```

## Docker
```bash
docker build -t sunuprix-frontend .
docker run -p 8080:80 sunuprix-frontend
```
Interface : http://localhost:8080 - sonde de sante : http://localhost:8080/healthz

## Pipeline CI (`.github/workflows/ci.yml`)
Declenchement : push sur `main` et Pull Requests.

1. Checkout du code
2. Installation de Node.js et des dependances (`npm ci`)
3. Tests (Vitest)
4. Build de l'image Docker
5. Push sur Docker Hub (uniquement apres un push sur `main`)

Le job s'appelle `build` : ce nom est exige par la regle de protection de `main`.

### Secrets GitHub requis
| Secret | Role |
|---|---|
| `DOCKERHUB_USERNAME` | compte Docker Hub du projet |
| `DOCKERHUB_TOKEN` | access token Docker Hub (droits Read & Write) |

## Image Docker
- Depot Docker Hub : `<DOCKERHUB_USERNAME>/sunuprix-frontend` (lien a ajouter)
- Tags : SHA court du commit (ex. `a1b2c3d`) et `latest`. Le deploiement reference toujours le SHA.
- Port expose : `80`, sonde de sante : `GET /healthz`

## Workflow Git
Branche (`feat/...`, `fix/...`, `docs/...`), Pull Request, relecture par un autre membre, fusion. Pas de push direct sur `main`.

## Equipe
Binome frontend (B2) : Mouhamadou Rassouloulahi Gueye, Tevoedjre Odilon Pamphile David Eloim Sissi.
CI : binome B3.
