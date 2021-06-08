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

var animacaoSection = $("#animacao");
var cubesat = $("#cubesat");
var parametrosIniciais = {
  min: 150,
  max: 2000,
};
// Inserir limite para não permitir cubesat exceder bordas
var limitBorderLeft = 100;
var limitBorderTop = 10;
var animacaoState = {
  left: animacaoSection.offset().left,
  top: animacaoSection.offset().top,
};
var animacaoLimits = {
  left: animacaoSection.width() - limitBorderLeft,
  top: cubesat.offset().top - animacaoState.top - limitBorderTop,
};
var cubesatState = {
  left: cubesat.offset().left - animacaoState.left,
  top: cubesat.offset().top - animacaoState.top,
};

var initialValue = "650";

$("#altitudeSlider").val(initialValue);
$("#altitudeSlider").attr("min", parametrosIniciais.min);
$("#altitudeSlider").attr("max", parametrosIniciais.max);
$("#altitude").val(initialValue);
simular();

function mapearValores(val, deMin, deMax, paraMin, paraMax) {
  return ((val - deMin) * (paraMax - paraMin)) / (deMax - deMin) + paraMin;
}

function simular() {
  animarCubesat();
  calcularResultados();
}

function animarCubesat() {
  const valor = parseInt($("#altitude").val());
  const result = {
    left: mapearValores(
      valor,
      parametrosIniciais.min,
      parametrosIniciais.max,
      cubesatState.left,
      animacaoLimits.left
    ),
    top:
      cubesatState.top -
      mapearValores(
        valor,
        parametrosIniciais.min,
        parametrosIniciais.max,
        0,
        animacaoLimits.top
      ),
  };
  cubesat.css({ left: `${result.left}px`, top: `${result.top}px` });
}

function calcularResultados() {
  const valor = parseInt($("#altitude").val());
  $("#altitudeSatelite").text(`${valor} km`);

  const semiEixoTerra = 6378.137;
  const semiEixoMaior = semiEixoTerra + valor;
  $("#semiEixoMaior").text(`${semiEixoMaior} km`);

  const GM = 0.3986 * Math.pow(10, 6);
  const periodoOrbital =
    2 * Math.PI * Math.sqrt(Math.pow(semiEixoMaior, 3) / GM);
  const periodoOrbitalMinutos = parseFloat(periodoOrbital / 60).toFixed(2);
  $("#periodoOrbital").text(`${periodoOrbitalMinutos} min`);

  const velocidadeAngular = (2 * Math.PI) / periodoOrbital;
  $("#velocidadeAngular").text(`${velocidadeAngular} rad/s`);

  const fatorFormaDinamicoTerra = 1.08262668 * Math.pow(10, -3);
  const taxaPrecessaoNodal = 1.9191 * Math.pow(10, -7);
  const partInclinacaoOrbital =
    ((-3 / 2) * Math.pow(semiEixoTerra * 1000, 2) * fatorFormaDinamicoTerra) /
    Math.pow(semiEixoMaior * 1000, 2);

  const inclinacaoOrbital = Math.acos(
    taxaPrecessaoNodal / (partInclinacaoOrbital * velocidadeAngular)
  );
  $("#inclinacaoOrbital").text(
    `${((inclinacaoOrbital * 180) / Math.PI).toFixed(2)}`
  );

  const arccosRad = 2 * Math.acos(semiEixoTerra / semiEixoMaior);
  const arccosDegrees = (arccosRad * 180) / Math.PI;

  const exposicaoLuz = (180 + arccosDegrees) / 360;
  const formattedExposicaoLuz = (exposicaoLuz * 100).toFixed(2);
  $("#exposicaoLuz").text(`${formattedExposicaoLuz}%`);

  editChart([formattedExposicaoLuz, (100 - formattedExposicaoLuz).toFixed(2)]);
}
