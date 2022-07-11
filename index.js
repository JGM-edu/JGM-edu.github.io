/**
 * @type {Project[]}
 */
const projects = [
	{
		"pName": "Polarizing",
		"pImage": "./assets/images/polarizing.png",
		"pDescription": "Roles: Project Lead, Programmer, Level Designer<br />This prototype puzzle game was a collaborative effort with a small team of students. Players use magnets to direct a proton stream around obstacles into a receptor.",
		"pLinks": [
			{
				"linkText": "Play Now",
				"linkAddress": "./Polarizing/index.html"//"https://jgm-edu.github.io/"
			},
			{
				"linkText": "Github Repo",
				"linkAddress": "https://github.com/cole-easton/IGME320Proj3"
			}
		]
	},
	{
		"pName": "Unnamed Rhythm Game",
		"pImage": "./assets/images/supersonic2.png",
		"pDescription": "Roles: Sole Developer<br />A small rhythm game currently on hiatus. Keep the square in the air.",
		"pLinks": [
			{
				"linkText": "Play Now",
				"linkAddress": "./Supersonic/index.html"//"https://jgm-edu.github.io/"
			},
			{
				"linkText": "Github Repo",
				"linkAddress": "https://github.com/jmortiger/Supersonic"
			}
		]
	},
	{
		"pName": "Unnamed Game",
		"pImage": "./assets/images/default.png",
		"pDescription": "Roles: Sole Developer<br />A small game currently in development. Charge forward as you dash, dodge, and phase your way through a minefield of hazards in this Ori-styled 2D platformer.",
		"pLinks": [
			""
			// {
			// 	"linkText": "Play Now",
			// 	"linkAddress": "./Supersonic/index.html"//"https://jgm-edu.github.io/"
			// },
			// {
			// 	"linkText": "Github Repo",
			// 	"linkAddress": "https://github.com/jmortiger/Supersonic"
			// }
		]
	},
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