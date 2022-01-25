const pdfkit = require("pdfkit");

const pdfdocument = new pdfkit

pdfdocument.pipe(fs.createWriteStream("output.pdf"))

pdfdocument.text("hello world")
.fontSize(25)

doc.end();