const pdfToExcelGenerator = require('pdf-to-excel')


try {
    pdfToExcelGenerator.genXlsx('testbed\\CECInvoice00001.pdf','testbed\\CECInvoice00001.xlsx')
}catch(err){
    console.log("The error is: " + err)
}