// Import required modules
import "dotenv/config"; 
import express from 'express'; 
import { fileURLToPath } from 'url';
import path from 'path';
import llmRoutes from './routes/llmRoutes.js';
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  ChatPromptWrapper
} from 'node-llama-cpp';

console.log(0);
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use("/llmSession", llmRoutes);
console.log("AI: ");
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// const model = new LlamaModel({
//     modelPath: path.join(__dirname,  "llama2-13b-estopia.Q4_K_M.gguf")
// });
// const context = new LlamaContext({model});
// const session = new LlamaChatSession({context});

// const q1 = "write a 300 word story about a bottle with a note in the pacific";
// console.log("User: " + q1);

// const a1 = await session.prompt(q1);
// console.log("AI: " + a1);
// //need to find context - check chatpromptwrapper and generatecontextformhistory and also find out how to do system prompt
// console.log(session.context);

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