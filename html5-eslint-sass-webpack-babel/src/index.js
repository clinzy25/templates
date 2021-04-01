import '../styles/index.scss';

const elvenShield = {
    leatherStrips: 2,
    ironIngot: 1,
    refined: 4,
};

const elvenGauntlet = {
    ...elvenShield,
    leather: 1,
    refinedMoonstone: 4,
};

console.log(elvenShield);
console.log(elvenGauntlet);

var a = 1;

/**
 * If eslint is working, var will be linted
 * If prettier is working, a semicolon will be added upon save
 * If JSDocs plugin is working, this block will not be linted
 */
