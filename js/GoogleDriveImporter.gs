/**  
 *	
 */
var GoogleDriveImporter = (function()
{

	/*
		CONSTRUCT
	*/
	function GoogleDriveImporter()
	{
		var spread	= SpreadsheetApp.getActiveSpreadsheet();
		var sheet	= spread.getActiveSheet();
		var folders	= DriveApp.getFoldersByName('Test-dummy-files');
		var folder	= folders.next();

		/** Set images
		 *
		 */
		this.setImages = function()
		{
			var files	= folder.getFiles();
			var file = files.next();

			setFileSharing(file);
			setImageToCell(file);
			
		};
		
		/** Get sharable link
		 */
		var setFileSharing = function(file)
		{
			file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
		};
		
		/** Set image to cell
		 *
		 */
		var setImageToCell = function(file)
		{
          var range = sheet.getRange('A1');
          range.activate();
          
			range.setFormula('=IMAGE("http://drive.google.com/uc?export=view&id=' + file.getId()+'",2)');
		};
		
	}
	
	
	return GoogleDriveImporter;
})();



