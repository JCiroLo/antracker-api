"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.InternalServerError = exports.BadRequestError = exports.AuthError = void 0;
exports.AuthError = {
    code: 401,
    error: {
        message: "You are not authorized.",
    },
};
exports.BadRequestError = {
    code: 400,
    error: {
        message: "Bad request.",
    },
};
exports.InternalServerError = {
    code: 500,
    error: {
        message: "Internal server error.",
    },
};
exports.NotFoundError = {
    code: 404,
    error: {
        message: "Not found.",
    },
};
//# sourceMappingURL=errors.js.map