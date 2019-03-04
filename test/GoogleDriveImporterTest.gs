function GoogleDriveImporterTest() 
{
  var folders	= DriveApp.getFoldersByName('Test-dummy-files');
  var Importer = new GoogleDriveImporter();
  
  Importer
      .folder( folders.next().getId() )
      .import();
}
