const activeState = 'A'
const inactiveState = 'I'
const currenciesMachine = [
    '10 centimos', '20 centimos', '50 centimos'
];
const defaultCurrencyMachine = currenciesMachine[0]

module.exports = {
    forceModel: false,
    statesValues: [activeState, inactiveState],
    activeState,
    inactiveState,
    currenciesMachine,
    defaultCurrencyMachine,
}