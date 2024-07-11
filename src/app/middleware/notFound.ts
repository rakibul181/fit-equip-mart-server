import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const notFound = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not Found',
    error: ' ',
  })
}

export default notFound