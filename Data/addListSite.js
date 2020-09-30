//** Récuperation des données a ajouter dans siteList **// 
const generateObj = (obj, arr, val) => {
    if (arr.length === 1) {
      obj[arr[0]] = val;
      return;
    }
    if (!obj[arr[0]]) {
      obj[arr[0]] = {};
    }
    const restArr = arr.splice(1);
    generateObj(obj[arr[0]], restArr, val);
  }
  
  const getData = (id) => {
    const ajoutRessources = document.getElementById(id);
    const inputCollection = ajoutRessources.getElementsByTagName('input');
    const inputArray = [...inputCollection];
    const data = {};
    inputArray.map(input => {
      const { name, value } = input;
      const splitName = name.split('.');
      generateObj(data, splitName, value);
    })   
   
    return data; 

  } 

  const getDataBtn = document.getElementById('getDataBtn');    

  getDataBtn.addEventListener('click', () => {
    const data = getData('ajoutRessources');    
    siteList.push(data);
  })