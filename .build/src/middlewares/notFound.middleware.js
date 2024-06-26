var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  notFoundMW: () => notFoundMW
});
const notFoundMW = (_req, _res, next) => {
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  notFoundMW
});
//# sourceMappingURL=notFound.middleware.js.map
