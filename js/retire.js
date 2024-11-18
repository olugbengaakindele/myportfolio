const tamt = document.querySelector("#tamt");
const samt = document.querySelector("#samt");
const intr = document.querySelector("#intr");
const sfreq = document.querySelector("#sfreq");
const bstgt = document.querySelector("#bstgt");
const res = document.querySelector("#result");
const res_tb = document.querySelector('#table_body')

tamt.value = 10000;
samt.value = 300;
intr.value =3;
sfreq.value = "3"



// conver the number of periods to weeks and years
function convertWeeksToYearsAndMonths(weeks, divisor) {
        
    let  weeksInYear = 52;
    let weeksInMonth = 4.345; // Average number of weeks in a month

    if ( divisor = 1 ) {
        weeksInYear =  52;
        weeksInMonth = 4;
    }else if ( divisor = 2  ) {
        weeksInYear =  24;
        weeksInMonth = 2;
    }else if ( divisor = 3  ) {
        weeksInYear =  26;
        weeksInMonth = 2.3;
    }else if ( divisor = 4  ) {
        weeksInYear =  12;
        weeksInMonth = 1;
    }else if ( divisor = 5  ) {
        weeksInYear =  1;
        weeksInMonth = 1;
    }


    const years = Math.floor(weeks / weeksInYear);
    const remainingWeeks = weeks % weeksInYear;
    const months = Math.floor(remainingWeeks / weeksInMonth);

    return `It will take you ${ years} year(s),  ${months} month(s) to reach the target`;
}



///////////////////This creates the row/////////////////////////////////////////////////////
function createTableRow(per,date,sav,int){
    const tr_row = document.createElement("tr")
    const th_per = document.createElement("td");
    const th_date = document.createElement("td");
    const th_sav = document.createElement("td");
    const th_int = document.createElement("td");
    const row = document.getElementById(`${per}`);
    

    th_per.innerHTML = per;
    th_date.innerHTML = date;
    th_sav.innerHTML = sav;
    th_int.innerHTML = int;    

    tr_row.appendChild(th_per);
    tr_row.appendChild(th_date);
    tr_row.appendChild(th_sav);
    tr_row.appendChild(th_int);
    tr_row.setAttribute('id', per)
    // const firstitem = document.querySelector(`#${per}`);
    console.log(res_tb.firstElementChild);
    // Insert before the last row if there’s already at least one row
    if (res_tb.firstElementChild ) {
        res_tb.insertBefore(tr_row, res_tb.firstElementChild); 
    } else {
        // If no rows exist, simply append
        res_tb.appendChild(tr_row); 
    }
    
}

//////////// get the last date //////////////////////////////////////////////
function getLastDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}


//////////// get the last date //////////////////////////////////////////////
export function calculateSavingsGoal() {

    if (res_tb) {
        while (res_tb.firstChild) {
            res_tb.removeChild(res_tb.firstChild);
        }
      } 




    // show the result table
    res_tb.style.display = '';
    let date_val =  new Date();
    //  get thes savings frequeny 
    let divisor = 0;
    let term = NaN;
    let date_incr = 0;
    const freq = document.querySelector("#sfreq").value;
    if (freq === "1" ){
        divisor = 52;
    }else if (freq === "2" ){
        divisor = 26;
    }else if (freq === "3" ){
        divisor = 12
    }else if (freq === "4" ){
        divisor = 1
    }
    const tamtv=  tamt.value;
    const samtv = +(samt.value);
    const intrv = +(intr.value);
    let st_point = 0;
    let periods = 0;
    const biWeeklyInterestRate = (intrv / 100) / divisor;



    while (st_point <= tamtv){
            createTableRow(periods,date_val.toISOString().split('T')[0],(st_point + samtv).toFixed(2),((st_point + samtv) * biWeeklyInterestRate ).toFixed(2))

            st_point = ((st_point + samtv) * biWeeklyInterestRate ) + (st_point + samtv) ; 
            
            if (freq === "1" ){
                date_val.setDate(date_val.getDate() + 7);
            }else if (freq === "2" ){
                date_val.setDate(date_val.getDate() + 14);

            }else if (freq === "3" ){
                date_val.setMonth(date_val.getMonth() + 1)

            }else if (freq === "4" ){
                date_val.setFullYear(date_val.getFullYear() + 1)

            }
            
            periods ++;

    }
    let lenInYers = convertWeeksToYearsAndMonths(periods, divisor) ;    
    console.log(lenInYers);
    res.innerHTML = lenInYers;
 
}


