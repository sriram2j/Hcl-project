function addproject(event){
    event.preventDefault();
    const project = document.getElementById("project");
    const creatediv = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = "Add another project";
    label.className = "label";

    const textarea = document.createElement("textarea");
    textarea.placeholder = "say about your project";
    
    creatediv.appendChild(label);
    creatediv.appendChild(document.createElement("br"));
    creatediv.appendChild(textarea);

    project.appendChild(creatediv);
}

function addskill(event){
    event.preventDefault();
    const skill = document.getElementById("skill");
    const createdive = document.createElement("div");
    

    const input = document.createElement("input");
    input.placeholder = "enter skills";
    input.type = "text";
    input.textContent = "python";
    input.style.height="40px";
    createdive.appendChild(document.createElement("br"));
    createdive.appendChild(input);
    createdive.appendChild(document.createElement("br"));
    createdive.appendChild(document.createElement("br"));
    skill.appendChild(createdive);

}

//Getting User Inputs
//Personal Information
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const mobileInput = document.getElementById("mobile");
const mailInput = document.getElementById("mail");
const dobInput = document.getElementById("dob");
//About you
const designationInput = document.getElementById("designation");
const describeInput = document.getElementById("describe");
//Education Details
const schoolInput = document.getElementById("school");
const collegeInput = document.getElementById("college");
const cgpaInput = document.getElementById("cgpa");
//Project
const projectInput = document.getElementById("proj");
//Skills
const skillsInput = document.getElementById("skills");
//Intrests
const intrestsInput = document.getElementById("intrests");

//Getting Template Inputs
const nameholder = document.getElementById("nameholder");
const mailholder = document.getElementById("mailholder");
const mobileholder = document.getElementById("mobileholder");
const dobholder = document.getElementById("dobholder");
const positionholder = document.getElementById("positionholder");
const aboutholder = document.getElementById("aboutholder");
const schoolholder = document.getElementById("schoolholder");
const collegeholder = document.getElementById("collegeholder");
const cgpaholder = document.getElementById("cgpaholder");
const intrestholder = document.getElementById("intrestholder");
const skillholder = document.getElementById("skillholder");
const projholder = document.getElementById("projholder");


//Printing as user enters
fnameInput.addEventListener("input",updateCV);
lnameInput.addEventListener("input",updateCV);
mobileInput.addEventListener("input",updateCV);
mailInput.addEventListener("input",updateCV);
dobInput.addEventListener("input",updateCV);
designationInput.addEventListener("input",updateCV)
describeInput.addEventListener("input",updateCV);
schoolInput.addEventListener("input",updateCV);
collegeInput.addEventListener("input",updateCV);
cgpaInput.addEventListener("input",updateCV);
intrestsInput.addEventListener("input",updateCV);
skillsInput.addEventListener("input",updateCV);
projectInput.addEventListener("input",updateCV);

function updateCV()
{
    const name = fnameInput.value +"  "+ lnameInput.value;
    const mobilein = mobileInput.value;
    const mailin = mailInput.value;
    const dobin = dobInput.value;
    const designationin = designationInput.value;
    const describein = describeInput.value;
    const schoolin = schoolInput.value;
    const collegein = collegeInput.value;
    const cgpain = cgpaInput.value;
    const intrestsin = intrestsInput.value;
    const skillsin = skillsInput.value;
    const projiin = projectInput.value;
    
    nameholder.textContent = name;
    mobileholder.textContent = mobilein;
    mailholder.textContent = mailin;
    dobholder.textContent = dobin;
    positionholder.textContent = designationin;
    aboutholder.textContent = describein;
    schoolholder.textContent = schoolin;
    collegeholder.textContent = collegein;
    cgpaholder.textContent = cgpain;
    intrestholder.textContent = intrestsin;
    skillholder.textContent = skillsin;
    projholder.textContent = projiin;
    
}
function previewImage(input) {
    const circle = document.querySelector('.circle');
    const img = circle.querySelector('img');

    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
function convertToPDF() {
    const element = document.getElementById('cv-preview'); // Replace 'cv-preview' with the ID of your CV preview section
console.log("bitton clicked");
    const opt = {
        margin: 10,
        filename: 'user_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .from(element)
        .set(opt)
        .outputPdf();
}
window.addEventListener("load", function() {

function captureAndSave() {
    html2canvas(document.querySelector("#capture")).then(function(canvas) {
        console.log("hi");
      // Convert canvas to image and trigger download
      const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      const a = document.createElement("a");
      a.href = image;
      a.download = "screenshot.png";
      a.click();
    });
  }
});


  