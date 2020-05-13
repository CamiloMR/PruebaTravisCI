let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect


chai.use(chaiHttp);
const url= 'https://app-barbershop.herokuapp.com'


describe('Insert in DB: ',()=>{
    it('Get Users', (done) => {
        chai.request(url)
        .get('/api/v1/user/')
        .end((err,res) => {
            expect(res).to.have.status(200)
            done()
        })
    })

    it('Get barbershops', () =>{
        chai.request(url)
        .get('api/v1/barbershop/1152713078')
        .end((err,res) => {
            expect(res).to.have.status(200)
            done()
        })
    })

    it('Get single user', () =>{
        chai.request(url)
        .get('api/v1/user/profile')
        .send({
            id_user: 1036683861
        })
        .end((err,res) => {
            expect(res).to.have.status(200)
            done()
        })
    })

    // it('Insertar barbershop', (done) => {
    //     chai.request(url)
    //     .post('/api/v1/barbershop/')
    //     .send({
    //         id_barbershop: 1152713078,
    //         id_owner: 1152713078,
    //         name: "Whestel",
    //         phone: 1234567890,
    //         email: "ey@gmail.com",
    //         address: "mm 76 A ",
    //         image: "Maa"
    //     })
    //     .end((err,res) => {
    //         expect(res).to.have.status(200)
    //         done()
    //     })
    // })

    // it('Insertar usuario', (done) => {
    //     chai.request(url)
    //     .post('/api/v1/user/')
    //     .send({
    //         id_user: 1036683861,
    //         full_name: "José Alejandro Montoya González",
    //         email: 'ale@gmail.com',
    //         phone: 3102476288,
    //         password: 123456,
    //         profile: 1
    //     })
    //     .end((err,res) => {
    //         expect(res).to.have.status(200)
    //         done()
    //     })
    // })
})