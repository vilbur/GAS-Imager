/*=====================================================================================================================================*/
/*                                                                                                                                     */
/*  HTLM WRAPPERS                                                                                                                      */
/*                                                                                                                                     */
/* !!! OKOMENTOVAT FUNKCE !!! */
/*=====================================================================================================================================*/
/** Include files to html
*/
function include(filename)
{
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
/* ================================================================= */
/*  DIALOG                                                           */
/* ================================================================= */
/** 
*	Get dialog functions
*/
function showDialog(file, title)
{
  	var html = HtmlService.createTemplateFromFile(file).evaluate();
	SpreadsheetApp.getUi().showModalDialog(html, title);
}

/* === SIDEBAR ===
*/
function showSidebar(file, title){
  var html = HtmlService.createTemplateFromFile(file).evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle(title);
      SpreadsheetApp.getUi().showSidebar(html);
}
/* ================================================================= */
/*  ALER & CONFIRM                                                          */
/* ================================================================= */
/**
 * Show alert dialog
*/
function alert( message )
{
  SpreadsheetApp.getUi().alert(message);
}
/**
 * @return boolean TRUE if ok, false in cancel or close
*/
function showConfirm(title, message, buttons)
{
	if( typeof buttons === 'undefined' ) buttons = 'YES_NO';
	
	var ui = SpreadsheetApp.getUi(); // Same variations.
	var result = ui.alert(title, message, ui.ButtonSet[buttons]);

	// Process the user's response.
	if (result == ui.Button.YES || result == ui.Button.OK )
		return true;
	else 
		return false;
}
/* ================================================================= */
/*  PROMPT                                                           */
/* ================================================================= */

/**
* @return string|false|null return STRING if value inserted, FALSE if canceled, NULL if closed
*/
function showPrompt(title, message)
{
	var ui	= SpreadsheetApp.getUi(); // Same variations.
	var result	= ui.prompt(title, message, ui.ButtonSet.OK_CANCEL);
	var button	= result.getSelectedButton();
	var input	= result.getResponseText();
	if (button == ui.Button.OK) 
		return input;
	else if (button == ui.Button.CANCEL)
	  	return false;
	else if (button == ui.Button.CLOSE)
	  	return null;
}


/* ================================================================= */
/*  FILE PICKER                                                      */
/* ================================================================= */
/**
 * Displays an HTML-service dialog in Google Sheets that contains client-side
 * JavaScript code for the Google Picker API.
 */
function showPicker(title, data)
{
  if( typeof title === 'undefined' ) title = 'Select a file';
  var html_template = HtmlService.createTemplateFromFile('_FolderPicker.html')
  html_template.data = data;
  
   var html =  html_template.evaluate().setWidth(600)
      .setHeight(425) 
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(html,title );
}

/* ================================================================= */
/*  OPEN LINK                                                        */
/* ================================================================= */
/** Open link via html dialog
 * Run function > open dialog with link > click on link > close dialog
 * 
 */
function openLink(url, message)
{
  if( typeof message === 'undefined' ) message = 'Opening link';

  var htmlString = '<script>window.open("'+url+'");google.script.host.close();</script>';
  var htmlOutput = HtmlService.createHtmlOutput(htmlString).setSandboxMode(HtmlService.SandboxMode.IFRAME).setHeight(96);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, message);  
};




