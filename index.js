const siteList = [
  {
    name: "Mon Premier site",
    type: "Alors la ... je vois pas ce qu'il fait",
    description: "Je ne sais pas encore ce qu'il fait mais il permet de tester le JS",
    link: "http://untruccommeca.com",
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

//AFFICHE DE LA DATE DE CREATION DU PROJET
window.onload = function () {
  // Month Day, Year Hour:Minute:Second, id-of-element-container
  countUpFromTime("Sep 28, 2020 12:00:00", 'countup1'); // ****** Change this line!
};
function countUpFromTime(countFrom, id) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
    countFrom = new Date(countFrom),
    timeDifference = (now - countFrom);

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  var idEl = document.getElementById(id);
  idEl.getElementsByClassName('days')[0].innerHTML = days;
  idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);
}