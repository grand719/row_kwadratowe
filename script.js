import {delta} from './script/delta.js';
import {solveEquation} from'./script/solveEquation.js';
import {splitEquation} from'./script/splitEquation.js';

const form = document.querySelector("form");
const input = document.querySelector('input');



form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const tabsObject = new splitEquation(input.value);
    console.log(tabsObject);
    alert(solveEquation(tabsObject, delta(tabsObject)));

})


