import express, { Express, Request, Response } from "express";
import config from "config";
import http from "http";


const app: Express = express();
const port: number = config.get("port") || 3030;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

const server: http.Server = app.listen(port);
server.on("listening", (): void => console.log(`Application started on ${ port }`));
