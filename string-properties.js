const tnc = {
    support: 2,
    mid: 'armel',
    off: 'kpii',
    safe: 'gabbi'
  };
  showProperties(tnc);
  
  function showProperties(obj){
    for (let key in obj){
      if (typeof obj[key] === 'string')
        console.log(key + ': ' + obj[key]);
    }
    
  }