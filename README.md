# 🌍 Wanderlust

Wanderlust is a full-stack, Airbnb-inspired web application where users can list, explore, and manage travel properties. It features secure authentication, image uploads, interactive maps, and is built using the MVC architecture.

🔗 **Live Demo:** [wanderlust-znv4.onrender.com](https://wanderlust-znv4.onrender.com)

---

## 📸 Screenshots

> Add screenshots of your app here (home page, listing details, map, login page).

```md
![Home Page](./docs/home.png)
![Listing Details](./docs/listing.png)
```

---

## 🚀 Features

- 🔐 User authentication: sign up, log in, and log out
- 🛡️ Authorization: only the owner of a listing can edit or delete it
- 🏠 Create, view, update, and delete property listings (full CRUD)
- 📸 Image upload and cloud storage for listings
- 🗺️ Interactive map showing each listing's location, with address geocoding
- ✅ Server-side validation for listing data
- 💬 Flash messages for success and error feedback
- 💾 Persistent sessions stored in MongoDB
- 🧱 Clean MVC code structure with RESTful routing

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript, EJS, ejs-mate |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | Passport.js, passport-local, passport-local-mongoose, express-session, connect-mongo |
| **Validation** | Joi |
| **File Upload** | Multer, Cloudinary, multer-storage-cloudinary |
| **Maps** | Mapbox SDK |
| **Other** | connect-flash, method-override, cookie-parser, dotenv |
| **Deployment** | Render |

---

## 📁 Project Structure

```
wanderlust/
├── controllers/     # Request-handling logic
├── models/          # Mongoose schemas
├── routes/          # Express routes
├── views/           # EJS templates
├── public/          # Static files (CSS, JS)
├── utils/           # Helpers and error handling
├── app.js           # Application entry point
├── middleware.js    # Custom middleware
├── schema.js        # Joi validation schemas
├── cloudConfig.js   # Cloudinary configuration
└── package.json
```

> Adjust this tree to match your actual folders.

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v24.13.0 or later
- A [MongoDB](https://www.mongodb.com/) database (local or MongoDB Atlas)
- A [Cloudinary](https://cloudinary.com/) account
- A [Mapbox](https://www.mapbox.com/) access token

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jayesh-94/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_access_token
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Start the server**

   ```bash
   node app.js
   ```

5. Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🧠 What I Learned

- Structuring a Node.js application with the MVC pattern
- Implementing authentication and authorization with Passport.js
- Managing sessions with a MongoDB store
- Integrating third-party APIs (Mapbox) and cloud storage (Cloudinary)
- Validating data on the server with Joi
- Deploying a full-stack application on Render

---

## 🔮 Future Improvements

- Reviews and ratings for listings
- Search and filter by location, price, and category
- Booking system
- Wishlist / favorites

---

## 👤 Author

**Jayesh Rathod**

- GitHub: [@jayesh-94](https://github.com/jayesh-94)
- LinkedIn: [Jayesh Rathod](https://linkedin.com/in/jayesh-rathod-097002318)
- Email: jayeshrathod6616@gmail.com

---

⭐ If you like this project, consider giving it a star!
