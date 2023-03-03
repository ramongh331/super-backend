# Super App - Backend

## Purpose
This API will store all users's profile information.

## Technologies To Be Used
- JavaScript/JSX
- Express
- MongoDB/Mongoose
- JSON
- NodeJS
- Morgan
- Cors
- To Be Deployed on Render.com

## Model
<img src="https://i.imgur.com/jZtnVyA.png" alt="Super App ERD"/>

## Profiles Schema
### Identity
- image url (Need to look into Cloudinary)
- Super Being Name: String
- Real Name: String
- Age: Int
- Species: String 
- Gender (if human): String (Drop Down)
- Sexuality: String (Drop Down) 
- Location: String

### Attributes
- Abilities: String
- Hero/Villain/Anti: String (Drop Down)
- Team/Partner/Independent: String (Drop Down)

### Bio
- Backstory: String (A brief summary of the super being's history and backstory, including any notable events or accomplishments. This could help potential allies or enemies understand the super being's motivations and values.)

## The Route Table
| Endpoint | Method | Description|
|----------|--------|------------|
| /profile/:email | GET | returns your profile based on email |
| /profile | POST | creates your profile |
| /profile/:email | PUT | updates your profile based on email |
| /profile/:email | DELETE | deletes your profile based on email |



## Live API
[Live Site](https://super-backend-k308.onrender.com)