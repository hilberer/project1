import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import application from '../Server.js'
import StatusCode from '../configurations/StatusCode.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistenRoute = () => {
    describe('testingNonExistentRoute', () => {
        test('HTTP Call against a route that does not exist in the API', done => {
            Chai.request(application)
                .get(`/${randomString}`)
                .end((request, response) => {
                    response.should.have.a.status(404)
                    done()
                })
        })
    })
}

const getAllUsers = () => {
    test('Expecting a return of all users in database', done => {
        Chai.request(application)
            .get('/user')
            .end((request, response) => {
                response.should.have.a.status(StatusCode.OK)
                response.body.should.be.a('array')
                // Kolla hur många användare som finns
                response.body.length.should.be.eq(response.body.length)
                done()
            })
    })
}

const updateUser = () => {
    const userID = '603d0c6069b62409a79f83f6'
    test('Should manipulate data of a current object in the user entity', done => {
        Chai.request(application)
            .put(`/user/${userID}`)
            .send({ username: 'chhia123', password: 'chhia123' })
            .end((request, response) => {
                response.should.have.a.status(StatusCode.OK)
                response.should.have.be.a('object')
                response.body.should.have.property('_id').eq(userID)
                response.body.should.have.property('username').eq('chhia123')
                done()
            })
    })
}

describe('TESTING THE USER API ENTITY', () => {
    testingNonExistenRoute()
    getAllUsers()
    updateUser()
})