/* Mixed Messages
/ Nolan Teasdale-Schafle
/ Random message generator that simulates
/ log output from a liquid handler protocol
/ as it progresses through a run
/ e.g. "starting aspirate from well 1 on plate 3."
*/
const liquidHandlerMessages = {
    _progress: [
        'starting',
        'completed',
        'ready',
        'in error',
        'error cleared',
        'failed',
        'stopping',
        'skipping',
        'waiting',
    ],
    _operation: [
        'aspirate',
        'dispense',
        'mix',
        'wash',
        'tip pickup',
        'tip eject',
        'liquid level detection',
    ],
    _location: [
        'plate',
        'well',
        'tube',
        'trough',
    ],
    get randProgress () {
        return this._progress[Math.floor(Math.random() * this._progress.length)];
    },
    get randOperation () {
        return this._operation[Math.floor(Math.random() * this._operation.length)];
    },
    get randLocation () {
        return this._location[Math.floor(Math.random() * this._location.length)];
    }
};

var lastProgress;
var runLength = 15;

const getProgressMessage = () => {
    if (lastProgress === 'starting') {
        do {
            lastProgress = liquidHandlerMessages.randProgress;
        } while (lastProgress === 'starting');
    } else if (lastProgress === 'in error') {
        do {
            lastProgress = liquidHandlerMessages.randProgress;
        } while (!(lastProgress === 'error cleared' || lastProgress === 'failed'));
    } else if (lastProgress === 'waiting') {
        do {
            lastProgress = liquidHandlerMessages.randProgress;
        } while (!(lastProgress === 'waiting' || lastProgress === 'completed'));
    } else {
        lastProgress = liquidHandlerMessages.randProgress;
    }

    return lastProgress;
};
const generateMessage = (step) => {
    let currentProgress = getProgressMessage();
    return `Step ${step}: ${currentProgress}`;
};

for (let step = 1; step < runLength; step++) {
    console.log(generateMessage(step));
}