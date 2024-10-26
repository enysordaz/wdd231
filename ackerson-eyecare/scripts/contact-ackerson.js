//Membership levels array
const services = [
    {
        type: 'Exam',
        title: 'Eye Exam',
    },
    {   
        type: 'Exam',
        title: 'Pedriatic Eye Exam',
    },
    {   
        type: 'Exam',
        title: 'Diabetic Eye Care',
    },
    {
        type: 'Exam',
        title: 'Comprehensive Eye Care',
    },
    {   
        type: 'Counsel',
        title: 'Contact Lenses',
    },
    {
        type: 'Counsel',
        title: 'Eyeglasses',
    },
    {
        type: 'Counsel',
        title: 'Sunglasses',
    },
    {
        type: 'Treatment',
        title: 'Dry Eye Treatment',
    },
    {   
        type: 'Treatment',
        title: 'Retina Treatment',
    }
];

// To be able to display and select a membership
const selectService = document.querySelector('#choose-service');

services.forEach((services) => {
    let option = document.createElement('option');
    option.value = services.type;
    option.innerHTML = services.title;
    selectService.appendChild(option);
});
