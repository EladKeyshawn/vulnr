

const SolutionMap = {
    "1": "abc1234",
    "2": "fsdf342",
    "3": 'sfsf23fsd'
};

module.exports = {
    validate:  (level,solution) => {
        return (SolutionMap[level] === solution);
    }
}




