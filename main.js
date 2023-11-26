function startClassifaction () {
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AInir8QAf/model.json', modelReady);
}

function modeReady() {
    classifier.classify(gotResults);
}