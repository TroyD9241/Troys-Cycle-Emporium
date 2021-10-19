# Troys-Cycle-Emporium

## Welcome to your #1 cycling shop in Chicago!

### Links
> 1.  *[Getting Started](#getting-started)*
> 2. *[Using OpenApi](#using-openapi)*
> 3. *[Architecture](#api-architecture)*
> 4. *[Overview](#overview)*
> 5. *[Technologies](#technologies-used)*
> 6. *[Libraries](#libraries-implemented)*
## **Getting Started**

1. The first step is to clone the repo from **[this](https://github.com/TroyD9241/Troys-Cycle-Emporium)** Github repository.

2. cd into your directory **`cd Troys-Cycle-Emporium`**

3. **`npm install`**

4. You can create an environment variable modeled after the *`.env.example`* file. The *`DB_CONNECTION`* is your Connection String URI. Or you can simply rename the `.example.env` to `.env`. *Note: Make sure MongoDB is installed [if you haven't done so](https://zellwk.com/blog/local-mongodb/).*


For more info on the Connection String URI please see the [documentation](https://docs.mongodb.com/manual/reference/connection-string/).

5. run **`npm start`**

6. Then simply go to the OpenAPI documentation [**`HERE`**](http://localhost:3000/api-docs/) and begin testing the routes~!

## **Please create in this order**
1. Customer
2. Repair Appointment
3. Inventory Item

-----
# **Schema Design**
The basic data flow of this api is that the fictional employees would interact with this api. These employees would first search for a customer record, and if the customer was not in the database they would then create a new record. Once there was an official record of the customer the employee would then create a repair appointment. Once an appointment is created the `appointmentHistory` on the customer instance would store a reference to that `_id`. Finally when the appointment is created the employees would add inventory items related to the repair. A bike instance would append to both the customer(`bikes`) and the repair(`bike`) its related too based on the email index. The same thing would go for Parts and Accessories except they would only append to the Repair ticket(`inventoryItems`).

**note** instead of deleting an inventory item it will decrement the currentStock to zero, but never below zero.
## Using OpenAPI

Using [OpenAPI](http://localhost:3000/api-docs/) is quite simple! You should see a screen that looks like this.

![alt openapi](https://i.ibb.co/VTwk5qN/openapi.png)

All you need to do is click on the categories *`(Customers, Inventory, Repairs)`* and you should see a drop down of all the routes available to test! Cool right? Now you should see something that looks like this!

![alt customersExample](https://i.ibb.co/LpVwPzs/customers.png)

Now from here all you need to do is click on an individual route that is color coded based on the request type (post, get, etc). Then click on `Try it out` that is on the top-right of the dropdown menu.

![alt tryitout!](https://i.ibb.co/bRwB6k7/tryitout.png)

And finally just click on execute to complete the request! Some routes may require an id or something like that, so simply copy the `_id` from the sample response and plug it into the Id prompt ! :)

![alt boom!](https://i.ibb.co/m9Jk8bd/boom.png)

-------------------------------
## API Architecture

This API was built using [Node](https://nodejs.org/en/),[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), and [Atlas](https://www.mongodb.com/cloud/atlas).

## Overview

This API was built to help a bicycle repair shop manage its customers, inventory, and repair appointments.

## Technologies Used

**Node.js**

Built using the worlds most popular Javascript runtime, Node gives engineers the ability to write Javascript code outside of a web browser. Thanks to the exceptionally large community that is known as [npm](https://www.npmjs.com/) Node is extremely flexible and opensource.

**Express**

Express is an industry standard framework for building server side applications. Allowing use to write requests for HTTP verbs and run these requests through "middlewares" which can do a host of wonderful things.

**MongoDB**

MongoDB unlike SQL based Databases is non-relational. Meaning you design your schema to be exactly what you want without the need to create relations using foreign-keys. MongoDB allows for extreme flexibility and scalability. Mongo does not require an ORM to wrap data into object form which allows easy access using any programming language with data structures that are native to that language. Mongo also boasts a change friendly design meaning you don't need to bring down a production site to change the way you work with data.

## Libraries Implemented

[Mongoose](https://mongoosejs.com/)

[express-async-handler](https://github.com/Abazhenov/express-async-handler)

[morgan](https://github.com/expressjs/morgan)

[nodemon](https://nodemon.io/)

[swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)

[swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)

[validator](https://express-validator.github.io/docs/https://express-validator.github.io/docs/https://express-validator.github.io/docs/)
