function test() {
  
  var folders = DriveApp.getFoldersByName('Imager');

  
  Logger.log(folders.next().getName());

  

}
