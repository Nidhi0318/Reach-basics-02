# React Basics 🚀

This project contains beginner-level React.js examples created to understand the fundamentals of React components, JSX, props, state, class components, component composition, and CSS styling.

The project is built using **React + Vite** and contains multiple small examples demonstrating how React components can be created, reused, and combined.

## 📌 Project Overview

The project currently includes the following React examples:

1. **Simple Form & Welcome Component**
2. **Greeting App**
3. **Book Details using Props**
4. **Employee Details using Class Component**
5. **CSS Styling for React Components**

---

## 📚 Examples Included

### 1. Simple Form and Welcome Component

The `Simpleform.jsx` file contains two functional components:

* `Simpleform`
* `Welcome`

The `Simpleform` component displays a **"Simple Form"** heading, while the `Welcome` component displays a **"Welcome"** message.

Both components are rendered together from `App.jsx`.

### 2. Greeting App

The `Greeting` component demonstrates the use of the React `useState` hook.

The user can enter their name into an input field, and the displayed greeting updates dynamically:

```text
Hello, Nidhi
```

The component stores the name using:

```javascript
const [name, setName] = useState("");
```

and updates it using the input's `onChange` event.

---

### 3. Book Details using Props

The `Book` component demonstrates **props** in React.

It receives:

* Title
* Author
* Price
* Language

and displays them in a table.

The component is used with the following data:

```text
Title    : React Basics
Author   : Nidhi
Price    : ₹500
Language : English
```

These values are passed from `App2.jsx` using props.

This example demonstrates how data can be passed from a parent component to a child component.

---

### 4. Employee Details using Class Component

The `EmployeeDetails` component demonstrates a **React class component**.

It extends React's `Component` class and uses the `render()` method to display employee information.

The displayed employee details are:

```text
ID       : 101
Name     : Nidhi
Role     : Developer
Company  : ABC Company
Location : Bangalore
```

The employee component is rendered from `App1.jsx`.

---

## 🎨 CSS Styling

The project also demonstrates styling React components using separate CSS files.

### Book Styling

`Book.css` styles the book information container, header, table, table cells, and buttons.

### Employee Styling

`EmployeeDetails.css` provides styling for the employee details page, including the container, header, table, and buttons.

### Simple Form Styling

`Simpleform.css` styles the Simple Form and Welcome sections using containers, spacing, backgrounds, rounded corners, and shadows.

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* CSS
* Vite
* Node.js
* npm
* Git
* GitHub

---

## 📂 Project Structure

```text
React-basics/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App1.jsx
│   ├── App2.jsx
│   ├── Book.jsx
│   ├── Book.css
│   ├── EmployeeDetails.jsx
│   ├── EmployeeDetails.css
│   ├── Simpleform.jsx
│   ├── Simpleform.css
│   ├── greeting.jsx
│   ├── greetapp.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

The entry point currently imports `App2` and renders it using React's `createRoot` and `StrictMode`.

---

## ⚙️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Nidhi0318/React-basics.git
```

### 2. Navigate to the project

```bash
cd React-basics
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the localhost URL displayed by Vite in the terminal.

---

## 🧠 React Concepts Practiced

| Concept               | Example                                     |
| --------------------- | ------------------------------------------- |
| Functional Components | `Simpleform`, `Welcome`, `Greeting`, `Book` |
| JSX                   | All React components                        |
| Props                 | `Book` component                            |
| `useState`            | `Greeting` component                        |
| Event Handling        | Name input in `Greeting`                    |
| Class Components      | `EmployeeDetails`                           |
| Component Composition | `App` rendering multiple components         |
| CSS Styling           | Book, Employee and Simple Form examples     |
| `StrictMode`          | `main.jsx`                                  |
| `createRoot`          | `main.jsx`                                  |

---

## 🎯 Learning Objective

The objective of this project is to build a strong foundation in React.js through simple, practical examples.

The examples demonstrate how to:

* Create React components
* Use JSX
* Pass data using props
* Manage simple state using `useState`
* Handle user input
* Create class-based components
* Combine multiple components
* Apply CSS to React components
* Run a React application using Vite

---

## 🚀 Future Improvements

The project can be extended by adding:

* More React Hooks
* Conditional rendering
* List rendering
* Forms with state management
* Event handling examples
* `useEffect`
* `useRef`
* `useMemo`
* `useCallback`
* React Router
* API integration
* More reusable components
* Small React projects

---

## 👩‍💻 Author

**Nidhi M**

GitHub: [Nidhi0318](https://github.com/Nidhi0318)

---

## ⭐ Purpose

This repository is maintained as a **React.js learning and practice project**, with examples added as new concepts are learned.
