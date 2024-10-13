//Membership levels array
const memberships = [
    {
        level: '0',
        number: 0,
        title: 'None Profit',
        description: 'Institutions that are created to offer a service or public social benefit instead of generating profit for their founders. Therefore, nonprofits aim to improve the overall quality of life for the community or the natural world.',
        fee: 'none',
        benefits: 'Exclusive Chamber of Commerce communications, Access to Heber Chamber of Commerce benefits, Access to Chamber of Commerce advocacy 24/7/365, Member rates at all Chamber events.',
    },
    {
        level: '1',
        number: 1,
        title: 'Bronze',
        description: 'The Bronze Membership Package offers businesses valuable opportunities for growth and influence through targeted networking events, educational resources for improving and expanding your business, and leveraging our valuable partnerships with lawmakers to effect business-friendly regulatory and legal reforms.',
        fee: '$200 USD per month',
        benefits: 'Exclusive Chamber of Commerce communications, Access to Heber Chamber of Commerce benefits, Access to Chamber of Commerce advocacy 24/7/365, Member rates at all Chamber events, Discounted rates on Certificates of Origin through essCert, Advanced copies of Legislative and Judicial Reviews',
    },
    {
        level: '2',
        number: 2,
        title: 'Silver',
        description: 'The Silver Level Membership Package is a great option for businesses seeking to support a healthy business climate in Heber while teaming alongside fellow mid-size businesses.',
        fee: '$400 USD per month',
        benefits: 'Exclusive Chamber of Commerce communications, Access to Heber Chamber of Commerce benefits, Access to Chamber of Commerce advocacy 24/7/365, Member rates at all Chamber events, Discounted rates on Certificates of Origin through essCert, Advanced copies of Legislative and Judicial Reviews, Ability to contribute sponsored content for e-Newsletter and EYE on Business, Invitation to the Chairman Circle, Invitation for company reps to attend Chamber Board dinners and receptions, Personalized business introductions',
    },
    {
        level: '3',
        number: 3,
        title: 'Gold',
        description: 'The Heber Chamber of Commerce values members of all tiers. The Gold Membership Package is a terrific and distinguished option. Invest in a pro-business environment for Heber at one of the top levels of membership. This is a potent opportunity to impact positive change for business in our County.',
        fee: '$600 USD per month',
        benefits: 'Exclusive Chamber of Commerce communications, Access to Heber Chamber of Commerce benefits, Access to Chamber of Commerce advocacy 24/7/365, Member rates at all Chamber events, Discounted rates on Certificates of Origin through essCert, Advanced copies of Legislative and Judicial Reviews, Company name and logo on Heber Chamber website, Ability to contribute sponsored content for e-Newsletter and EYE on Business, Invitation to the Chairman Circle, Invitation for company reps to attend Chamber Board dinners and receptions, Personalized business introductions, Consideration to become a guest speaker at Chamber events*, Introduction to Chamber Board during in-person Board meetings, Guest judge at Youth Entrepreneurs event.',
    }
];

createMembershipCard(memberships);

// To be able to display and select a membership
const selectMembership = document.querySelector('#choose-membership');

memberships.forEach((memberships) => {
    let option = document.createElement('option');
    option.value = memberships.title;
    option.innerHTML = memberships.title;
    selectMembership.appendChild(option);
});

//Displays the card with the courses
function createMembershipCard(filteredMemberships) {
    filteredMemberships.forEach(membership => {
        let membershipCard = document.createElement('section');
        let name = document.createElement('h4');
        const infoButton = document.createElement('button');
        
        
        name.textContent = membership.title;
        infoButton.innerHTML = 'More Information';

        membershipCard.appendChild(name);
        membershipCard.appendChild(infoButton);

        document.querySelector(".membership-container").appendChild(membershipCard);

        infoButton.addEventListener('click', () => {
            displayMembershipDetails(membership);
        });
    });
}

// Function to display the Modal in HTML
function displayMembershipDetails(membership) {
    const membershipDetails = document.querySelector('#membership-details');
    const closeInfo = document.createElement('button');
    const levelTitle = document.createElement('h3');
    const levelDescription = document.createElement('p');
    const levelFee = document.createElement('p');
    const levelBenefits = document.createElement('p');


    membershipDetails.innerHTML = '';
    closeInfo.textContent = `X`
    levelTitle.innerHTML = `Level: ${membership.title}`;
    levelDescription.innerHTML = `<strong>Description:</strong>${membership.description}`;
    levelBenefits.innerHTML = `<strong>Benefits:</strong> ${membership.benefits}`;
    levelFee.innerHTML = `<strong>Fee:</strong> ${membership.fee}`;

    membershipDetails.appendChild(closeInfo);
    membershipDetails.appendChild(levelTitle);
    membershipDetails.appendChild(levelDescription);
    membershipDetails.appendChild(levelBenefits);
    membershipDetails.appendChild(levelFee);
    
    membershipDetails.showModal();

    closeInfo.addEventListener("click", () => {
        membershipDetails.close();
    });
   
}