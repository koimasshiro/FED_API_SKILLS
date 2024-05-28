

document.addEventListener("DOMContentLoaded", function () {

  const credentials = btoa("coalition:skills-test");

  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    method: "GET",
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      displayPatient(data[3]);
      displayDiagnosisHistory(data[3].diagnosis_history[0]);
      displayUser(data[3]);
      displayDiagnosisList(data[3].diagnostic_list);
      displayLabResults(data[3].lab_results)
    })
    .catch((error) => console.error("Error fetching data:", error));
});



//function to display Jessica Taylor on List of patients
function displayPatient(patient) {
  const patientsList = document.querySelector(".curr-patient");
  patientsList.innerHTML = ""; // Clear existing content


  const patientItem = Object.assign(document.createElement("div"), {
    className: "patients_item",
  });

  const patientDetails = `
        <div class="patient_details">
            <div class="patient-pic">
                <img src="./Assets/Images/Layer 2-1.png" alt="${patient.name}" class='patient_img' />
            </div>
            <div>
                <span class="patient_name">${patient.name}</span>
                <span class="patient_age"><br />${patient.gender}, ${patient.age}</span>
            </div>
        </div>
        <div>
            <img src="./Assets/Icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" />
        </div>
    `;

  patientItem.innerHTML = patientDetails;
  patientsList.appendChild(patientItem);
}



//function to display patient(Jessica Taylor) details

function displayUser(patient) {
  const patientList = document.querySelector(".user-details");
  patientList.innerHTML = ""; // Clear existing content

  const patientItem = Object.assign(document.createElement("div"), {
    className: "patient_item",
  });

  const patientDetails = `
    <div class="profile_img_name">
        <img src=${patient.profile_picture} alt=${patient.name} class='profile-picture'>
        <h2>${patient.name}</h2>
    </div>
    <div>
        <div class="user_detail">
            <div><img src="./Assets/Icons/BirthIcon.svg" /></div>
            <div class="DOB_details">
                <span>Date of Birth</span>
                <span><br /><b>${patient.date_of_birth}</b></span>
            </div>
        </div>
        <div class="user_detail">
            <div><img src="./Assets/Icons/FemaleIcon.svg" /></div>
            <div class="DOB_details">
                <span>Gender</span>
                <span><br /><b>${patient.gender}</b></span>
            </div>
        </div>
        <div class="user_detail">
            <div><img src="./Assets/Icons/PhoneIcon.svg" /></div>
            <div class="DOB_details">
                <span>Contact Info</span>
                <span><br /><b>${patient.phone_number}</b> </span>
            </div>
        </div>
        <div class="user_detail">
            <div><img src="./Assets/Icons/PhoneIcon.svg" /></div>
            <div class="DOB_details">
                <span>Emergency Contacts</span>
                <span><br /><b>${patient.emergency_contact}</b></span>
            </div>
        </div>
        <div class="user_detail">
            <div><img src="./Assets/Icons/InsuranceIcon.svg" /></div>
            <div class="DOB_details">
                <span>Insurance Provider</span>
                <span><br /><b>${patient.insurance_type}</b></span>
            </div>
        </div>
    `;

  patientItem.innerHTML = patientDetails;
  patientList.appendChild(patientItem);
}



//function to display patient's diagnosis history
function displayDiagnosisHistory(patient) {
  const patientData = document.querySelector(".patient_diagnosis");
  patientData.innerHTML = ""; // Clear existing content


  const patientItem = Object.assign(document.createElement("div"), {
    className: "patient_item",
  });
  const patientDetails = `
    <div class="patient_diagnosis">
    <div class="Respiratory">
        <div>
            <img src="./Assets/Icons/respiratory rate.svg" />
        </div>
        <span style="font-size: 16px; color: #072635;">Respiratory Rate</span>
        <span style="font-weight: bold; font-size: 30px; color: #072635;"><br />${patient.respiratory_rate.value} bpm</span>
        <p style="font-size: 14px; color: #072635;">${patient.respiratory_rate.levels}</p>
    </div>
    <div class="Temperature">
        <div>
            <img src="./Assets/Icons/temperature.svg" />
        </div>
        <span style="font-size: 16px; color: #072635;">Temperature</span>
        <span style="font-weight: bold; font-size: 30px; color: #072635;"><br />${patient.temperature.value} °F</span>
        <p style="font-size: 14px; color: #072635;">${patient.temperature.levels}</p>
    </div>      
    <div class="Heart_rate">
        <div>
            <img src="./Assets/Icons/HeartBPM.svg" />
        </div>
        <span style="font-size: 16px; color: #072635;">Heart Rate</span>
        <span style="font-weight: bold; font-size: 30px; color: #072635;"><br />${patient.heart_rate.value} bpm</span>
        <p style="font-size: 14px; color: #072635;"><span><img src="./Assets/Icons/ArrowDown.svg"
                    style="padding-right: 10px;" /></span>${patient.heart_rate.levels}</p>
    </div>

    </div>
    `;

  patientItem.innerHTML = patientDetails;
  patientData.appendChild(patientItem);
}



//function to display data for DIAGNOSTIC LIST

function displayDiagnosisList(data) {
  const patientData = document.querySelector(".diagnostic-list");
  patientData.innerHTML = ""; // Clear existing content

  const patientItem = Object.assign(document.createElement("div"), {
    className: "patient_item",
  });
  const patientDetails = `
        <div class="diagnostic-heading">
            <div><b>Problem/Diagnosis</b></div>
            <div><b>Description</b></div>
            <div><b>Status</b></div>
        </div>
        <div class="diagnostic-item">
            <p>${data[0].name}</p>
            <p>${data[0].description}</p>
            <p>${data[0].status}</p>
        </div>
        <div class="diagnostic-item">
            <p>${data[1].name}</p>
            <p>${data[1].description}</p>
            <p>${data[1].status}</p>
        </div>
        <div class="diagnostic-item">
            <p>${data[2].name}</p>
            <p>${data[2].description}</p>
            <p>${data[2].status}</p>
        </div>
        <div class="diagnostic-item">
            <p>${data[3].name}</p>
            <p>${data[3].description}</p>
            <p>${data[3].status}</p>
        </div>
    `;

  patientItem.innerHTML = patientDetails;
  patientData.appendChild(patientItem);
}


//function to display LAB RESULTS

function displayLabResults(data) {
    const patientData = document.querySelector(".lab-results");
    patientData.innerHTML = ""; // Clear existing content
  
    // const patientItem = document.createElement('div');
    // patientItem.className = 'patients_item';
    console.log(data);
    const patientItem = Object.assign(document.createElement("div"), {
      className: "patient_item",
    });
    const patientDetails = `
        <div class="lab-results">
        <h2>Lab Results</h2>
        <div class="lab-result">
            <p>${data[0]}</p>
            <img src="./Assets/Icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />
        </div>
        <div class="lab-result curr-res">
            <p>${data[1]}</p>
            <img src="./Assets/Icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />
        </div>
        <div class="lab-result">
            <p>${data[2]}</p>
            <img src="./Assets/Icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />
        </div>
        <div class="lab-result">
            <p>${data[3]}</p>
            <img src="./Assets/Icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />
        </div>
        <div class="lab-result">
            <p>${data[4]}</p>
            <img src="./Assets/Icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg" />
        </div>
    </div>
      `;
  
    patientItem.innerHTML = patientDetails;
    patientData.appendChild(patientItem);
  }
  

  