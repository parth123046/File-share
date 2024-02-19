function uploadFiles() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;
  const fileList = document.getElementById('fileList');

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const li = document.createElement('li');
    li.textContent = file.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      fileList.removeChild(li);
    };

    li.appendChild(deleteButton);
    fileList.appendChild(li);
  }
}
