
function showFolderPicker()
{
  
  showPicker('Browse a folder',{
    mimeTypes:'application/vnd.google-apps.folder', // List of mimetypes: https://developers.google.com/drive/api/v3/mime-types
   
   /* DocsView https://developers.google.com/picker/docs/referenc#DocsView */
    IncludeFolders:true,
    SelectFolderEnabled:true,
    
   /* DocsViewMode https://developers.google.com/picker/docs/referenc#DocsViewMode */
    GRID: false,
    
   /* Feature https://developers.google.com/picker/docs/referenc#Feature */
    MULTISELECT_ENABLED:true,

  })

}


function showFilePicker()
{
  
  showPicker('Browse a images',{
//    mimeTypes:'application/vnd.google-apps.file',
    mimeTypes:'image/png,image/jpeg,image/jpg,image/gif,image/bmp',
    IncludeFolders:true,
    SelectFolderEnabled:true,
    GRID: false,
    
    MULTISELECT_ENABLED:true,
  })

}


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

/*
*/
function getOAuthToken() 
{
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}