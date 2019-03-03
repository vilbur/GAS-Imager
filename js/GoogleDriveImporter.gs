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
			var files = getFilesToArray( _folder.getFiles() );

			offsetRange(files.length);
          
			range.setValues( getRowsOfImages(files) )
			
		};
      
		/** 
		 * @param [File] array of File objects
		 */
		var getRowsOfImages = function(files)
		{
             return files.map(function(File){
               return getRowData(File);
             });
        };
      
		/** 
		 * @param File
		 */
		var getRowData = function(File)
		{
            return [File.getName()]
        };

		/** Get files from folder
		 */
		var getFilesToArray = function( files )
		{
          var files_array	= [];
          
          while (files.hasNext())
            files_array.push(files.next());
          
          return files_array;
		};

		/** Import image
		 *
		 */
		var importImage = function(file)
		{
			Logger.log(file.getName() + ': ' + isImage(file));
			if (isImage(file) === false)
				return;

			setFileSharing(file);
			getImportFormula(file);

        };
		/** Import image
		 *
		 */
		var isImage = function(file)
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
		var getImportFormula = function(file)
		{
			'=IMAGE("http://drive.google.com/uc?export=view&id=' + file.getId() + '",2)';
		};

		/** Offset range
		 *
		 */
		var offsetRange = function( rows ) {
          	range = range.offset(0, 0, rows, 1 );
		};
		
		

		/**  
		 *	
		 */
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


		
		
		
	}


	return GoogleDriveImporter;
})();