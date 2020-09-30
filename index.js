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


//** Récuperation des données a ajouter dans siteList **// 
const generateObj =( obj, arr, val ) => {  
  if( arr.length === 1 ) {  
    obj [ arr [ 0 ] ] = val;
    return;
  }
  if( ! obj [ arr [ 0 ] ] ) {  
    obj [ arr [ 0 ] ] = { };
  }
  const restArr = arr.splice( 1 ) ;
  generateObj( obj [ arr [ 0 ] ] , restArr, val );
}

const getData = ( id ) => {  
  const ajoutRessources = document.getElementById( id ) ;
  const inputCollection = ajoutRessources.getElementsByTagName( 'input' );
  const inputArray = [ ... inputCollection ];
  const data = { };
  inputArray.map( input => { 
    const { name, value } = input; 
    const splitName = name.split( '.' );
    generateObj( data, splitName, value);
  } )
  return data;
}

const getDataBtn = document.getElementById( 'getDataBtn' );
getDataBtn.addEventListener( 'click' , ( ) => {  
  const data = getData('ajoutRessources');
  siteList.push(data);
} )
