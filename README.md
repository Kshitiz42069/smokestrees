
# User Registration and Address Storage Backend

This is a Node.js backend project that allows users to register and store their addresses. The backend is built using MongoDB, Mongoose, and Express.js. Users can have multiple addresses, which are stored in a one-to-many relationship with the user.

## Features

- **User Registration**: Users can register with their name, and addresses can be added under the same user.
- **Address Management**: Users can store multiple addresses.
- **No Authentication**: The project does not include an authentication system as it is not required.


## Installation

Clone the project and install the dependencies
### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install Dependencies**:
   ```bash
   npm install

3. **Configure Environment Variables**:
   ```bash
   PORT=5000
   MongoURI=<your-mongodb-connection-string>
3. **Run the Application**:
   ```bash
   nodemon backend/server.js
