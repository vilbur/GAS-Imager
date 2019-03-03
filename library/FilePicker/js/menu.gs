
function showFolderPicker()
{
  
  showPicker('Browse a folder',{
    mimeTypes:'application/vnd.google-apps.folder', // List of mimetypes: https://developers.google.com/drive/api/v3/mime-types
    IncludeFolders:true,
    SelectFolderEnabled:true,
    GRID: false,

  })

}


function showFilePicker()
{
  
  showPicker('Browse a file',{
    mimeTypes:'application/vnd.google-apps.file',
    IncludeFolders:false,
    SelectFolderEnabled:false,
    GRID: true,
    
  })

}

