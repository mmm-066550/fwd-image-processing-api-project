import supertest from 'supertest'
import app from '../index'

// Create A Request Object
const request = supertest(app)

// Test Api Server Images Endpoint
describe('Test endpoint response', () => {
  it('test api images endpoint', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(200)
  })
})
