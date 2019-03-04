function addMenu()
{
	var ui = SpreadsheetApp.getUi();

	ui.createMenu('GoogleDrive')
		//.addItem('Help', 'showHelpDialog')
		//.addSeparator()

	.addSubMenu(ui.createMenu('Image Importer')
		.addItem('ImporterTest', 'GoogleDriveImporterTest')
		.addItem('Folder Picker', 'showFolderPicker')
	)
	.addToUi();

}