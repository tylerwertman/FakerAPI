const {faker} = require("@faker-js/faker")
const express = require("express")

const app = express();

const port = 8000

const newUserObj = () => ({
    id: faker.database.mongodbObjectId(),
    fName: faker.name.firstName(),
    lName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    password: faker.internet.password()
})
const newCompanyObj = () => ({
    id: faker.database.mongodbObjectId(),
    cName: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    }
})

//Create route that creates a new user

app.get("/api/users/new", (req,res)=> {
    const newUser = newUserObj();
    res.json(newUser)
})

app.get("/api/companies/new", (req,res)=> {
    // const newCompany = newCompanyObj();
    res.json(newCompanyObj())
})

app.get("/api/both/new", (req,res)=> {
    // const newCompany = newCompanyObj();
    res.json({company: newCompanyObj(), user: newUserObj()})
})

app.listen (port, ()=>console.log("I am listening!!!!"))