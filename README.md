# <div align="center" style="text-decoration: none;">E-Commerce Website</div>

## Introduction
This is an e-commerce website project with three main roles:
- **Admin**: The administrator with full control over the system.
- **User**: Registered users who can shop and perform personal actions.
- **Guest**: Unregistered visitors who can only browse products.

The project is divided into two systems:
1. **MainSystem**: The main system, where the core functionalities of the website are performed for all roles.
2. **SubSystem**: The subsystem, called during payment processing.

## Technologies Used
- **Node.js**
- **Express.js**
- **Express Handlebars**
- **HTML, CSS, JavaScript**
- **TailwindCSS**

## Project Structure
```
E-Commerce-Website/
├── mainsystem/
│   ├── config/
│   ├── public/
│   ├── views/
│   ├── models/
│   ├── services/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── subsystem/
│   ├── config/
│   ├── public/
│   ├── views/
│   ├── models/
│   ├── services/
│   ├── routes/
│   ├── controllers/
│   └── server.js
└── README.md
```

## Installation and Running Guide

### Prerequisites
- Latest version of Node.js.
- NPM (Node Package Manager).

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone "https://github.com/mwakidenis/E-Commerce-Website.git"
   ```
2. Install dependencies for MainSystem:
   ```bash
   cd mainsystem
   npm install
   ```
3. Install dependencies for SubSystem:
   ```bash
   cd ../subsystem
   npm install
   ```

### Running the Project
1. Start the MainSystem:
   ```bash
   cd mainsystem
   npm start
   ```
   - The main application will run at `http://localhost:3000`
2. Start the SubSystem:
   ```bash
   cd ../subsystem
   npm start
   ```
   - The subsystem will run at `http://localhost:3113`

### Notes
- Ensure both systems are running simultaneously to fully utilize the website's functionalities.

## Key Features
### MainSystem
- **Guest**:
  - View product listings.
  - Search for products.
- **User**:
  - All Guest functionalities.
  - Register and log in.
  - Add products to the cart.
  - Make payments (calls SubSystem).
  - Manage personal information.
- **Admin**:
  - Manage products.
  - Manage users.
  - View revenue reports.

### SubSystem
- Handle payments through integrated payment methods.
- Confirm payment status and send feedback to MainSystem.

## Feedback and Contact
- For any issues or improvement ideas, please create an **Issue** on the repository or contact via email: `<mwakidenice@gmail.com>`.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
