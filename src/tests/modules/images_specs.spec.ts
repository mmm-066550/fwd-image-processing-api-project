import supertest from 'supertest'
import { StatusCodes } from 'http-status-codes'

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Test Image Specs ( imageName, Width, Height, Extension )', () => {
    it('test if image name is not specified', async () => {
      const response = await request.get('/api/images')
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND)
    })

    it('test if image name is incorrect or not found in assets folder', async () => {
      const response = await request.get('/api/images/unknown')
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('test if image width is not specified', async () => {
      const response = await request.get('/api/images/fjord')
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('test if image width is not valid', async () => {
      const response = await request.get('/api/images/fjord?width=0')
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })

    it('test if image width is not valid', async () => {
      const response = await request.get('/api/images/fjord?width=32&height=0')
      expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    })
  })
}
