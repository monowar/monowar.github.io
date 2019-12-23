Survey
    .StylesManager
    .applyTheme("modern");
var json = { surveyId: '9b2d6b7a-6e85-43e0-8f4d-80eb3bf207fb'};


window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
