let language = "pt";

function toggleLanguage() {
  language = language === "en" ? "pt" : "en";
  setTranslation();
}

const translations = [
  {
    key: "SIMULADOR_TITULO",
    pt: "Simulação de parâmetros orbitais para EPS Cubesat",
    en: "Simulation of orbital parameters for EPS Cubesat",
  },
  {
    key: "ALTERAR_IDIOMA",
    pt: "Change language to EN",
    en: "Alterar para PT-BR",
  },
  {
    key: "TEXTO_TCC",
    pt: "Trabalho de conclusão de curso (TCC)",
    en: "Course Completion Work",
  },
  {
    key: "TEXTO_INTRODUCAO",
    pt: "Introdução",
    en: "Introduction",
  },
  {
    key: "TEXTO_INTRODUCAO_1",
    pt: "1) Os cálculos são feitos com base na altitude de órbita circular",
    en: "1) Calculations are made based on circular orbit altitude",
  },
  {
    key: "TEXTO_INTRODUCAO_2",
    pt: "2) Serão utilizadas algumas fórmulas do capítulo de metodologia para apresentação dos resultados",
    en: "2) Some formulas from the methodology chapter will be used to present the results",
  },
  {
    key: "TEXTO_INTRODUCAO_3",
    pt: "3) Os resultados serão apresentados ao final da página",
    en: "3) The results will be displayed at the bottom of the page",
  },
  {
    key: "TEXTO_INSTRUCAO",
    pt: "Instruções - como utilizar",
    en: "Instructions - how to use",
  },
  {
    key: "TEXTO_INSTRUCAO_1",
    pt: "1) Insira o parâmetro altitude de órbita circular",
    en: "1) Enter the circular orbit altitude parameter",
  },
  {
    key: "TEXTO_INSTRUCAO_2",
    pt: "2) O sistema te dará uma slider com controle exatamente dentro do range estabelecido, com uma simulação virtual do que está ocorrendo, valores e visualização por imagem",
    en: "2) The system will give you a slider with control exactly within the established range, with a virtual simulation of what is happening, values and image visualization",
  },
  {
    key: "TEXTO_INSTRUCAO_3",
    pt: "3) A partir desse controle você pode alterar o valor e ver todos os outros parâmetros variando",
    en: "3) From this control you can change the value and see all other parameters varying",
  },
  {
    key: "TEXTO_PRATICA",
    pt: "Na prática!",
    en: "In practice!",
  },
  {
    key: "CONTROLE_ALTITUDE",
    pt: "Controle dinâmico altitude de órbita - LEO (km)",
    en: "Orbit altitude dynamic control - LEO (km)",
  },
  {
    key: "TEXTO_RESULTADO",
    pt: "Resultados",
    en: "Results",
  },
  {
    key: "ALTITUDE_SATELITE",
    pt: "Altitude do satélite informada",
    en: "Satellite altitude entered",
  },
  {
    key: "SEMIEIXO_MAIOR",
    pt: "Semi-eixo maior da órbita do satelite",
    en: "Semi-major axis of the satellite's orbit ",
  },
  {
    key: "PERIODO_ORBITAL",
    pt: "Período orbital",
    en: "Orbital period",
  },
  {
    key: "VELOCIDADE_ANGULAR",
    pt: "Velocidade angular",
    en: "Angular Velocity",
  },
  {
    key: "INCLINACAO_ORBITAL",
    pt: "Inclinação orbital",
    en: "Orbital tilt",
  },
  {
    key: "PORCENTAGEM_EXPOSICAO",
    pt: "Porcentagem de exposição sob luz solar",
    en: "Percentage of exposure under sunlight",
  },
  {
    key: "GRAFICO_LUZ",
    pt: "Tempo em luz solar",
    en: "Time in sunlight",
  },
  {
    key: "GRAFICO_SEM_LUZ",
    pt: "Tempo em luz solar",
    en: "Time without sunlight",
  },
];

function translate(key) {
  return translations.find(function (translation) {
    return translation.key === key;
  })[language];
}

$("document").ready(function () {
  setTranslation();
});

function setTranslation() {
  $("[data-translate]").each(function (_, element) {
    const key = $(element).attr("data-translate");
    $(element).text(translate(key));
    updateChartLanguage();
  });
}
