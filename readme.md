# Troys-Cycle-Emporium

### Welcome to your #1 cycling shop in Chicago!

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
