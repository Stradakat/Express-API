# Express Goals API

A RESTful API built with Express.js and MongoDB for managing goals. This project demonstrates a clean architecture with proper error handling, async operations, and middleware implementation.

## Features

- ✅ Full CRUD operations for goals
- ✅ MongoDB database integration with Mongoose
- ✅ Async error handling with express-async-handler
- ✅ Custom error middleware
- ✅ RESTful API design
- ✅ Environment variable configuration
- ✅ Request validation

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB
- **ODM**: Mongoose 9.1.3
- **Environment**: dotenv
- **Error Handling**: express-async-handler

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ExpressAPI
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Update the `MONGO_URI` with your MongoDB connection string:
   - For local MongoDB: `mongodb://localhost:27017/goalsdb`
   - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/goalsdb`

## Usage

### Start the development server:
```bash
npm run server
```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

### Start the production server:
```bash
npm start
```

## API Endpoints

### Base URL
```
http://localhost:5000/api/goals
```

### Get All Goals
```http
GET /api/goals
```

**Response:**
```json
[
  {
    "_id": "60d5ec49f1b2c72b8c8b4567",
    "text": "Learn Express.js",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Create a Goal
```http
POST /api/goals
Content-Type: application/json

{
  "text": "Learn Express.js"
}
```

**Response:**
```json
{
  "_id": "60d5ec49f1b2c72b8c8b4567",
  "text": "Learn Express.js",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Error Response (400):**
```json
{
  "message": "Please add a text field"
}
```

### Update a Goal
```http
PUT /api/goals/:id
Content-Type: application/json

{
  "text": "Master Express.js"
}
```

**Response:**
```json
{
  "_id": "60d5ec49f1b2c72b8c8b4567",
  "text": "Master Express.js",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

**Error Response (400):**
```json
{
  "message": "Goal not found"
}
```

### Delete a Goal
```http
DELETE /api/goals/:id
```

**Response:**
```json
{
  "id": "60d5ec49f1b2c72b8c8b4567"
}
```

**Error Response (400):**
```json
{
  "message": "Goal not found"
}
```

## Project Structure

```
ExpressAPI/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── controllers/
│   │   └── goalController.js  # Goal CRUD operations
│   ├── middleware/
│   │   └── errorMiddleware.js # Error handling middleware
│   ├── models/
│   │   └── goalModel.js       # Goal Mongoose schema
│   ├── routes/
│   │   └── goalRoutes.js      # Goal API routes
│   └── server.js              # Express app entry point
├── .env                       # Environment variables (not committed)
├── package.json
└── README.md
```

## Error Handling

The API uses a centralized error handling middleware that:
- Catches errors from async operations
- Returns appropriate HTTP status codes
- Provides error messages in JSON format
- Hides stack traces in production mode

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode (development/production) | `development` |
| `PORT` | Server port number | `5000` |
| `MONGO_URI` | MongoDB connection string | Required |

## Scripts

- `npm start` - Start the production server
- `npm run server` - Start the development server with nodemon (auto-reload)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**Rick Felix**

---

For questions or support, please open an issue in the repository.
