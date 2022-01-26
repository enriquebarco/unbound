const fs = require("fs");
const pdf = require("pdf-creator-node");
const data = require("../contracts/contractsData");


const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: <header style="text-align: center;">Contract</header>
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

const generatePdf = async (req,res,next) => {
    const html = fs.readFileSync(path.join(__dirname, "../contracts/template.html"), "utf-8")
    const filename = Math.random() + "_doc" + ".pdf";

    const document = {
        html: html,
        data: data,
        path: "./contracts/" + filename
    }

    pdf.create(document, options)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
        // const filepath = 
}