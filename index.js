// code your solution here

function saturdayFun(string="roller-skate"){
    let activity = `This Saturday, I want to ${string}!`;
    return activity;
}

function mondayWork(string="go to the office"){
    let activity = `This Monday, I will ${string}.`;
    return activity;
}

function wrapAdjective(string="*"){
    return function (adjective="special"){
        return `You are ${string}${adjective}${string}!`;
    }
}