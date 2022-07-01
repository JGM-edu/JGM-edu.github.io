// #region Imports
const http = require('http');
const url = require('url');

const responses = require('./responses.js');
// #endregion

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (req, res) => {
	const jumpTable = {
		GET: {
			"404"								: responses.get404,
			"/404"								: responses.get404,
			"/"									: responses.getHTML,
			"/index.css"						: responses.getStyles,
			"/default-styles.css"				: responses.getStyles,
			"/index.js"							: responses.getIndexJS,
			"/assets/projects.json"				: responses.getProjJSON,
			"/assets/images/default.png"		: responses.getDefaultPNG,
			"/assets/images/polarizing.png"		: responses.getPolarizingPNG,
			"/assets/images/supersonic1.png"	: responses.getSupersonic1PNG,
			"/assets/images/supersonic2.png"	: responses.getSupersonic2PNG,
			"/assets/images/favicon.png"		: responses.getFaviconPNG,
			"/assets/images/favicon.ico"		: responses.getFaviconICO,
		},
		POST: {},
		HEAD: {},
	};
	const reqMethod = (req.method && jumpTable[req.method]) ? req.method : "GET";
	const parsedURL = new url.URL(req.url, `http://${req.headers.host}`);

	console.log(`${req.url} - ${parsedURL.pathname} (${req.method})`);

	if (typeof jumpTable[reqMethod][parsedURL.pathname] !== "function")
		jumpTable[reqMethod]["404"](req, res);
	else
		jumpTable[reqMethod][parsedURL.pathname](req, res);
};

http.createServer(onRequest).listen(port);
console.log(`Server listening on 127.0.0.1:${port}`);