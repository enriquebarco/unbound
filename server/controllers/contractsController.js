const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const { json } = require("express");


// data to be used in PDF
const grabData = fs.readFileSync("./contracts/contractsData/data.json");
const data = JSON.parse(grabData);

// PDF format
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

// function to generate the PDF
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

    const filepath = 
  
    pdf.create(document, options)
        .then(res => {
            console.log(res);
            res.status(200).send(res)
        })
        .catch(error => {
            console.log(error);
        });
    
    
}

const createData = (req, res) => {

    const { businessName, name, country, startDate, endDate, terminationPeriod, jobTitle, milestone, milestoneDescription, prefCurrency, paymentAmount } = req.body

    if(!businessName || !name || !country || !startDate || !terminationPeriod || !jobTitle || !milestone || !milestoneDescription || !prefCurrency || !paymentAmount) {
        return res.status(400).send("Error, missing necessary parameters")
    }

    newDataArr = []

    const newData = {
            businessName,
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
    }

    newDataArr.push(newData);
    fs.writeFileSync("./contracts/contractsData/data.json", JSON.stringify(newDataArr));

    // Respond with the new item that was added to PDF creation file
    res.status(201).json(newData);
}


module.exports = {
    generatePdf,
    createData
}