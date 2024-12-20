import {statsRow } from "./githubprofiles.js";
const ystr = document.querySelector("#yrtrt");
const samt = document.querySelector("#samt");
const intr = document.querySelector("#intr");
const sfreq = document.querySelector("#sfreq");
const bstgt = document.querySelector("#bstgt");
const res = document.querySelector("#result");
const res_tb = document.querySelector('#table_body');
const gtser = document.querySelector("#gitsearchbox");
const profile_result = document.querySelector("#github-result-row");
const gittable = document.querySelector("#github-result-table");
const gittablebody = document.querySelector("#github-result-table-body");

function addMultipleChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
    return parent
}

function removeallChidren(){
    
    while (gittablebody.firstChild) {
        gittablebody.removeChild(gittablebody.firstChild);
    }
}

function converDateFormat(dateString){
    
    // Create a Date object
    const date = new Date(dateString);

    // Extract Month, Day, and Year
    const month = date.getMonth() + 1; // Months are zero-based (0 = January, 1 = February, etc.)
    const day = date.getDate();
    const year = date.getFullYear();

    // Format and display the result
    return `${month}/${day}/${year}`;
}

function getUserStats(e){
    e.preventDefault();
    let url = e.target.getAttribute("href");
    fetch(url)
        .then(response => {
            if (response.status === 200){
                return response.json();
            }else{
                throw new Error("Rate limit exceeded");
            }
        })
        .then(data => {

            statsRow(data.public_repos
                    ,data.public_gists
                    ,data.followers
                    ,data.following
                    ,converDateFormat(data.created_at)
                    ,converDateFormat(data.updated_at)
                    ,data.location
                    ,data.login
                    ,data.html_url
            )
        })

}

function appendRows(rownumber, username, url, apiurl){

    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.innerHTML =rownumber;

    const tdusername = document.createElement("td");
    tdusername.innerHTML = username;

    const tdurl = document.createElement("td");    
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.textContent = "Visit page"; // Set the text of the link

    tdurl.appendChild(link);
    
    const tdstats = document.createElement("td");
    //  add event listener to the api columns
    tdstats.addEventListener('click',  getUserStats);

    const linkstat = document.createElement("a");
    linkstat.href = apiurl;
    // linkstat.target = "_blank";
    linkstat.textContent = "Get stats"; // Set the text of the link
  
    tdstats.appendChild(linkstat);

    const row = addMultipleChildren(tr,[th,tdusername,tdurl,tdstats]);

    gittablebody.appendChild(row);
}

export function presetValue(){
    

    samt.value = 300;
    intr.value =3;
    sfreq.value = "3";
    ystr.value = 10;

}

export function calculateFutureValue() {
    const ctb = document.querySelector("#samt").value;
    const intr = document.querySelector("#intr").value;
    const ystr = document.querySelector("#yrtrt").value;
    const freq = document.querySelector("#sfreq").value;
    let divisor = 0
    if (freq === "1" ){
        divisor = 52;
    }else if (freq === "2") {
        divisor = 26;
    }else if (freq === "3") {
        divisor = 24;
    }else if (freq === "4") {
        divisor = 12;
    }else if (freq === "5") {
        divisor = 2;
    }else if (freq === "6") {
        divisor = 1;
    }
 
    // Define the parameters
    const biweeklyRate =  Math.pow(1 + intr / 100, 1 / divisor) - 1;; // Convert annual rate to biweekly
    const totalPeriods = ystr * divisor; // Total biweekly contributions over 10 years

    // Apply the future value of annuity formula
    const futureValue = (ctb * ((Math.pow(1 + biweeklyRate, totalPeriods) - 1) / biweeklyRate));
    res.innerHTML =`The future value of your saving will be:  ${futureValue.toLocaleString()}`
    // return futureValue.toFixed(2); // Return the result rounded to 2 decimal places
}


//////////// Github Functions ///////////////////////
export function gitHubFinder() {
    removeallChidren();
    gittable.classList = "table";
    let ser_val = gtser.value;
    let url = `https://api.github.com/search/users?q=${ser_val}+in:login`;

    fetch(url)
        .then(response => {
            if (response.status === 200){
                return response.json();
            }else{
                throw new Error("Rate limit exceeded");
            }
        })
        .then(data => {
            if (!data.message){
                let users = data.items;
                let counter = 1
                users.forEach(element => {
                    // get the url for each user
                    appendRows(counter,element.login, element.html_url, element.url);
                    counter ++;
                });
            }
        })
        .catch(error => console.error("Error fetching user data:", error));
    }