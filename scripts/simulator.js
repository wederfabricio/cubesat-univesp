$("#altitude").on("input", function () {
  $("#altitudeSlider").val($(this).val());
  simular();
});

$("#altitudeSlider").on("change", function () {
  $("#altitude").val($(this).val());
  simular();
});

var intervaloAnimacao = null;
var intervaloGrafico = null;
var counter = 0;

function simular() {
  //   clearInterval(intervaloAnimacao);
  //   clearInterval(intervaloGrafico);
  //   var max = $("#volumeSlider").prop("max");
  //   var value = parseFloat($("#volumeSlider").val().replace(",", "."));
  //   var opacity = 1 - (value / max).toFixed(2);
  //   intervaloAnimacao = setInterval(function () {
  //     var backgroundImage = "linear-gradient(90deg,";
  //     for (var i = 0; i < 100; i++) {
  //       random = Math.random();
  //       if (random < opacity) {
  //         backgroundImage += "transparent " + i + "%,";
  //       } else {
  //         backgroundImage += "rgb(30, 144, 255) " + i + "%,";
  //       }
  //     }
  //     backgroundImage = backgroundImage.slice(0, backgroundImage.length - 1);
  //     backgroundImage += ")";
  //     $("#fundo").css({
  //       backgroundImage,
  //     });
  //   }, 100);
  //   intervaloGrafico = setInterval(() => {
  //     counter++;
  //     addData(counter, value);
  //   }, 1000);
}
