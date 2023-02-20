const { exec } = require("child_process");
const { download } = require("./download-file");

const url = 'http://localhost:3333/api-json';
const output = 'api.json';
const folderOutput = 'libs/shared/api-client/src/lib'

async function runProcess(input, message) {
    exec(input, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        console.log(message);
    })
}

async function generateCode() {
    await download(url, output);
    runProcess(
        `npx @openapitools/openapi-generator-cli generate -i api.json -g typescript-axios -o ${folderOutput}`,
        'API Client library completed.'
    );
    runProcess(
        `npx @openapitools/openapi-generator-cli generate -i api.json -g html2 -o ${folderOutput}`,
        'API Documentation completed.'
    );
}

generateCode();


