function addMenu()
{
	var ui = SpreadsheetApp.getUi();

	ui.createMenu('GoogleDrive')
		//.addItem('Help', 'showHelpDialog')

//	.addSubMenu(ui.createMenu('Image Importer')
		.addItem('ImportImagesFromFolder', 'ImportImagesFromFolder')
		.addItem('ImportSingleImage', 'ImportSingleImage')
        .addSeparator()
		.addItem('Folder Picker', 'showFolderPicker')
		.addItem('File Picker', 'showFilePicker')
//	)
	.addToUi();

}