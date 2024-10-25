const eyes = [
    {
        disease: 'Blepharitis',
        description: 'Blepharitis is a common condition that causes inflammation of the eyelids. It is characterized by redness, swelling, styes, cysts, and flaky crusts at the eyelid margin and along the lash line. Symptoms also include scratchy, swollen, tender, and irritated eyes.',
        types: 'Anterior blepharitis and Posterior blepharitis',
        treatment: 'There are many treatment options. They include over-the-counter remedies and prescription eyedrops and ointments.',
        service: 'Dr. John Ackerson can diagnose this eye health condition or spot other potential problems during a comprehensive eye exam.'
    },
    {
        disease: 'Cataracts',
        description: 'A cataract is a clouding of the lens inside the eye that leads to a decrease in vision. Left untreated, it is the most common cause of blindness and is conventionally treated with surgery',
        types: 'Nuclear sclerotic, Cortical and posterior subcapsular.',
        treatment: 'Treatment for cataracts is safe and effective. The most common form of treatment is surgery.',
        service: 'If you have questions about cataracts or other eye health conditions, please call our office or speak with Dr. John Ackerson at your next appointment.'
    },
    {
        disease: 'Conjunctivitis',
        description: 'Conjunctivitis is a swelling and irritation of the membrane that covers the white part of the eye and eyelid lining. It is often referred to as “pink eye” due to the pink color of inflamed blood vessels.',
        types: 'Viral, Bacterial, Allergic, Toxic, and Nonspecific.',
        treatment: 'Some eye diseases are similar, so it is important for patients to have a professional evaluation by an eye doctor to determine their specific needs and proper treatment. In most cases, it can be successfully treated with antibiotics, eye drops, or ointments.',
        service: 'Professional evaluation by the eye doctor'
    },
    {
        disease: 'Diabetic Retinopathy',
        description: 'Diabetic retinopathy is an ocular manifestation of diabetes, a systemic disease, which affects up to 80 percent of all patients who have had diabetes for 10 years or more. The longer a person has diabetes, the higher his or her chances are of developing diabetic retinopathy.',
        types: 'Early diabetic retinopathy and Advanced diabetic retinopathy.',
        treatment: 'Unfortunately, diabetic retinopathy can result in permanent damage that cannot be reversed.  However, if caught in time, prescribed treatments may slow development and prevent vision loss.',
        service: 'Preventative eye Exam with Dr. John Ackerson'
    },
    {
        disease: 'Dry Eye Syndrome',
        description: 'Dry eye syndrome is a condition in which the eye does not produce enough tears, or the tears are too thin to lubricate and nourish the eye.',
        types: 'Aqueous-deficient dry eye and Evaporative dry eye.',
        treatment: 'Specific treatments aim to restore or maintain the normal amount of tears in the eye to minimize dryness or related discomfort and to maintain eye health.',
        service: 'While dry eye can be a chronic condition, Dr. John Ackerson can prescribe treatment.'
    }
];

createEyeHealthCard(eyes);

// Display the Eye Health Card
function createEyeHealthCard(filteredEyeHealth) {
    filteredEyeHealth.forEach(eyes => {
        let eyeHealthCard = document.createElement('section');
        let disease = document.createElement('h3');
        const moreInfoButton = document.createElement('button');

        disease.textContent = eyes.disease;
        moreInfoButton.innerHTML = 'More Information';

        eyeHealthCard.appendChild(disease);
        eyeHealthCard.appendChild(moreInfoButton);

        document.querySelector('.eye-health-container').appendChild(eyeHealthCard);

        moreInfoButton.addEventListener('click', () => {
            displayEyeHealthInformation(eyes);
        });
    });
}

function displayEyeHealthInformation(eyes) {
    const eyeHealthDetails = document.querySelector('#eye-health-details');
    const closeInfoButton = document.createElement('button');
    const diseaseTitle = document.createElement('h3');
    const diseaseDescription = document.createElement('p');
    const diseaseType = document.createElement('p');
    const diseaseTreatment = document.createElement('p');
    const diseaseService = document.createElement('p');

    eyeHealthDetails.innerHTML = '';
    closeInfoButton.textContent = `X`;
    diseaseTitle.innerHTML = `Disease: ${eyes.disease}`;
    diseaseDescription.innerHTML = `<strong>Description: </strong>${eyes.description}`;
    diseaseType.innerHTML = `<strong>Type: </strong>${eyes.type}`;
    diseaseTreatment.innerHTML = `<strong>Treatment: </strong>${eyes.treatment}`;
    diseaseService.innerHTML = `<strong>Service: </strong>${eyes.service}`;

    eyeHealthDetails.appendChild(closeInfoButton);
    eyeHealthDetails.appendChild(diseaseTitle);
    eyeHealthDetails.appendChild(diseaseDescription);
    eyeHealthDetails.appendChild(diseaseType);
    eyeHealthDetails.appendChild(diseaseTreatment);
    eyeHealthDetails.appendChild(diseaseService);

    eyeHealthDetails.showModal();

    closeInfoButton.addEventListener("click", () => {
        eyeHealthDetails.close();
    });
}

