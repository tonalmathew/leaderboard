var url =
  "https://spreadsheets.google.com/feeds/cells/1jFYXinwU3a-9-w_PlVIn6IBoSGn1d7cMJZr7L2KUJp0/1/public/values?alt=json";

// AJAX Request
var leaderBoard = new XMLHttpRequest();
leaderBoard.open("GET", url);
leaderBoard.send();

leaderBoard.addEventListener("load", function (e) {
  var data = e.target.response;
  var response = JSON.parse(data);
  let resultsData = response.feed.entry;
  if (resultsData) {
    $("body").addClass("loaded");
  }
  for (var i = 3; i < resultsData.length; i = i + 3) {
    var container = document.querySelector("#myTable");
    if (resultsData[i].content.$t == null) resultsData[i].content.$t = 0;
    container.innerHTML += `<tr class="data">
      <td>
     ${resultsData[i].content.$t}
      </td>
      <td>
      ${resultsData[i + 1].content.$t} 
      </td>
      <td> 
      ${resultsData[i + 2].content.$t}
      </td> 
      </tr>`;
  }
});

function searchName() {
  // Declare variables
  var input, filter, table, data, i, txtValue;
  inputText = document.getElementById("myInput");
  filter = inputText.value.toUpperCase();
  table = document.getElementById("myTable");

  let rowData = table.getElementsByTagName("tr"); // selects all elemnts with tag tr

  // Loop through all table rows [inside a node list], and hide those who don't match the search query
  for (i = 0; i < rowData.length; i++) {
    data = rowData[i].getElementsByTagName("td")[1];
    if (data) {
      txtValue = data.textContent || data.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rowData[i].style.display = "";
      } else {
        rowData[i].style.display = "none";
      }
    }
  }
}

// var url =
//   "http://gsx2json.com/api?id=1jFYXinwU3a-9-w_PlVIn6IBoSGn1d7cMJZr7L2KUJp0&sheet=1";
