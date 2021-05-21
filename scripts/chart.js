var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Tempo em luz solar", "Tempo sem luz solar"],
    datasets: [
      {
        data: [0, 0],
        borderColor: ["rgb(105, 144, 30, 0.2)", "rgb(30, 144, 255, 0.2)"],
        backgroundColor: ["rgb(105, 144, 30, 0.2)", "rgb(30, 144, 255, 0.2)"],
        borderWidth: 1,
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
      },
    ],
  },
});

function editChart(data) {
  myChart.data.datasets[0].data = data;
  myChart.update();
}
