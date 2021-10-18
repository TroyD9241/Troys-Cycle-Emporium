# Troys-Cycle-Emporium

## Welcome to your #1 cycling shop in Chicago!

### Links
> 1.  *[Getting Started](#getting-started)*
> 2. *[Using OpenApi](#using-openapi)*
> 3. *[Architecture](#api-architecture)*
> 4. *[Overview](#overview)*
> 5. *[Technologies](#technologies-used)*
## **Getting Started**

1. The first step is to clone the repo from **[this](https://github.com/TroyD9241/Troys-Cycle-Emporium)** Github repository.

2. cd into your directory **`cd Troys-Cycle-Emporium`**

3. **`npm install`**

4. You can create an environment variable modeled after the *`.env.example`* file. The *`DB_CONNECTION`* is your Connection String URI.

   **`touch .env`**

   **`echo "DB_CONNECTION=mongodb://mongodb0.example.com:27017" >> .env`**

This is a standalone Connection String that does not enforce access control, meaning you should just be able to copy and paste and have access! This is not ideal, but for quick testing I think its reasonable.

For more info on the Connection String URI please see the [documentation](https://docs.mongodb.com/manual/reference/connection-string/).

5. run **`npm start`**

6. Then simply go to the OpenAPI documentation [**`HERE`**](http://localhost:3000/api-docs/) and begin testing the routes~!

## **Please create in this order Customer-Repair-Inventory(if creating a bike) :)**



-----

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
