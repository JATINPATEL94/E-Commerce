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
  const API = "https://styleblend.vercel.app/api/v1";
  const url = `${API}${endpoint}`;

  const options = {
    method,
    headers: {
      ...(body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      // ...(login ? { Authorization: localStorage.getItem("accessToken") } : {}),
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
        responseData || "Something went wrong"
      );
    }

    return new ApiResponse(
      response.status,
      responseData.data,
      responseData.message
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { ApiError, ApiResponse, ApiHandler };
