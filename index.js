// Code your solution in this file!
const distanceFromHqInBlocks = (clientStreet) => Math.abs(clientStreet-42) 

const distanceFromHqInFeet = (clientStreet) => Math.abs(clientStreet - 42) * 264


function distanceTravelledInFeet(start,end) {
    return Math.abs(start-end)*264
}

// function calculatesFarePrice (start,end) {
//     const distanceInFeet = Math.abs(start - end) * 264
//     if (distanceInFeet <= 400) return 0
//     else if (distanceInFeet > 2500) return "cannot travel that far"
//     else if (distanceInFeet < 2000) return (distanceInFeet - 400) * .02
//     else return 25
// }

function calculatesFarePrice (start,end) {
    const distanceInFeet = Math.abs(start-end) * 264
    switch (true) {
        case (distanceInFeet <= 400):
            return 0;
            break;
        case (distanceInFeet > 2500):
            return "cannot travel that far";
            break;
        case (distanceInFeet <= 2000):
            return (distanceInFeet - 400) * .02;
            break;
        case (distanceInFeet > 2000):
            return 25;
    }
}