/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker(title, config) 
{  
  var html_template = HtmlService.createTemplateFromFile('library/FilePicker/html/picker.html')
  
  html_template.config = config;
  
   var html =  html_template
                     .evaluate()
                     .setWidth(600)
                     .setHeight(425) 
                     .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  
  SpreadsheetApp.getUi().showModalDialog(html,title );
}


function getOAuthToken() 
{
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}