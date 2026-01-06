function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
    data: null
  });
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  // 這裡可以保留 log，方便你 demo/debug
  console.error(err);

  const status = err.statusCode && Number.isInteger(err.statusCode) ? err.statusCode : 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
    data: null
  });
}

module.exports = { notFoundHandler, errorHandler };
