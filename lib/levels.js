

const SolutionMap = {
    "1": {
        answer:"abc1234",
        nextLevel: "./xss1.html"
    },
    "2": {
        answer:"abc1234",
        nextLevel: "./xss1"
    },
    "3": {
        answer:"sfl34lkf",
        nextLevel: "./sql_injection.html"
    },
    "4": {
        answer: "shlomi@gmail.com",
        nextLevel: "./netcat.html"
    },
    "5": {
        answer: "SOME PASSWORD",
        nextLevel: "./final.html"
    }
};

module.exports = {
    validate:  (level,solution) => {
        console.log('Level:',level,'Checking solution:', solution );
        if(SolutionMap[level] && SolutionMap[level].answer === solution) {
            return {status: true, next: SolutionMap[level].nextLevel};
        }

        return {status: false};
    }
}




