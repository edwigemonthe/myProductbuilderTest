//3.4. Task 3: A NodeJS file
const axios = require('axios');
const fs = require('fs').promises;

async function saveAPI() {
    try {
        let response = await axios.get('https://api.publicapis.org/entries');//Opennig of the link
        let apiList = '';
        response.data.entries.forEach(api => {
            apiList += `${api['API']},${api['Link']}\n`;//Completing of the CSV table by the entries one bye one (API and Link of downlaod) 
        });
        await fs.writeFile('asynApis.csv', apiList);
    } catch (error) {
        console.error(`Could not save API to a file: ${error}`);
    }
}

saveAPI();