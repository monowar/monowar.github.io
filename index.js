Survey
    .StylesManager
    .applyTheme("bootstrap");

var surveyJSON = { surveyId: '9b2d6b7a-6e85-43e0-8f4d-80eb3bf207fb'}

function sendDataToServer(survey) {
    survey.sendResult('08c4679f-f05b-4c6c-bcfd-5f68e09abfd4');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
