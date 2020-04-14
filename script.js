var primercircle = document.getElementById("primercircle");
var eyebrowcircle = document.getElementById("eyebrowcircle");
var facecircle = document.getElementById("facecircle");
var eyecircle = document.getElementById("eyescircle");
var undereyescircle = document.getElementById("undereyescircle");
var cheeckcircle = document.getElementById("cheeckcircle");
var lipcircle = document.getElementById("lipcircle");
var maincontainer = document.getElementById("maincontainer");

let jsonDataBase =[ {
      "title": "face prep",
      "content":["moisturizer","primer"]
    },
      {"title":"eyebrows",
      "content":["eyebrow pencil","eyebrow spoolie"]
    },

      {"title":"face",
      "content":[
         "concealer",
         "color corrector",
         "foundation"
      ]
    },
      {
      "title":"eyes",
    "content":[
         "eyeshadow",
         "eyeliner",
         "eyelashes",
         "mascara"
      ]
    },
      {"title":"undereyes",
      "content":[
         "light concealer",
         "banana powder"
      ]
    },

      {"title":"cheeks",
      "content":[
         "bronzer",
         "blush",
         "highlight"
      ]
    },
      {"title":"lips",
      "content":[
         "lip liner",
         "lipstick",
         "lip gloss"
      ]
    }
  ];

  function printToPage(incomingJSON){
    primercircle.innerHTML = incomingJSON;
  }

for(var i = 0; i < jsonDataBase.length; i++){
  createElementProper(jsonDataBase[i]);
}

function createElementProper(incomingJSON){
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("primercircle");

  let newContentHeading = document.createElement("H2");
  newContentHeading.classList.add('primercircle');
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentList = document.createElement("UL");
  newContentElement.appendChild(newContentList);

  for (var i = 0; i < incomingJSON["content"].length; i++) {
    var currentPrepString = incomingJSON["content"][i];
    var newPrepItem = document.createElement("LI");
    newPrepItem.innerHTML = currentPrepString;
    newContentList.appendChild(newPrepItem);

  }

  primercircle.appendChild(newContentElement);
}
