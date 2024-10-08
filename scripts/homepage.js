//Getting the dates for the footer
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();
currentyear.innerHTML = `${today.getFullYear()}`;

//Last modified
document.getElementById("lastModified").innerHTML = new Date(document.lastModified)

lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified)}`;

// Hamburger button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//Courses array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// Functions with the array information
createCoursesCard(courses);

const allLink = document.querySelector('#all');
const cseLink = document.querySelector('#cse');
const wddLink = document.querySelector('#wdd');

allLink.addEventListener("click", () => {
    removeActive();
    document.querySelector(".container").innerHTML = '';
    createCoursesCard(courses);
    allLink.classList.add('active');
});

cseLink.addEventListener("click", () => {
    removeActive();
    const cseCourses = courses.filter(course => course.subject == 'CSE');
    document.querySelector(".container").innerHTML = '';
    createCoursesCard(cseCourses);
    cseLink.classList.add('active');
});

wddLink.addEventListener("click", () => {
    removeActive();
    const wddCourses = courses.filter(course => course.subject == 'WDD');
    document.querySelector(".container").innerHTML = '';
    createCoursesCard(wddCourses);
    wddLink.classList.add('active');
});

function removeActive() {
    allLink.classList.remove('active');
    cseLink.classList.remove('active');
    wddLink.classList.remove('active');
}

//Displays the card with the courses
function createCoursesCard(filteredCourses) {
    filteredCourses.forEach(course => {
        let card = document.createElement("li");
        let name = document.createElement("h3");
        
        name.textContent = course.subject + " " + course.number;

        //Changes the style of the cards to identify courses completed and not completed
        if (course.completed == true) {
            card.style.backgroundColor = "#1f6924";
        } else {
            card.style.backgroundColor = "white";
            card.style.borderStyle = "solid";
            card.style.borderColor = "#5d288f"
            card.style.color = "#5d288f";
        }

        card.appendChild(name);

        document.querySelector(".container").appendChild(card);

        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });
}

// Function to display the Modal in HTML
function displayCourseDetails(course) {
    const courseDetails = document.querySelector('#course-details');
    const closeInfo = document.createElement('button');
    const subjectNum = document.createElement('h2');
    const title = document.createElement('h3');
    const credits = document.createElement('p');
    const description = document.createElement('p');
    const certificate = document.createElement('p');
    const techInfo = document.createElement('p');


    courseDetails.innerHTML = '';
    closeInfo.textContent = `X`
    subjectNum.innerHTML =  `${course.subject} ${course.number}`;
    title.innerHTML = `${course.title}`;
    credits.innerHTML = `<strong>Credits</strong>: ${course.credits}`;
    description.innerHTML = `${course.description}`;
    certificate.innerHTML = `${course.certificate}`;
    techInfo.innerHTML = `<strong>Technologies</strong>: ${course.technology.join(', ')}`;

    courseDetails.appendChild(closeInfo);
    courseDetails.appendChild(subjectNum);
    courseDetails.appendChild(title);
    courseDetails.appendChild(credits);
    courseDetails.appendChild(description);
    courseDetails.appendChild(certificate);
    courseDetails.appendChild(techInfo);
    
    courseDetails.showModal();

    closeInfo.addEventListener("click", () => {
        courseDetails.close();
    });

    
}
