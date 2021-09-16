function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://storage.googleapis.com/tm-model/tXAaX0kS0/model.json');
    modelReady();
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);

        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "Sound - " + results[0].label;
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        if(results[0].label == "Dog") {
            document.getElementById("animal_image").src = "Dog.jpeg";
        }
        else if(results[0].label == "Cat") {
            document.getElementById("animal_image").src = "Cat.jpeg";
        }
        else if(results[0].label == "Duck") {
            document.getElementById("animal_image").src = "Duck.jpeg";
        }
        else if(results[0].label == "Chicken") {
            document.getElementById("animal_image").src = "Chicken.jpeg";
        }
        else {
            console.log("I FORGOT")
        }
    }
}