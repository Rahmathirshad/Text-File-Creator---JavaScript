let readTextArea = document.querySelector("textarea");
let fileName = document.querySelector(".file-name input");
let saveAs = document.querySelector(".save-as select");
let saveBtn = document.querySelector(".save-btn button");

//--------- Showing Selected File type name on Save Button ---------
saveAs.addEventListener("change", () => {
    let saveAsOption = saveAs.options[saveAs.selectedIndex].text;
    saveBtn.innerHTML = `Save As ${saveAsOption}`;  
})

// --- Listening to event when save button clicked to save file

saveBtn.addEventListener("click", () => {

    if (readTextArea.value.length >= 1 && fileName.value.length >= 1){
        var blob = new Blob([readTextArea.value], { type: saveAs.value});
    //  Blob Object-WEB API ->  Allows you to create File Like Object which contains raw data and file type. 
    }
    else{
        window.alert("Please Enter text and file name")
    }
    
    const fileURL = URL.createObjectURL(blob);
    // ObjectURL Method -> Creates a URL for given object file in (parameter).

    const fileName2 = document.createElement("a");
    // creating <a> tag to for file download

    fileName2.download = fileName.value;
    //The download attribute specifies that the target (the file specified in the href attribute)
    //will be downloaded when a user clicks on the hyperlink.
    //  SYNTAX - <a download="filename">

    fileName2.href = fileURL;
    // href attribute contains the address of file which to be download.
    // --> passing fileURL to href

    fileName2.click(); // clicking link so that file gets download

})