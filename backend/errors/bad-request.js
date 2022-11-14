class BadRequestError extends  CustomeAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}


module.exports = BadRequestError;