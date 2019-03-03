function onOpen() 
{
  SpreadsheetApp.getUi().createMenu('Google Picker')
      .addItem('Folder Picker', 'showFolderPicker')
      .addItem('File Picker', 'showFilePicker')
      .addToUi();
}