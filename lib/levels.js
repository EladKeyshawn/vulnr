

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
        answer: "8172356177751136980678878144461777193678998867965386214659479",
        nextLevel: "./ip-scan.html"
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




