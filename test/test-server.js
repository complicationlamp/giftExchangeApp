'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const app =  require('../server.js');
const expect = chai.expect;
const should = chai.should;

chai.use(chaiHttp);



describe('testing the 200 code', function() {
    it('should return a code of 200', function() {
        let res;
        // console.log('tests');
        return chai.request(app)
            .get('/')
            .then(function(_res) {
                res = _res;
                expect(res).to.have.status(200);
            })
    })
})