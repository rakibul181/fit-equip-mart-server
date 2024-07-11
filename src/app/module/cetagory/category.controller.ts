import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import { categoryServices } from './category.service'
import sendResponse from '../../utils/sendResponse'

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryIntoDB(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category is created successfully',
    data: result,
  })
})

const getAllCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoryFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ALL Category retrieved successfully',
    data: result,
  })
})
const getSingleCategoryByID = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await categoryServices.getSingleCategoryFromDB(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  })
})

export const categoryController = {
  createCategory,
  getAllCategory,
  getSingleCategoryByID,
}
