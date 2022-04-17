import supertest from 'supertest'
import app from '../index'

// Test Modules
import testServer from './modules/server.spec'
import testImageSpecs from './modules/images_specs.spec'

// Create A Request Object
const request = supertest(app)

// TESTS
testServer(request)
testImageSpecs(request)
