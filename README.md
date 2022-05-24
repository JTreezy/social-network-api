# Social Network API

## Description

This API allows for creation of new users with a valid username and email address, add other users as friends as well as post "thoughts" and "reactions". Not only can one post such thoughts and reactions, users can also update and delete thoughts and reactions as well as remove other users as friends. You can get started by creating a username and using an email address.

## Installation

To use this project, you can either clone or fork this repository to your local machine. Afterwards, be sure to install Node.Js as well as MongoDB. This project comes with a package.json file, so be sure to run `npm install` to install dependencies.

## Usage

After cloning/forking this repo to your local machine and completing the installation steps, open the "server.js" file in the terminal and run the command "npm run start". For this project, Insomnia is recommended to view the routes given. 

### Models

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

---

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

---

**Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

**Schema Settings**:

This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

## License <a name="license"></a>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Tests <a name="tests"></a>
Please update tests when appropriate and necessary.

## Questions <a name="questions"></a>
If there are any questions or concerns about the application, here is a link to my GitHub profile:

-JTreezy([github.com/JTreezy](github.com/JTreezy))

If there are any additional questions, here is my e-mail address to reach me.

-digitalsigna@gmail.com

# Submission
* GitHub: https://github.com/JTreezy/social-network-api
* Walkthrough Video: https://drive.google.com/file/d/1pp8xaCDf97YHXKGtFU-2HDR4kqSPpBwL/view