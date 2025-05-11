const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

dotenv.config();

const connectDB = require("./config/dbConnection");
const authRoutes = require("./routes/authRoutes");
const protectedRoute = require("./routes/protectedRoutes");
const propertyRoutes = require("./routes/VendorpropertyRoute");
const userProfileRoutes = require("./routes/userProfileRoutes");
const vendorRepliesRoutes = require("./routes/vendorRepliesRoutes");
const manageReviews = require("./routes/manageReviews");
const analytics = require("./routes/analytics");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/protected", protectedRoute);
app.use("/api/auth", authRoutes);

app.use("/api/vendor/properties", propertyRoutes);
app.use("/api/vendor/userprofile", userProfileRoutes);
app.use("/api/vendor/replies", vendorRepliesRoutes);
app.use("/api/admin", manageReviews);
app.use("/api/booking", analytics);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
