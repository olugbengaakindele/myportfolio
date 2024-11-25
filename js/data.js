// Fetch and convert .txt data to JSON
async function oldGetData() {
    try {
        // Fetch the sales_data.txt file
        const response = await fetch('js/sales_data.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Get the raw text content
        const textData = await response.text();
        
        // Split the text by lines
        const lines = textData.split('\n');
        
        // Extract column headers from the first line
        const headers = lines[0].split('\t');
        
        // Convert each subsequent line into a JSON object
        const jsonData = lines.slice(1).filter(line => line.trim() !== '').map(line => {
            const values = line.split('\t');
            const record = {};
            headers.forEach((header, index) => {
                record[header.trim()] = values[index].trim();
            });
            return record;
        });
        
        // Log the JSON data for verification
        console.log(jsonData);

        // Return the JSON data for further analysis
        return jsonData;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}


async function getData(){
     // Fetch the sales_data.txt file
     const response = await fetch('js/sales_data.txt');
     try{
        
        if (!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
     }
        const data = await response.text();
        // Split the text by lines
        const lines = data.split('\n');
        
        // Extract column headers from the first line
        const headers = lines[0].split('\t');

        let final_data = []
        // Convert each subsequent line into a JSON object
        const jsonData = lines.slice(1).filter(line => line.trim() !== '').map(line => {
        const values = line.split('\t');
        const record = {};
        headers.forEach((header, index) => {
            record[header.trim()] = values[index].trim();
        });
            final_data.push(record);
            
        });
        
        // console.log(final_data.length);
        return final_data;

    } catch {
        console.error("Error fetching or processing data:", error);
    }

}


// Use the function
const dg = getData();
console.log(dg)

