// Task 2 
// Case 1 slove Below
let iconContainer = document.getElementById('model');
// Create a new element for the icon
let clip = document.getElementById("clip")
// Add classes for Font Awesome and the specific icon
clip.className = 'fas fa-paperclip'
console.log(clip.className);
// Append the icon element to the container
iconContainer.appendChild(clip)
// 
// Task 2
// Case 2 slove below:
document.getElementById('fileInput').addEventListener('change',(event)=>{

    const fileList = document.getElementById('fileList');
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('li');
        listItem.className = 'fileItem';

        const fileName = document.createTextNode(`File Name: ${file.name}`);
        const fileExtension = document.createTextNode(`Extension: ${getFileExtension(file.name)}`);

        listItem.appendChild(fileName);
        listItem.appendChild(fileExtension);

        fileList.appendChild(listItem);
    }

});
function getFileExtension(filename) {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}