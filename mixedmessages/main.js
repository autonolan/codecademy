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
    get progress () {
        return this._progress[Math.floor(Math.random() * this._progress.length)];
    },
    get operation () {
        return this._operation[Math.floor(Math.random() * this._operation.length)];
    },
    get location () {
        return this._location[Math.floor(Math.random() * this._location.length)];
    }
}
const generateMessage = () => {
    return
}