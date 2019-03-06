/**
*/
function ImportImagesFromFolder() 
{
  var folders	= DriveApp.getFoldersByName('Test-dummy-files');
  var Importer = new ImageImporter();
  
  Importer
      .folder( folders.next().getId() )
      .import();
}
/**
*/
function ImportSingleImage() 
{
//  var folders	= DriveApp.getFoldersByName('Test-dummy-files');
  var Importer = new ImageImporter();
  
  Importer
      .folder( folders.next().getId() )
      .import();
}
