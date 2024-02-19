function uploadFiles() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;
  const fileList = document.getElementById('fileList');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const li = document.createElement('li');
    
    // Save file
    const fileURL = URL.createObjectURL(file);
    
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = fileURL;
    downloadLink.download = file.name;
    downloadLink.textContent = file.name;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      fileList.removeChild(li);
      URL.revokeObjectURL(fileURL); // Clean up object URL
    };

    li.appendChild(downloadLink);
    li.appendChild(deleteButton);
    fileList.appendChild(li);
  }
}
