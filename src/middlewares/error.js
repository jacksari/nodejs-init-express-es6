const ErrorHandler = (req, res, status = 500, message = 'Interval server error') => {
  const err = {
    statusCode: status,
    message,
  };
  res.status(err.statusCode).json({
    success: false,
    error: err,
  });
};

export default ErrorHandler;
