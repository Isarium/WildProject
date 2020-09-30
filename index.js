const siteList = [
  {
    name: "Wild Code School",
    type: "",
    description: "Bienvenue à la Wild Code School, l'école où on code en chaussettes ! La Wild Code School est une école innovante et un réseau européen de campus qui forment aux métiers tech (Développeur Web, Data analyst, Analyste en Cybersécurité) des spécialistes adaptables. Notre pédagogie hybride repose sur la réalisation de projets, une plateforme pédagogique originale, un accompagnement personnalisé vers l'emploi et une autonomie renforcée des élèves dans l'acquisition des savoirs. Nos campus sont à taille humaine et intégrés dans les écosystèmes numériques locaux au plus près des recruteurs. Notre communauté soudée d'élèves et d'anciens élèves est internationale et apporte son soutien à chaque Wilder sur le plan personnel et professionnel.",
    link: "https://www.wildcodeschool.com/fr-FR",
  },
]

const listDivGlobal = document.getElementById('listDiv');

for (let i of siteList) {
  const listDivElement = document.createElement("div");
  const listH1 = document.createElement('H1');
  const h1Txt = document.createTextNode(`${i.name}`);
  listH1.appendChild(h1Txt);
  const listType = document.createElement('P');
  const listTypeTxt = document.createTextNode(`${i.type}`);
  listType.appendChild(listTypeTxt);
  const listDescription = document.createElement('P');
  const listDescriptionTxt = document.createTextNode(`${i.description}`);
  listDescription.appendChild(listDescriptionTxt);
  const listLink = document.createElement('a');
  const listLinkTxt = document.createTextNode(`${i.link}`)
  listLink.href = [i.link];
  listLink.appendChild(listLinkTxt)
  listDivElement.appendChild(listH1);
  listDivElement.appendChild(listType);
  listDivElement.appendChild(listDescription);
  listDivElement.appendChild(listLink);
  listDivGlobal.appendChild(listDivElement);
}
