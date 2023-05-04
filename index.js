import chalk from 'chalk';
import * as moduloController from './controller.js';

const multip = moduloController.multiplica(1, 2);

const sum = moduloController.suma(4, 5);

console.log(multip);
console.log(chalk.green(sum));