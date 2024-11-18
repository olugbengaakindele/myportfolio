
import {calculateFutureValue, presetValue , gitHubFinder } from './func.js';


const bstgt = document.querySelector("#bstgt");
const gtser = document.querySelector("#gitsearchbox");
const btsr = document.querySelector("#githubsearch")


window.addEventListener("load", presetValue);
window.addEventListener("load", calculateFutureValue);


bstgt.addEventListener("click" , calculateFutureValue);
btsr.addEventListener("click",  gitHubFinder);