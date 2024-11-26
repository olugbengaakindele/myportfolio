import { minDate, maxDate, province } from './data.js';

window.addEventListener("load", () => {
    const start_date = document.getElementById("start-date");
    const end_date = document.getElementById("end-date");

    end_date.values = maxDate();
    start_date.values = minDate();
    console.log(province() );
});

