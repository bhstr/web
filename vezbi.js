let br = 6;
let br1 = 10;
let sum = br + br1;
console.log(sum);

function zadolzitelnaLiteratura(input) {

    let numOfPages = Number(input[0]);
    let pagesIn1H = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let totalTime = numOfPages / pagesIn1H;
    let neededTime = totalTime / daysNeeded;
    console.log(neededTime);
}

zadolzitelnaLiteratura(['212', '20', '2'])
zadolzitelnaLiteratura(['432', '15', '4'])