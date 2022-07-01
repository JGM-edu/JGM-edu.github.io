// #region Imports
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
// #endregion

// #region Helper Enums
const MIME = {
	json	: 'application/json',
	css		: 'text/css',
	html	: 'text/html',
	png		: 'image/png',
	js		: 'text/javascript',
	ico		: 'image/x-icon',
};

const statCode = {
	200						: "OK",
	201						: "Created",
	204						: "No Content",
	400						: "Bad Request",
	401						: "Unauthorized",
	403						: "Forbidden",
	404						: "Not Found",
	500						: "Internal Server Error",
	503						: "Service Unavailable",
	"OK"					: 200,
	"Created"				: 201,
	"No Content"			: 204,
	"Bad Request"			: 400,
	"Unauthorized"			: 401,
	"Forbidden"				: 403,
	"Not Found"				: 404,
	"Internal Server Error"	: 500,
	"Service Unavailable"	: 503,
	isError					: (code) => code >= 400,
	isSuccess				: (code) => code >= 200 && code < 300,
	isInfo					: (code) => code >= 100 && code < 200,
};
// #endregion

// #region Helper Functions
/**
 *
 * @param {ClientRequest | IncomingMessage} request
 * @returns {ParsedUrlQuery} An object representing the parsed url query.
 */
const parseURLQuery = (request) => url.parse(request.url, true).query;

/**
 *
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 * @param {Buffer | Object | String} content
 * @param {Number} statusCode
 * @param {String} contentType
 */
const respond = (
	request,
	response,
	content,
	statusCode = 200,
	contentType = MIME.json,
) => {
	response.writeHead(statusCode, { 'Content-Type': contentType });
	let writeableContent = content;
	if (!(content instanceof Buffer) && typeof (content) !== "string") { writeableContent = JSON.stringify(content); }
	response.write(writeableContent);
	response.end();
};
// #endregion

// #region Static Resources
// #region Get Styles
const styles = fs.readFileSync(`${__dirname}/../client/default-styles.css`);
/**
 * Responds with /client/index.css.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getStyles = (request, response) => respond(request, response, styles, 200, MIME.css);
// #endregion
// #region Get HTML
const page = fs.readFileSync(`${__dirname}/../client/index.html`);
/**
 * Responds with /client/index.css.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getHTML = (request, response) => respond(request, response, page, 200, MIME.html);
// #endregion
// #region Get IndexJS
const indJS = fs.readFileSync(`${__dirname}/../client/index.js`);
/**
 * Responds with /client/index.js.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getIndexJS = (request, response) => respond(request, response, indJS, 200, MIME.js);
// #endregion
// #region Get ProjJSON
const projJSON = fs.readFileSync(`${__dirname}/../client/assets/projects.json`);
/**
 * Responds with /client/projects.json.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getProjJSON = (request, response) => respond(request, response, projJSON, 200, MIME.js);
// #endregion
// #region Get Images
// #region Get DefaultPNG
const defaultPNG = fs.readFileSync(`${__dirname}/../client/assets/images/default.png`);
/**
 * Responds with /client/assets/images/default.png.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getDefaultPNG = (request, response) => respond(request, response, defaultPNG, 200, MIME.png);
// #endregion
// #region Get PolarizngPNG
const polarizingPNG = fs.readFileSync(`${__dirname}/../client/assets/images/polarizing.png`);
/**
 * Responds with /client/assets/images/polarizing.png.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getPolarizingPNG = (request, response) => respond(request, response, polarizingPNG, 200, MIME.png);
// #endregion
// #region Get Supersonic1PNG
const supersonic1PNG = fs.readFileSync(`${__dirname}/../client/assets/images/supersonic1.png`);
/**
 * Responds with /client/assets/images/supersonic1.png.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getSupersonic1PNG = (request, response) => respond(request, response, supersonic1PNG, 200, MIME.png);
// #endregion
// #region Get Supersonic2PNG
const supersonic2PNG = fs.readFileSync(`${__dirname}/../client/assets/images/supersonic2.png`);
/**
 * Responds with /client/assets/images/supersonic2.png.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getSupersonic2PNG = (request, response) => respond(request, response, supersonic2PNG, 200, MIME.png);
// #endregion
// #region Get FaviconPNG
const faviconPNG = fs.readFileSync(`${__dirname}/../client/assets/images/favicon.png`);
/**
 * Responds with /client/assets/images/favicon.png.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getFaviconPNG = (request, response) => respond(request, response, faviconPNG, 200, MIME.png);
// #endregion
// #region Get FaviconICO
const faviconICO = fs.readFileSync(`${__dirname}/../client/assets/images/favicon.ico`);
/**
 * Responds with /client/assets/images/favicon.ico.
 * @param {ClientRequest | IncomingMessage} request
 * @param {ServerResponse} response
 */
const getFaviconICO = (request, response) => respond(request, response, faviconICO, 200, MIME.ico);
// #endregion
// #endregion
// #region 404
/**
 * Responds with a 404 error.
 * @param {ClientRequest | IncomingMessage} req
 * @param {ServerResponse} res
 */
const get404 = (req, res) => respond(req, res, JSON.stringify({ id: 404, message: 'Not Found' }), 404);
// #endregion
// #endregion
module.exports = {
	getHTML,
	getStyles,
	getIndexJS,
	getProjJSON,
	getDefaultPNG,
	getPolarizingPNG,
	getSupersonic1PNG,
	getSupersonic2PNG,
	getFaviconPNG,
	getFaviconICO,
	get404,
};
