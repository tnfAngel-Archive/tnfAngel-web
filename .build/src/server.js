var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__markAsModule(exports);
var import_express = __toModule(require("express"));
var import_http = __toModule(require("http"));
var import_path = __toModule(require("path"));
var import_morgan = __toModule(require("morgan"));
var import_notFound = __toModule(require("./middlewares/notFound.middleware"));
var import_errorHandler = __toModule(require("./handlers/errorHandler.handler"));
const app = (0, import_express.default)();
const server = (0, import_http.createServer)(app);
const port = process.env.PORT ?? 3e3;
app.set("port", port);
app.set("json spaces", 2);
app.set("trust proxy", true);
app.use((0, import_morgan.default)("dev"));
app.use((0, import_express.json)());
app.use((0, import_express.urlencoded)({
  extended: false
}));
app.use("/static", (0, import_express.static)((0, import_path.join)(__dirname, "./static")));
app.use("/assets", (0, import_express.static)((0, import_path.join)(__dirname, "./static/assets")));
app.get("/", (_req, res) => {
  res.sendFile((0, import_path.join)(__dirname, "./static/html/index.html"));
});
app.get("/projects", (_req, res) => {
  res.sendFile((0, import_path.join)(__dirname, "./static/html/building.html"));
});
app.get("/projects/arduino-bluetooth-car", (_req, res) => {
  res.sendFile((0, import_path.join)(__dirname, "./static/html/projects/arduino-bluetooth-car.html"));
});
app.get("/github", (_req, res) => {
  res.redirect("https://github.com/tnfAngel");
});
app.get("/discord", (_req, res) => {
  res.redirect("https://discord.gg/8RNAdpK");
});
app.get("/robots.txt", (_req, res) => {
  res.sendFile("static/assets/robots.txt", { root: __dirname });
});
app.get("/sitemap.xml", (_req, res) => {
  res.sendFile("static/assets/sitemap.xml", { root: __dirname });
});
app.get("*", import_notFound.notFoundMW);
app.use(import_errorHandler.errorHandler);
server.listen(app.get("port"), () => {
  console.log("==== Server ready ====");
  console.log(`Port: ${app.get("port")}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`Node version: ${process.version}`);
  console.log(`Visit: http://localhost:${app.get("port")}`);
  console.log("==== End Server ready ====");
});
//# sourceMappingURL=server.js.map
