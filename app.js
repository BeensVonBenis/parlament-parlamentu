const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		console.log("Prepared app successfully");

		createServer((req, res) => {
			const parsedUrl = parse(req.url, true);
			const pathname = parsedUrl.path;

			console.log("Handling request:", pathname);

			// All other requests go through Next.js
			handle(req, res, parsedUrl)
				.then(() => {
					console.log("Request handled successfully");
				})
				.catch((err) => {
					console.error("Error handling request:", err);
					res.statusCode = 500;
					res.end("Internal Server Error");
				});
		}).listen(8080, (err) => {
			if (err) throw err;
			console.log("> Server is running on http://localhost:8080");
		});
	})
	.catch((err) => {
		console.error("Error during app.prepare:", err);
	});
