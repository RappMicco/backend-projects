# 📧 Email Backend API (Portfolio Contact Form)

A simple and secure backend API built using Node.js and Express to handle contact form submissions and send emails using Brevo (Sendinblue).

---

## 🚀 Features

* 📩 Send emails via contact form
* ✅ Input validation (name, email, message)
* 🔐 Secure API key using environment variables
* ⚡ Fast and lightweight Express server
* 🌐 Ready for deployment (Render compatible)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Brevo (Sendinblue API)
* dotenv

---

## 📁 Project Structure

```
project/
│
├── app.js
├── mailConfig.js
├── routes/
├── controllers/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
PORT=5448
BREVO_API_KEY=your_api_key
BREVO_MY_EMAIL=your_email
BREVO_RECEIVER=your_email
```

---

## ▶️ Run the Server

```bash
npm run dev
```

or

```bash
node app.js
```

---

## 🌐 API Endpoint

### POST `/api/contact`

Send a message from the contact form.

### 📥 Request Body

```json
{
  "name": "Rapp Micco",
  "email": "test@gmail.com",
  "message": "Hello!"
}
```

---

### ✅ Success Response

```json
{
  "success": true,
  "message": "Email sent successfully!"
}
```

---

### ❌ Error Response

```json
{
  "success": false,
  "message": "Please fill in all required fields!"
}
```

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Frontend (React/Vite)

---

## 🚀 Deployment (Render)

1. Connect your GitHub repository to Render
2. Set root directory (if needed)
3. Add environment variables
4. Deploy

---

## ⚠️ Notes

* Make sure your Brevo sender email is verified
* Check spam folder if emails are not received
* Restart server after updating `.env`

---

## 👨‍💻 Author

**Rapp Micco Rizo**
Associate Software Engineer

---

## 📄 License

This project is open-source and available under the MIT License.
