// Import required modules
import "dotenv/config"; 
import express from 'express'; 
import gameRoutes from './routes/gameRoutes.js';
console.log(0);
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

//Redirect request to endpoint starting with /posts to postRoutes.js
app.use("/games", gameRoutes);
//app.use("/model", postLlama);

app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  res.status(500).json({
    message: "Something terrible has occured",
  });
});

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});