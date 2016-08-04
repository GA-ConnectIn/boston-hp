$(document).ready(function() {
  console.log("Fully Loaded!!");
 google.charts.load("current", {packages:["corechart"]});



  function modifyArray(arr) {
    ret = []
    ret.push(['Price']);

    arr.forEach(function(item) {
      ret.push([item]);
    });

    return ret;
 }

  function makeGraph(housingData){
         google.charts.setOnLoadCallback(drawChart);
          console.log(housingData, "in housingData")
         function drawChart() {
            let newData = modifyArray(housingData);
            console.log("newData = ", newData);
            const data = google.visualization.arrayToDataTable(newData);

            const options = {
              title: 'Price of Homes in Thousands',
              legend: { position: 'none' },
            };

            const chart = new google.visualization.Histogram(document.getElementById('chart_div'));
            chart.draw(data, options);
         }

      }

function onSubmit(event) {
  event.preventDefault()

  let crim = $(".crim").val();
  let age= $(".age").val();
  let dis = $(".dis").val();
  let $div = $('#chart_div');
  let $secondDiv = $('.second-div')
  let $p = $('<p>').addClass('price');

  $div.empty();
  $('.empty').val('');

  let data = {
    crim: crim,
    age: age,
    dis:dis
  }

  console.log("get data = ", data);
   $.ajax({
     url: '/find-price',
     type: 'GET',
     dataType: 'json',
     data: data,
   })
   .done(function(data) {
     console.log("success");
     $p.text("$ " + data.housePrice.toFixed(2) + " Thousand");
      $secondDiv.append($p);

   })
   .then(function(housingData) {
      makeGraph(housingData.houseList) ;
      console.log("all data ",housingData);
      console.log("houselist is here ?", housingData.houseList)
   })
   .fail(function(err) {
     console.log("error", err);
   })
   .always(function() {
     console.log("complete");
   });

}

$(".btn").on("click", onSubmit);


















})
