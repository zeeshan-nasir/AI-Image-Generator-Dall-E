# AI Image Generator DALL-E - Local Setup Guide

## Prerequisites

Before setting up this project, you need to have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (running locally or cloud instance)
- **Redis** (running locally or cloud instance)

## Installation Steps

### 1. Install Dependencies

The dependencies have already been installed. If you need to reinstall:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Environment Configuration

#### Server Environment (.env in server directory)

The server `.env` file has been created with the following variables. You need to update these with your actual values:

```env
# Server Configuration
APP_PORT=5000
MODE=dev
DEV_API=http://localhost:5000
PROD_API=https://your-production-domain.com

# Client URLs
CLIENT_DEV_API=http://localhost:3000
CLIENT_PROD_API=https://your-production-domain.com

# MongoDB Configuration
MONGODB_URL=mongodb://localhost:27017/ai-image-generator

# JWT Configuration
JWT_ACCESS_SECRET=your_jwt_access_secret_key_here
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key_here

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Nodemailer Configuration
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASS=your_app_password_here

# OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
```

#### Client Environment (.env in client directory)

The client `.env` file has been created with:

```env
REACT_APP_DEV_API=http://localhost:3000
REACT_APP_PROD_API=https://your-production-domain.com
REACT_APP_MODE=dev
REACT_APP_SERVER_DEV_API=http://localhost:5000
REACT_APP_SERVER_PROD_API=https://your-production-domain.com
```

### 3. Required Services Setup

#### MongoDB

- Install MongoDB locally or use MongoDB Atlas (cloud)
- Create a database named `ai-image-generator`
- Update `MONGODB_URL` in server `.env`

#### Redis

- Install Redis locally or use Redis Cloud
- Default configuration: localhost:6379
- Update Redis settings in server `.env` if using cloud

#### OpenAI API

- Sign up at [OpenAI](https://openai.com/)
- Get your API key
- Update `OPENAI_API_KEY` in server `.env`

#### Cloudinary

- Sign up at [Cloudinary](https://cloudinary.com/)
- Get your cloud name, API key, and secret
- Update Cloudinary settings in server `.env`

#### Email Service (Nodemailer)

- For Gmail: Use App Password (2FA required)
- Update `NODEMAILER_EMAIL` and `NODEMAILER_PASS` in server `.env`

#### OAuth (Optional)

- Google OAuth: Set up at [Google Cloud Console](https://console.cloud.google.com/)
- Facebook OAuth: Set up at [Facebook Developers](https://developers.facebook.com/)
- Update OAuth credentials in server `.env`

### 4. Running the Application

#### Start the Server

```bash
cd server
npm run dev
```

Server will run on http://localhost:5000

#### Start the Client (in a new terminal)

```bash
cd client
npm start
```

Client will run on http://localhost:3000

### 5. Database Setup

The application will automatically create the necessary collections when you first run it:

- `users` - User accounts and profiles
- `posts` - Generated images and posts
- `collections` - User collections
- `savedposts` - Saved/favorited posts
- `otpverifications` - Email verification OTPs

### 6. Testing the Setup

1. Open http://localhost:3000 in your browser
2. Try to register a new account
3. Verify your email (if email is configured)
4. Try generating an image with a text prompt

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Ensure MongoDB is running
   - Check `MONGODB_URL` in server `.env`

2. **Redis Connection Error**

   - Ensure Redis is running
   - Check Redis configuration in server `.env`

3. **OpenAI API Error**

   - Verify `OPENAI_API_KEY` is correct
   - Check your OpenAI account balance

4. **Port Already in Use**

   - Change `APP_PORT` in server `.env`
   - Change `REACT_APP_DEV_API` in client `.env`

5. **CORS Errors**
   - Ensure client and server URLs match in environment files
   - Check `CLIENT_DEV_API` in server `.env`

### Security Notes

- Never commit `.env` files to version control
- Use strong, unique secrets for JWT keys
- Keep API keys secure and rotate them regularly
- Use environment-specific configurations for production

## Project Structure

```
AI-Image-Generator-DALL-E/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── scenes/        # Page components
│   │   ├── state/         # Redux store and slices
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── package.json
└── README.md
```

## Features

- AI image generation using OpenAI DALL-E
- User authentication with JWT and OAuth
- Image storage with Cloudinary
- User collections and favorites
- Email verification and password reset
- Infinite scrolling for posts
- Responsive Material-UI design

## Next Steps

1. Update all environment variables with your actual values
2. Start MongoDB and Redis services
3. Run the server and client
4. Test the application functionality
5. Customize features as needed

For additional help, refer to the main README.md file or check the project documentation.
