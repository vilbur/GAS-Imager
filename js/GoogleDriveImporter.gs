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
		var range	= sheet.getActiveRange();

		var folders	= DriveApp.getFoldersByName('Test-dummy-files');
		var _folder;

		/** Set images
		 *
		 */
		this.folder = function(folder_id)
		{
		    _folder	= DriveApp.getFolderById( folder_id );
          
          return this;
		};
      
		/** Set images
		 *
		 */
		this.import = function()
		{
			var files	= _folder.getFiles();
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
                  
			range.setFormula('=IMAGE("http://drive.google.com/uc?export=view&id=' + file.getId()+'",2)');
		};
		
	}
	
	
	return GoogleDriveImporter;
})();



