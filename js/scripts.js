var submissions = ["Testing 1 2 3", "A deeper sense of peace and ability to rest and slow down", "A bigger focus on healthcare organizations and sufficient supplies to prevent shortages in the future"]
var dict = [{"message": "Testing 1 2 3", "date":"2020-01-01", "time":"2:46 PM"},{"message": "Testing 1 2 3", "date":"2020-01-01", "time":"2:46 PM"}]
var divs = ''

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

var jsonResult;
$.ajax({
  dataType: "json",
  url: "https://gist.githubusercontent.com/garrettvercoe/4b217fb2a20e288414223db88f01a099/raw/a3084b6c5b4ea4ccabfbaa2071475df5e60eff52/gistfile1.txt",
  success: function(e) {
    //    jsonResult = data;
    //    console.log(data)
    console.log(e)
    // jsonResult = JSON.parse(e)
    e.forEach(function(jsonItem) {
        divs += '<div class="submission"> <div class="date">' + jsonItem.date + '</div>' + jsonItem.message + '</div>';
      }); 
    document.getElementById("submissionContainer").innerHTML = divs;
    }
});


// dict.forEach(function(dict) {
//     divs += '<div class="submission"> <div class="date">' + dict.date + '</div>' + dict.message + '</div>';
//   }); 
// jsonResult.forEach(function(jsonItem) {
//     divs += '<div class="submission"> <div class="date">' + jsonItem.date + '</div>' + jsonItem.message + '</div>';
//   }); 
// document.getElementById("submissionContainer").innerHTML = divs;