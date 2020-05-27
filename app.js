var url = "http://gsx2json.com/api?id=1jFYXinwU3a-9-w_PlVIn6IBoSGn1d7cMJZr7L2KUJp0&sheet=1";

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
    $(".table-content").append(
      `<div class="col-lg-2 col-sm-2 col-md-2 col-xl-2">
        ${result.rank}
      </div>
      <div class="col-lg-7 col-sm-7 col-md-7 col-xl-7">
        ${result.name}
      </div>
      <div class="col-lg-3 col-sm-3 col-md-3 col-xl-3">
        ${result.points}
      </div>`
    );
  });
});

