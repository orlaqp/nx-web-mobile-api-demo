const { exec } = require("child_process");
const { readFileSync } = require("fs");
const { download } = require("./download-file");

const url = 'http://localhost:3333/api-json';
const output = 'api.json';


async function createClient() {
    await download(url, output);
    exec('npx openapi-generator-cli generate -i api.json -g typescript-axios -o generated', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        console.log('API Client library completed.');
    })
}

async function createDocumentation() {
    await download(url, output);
    exec('npx openapi-generator-cli generate -i api.json -g html2 -o generated', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        console.log('API Client Documentation completed.');
    })
}

createClient();
createDocumentation();

