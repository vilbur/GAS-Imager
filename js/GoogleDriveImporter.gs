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
		var spread = SpreadsheetApp.getActiveSpreadsheet();
		var sheet = spread.getActiveSheet();
		var range = sheet.getActiveRange();

		var folders = DriveApp.getFoldersByName('Test-dummy-files');
		var _folder;
        var _files = [];

		/** Set images
		 *
		 */
		this.folder = function(folder_id)
		{
			_folder = DriveApp.getFolderById(folder_id);

			return this;
		};

		/** Import images to cells
		 */
		this.import = function()
		{
			setFiles( _folder.getFiles() );
            sortFiles();
            
            setFilesSharing();
            
			offsetRange(_files.length);
          
			range.setValues( getRowsOfImages() )
			
		};
		/** Get files from folder
		 */
		var setFiles = function( files )
		{          
          while (files.hasNext())
          {
            var File = files.next();
            
			if (isImage(File))
              _files.push(File);
          }
		};
		/** Sort files by filenames
		 */
		var sortFiles = function( )
		{          

            function compare(a, b)
            {
                const genreA = a.getName().toUpperCase();
                const genreB = b.getName().toUpperCase();
                
                var comparison = 0;
                if (genreA > genreB) {
                  comparison = 1;
                } else if (genreA < genreB) {
                  comparison = -1;
                }
                return comparison;
            }
            
            _files.sort(compare)
		};
		/** 
		 * @param [File] array of File objects
		 */
		var getRowsOfImages = function()
		{
             return _files.map(function(File){
               return getRowData(File);
             });
        };
		/** 
		 * @param File
		 */
		var getRowData = function(File)
		{
            return [ File.getName().split('.').shift(), getImportFormula(File)]
        };

		/** Import image
		 *
		 */
		var isImage = function(File)
		{
			return File.getMimeType().match(/image/) !== null
		};
		/** Get sharable link
		 */
		var setFilesSharing = function()
		{
          for(var i=0; i<_files.length;i++)
			_files[i].setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
		};
		/** Set image to cell
		 *
		 */
		var getImportFormula = function(File)
		{
			return '=IMAGE("http://drive.google.com/uc?export=view&id=' + File.getId() + '",1)';
		};

		/** Offset range
		 *
		 */
		var offsetRange = function( rows ) {
          	range = range.offset(0, 0, rows, 2 );
		};

	}

	return GoogleDriveImporter;
})();