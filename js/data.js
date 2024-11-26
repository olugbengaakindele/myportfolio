

export async function getData() {
    try {
        const response = await fetch('js/sales_data.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        const lines = data.split('\n');
        const headers = lines[0].split('\t');
 
        const final_data = lines.slice(1)
            .filter(line => line.trim() !== '')
            .map(line => {
                const values = line.split('\t');
                const record = {};
                headers.forEach((header, index) => {
                    record[header.trim()] = values[index].trim();
                });
                return record;
            });
        
        return final_data;

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

export async function main() {
    let all_dates = [];
    let min_date = '';
    let max_date = '';
    let agent =[];
    let province = [];
    let ylabel =[];
    let xlabel =[];    
    const response = await getData();

    // Collect date strings into the array
    response.forEach(item => {
        let dt = new Date(item.Date)
        all_dates.push(new Date(item.Date)); // Convert strings to Date objects
        xlabel.push(item.Date);
        ylabel.push(item.Sales_Amount)
        agent.push(item.Agent_Name);
        province.push(item.Province);
    });

    // Find the minimum and maximum dates
    const minDate = new Date(Math.min(...all_dates));
    const maxDate = new Date(Math.max(...all_dates));

    min_date = minDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    max_date = maxDate.toISOString().split('T')[0];
    
    return [xlabel,ylabel, min_date, max_date, response,[...new Set(province)].sort(),[...new Set(agent)].sort()];
}

// Get the ylabel
async function ylabel() {
    const [, ylabel] = await main(); // Destructure the returned arrays
    
    return ylabel; // Access ylabel
}

//  get the xlabel
async function xlabel() {
    const [xlabel, ] = await main(); // Destructure the returned arrays
    return xlabel; 
}

//  get the xlabel
export async function minDate() {
    const [, , min_date ] = await main(); // Destructure the returned arrays
    return min_date ; 
}

//  get the xlabel
export async function maxDate() {
    const [, , , max_date ] = await main(); // Destructure the returned arrays
    return max_date ; 
}

//  get the xlabel
export async function province() {
    const [ , , , , ,province ,  ] = await main(); // Destructure the returned arrays
    return province ; 
}
const ctx = document.getElementById('myChart').getContext('2d');
// Data for the chart
const data = {
    labels: await xlabel(),
    datasets: [{
      label: 'Monthly Sales',
      data: await ylabel(),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4 // Smooth lines
    }]
  };

  // Chart configuration
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        }
      }
    }
  };

  // Render the chart
  const myLineChart = new Chart(ctx, config);

