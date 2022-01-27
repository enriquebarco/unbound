const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");

const grabData = fs.readFileSync("./contracts/contractsData/data.json");
const data = JSON.parse(grabData);

const options = {
    format: "A4",
    orientation: "portrait",
    border: "20mm",
    header: {
        height: "30mm",
        contents: '<h1 style="text-align: center;">Contract Agreement</h1>' 
    },
    footer: {
        height: "28mm",
    }
};

const generatePdf = async (req,res,next) => {
    const html = fs.readFileSync(path.join(__dirname, "../contracts/template.html"), "utf8")

    const filename = new Date().toISOString().split('T')[0] + data[0].name + "_doc" + ".pdf";

    const { businessName, name, country, startDate, endDate, terminationPeriod, jobTitle, milestone, milestoneDescription, prefCurrency, paymentAmount } = data[0]

    let individual = {
                businessName: businessName.toUpperCase(),
                name: name.toUpperCase(),
                country,
                startDate,
                endDate,
                terminationPeriod,
                jobTitle,
                milestone,
                milestoneDescription,
                prefCurrency,
                paymentAmount: paymentAmount.toLocaleString("en-US")
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