function distanceFromHqInBlocks(pickup) {
    if (pickup <= 42){
        return 42 - pickup;
    } else {
        return pickup - 42;
    }
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start <= destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}