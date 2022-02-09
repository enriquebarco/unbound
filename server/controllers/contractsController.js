const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");



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

    const { businessName, name, country, startDate, endDate, terminationPeriod, jobTitle, milestone, milestoneDescription, prefCurrency, paymentAmount } = data[0]

    //creating the filepath
    const fileCreationDate = new Date().toISOString().split('T')[0];
    const teamMemberName = name.split(" ").join("");

    // const filename = fileCreationDate + teamMemberName + "_doc.pdf"
    const filename = "samole.pdf";

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
        path: "./static/" + filename,
        type: ""
    }

    console.log(document.path);

    const filepath = process.env.BASE_URL + "/static/" + filename;
  
    pdf.create(document, options)
        .then(pdfResponse => {
            res.setHeader("Content-type","application/pdf").send(filepath)
        })
        .catch(error => {
            console.log(error);
        });
}

const createData = (req, res) => {

    const { name, country, startDate, endDate, terminationPeriod, jobTitle, milestone, milestoneDescription, prefCurrency, paymentAmount } = req.body

    if(!name || !country || !startDate || !terminationPeriod || !jobTitle || !milestone || !milestoneDescription || !prefCurrency || !paymentAmount) {
        return res.status(400).send("Error, missing necessary parameters")
    }

    newDataArr = []

    const newData = {
            businessName: req.user.businessName,
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

// const showPDF = (req, res) => {
//     const path = "/contracts/2022-02-08kike_doc.pdf"
//     console.log("Here!!" + req.path);
//     if (fs.existsSync(path)) {
//         res.contentType("application/pdf");
//         fs.createReadStream(path).pipe(res)
//     } else {
//         res.status(500)
//         console.log('File not found')
//         res.send('File not found')
//     }
// }


module.exports = {
    generatePdf,
    createData,
    // showPDF,
}