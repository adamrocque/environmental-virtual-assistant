var pdf_table_extractor = require("pdf-table-extractor");
 
//PDF parsed
function success(result)
{
    console.log(result['pageTables'][0]['tables']);
    // var tableData = JSON.stringify(result)
    // console.log(JSON.stringify(result));

}
 
//Error
function error(err)
{
   console.error('Error: ' + err);
}
 
// pdf_table_extractor("testbed\\CECInvoice00001.pdf",success,error);
pdf_table_extractor("testbed\\Invoice.pdf",success,error);
