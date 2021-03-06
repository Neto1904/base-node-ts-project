import { ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    error.inner.forEach(error => {
      errors[error.path] = error.errors
    })
    return response.status(400).json({ message: 'Validation fails', errors })
  }
  console.error(error)

  return response.status(500).json({ message: 'Internal Server Error' })
}

export default errorHandler
