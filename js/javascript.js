import { add, subtract, multiply, divide } from './calcModule.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button[data-op]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        let res = "";

        if (isNaN(a) || isNaN(b)) {
            res = "Iltimos, har ikkala sonni kiriting!";
        } else {
            switch (btn.dataset.op) {
                case 'add':
                    res = add(a, b);
                    break;
                case 'subtract':
                    res = subtract(a, b);
                    break;
                case 'multiply':
                    res = multiply(a, b);
                    break;
                case 'divide':
                    res = divide(a, b);
                    break;
            }
        }

        result.textContent = `Natija: ${res}`;
    });
});