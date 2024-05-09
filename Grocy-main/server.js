const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use the port provided by environment variable or default to 3000

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Example route to handle cart requests (replace with your actual cart logic)
app.post('/api/cart', (req, res) => {
  // Handle adding items to the cart, updating quantities, etc.
  res.json({ message: 'Cart updated successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
