const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const data = require("../contracts/contractsData/data");

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<h1 style="text-align: center;">Contract Agreement</h1>' 
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
    const html = fs.readFileSync(path.join(__dirname, "../contracts/template.html"), "utf8")

    const filename = new Date().toISOString().split('T')[0] + data[0].name + "_doc" + ".pdf";

    const { name, country, startDate, endDate, terminationPeriod, jobTitle, milestone, milestoneDescription, prefCurrency, paymentAmount } = data[0]

    let individual = {
                name,
                country,
                startDate,
                endDate,
                terminationPeriod,
                jobTitle,
                milestone,
                milestoneDescription,
                prefCurrency,
                paymentAmount,
    };

    const document = {
        html: html,
        data: {individual},
        path: "./contracts/" + filename,
        type: ""
    }
  
    pdf.create(document, options)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
}


module.exports = {
    generatePdf
}