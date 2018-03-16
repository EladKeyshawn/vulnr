const rp = require('request-promise');


const SolutionMap = {
  1: {
    answer: 'abc1234',
    nextLevel: './xss1.html',
  },
  2: {
    answer: 'abc1234',
    nextLevel: './xss1',
  },
  3: {
    answer: 'sfl34lkf',
    nextLevel: './sql_injection.html',
  },
  4: { // sql injection
    answer: '3490d73f461b8a759cb1f21634639649',
    nextLevel: './ip-scan.html',
  },
  5: { // ip-scan
    answer: 'SOME PASSWORD',
    nextLevel: './takeover.html',
  },
  6: { // takover
    answer: 'SDHF24356',
    nextLevel: './encryption.html',
  },
  7: { // encryption
    answer: 'GoodJob7',
    nextLevel: './final.html',
  },
};


module.exports = {
  validate: async (level, solution) => {
    console.log('Level:', level, 'Checking solution:', solution);
    if (SolutionMap[level] && SolutionMap[level].answer === solution) {
      return { status: true, next: SolutionMap[level].nextLevel };
    }

    return { status: false };
  },

  checkDomainTakover: () => rp('https://takeover.hack-au.com/')
    .then((res) => {
      if (res.length > 5) {
        return { status: true, answer: SolutionMap[6].answer };
      }
      return { status: false };
    })
    .catch(err => ({ status: false })),
};

