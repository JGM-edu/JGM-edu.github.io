import e from "express";
// import { ServerResponse } from "http";
import path from "path";
// import { ServeStaticOptions } from "serve-static";
const app = e();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// const options: ServeStaticOptions = {
// 	setHeaders (res: ServerResponse, path:string, stat:any) {
// 		// if (path.endsWith(".br")) {
// 		if (path.includes(".br")) {
// 			res.setHeader("Content-Type", "application/octet-stream");
// 			res.setHeader("Content-Encoding", "br");
// 		}
// 	},
// };

// app.use(e.static(path.resolve(`${__dirname}/../client/`), options));
app.use(e.static(path.resolve(`${__dirname}/../client/`)));

// app.get('/', (req, res) => {
// 	// res.send();
// });

app.listen(port, () => {
	console.log(`Server listening on 127.0.0.1:${port}`);
});
// https.createServer({}, app).listen(port);