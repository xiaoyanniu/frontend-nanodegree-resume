//This is to define the header section 
var name = "Xiaoyan Niu";
var formattedName = HTMLheaderName.replace("%data%", "Xiaoyan Niu");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/* This is to define the working experience section */
var work = {
	"jobs": [
		{
		"title": "Web Developer",
		"employer": "My 2nd Employer",
		"dates": "Nov, 2012 - Oct, 2014",
		"location": "Red Bank, NJ",
		"description": "This is just a placeholder for my second employer since I'm not sure if real information should be displayed."
		},
		{
		"title": "Graphic Designer",
		"employer": "My 1st Employer",
		"dates": "Oct, 2000 - Apr, 2010",
		"location": "New York, NY",
		"description": "This is just a placeholder for my first employer since I'm not sure if real information should be displayed."
		}
	]
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

/* This is to define the projects section */
var projects = {
	"projects": [
		{
		"title": "Project1",
		"dates": "Oct, 2009",
		"description": "This is one of the projects that I have worked on for my 2nd employer",
		"images": ["images/sunflower.png", "images/sunflower.png"]
		},
		{
		"title": "Project2",
		"dates": "Nov, 2013",
		"description": "This is one of the projects that I have worked on for my 1st employer",
		"images": ["images/sunflower.png", "images/sunflower.png"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

/* This is to define the bio section */
var bio = {
	"name": "Xiaoyan Niu",
	"role": "Web Developer",
	"contacts": {
		"mobile": "732-000-0001",
		"email": "xyniu@email.com",
		"github": "github",
		"twitter": "n/a",
		"location": "New Jersey"
	},
	"welcomeMessage": "Welcome to view my resume",
	"picture": "images/my_picture.png",
	"skills": ["UI design", "Graphic Design", "Programming", "JavaScript", "CSS"]
}

var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedMsg);
$("#header").append(formattedPicture);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#header").append(formattedSkill);
}

/* This is to define the education section */
var education = {
	"schools": [
		{
		"name": "One of my dream schools",
		"location": "Princeton, NJ",
		"degree": "MS",
		"majors": ["Psychology"],
		"dates": "1905-1907",
		"url": "http://www.princeton.edu"
		},
		{
		"name": "One of my dream schools",
		"location": "San Jose, California",
		"degree": "BS",
		"majors": ["Major1", " ", "Major2"],
		"dates": "1900-1904",
		"url": "http://www.berkeley.edu/"
		}
	],
	"onlineCourse": [
		{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com/course/ud804"
		}
	]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchool = formattedSchool.replace("#", education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchool+formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourse) {
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	var formattedOnlineCourse = formattedOnlineTitle+formattedOnlineSchool;
	formattedOnlineCourse = formattedOnlineCourse.replace("#", education.onlineCourse[course].url);
	$(".education-entry:last").append(formattedOnlineCourse);

	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	$(".education-entry:last").append(formattedOnlineDates);

	var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
	formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourse[course].url);
	$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();

/* Internationalization */
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

/* adding map */
$("#mapDiv").append(googleMap);
