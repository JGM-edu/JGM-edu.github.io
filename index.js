/**
 * @type {Project[]}
 */
const projects = [
	new Project(
		"Edge of Control",
		"./assets/images/edgeOfControl.png",
		"Roles: Sole Developer<br />A 2D platformer MVI merging Left 4 Dead with Mirror's Edge. Get to the end before time runs out. Currently under development.",
		[
			new Link(
				"Play Now",
				"./EdgeOfControl/play/index.html"//"https://jgm-edu.github.io/"
			),
			new Link(
				"Github Repo",
				"https://github.com/jmortiger/Edge-of-Control"
			)
		]
	),
	new Project(
		"Polarizing",
		"./assets/images/polarizing.png",
		"Roles: Project Lead, Programmer, Level Designer<br />This prototype puzzle game was a collaborative effort with a small team of students. Players use magnets to direct a proton stream around obstacles into a receptor.",
		[
			new Link(
				"Play Now",
				"./Polarizing/index.html"//"https://jgm-edu.github.io/"
			),
			new Link(
				"Github Repo",
				"https://github.com/cole-easton/IGME320Proj3"
			)
		]
	),
	new Project(
		"Unnamed Rhythm Game",
		"./assets/images/supersonic2.png",
		"Roles: Sole Developer<br />A small rhythm game currently on hiatus. Keep the square in the air.",
		[
			new Link(
				"Play Now",
				"./Supersonic/index.html"//"https://jgm-edu.github.io/"
			),
			new Link(
				"Github Repo",
				"https://github.com/jmortiger/Supersonic"
			)
		]
	),
	new Project(
		"Unnamed Game",
		"./assets/images/default.png",
		"Roles: Sole Developer<br />A small game currently on hiatus. Charge forward as you dash, dodge, and phase your way through a minefield of hazards in this Ori-styled 2D platformer.",
		[""]
	),
];

function init() {
	for (let i = 0; i < projects.length; i++)
		constructProject(projects[i]);
}

/**
 * 
 * @param {Project} project 
 */
function constructProject(project) {
	let pElem = document.createElement("a");
	pElem.className = "projectLinkWrapper";
	pElem.href = (typeof project.pLinks[0] === "string") ? project.pLinks[0] : project.pLinks[0].linkAddress;
	document.querySelector("#mainContent").appendChild(pElem);

	pElem.appendChild(document.createElement("div"));
	pElem = pElem.children[0];
	pElem.className = "project bordered rounded container level2";

	const pName = document.createElement('h3');
	pName.className = "projectName";
	pName.innerHTML = project.pName;
	pElem.appendChild(pName);

	const pImage = document.createElement('img');
	pImage.className = "projectImage";
	pImage.src = project.pImage;
	pImage.alt = `${project.pName}'s image`;
	pElem.appendChild(pImage);

	const pDescription = document.createElement('div');
	pDescription.className = "projectDescription";
	pDescription.innerHTML = project.pDescription;
	pElem.appendChild(pDescription);

	const pLinks = document.createElement('div');
	pLinks.className = "projectLinks";
	pElem.appendChild(pLinks);
	for (let i = 0; i < project.pLinks.length; i++) {
		const element = document.createElement('a');
		element.className = "projectLink";
		element.innerHTML = (typeof project.pLinks[i] === "string") ? project.pLinks[i] : project.pLinks[i].linkText;
		element.href = (typeof project.pLinks[i] === "string") ? project.pLinks[i] : project.pLinks[i].linkAddress;
		pLinks.appendChild(element);
		if (i + 1 < project.pLinks.length) {
			const t = document.createElement('span');
			t.innerHTML = "&nbsp;|&nbsp;"
			pLinks.appendChild(t);
		}
	}
}

// #region Helper Object Constructors
/**
 * 
 * @param {String} pName The project's name
 * @param {String} pImage The path to the project's reference image
 * @param {String} pDescription A description of the project
 * @param {String[] | Link[]} pLinks The project's links
 */
function Project(pName, pImage, pDescription, pLinks = [""]) {
	this.pName			= pName;
	this.pImage			= pImage;
	this.pDescription	= pDescription;
	this.pLinks			= pLinks;
}

/**
 * 
 * @param {String} linkText The text displayed for the link
 * @param {String} linkAddress The link's address
 */
function Link(linkText, linkAddress) {
	this.linkText = linkText;
	this.linkAddress = linkAddress;
}
// #endregion