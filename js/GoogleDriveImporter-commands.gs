function importImagesFromFolder( folder_id )
{
    var Importer = new ImageImporter();
  
  Importer
      .folder( folder_id )
      .import();
}
