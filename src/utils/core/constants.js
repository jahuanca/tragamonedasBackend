const activeState = 'A'
const inactiveState = 'I'
const currenciesMachine = [
    '10 centimos', '20 centimos', '50 centimos'
];
const typeIncomeInsert = 'Ingreso'
const typeIncomeExit = 'Salida'
const typesIncome = [
    typeIncomeInsert,
    typeIncomeExit,
];
const typesUser = [
    'Administrador',
    'Usuario',
]
const defaultCurrencyMachine = currenciesMachine[0]

module.exports = {
    forceModel: false,
    statesValues: [activeState, inactiveState],
    activeState,
    inactiveState,
    currenciesMachine,
    defaultCurrencyMachine,
    typesIncome,
    typeIncomeInsert,
    typeIncomeExit,
    typesUser,
}