var MET_DATA_LIA = {
    sleep: 0.9,
    watchtv: 1,
    destwork: 1.8,
    walking17: 2.3,
    walking25: 2.9
},
    MET_DATA_MIA = {
        bike50: 3,
        walking30: 3.3,
        home_exercise: 3.5,
        walking34: 3.6,
        bike10mph: 4,
        bike100: 5.5
    },
    MET_DATA_VIA = {
        jogging: 7,
        calisthenics: 8,
        jogging_run: 8,
        rope_jump: 10
    };
$(document).ready(function () {
    $("#selectBtn").bind("click", function () {
        calc_calories()
    });
    $("input[name=Male]").prop("checked", !0);
    $("input[name=Female]").prop("checked", !1);
    $("input[name=Male]").bind("click", function () {
        $("input[name=Female]").prop("checked", !$(this).prop("checked"))
    });
    $("input[name=Female]").bind("click", function () {
        $("input[name=Male]").prop("checked", !$(this).prop("checked"))
    })
});
function calc_calories() {
    switch ($("[name=calculator]").val()) {
        case "daily_calorie":
            calc_daily_calorie();
            break;
        case "bmr_type":
            calc_BMR();
            break;
        case "bmi_calculator":
            calc_BMI();
            break;
        case "easy_burned":
            calc_easy_burned();
            break;
        case "adv_calculator":
            calc_adv_calculator()
    }
}
function scrollbot() {
    window.scrollTo({ top: 1500, behavior: 'smooth' });
    setTimeout(1000);
    document.getElementById("HrFinal").style.display = "block";
}
function calc_BMR() {
    var a;
    a = "kilo" == $("[name=weight_select]").val() ? parseFloat($("[name=Weight]").val()) : 6.23 * parseFloat($("[name=Weight]").val()) / 13.7;
    var b = "cm" == $("[name=height_select]").val() ? parseFloat($("[name=Height]").val()) : 12.7 * parseFloat($("[name=Height]").val()) / 5, c = parseFloat($("[name=Age]").val());
    if (0 >= b || 0 >= a || 0 >= c)
        return $("#indicator").text("Por favor complete o formulário!"), $("#bmr_value").text(""), -1;
    a = $("input[name=Male]").prop("checked") ? 66 + 13.7 * a + 5 * b - 6.8 * c : 655 + 9.6 * a + 1.8 * b - 4.7 * c;
    0 >= a ? ($("#bmr_value").text(""), $("#indicator").text("Por favor, coloque um valo aceitável.")) : ($("#bmr_value").text(a.toFixed(2)), $("#indicator").text("See your customized data below:"));
    return a
}
function calc_BMI() {
    var a = "kilo" == $("[name=weight_select]").val() ? parseFloat($("[name=Weight]").val()) : 0.45359237 * parseFloat($("[name=Weight]").val()), b = "cm" == $("[name=height_select]").val() ? parseFloat($("[name=Height]").val()) : 2.54 * parseFloat($("[name=Height]").val());
    0 == b ? ($("#bmi_value").text(""), $("#indicator").text(" "), $("#indicator").text("Por favor, complete o formulário."), $("#DietTittle").text("Por favor, complete corretamente o formulário para que possamos calcular corretamente o seu IMC.")) 
    : (a = 1E4 * a / (b * b), $("#bmi_value").text(a.toFixed(2)), 30 < a ? ($("#bmi_level").text("Obeso"), $("#indicator").text("Eita! você está extremamente acima do peso."), $("#DietTittle").text("Procure um médico!"), $("#Diet").text("Profissionais da área de Nutrição afirmam que, pessoas nesse nível podem acarretar: problemas respiratórios, cardiovasculares e diabetes. Buscar ajuda de profissionais imediata é extremamente recomendado nesse nível de IMC."))
     : 25 < a ? ($("#bmi_level").text("Acima do peso"), $("#indicator").text("Ei, O seu corpo está um pouco acima do peso."), $("#DietTittle").text("A dieta ideal para você!"), $("#Diet").text("Profissionais da área de Nutrição afirmam que, para pacientes acima do peso é recomendado uma reeducação alimentar, com uma dieta hipocalórica, hipolipídica e normoproteica. mantendo em torno de no máximo 3 refeições bem pensadas por dia, além disso, manter uma rotina de exercícios físicos díarios de pelo menos 40 minutos. Para o cálculo de calorias díarias a serem consumidas, o usuário precisa consultar um nutricionista para que possa ser feita uma avaliação baseada nas caracterísicas do paciente."))
     : 18.5 < a ? ($("#bmi_level").text("Peso ideal"), $("#indicator").text("Parabéns, Seu corpo está nas condições ideais."), $("#DietTittle").text("A dieta ideal para você!"), $("#Diet").text(" Parabéns! Você está no seu peso ideal. De acordo com especialistas, deve-se ingerir de 4 a 5 porções de frutas, verduras e legumes por dia, além de uma prática diária de exercícios por pelo menos 30 minutos, mantendo apenas 4 refeições por dia. Para o cálculo de calorias díarias a serem consumidas, o usuário precisa consultar um nutricionista para que possa ser feita uma avaliação baseada nas caracterísicas do paciente."))
     : 16.5 < a ? ($("#bmi_level").text("abaixo do peso"), $("#indicator").text("Atualmente você está um pouco abaixo do peso."), $("#DietTittle").text("A dieta ideal para você!"), $("#Diet").text("Profissionais da área de Nutrição afirmam que, para pacientes abaixo do peso é recomendado uma dieta hipercalórica, hiperproteica e hiperlipídica, fracionada em volumes medianos ao dia (entre 5 a 6 refeições) contendo verduras, legumes e frutas em pelo menos 3 delas. Deve-se também manter também uma prática diária de exercícios físicos focados em ganho de massa muscular por pelo menos 30 minutos. Para o o cálculo de calorias díarias a serem consumidas, o usuário precisa consultar um nutricionista para que possa ser feita uma avaliação baseada nas caracterísicas do paciente."))
     : 0 < a ? ($("#bmi_level").text("Magreza extrema"), $("#indicator").text("Você está extremamente abaixo do peso"), $("#DietTittle").text("A dieta ideal para você!"), $("#Diet").text("Profissionais da área de Nutrição afirmam que, para pacientes muito abaixo do peso, É recomendado uma dieta hipercalórica, hiperproteica e hiperlipídica, fracionada em pequenos volumes ao dia (em até 8 refeições). deve-se também manter uma prática de pelo menos 50 minutos diários focados em ganho de massa muscular. Para o cálculo de calorias díarias a serem consumidas, o usuário precisa consultar um nutricionista para que possa ser feita uma avaliação baseada nas caracterísicas do paciente."))
     : ($("#bmi_value").text(""), $("#bmi_level").text(""), $("#indicator").text("Por favor, complete o formulário."), $("#DietTittle").text("Por favor, complete corretamente o formulário para que possamos calcular corretamente o seu IMC.")))
}
function calc_daily_calorie() {
    var a = calc_BMR();
    if (0 > a)
        $("#your_cal_intake").text("------");
    else {
        var b;
        switch ($("[name=exercise_level]").val()) {
            case "nospec":
                b = 1;
                break;
            case "sedentary":
                b = 1.2;
                break;
            case "light":
                b = 1.375;
                break;
            case "moderate":
                b = 1.55;
                break;
            case "hard":
                b = 1.725;
                break;
            case "nonstop":
                b = 1.9;
                break;
            default:
                b = 1
        }
        a *= b;
        $("#your_cal_intake").text(a.toFixed(2))
    }
}
function calc_easy_burned_unit(a, b) {
    var c = 0, d;
    for (d in b) {
        var e = parseFloat($("[name=hours_" + d + "]").val());
        0 > e && (e = 0);
        $("input[name=" + d + "]").prop("checked") && (e = b[d] * e * a, $("#" + d + "_value").text(e.toFixed(2)), c += e)
    }
    return c
}
function calc_easy_burned() {
    var a = "kilo" == $("[name=weight_select]").val() ? parseFloat($("[name=Weight]").val()) : 0.45359237 * parseFloat($("[name=Weight]").val());
    if (0 > a)
        $("#indicator").text("Como assim?!"), $("#easy_cal_burned").text("------");
    else {
        var b = calc_easy_burned_unit(a, MET_DATA_LIA);
        $("#lia_total").text(b.toFixed(2));
        var c = calc_easy_burned_unit(a, MET_DATA_MIA);
        $("#mia_total").text(c.toFixed(2));
        a = calc_easy_burned_unit(a, MET_DATA_VIA);
        $("#via_total").text(a.toFixed(2));
        $("#easy_cal_burned").text((b + c + a).toFixed(2));
        $("#indicator").text("See your customized data below:")
    }
}
function calc_adv_calculator() {
    var a = "kilo" == $("[name=weight_select]").val() ? parseFloat($("[name=Weight]").val()) : 0.45359237 * parseFloat($("[name=Weight]").val()), b = parseFloat($("[name=heartrate]").val()), c = parseFloat($("[name=Age]").val()), d = parseFloat($("[name=duration]").val());
    0 > c || 0 > b || 0 > a ? ($("#indicator").text("Por favor, complete o formulário."), $("#adv_calculator_value").text("")) : (0 > d && (d = 0), results = $("input[name=Male]").prop("checked") ? (0.2017 * c + 0.1988 * a + 0.6309 * b - 55.0969) * d / 4.184 : (0.074 * c - 0.1263 * a + 0.4472 * b - 20.4022) * d / 4.184, 0 >= results ? ($("#adv_calculator_value").text("------"), $("#indicator").text("Impossível! você tem certeza que usou os valores certos?")) : ($("#adv_calculator_value").text(results.toFixed(3)), $("#indicator").text("veja seus dados customizados abaixo:")))
};