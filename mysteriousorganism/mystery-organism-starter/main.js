// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// P. Aequor object factory

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate () {
      const randomBaseLoc = Math.floor(Math.random() * this.dna.length);
      let mutatedBase = returnRandBase();
      while (mutatedBase === this.dna[randomBaseLoc]) {
        mutatedBase =returnRandBase();
      }
      this.dna[randomBaseLoc] = mutatedBase;
    },
    compareDNA (otherSpecimen) {
      const commonDNA = otherSpecimen.dna.filter((otherDNA, index) => {
        return otherDNA === this.dna[index];
      });
      console.log(`specimen #${this.specimenNum} and specimen #${otherSpecimen.specimenNum} have ${(commonDNA.length)*100/this.dna.length}% DNA in common.`)
    },
    willLikelySurvive () {
      const cAndGBases = this.dna.filter(base => (base === 'C' || base === 'G') ? true : false);
      return ((cAndGBases.length/this.dna.length) >= 0.6) ? true : false;
    }
  }
};

const generateLivingSpecimens = (quantity) => {
  const livingSpecimens = [];
  let currentSpecimen;
  for (let count = 1; count <= quantity; count++) {
    do {
        currentSpecimen = pAequorFactory(count, mockUpStrand());
    } while (!currentSpecimen.willLikelySurvive());
    livingSpecimens.push(currentSpecimen);
  };
  return livingSpecimens;
};
//let testSpecimen = pAequorFactory(1, ['A', 'G', 'T', 'C', 'A', 'A', 'T', 'C']);
//console.log(testSpecimen.dna);
//testSpecimen.mutate();
//console.log(testSpecimen.dna);
//testSpecimen.compareDNA({specimenNum: 2, dna: ['A', 'G', 'T', 'C', 'G', 'G', 'T', 'C']});
//console.log(testSpecimen.willLikelySurvive());
console.log(generateLivingSpecimens(30));


