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
    
    // Append download link to list item
    li.appendChild(downloadLink);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      fileList.removeChild(li);
      URL.revokeObjectURL(fileURL); // Clean up object URL
    };

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to file list
    fileList.appendChild(li);
  }
}
