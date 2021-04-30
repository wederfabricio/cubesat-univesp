labels = [];
data = [];

for (var i = 0; i < 20; i++) {
  labels.push("");
  data.push(0);
}

var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Variações de carga",
        data: data,
        backgroundColor: ["rgb(30, 144, 255, 0.2)"],
        borderColor: ["rgb(30, 144, 255)"],
        borderWidth: 1,
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
      },
    ],
  },
});

function addData(label, data) {
  removeData();

  myChart.data.labels.push(label);
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  myChart.update();
}

function removeData() {
  myChart.data.labels.shift();
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.shift();
  });
  myChart.update();
}

function clearChart() {
  labels = [];
  data = [];

  for (var i = 0; i < 20; i++) {
    labels.push("");
    data.push(0);
  }

  myChart.data.labels = labels;
  myChart.data.datasets.forEach((dataset) => {
    dataset.data = data;
  });
  myChart.update();
}
