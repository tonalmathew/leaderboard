var url =
  "http://gsx2json.com/api?id=1jFYXinwU3a-9-w_PlVIn6IBoSGn1d7cMJZr7L2KUJp0&sheet=1";

// AJAX Request
var leaderBoard = new XMLHttpRequest();
leaderBoard.open("GET", url);
leaderBoard.send();

leaderBoard.addEventListener("load", function (e) {
  var data = e.target.response;
  var response = JSON.parse(data);
  let resultsData = response.rows;

  resultsData.forEach((result) => {
    console.log(result);
    $("#myTable").append(`<tr class="data">
            <td>${result.rank}</td>
            <td>${result.name}</td>
              <td>${result.points}</td>
          </tr>`);
  });
});

function myFunction() {
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
