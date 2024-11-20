
import {calculateFutureValue, presetValue , gitHubFinder, getNews  } from './func.js';


const bstgt = document.querySelector("#bstgt");
const gtser = document.querySelector("#gitsearchbox");
const btsr = document.querySelector("#githubsearch")
const newsearchbtn = document.querySelector("#newssearchbutton");


window.addEventListener("load", presetValue);
window.addEventListener("load", calculateFutureValue);


bstgt.addEventListener("click" , calculateFutureValue);
btsr.addEventListener("click",  gitHubFinder);
newsearchbtn.addEventListener("click", getNews)