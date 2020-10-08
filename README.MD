# Javascript Challenge : "Data Visualisation"

- repository : `js-datavisualisation-challenge`
- mode: `solo`
- type: `consolidation challenge`
- duration: `5 days`
- author: `Alexandre Plennevaux`
-live preciew : https://loonyt.github.io/data-visualisation-challenge/

## Objectives

This consolidation challenge will help you assess your ability to solve a problem inspired from real-life situations using your new javascript muscles involving the following know-hows :

- **DOM** manipulation
- **AJAX**/**FETCH** request
- Using **Third-party libraries**
- **problem-solving** : design a logical solution to implement the expected result
- Debugging using the console
- Understand the notion of **"separation of concerns"**



1) If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

2) Datas are sitting at this URL : https://canvasjs.com/services/data/datapoints.php

3) How to make use of the datas ?  Don't hesitate to adapt the code provided in this tutorial: Live Updating Charts from JSON API & AJAX, Retrieve the data via Ajax.
but adapt it to this third-party library: chart.js or ToastUi-Chart, because this tutorial uses another (not-free) library (canvasJS).

 D3.js - Data-Driven Documents library
 
4) use it to insert a graph that refreshes every second, just below the main title (h1) of the article.

5) There are two data tables in the HTML file. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.


[dataVisualisationChallenge : Click me!](https://loonyt.github.io/data-visualisation-challenge/)


## Procedure

1) find a tutorial : live updating charts from json API et Axaj with chart.js 
2) install chart.js library 
3) grab the datas at the url by using fetch/await API
4) grab the datas in the html and convert them to JSON 
6) insert the graph at the begining of the document
5) make the first graph and insert it where it is required : above the html data tables
6) make the second graph and insert it where it is required : above the html data tables



## What i really did 
 
1) ive watched a tutorial and tryed their method to get the datas provided in the URL. 
2) to do so i created a js file and linked it to my html file. 
3) i tried to build the call back function to get the datas but i encountered those issues : 
4) i then tried to build the function to add the animation script to the first table 
5) i managed to get the structure within wich i had to put the function that will get the required data
6) i then tried to find a way to get those datas before putting the code snippet in the function that will be used to display the enhanced table above the required h tag. The way to get those datas was the fetch API technology. 
7) After,  i talked to the others of the group and i saw that i was not doing the challenge in the correct order. 
8) That was not an issue : i could still make the live updating chart and then both of the graphics for the HTML data tables : i did so with the fetch await method because the solutions i tried before were not working : 



** first attempt for fetch/await ** 

```js

let tableONE = docuemnt.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
let tableOne = document.getElementById("table1");

tableOne.addEventListener("mouseover", function (){
    
    
let ourRequest= new XMLHttpRequest();
ourRequest.open('Get', 'https://canvasjs.com/services/data/datapoints.php');
ourRequest.onload=function() {
    
  let ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.send(); 

  
 });

function renderHTML(data) {
    
    
    tableONE.insertAdjacentHTML('afterend','ourRequest')
    
    for (i=0; i < data.lenght; i++) {
        
        ourRequest += "chart" + data [i].name + "is a chart" 
        
        
    }
    
    
} //add html to the page//


```


** second attempt for fetch/await **


```js

var xmlhttp = new XMLHttpRequest();
 
xmlhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        //Use parse() method to convert JSON string to JSON object
        var responseJsonObj = JSON.parse(this.responseText);
 
        console.log( responseJsonObj.name );
        console.log( responseJsonObj.age );
    }
};
 
xmlhttp.open("GET", "https://canvasjs.com/services/data/datapoints.php", true);
xmlhttp.send();



```

** third attempt for fetch/await **


```js

const getDatas = async function () {
    
    try {
        
        let response = await fetch('https://canvasjs.com/services/data/datapoints.php')
        
        if (response.ok) {
            
            let data = await response.json()
            console.log(data)
            
            } 
            else { 
            
            console.error('Retour du serveur :', response.status)
            
            } catch(e) { console.log(e)}
            
        }
         
           
    }


```

** fourth attempt for fetch/await **


```js

var getHttpRequest = function () {
  var httpRequest = false;

  if (window.XMLHttpRequest) { // Mozilla, Safari,...
    httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  }
  else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {}
    }
  }

  if (!httpRequest) {
    alert('Abandon :( Impossible de créer une instance XMLHTTP');
    return false;
  }

  return httpRequest
}

var xhr = getHttpRequest()
xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true)
// On envoit un header pour indiquer au serveur que la page est appellée en Ajax
xhr.setRequestHeader('X-Requested-With', 'xmlhttprequest')
// On lance la requête
xhr.send()

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
        xhr.responseText // contient le résultat de la page
    } else {
        // Le serveur a renvoyé un status d'erreur
    }
  }
}

```

** fifth attempt for fetch/await **

```js

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

fetch('flowers.jpg',myInit)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});


```


## resources used 

1) [video tutorial](https://www.youtube.com/watch?v=5-ptp9tRApM&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=5)
2) [fetch API](https://canvasjs.com/docs/charts/how-to/live-updating-javascript-charts-json-api-ajax/)
3) [fetch API](https://d4mations.com/1-3-graphing-with-chart-js-working-with-data-apis-in-javascript/?pk_campaign=feed&pk_kwd=four-reasons-why-beginners-shouldnt-rely-on-automatic-modes-too-much)
4) [How to put datas in a chart / JSON convertion / Ajax](https://css-tricks.com/the-many-ways-of-getting-data-into-charts/)
5) [How to put datas in a chart / JSON convertion / Ajax](https://www.chartjs.org/docs/latest/getting-started/)
6)  [How to put datas in a chart / JSON convertion / Ajax](https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/#2-line-chart)
7) [Link towards the guy who helped me the most on this project](https://github.com/Thdepas)




