function addMenu()
{
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Imager')
  .addItem('Help', 'showHelpDialog')
  .addSeparator()
  .addSubMenu(ui.createMenu('Sub-menu')
              .addItem('Second item', 'menuItem2'))
  .addToUi();
  
  
}