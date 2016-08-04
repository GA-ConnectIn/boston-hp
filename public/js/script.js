$(document).ready(function() {
  console.log("Fully Loaded!!");



  function modifyArray(arr) {
    ret = []
    ret.push(['Price']);

    arr.forEach(function(item) {
      ret.push([item]);
    });

    return ret;
 }

  function makeGraph(housingData){
         google.charts.load("current", {packages:["corechart"]});
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


$(".btn").on("click", function(event) {
    event.preventDefault()

  let crim = $(".crim").val();
  let age= $(".age").val();
  let dis = $(".dis").val();

  let data = {
    crim: crim,
    age: age,
    dis:dis
  }

   $.ajax({
     url: '/find-price',
     type: 'GET',
     dataType: 'json',
     data: data,
   })
   .done(function(data) {
     console.log("success");
     console.log(data);
     let $div = $('#chart_div');
     $div.empty();
     $('input').val('');
      $div.text(data.housePrice)

   })
   .then(function(housingData) {
      makeGraph(housingData.houseList) ;
      console.log("all data ",housingData);
      console.log("houselist is here ?", housingData.houseList)
   })
   .fail(function() {
     console.log("error");
   })
   .always(function() {
     console.log("complete");
   });



})


















})
