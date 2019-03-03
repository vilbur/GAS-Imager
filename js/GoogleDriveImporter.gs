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
      
		/** Import images to cells
		 */
		this.import = function()
		{
			var files	= _folder.getFiles();
			
			while (files.hasNext())
				importImage(files.next());

		};
		/** Import image
		 *
		 */
		var importImage = function( file )
		{
            Logger.log( file.getName() +': '+ isImage(file) );
           if( isImage(file)==false )
             return
          
          setFileSharing(file);
          setImageToCell(file);
          offsetRange();
		};
   		/** Import image
		 *
		 */
		var isImage = function( file )
		{          
			return file.getMimeType().match(/image/) !== null
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
		
		/** Offset range
		 *
		 */
		var offsetRange = function()
		{
			range = range.offset(1, 0 );
		};
	}
	
	
	return GoogleDriveImporter;
})();



