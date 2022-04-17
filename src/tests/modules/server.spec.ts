import supertest from 'supertest'
import { StatusCodes } from 'http-status-codes'

export default (request: supertest.SuperTest<supertest.Test>) => {
  describe('Test Express Server Api Set Up', () => {
    it('test root api server endpoint', async () => {
      const response = await request.get('/')
      expect(response.statusCode).toEqual(StatusCodes.OK)
    })

    it('test unhandled api server endpoints', async () => {
      const response = await request.get('/*')
      expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND)
    })
  })
}
