function hour(moon: number, earth: number, sun: number) {
    let result = 0;

    if (moon === 1) {
        result -= 2;
        result += 1;
    }

    if (sun === 1) {
        result += 1;
    }

    if (sun === 2) {
        result += 2 + earth;
    }

    if (earth === 1 && sun === 2) {
        result += 2;
        result += 1;
    }

    if (moon === 2) {
        result += 2;
        result /= 2;
    }

    if (earth === 2 && sun === 2) {
        result = 6;
    }

    return result;
}

function temps(result: number) {
    let temporalite = "";

    if (result <= 1) {
        temporalite = "mortin";
    } else if (result > 1 && result <= 2) {
        temporalite = "aprenoon";
    } else if (result > 2 && result <= 4) {
        temporalite = "soirning";
    } else {
        temporalite = "nuight";
    }

    return temporalite;
}

export { hour, temps };

