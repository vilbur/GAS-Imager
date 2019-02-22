function addMenu()
{
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Menu')
  .addItem('First item', 'menuItem1')
  .addSeparator()
  .addSubMenu(ui.createMenu('Sub-menu')
              .addItem('Second item', 'menuItem2'))
  .addToUi();
  
  
}