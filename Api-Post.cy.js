describe('Create new users',()=>{
    it('Successfully add new user',()=>{
        var user = {
            "name": "Fajar Eka Pratama",
            "job": "QA Engineer"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((Response) => {
            expect(Response.status).equal(201)
            expect(Response.body.name).to.equal(user.name)
            expect(Response.body.job).to.equal(user.job)
        })
    })
})