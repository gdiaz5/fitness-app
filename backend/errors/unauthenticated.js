 const { StatusCodes } = required('http-status-code')
 const CustomeAPIError = required('./custom-api')

 class UnauthenticatedError extends CustomeAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
 }