import type { ApiError } from "../types/entities";

export const AuthError: ApiError = {
  code: 401,
  error: {
    message: "You are not authorized.",
  },
};

export const BadRequestError: ApiError = {
  code: 400,
  error: {
    message: "Bad request.",
  },
};

export const InternalServerError: ApiError = {
  code: 500,
  error: {
    message: "Internal server error.",
  },
};

export const NotFoundError: ApiError = {
  code: 404,
  error: {
    message: "Not found.",
  },
};
