function importImagesFromFolder( folder_id )
{
    var Importer = new GoogleDriveImporter();
  
  Importer
      .folder( folder_id )
      .import();
}
