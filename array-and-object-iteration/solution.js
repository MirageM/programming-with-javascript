var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var item of dairy) {
        console.log(item)
    }
}

const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

// canFly: true
// hasFeathers: true
function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop])
    }
}

// canFly: true
// hasFeathers: true
// canJunmp: true
function animalCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop])
    }
    for (var prop of Object.keys(animal)) {
        console.log(prop + ": " + animal[prop])
    }
}

logDairy();
birdCan();
animalCan();