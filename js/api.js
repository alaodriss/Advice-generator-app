


function fetchJSON() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
   
        console.log(data)
        genAdviceDom(data)
        refreshAdvice()

      })
  
      .catch((error) => console.log("Il y a un error:" + error));
  }
  

  fetchJSON();