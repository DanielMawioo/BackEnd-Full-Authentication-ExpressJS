# NodeJS/Express/Mongo/JWT— Full Authentication API
### Techstack

1. Node
2. Express
3. MongoDB
4. Jwt

## Features
- 1. Register.
- 2. Verifying Account.
- 3. Login.
- 4. Resend New Verification Token.
- 5. Get an Authenticated User.
- 6. Forgot Password.
- 7. Reset Password.


#### Local set up

```
git clone https://github.com/DanielMawioo/BackEnd-Full-Authentication-ExpressJS.git
```

```
cd BackEnd-Full-Authentication-ExpressJS
```

```
npm install
```

```
npm start # makes the app available on localhost, port 5000 by default
```
### API
1. Navigate to POST method [http://localhost:5000/api/auth/register](http://localhost:5000/api/auth/register).
    ```
    sample input
    {
        "firstName": "John",
        "lastName":"Doe",
        "email":"johndoe2@gmail.com",
        "password":"somePassword"
   }
    ```
2. Navigate to [http://localhost:5000/api/auth/login](http://localhost:5000/api/auth/login).
3. Navigate to [http://localhost:5000/api/auth/verify](http://localhost:5000/api/auth/verify). accompanied by / "your token"
4. Navigate to [http://localhost:5000/api/auth/verify/resend](http://localhost:5000/api/auth/verify/resend).
5. Navigate to [http://localhost:5000/api/auth](http://localhost:5000/api/auth). current user
6. Navigate to [http://localhost:5000/api/password/forgot](http://localhost:5000/api/password/forgot).
6. Navigate to [http://localhost:5000/api/password/reset](http://localhost:5000/api/password/reset).

You should be able to see the app:


# View on Postman Node-Express Api Endpoints
[Postman Documentation here](https://documenter.getpostman.com/view/14978598/UVCBBQBZ
)

### Contributing
This is a in progress project you can add:
- 1. tests
- 2. social login
- 3. swagger

Contact me here [Daniel Mawioo](mawioodaniel43@gmail.com)

## Thank You!.
