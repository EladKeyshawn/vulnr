

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
        answer:"abc1234",
        nextLevel: "./xss1"
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




