class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.success = false;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

const ApiHandler = async (
  endpoint,
  method = "POST",
  body = null,
  login = true
) => {
  const API_URL = "https://styleblend.vercel.app/api/v1";
  const url = `${API_URL}${endpoint}`;

  const options = {
    method,
    headers: {
      ...(body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
    },
    credentials: login ? "include" : undefined,
    mode: "cors",
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(url, options);
    const responseData = response.headers
      .get("content-type")
      ?.includes("application/json")
      ? await response.json()
      : null;

    if (!response.ok) {
      throw new ApiError(
        response.status,
        responseData.message || "Something went wrong",
        responseData.errors || []
      );
    }

    return new ApiResponse(
      response.status,
      responseData.data,
      responseData.message
    );
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Internal Server Error", [error.message]);
  }
};

export { ApiError, ApiResponse, ApiHandler };
