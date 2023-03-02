# Super App - Backend

## Purpose
This API will store the user's profile information.

## Technologies To Be Used
- JavaScript
- Express
- MongoDB/Mongoose
- Cors
- To Be Deployed on Render.com

## Model
<img src="" alt=""/>

### Schema
#### Identity
- image url (Need to look into Cloudinary)
- Super Hero Name: String
- Real Name: String
- Age: Int
- Species: String 
- Gender (if human): String (Drop Down)
- Sexuality: String (Drop Down) 
- Location: String

#### Super Being Information
- Abilities: String
- Hero/Villain/Anti: String (Drop Down)
- Team/Independent: String (Drop Down)
- 

#### Bio
- Backstory: String (A brief summary of the super being's history and backstory, including any notable events or accomplishments. This could help potential allies or enemies understand the super being's motivations and values.)






## The Route Table
| Endpoint | Method | Description|
|----------|--------|------------|
| /profile | GET | returns all thumbnails of everyone's profiles |
| /profile/:id | GET | returns a single profile |
| /profile | POST | creates a cover letter |
| /coverletters/:id | PUT | updates a cover letter based on id |
| /coverletters/:id | DELETE | deletes a cover letter based on id |



## Live API
[Live Site](https://super-backend-k308.onrender.com)