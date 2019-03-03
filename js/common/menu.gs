function addMenu()
{
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Imager')
  .addItem('Help', 'showHelpDialog')
  .addItem('Sidebar', 'showSidebarDialog')
 .addSeparator()
  .addItem('ImporterTest', 'GoogleDriveImporterTest')
   .addItem('Folder Picker', 'showFolderPicker')

 // .addSubMenu(ui.createMenu('Sub-menu')
  //            .addItem('Second item', 'menuItem2'))
  .addToUi();
  
  
}