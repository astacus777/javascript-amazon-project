import { formatCurrency } from "../scripts/utils/money.js";

if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}

if (formatCurrency(9999) === '99.99') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('works wit zero');

if (formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

console.log('rounds up with the')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
}