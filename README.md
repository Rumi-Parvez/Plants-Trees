# 🌿 Plants & Trees

A modern and responsive **Plant & Trees Exploration Website** where users can discover different plants, explore plant information, and learn more about nature through an engaging and user-friendly interface.

The project is built with **React, TypeScript, and Vite** and focuses on practicing modern React concepts such as **API data fetching, Suspense, the `use()` API, reusable components, TypeScript interfaces, and dynamic rendering**.

---

## 🌐 Live Project

🚀 **Live Website:**
https://plants-trees.netlify.app/

📦 **GitHub Repository:**
https://github.com/Rumi-Parvez/Plants-Trees

---

<p align="center">
  <img 
    src="https://i.postimg.cc/g2yT6MNh/4.png" 
    alt="Plant & Trees Exploration Website banner" 
    width="100%" 
  />
</p>

---

## 🌱 Project Overview

**Plants & Trees** is a frontend web application designed to provide an easy and visually engaging way to explore plant information.

The application retrieves plant data from an external API and dynamically displays the information using reusable React components.

Users can explore plant cards containing important information such as:

* 🌿 Plant name
* 🖼️ Plant image
* 📝 Plant description
* 🏷️ Plant category
* 💰 Plant price

The project combines a nature-focused visual design with modern React development practices.

---

## ✨ Main Features

### 🌿 Plant Exploration

Explore different plants through dynamically generated plant cards.

### 🌐 External API Integration

Plant information is loaded from an external API instead of using only static local data.

### ⚡ React Suspense

The project uses React `Suspense` to handle asynchronous data loading and provide a better loading experience.

### 🔄 React `use()` API

The React `use()` API is used to read the API promise and access the resolved plant data.

### 💀 Loading Skeleton

A skeleton loading interface is displayed while plant data is being loaded.

### 🧩 Reusable Components

The application is divided into reusable React components to keep the code organized and maintainable.

### 🛡️ TypeScript Type Safety

Plant data and component props are defined using TypeScript interfaces.

### 🎨 Modern UI

The project uses a clean, nature-focused interface with modern CSS styling, glassmorphism effects, borders, blur effects, and rounded cards.

### 📱 Responsive Layout

The interface is designed to provide a smooth experience across different screen sizes.

### 📌 Fixed Navigation

The navigation header remains accessible while users browse the page.

---

## 🛠️ Technologies Used

### Frontend

* ⚛️ React
* 🔷 TypeScript
* ⚡ Vite
* 🌐 HTML5
* 🎨 CSS3

### React Concepts

* Functional Components
* Props
* Component Composition
* `Suspense`
* React `use()`
* Promise-based Data Fetching
* Dynamic Rendering
* Reusable Components

### TypeScript Concepts

* Interfaces
* Type Annotations
* Typed Props
* Promise Types
* API Response Types

---

## 📦 Dependencies

The project uses the following main dependencies:

### Runtime Dependencies

```text
react
react-dom
```

### Development Dependencies

```text
@types/node
@types/react
@types/react-dom
@vitejs/plugin-react
oxlint
typescript
vite
```

For the exact versions, please check the project's `package.json` file.

---

## 🌐 API Integration

The project retrieves plant information from the Programming Hero Plants API.

### API Endpoint

```text
https://openapi.programming-hero.com/api/plants
```

The API provides plant information such as:

```text
id
image
name
description
category
price
```

The API response is handled using TypeScript types before being rendered through React components.

---

## 🧩 React Component Structure

The project separates different responsibilities into reusable components.

### `App.tsx`

The main application component.

Responsibilities include:

* Creating the API promise
* Providing the promise to the API component
* Handling the loading state with `Suspense`
* Rendering the main application layout

---

### `api.plants.tsx`

Responsible for receiving and resolving the plant API data.

It uses React's:

```tsx
use()
```

API to read the resolved promise and dynamically render plant information.

---

### `plants.tsx`

Responsible for displaying individual plant information.

Each plant card can contain:

```text
Plant Image
Plant Name
Plant Description
Plant Category
Plant Price
```

---

### `header.tsx`

Contains the website navigation.

The navigation provides access to different sections of the website.

---

### `type.ts`

Contains TypeScript interfaces used throughout the project.

Example:

```ts
export interface plantsType {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
}
```

---

## 📁 Project Structure

```text
Plants-Trees/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── componets/
│   │   ├── api.plants.tsx
│   │   ├── header.tsx
│   │   ├── header.css
│   │   │
│   │   └── planets/
│   │       └── plants.tsx
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── type.ts
│
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## 💻 How to Run Locally

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Rumi-Parvez/Plants-Trees.git
```

### 2. Navigate to the Project

```bash
cd Plants-Trees
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

After starting the development server, Vite will provide a local URL, normally:

```text
http://localhost:5173
```

Open that URL in your browser.

---

## 🚀 Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Code Quality

The project uses **Oxlint** for code-quality checking.

Run:

```bash
npm run lint
```

This helps identify potential code-quality and linting issues.

---

## ⏳ Loading Experience

The project provides a dedicated loading experience using React `Suspense`.

While the API request is being resolved, skeleton-style loading cards are displayed instead of leaving the page blank.

This improves the perceived user experience and demonstrates how asynchronous UI can be handled with modern React.

---

## 🎨 UI & Design

The project uses a nature-inspired visual style.

### Design Characteristics

* 🌿 Nature-focused theme
* 🌑 Dark interface
* 🪟 Glassmorphism-inspired cards
* ✨ Backdrop blur effects
* 🔲 Rounded corners
* 📐 CSS Grid layout
* 📌 Fixed navigation
* 🖼️ Large plant imagery
* 📱 Responsive structure
* 🎯 Clean visual hierarchy

---

## 📱 Responsive Design

The website is designed to work across different devices, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The plant cards use a grid-based layout to organize content efficiently.

---

## 🎯 Project Objectives

This project was created to practice and demonstrate:

* React development
* TypeScript with React
* API integration
* Asynchronous data fetching
* Promise handling
* React Suspense
* React `use()`
* Component-based architecture
* Reusable components
* TypeScript interfaces
* Dynamic rendering
* Loading-state design
* CSS Grid
* CSS Flexbox
* Modern CSS
* Vite development workflow
* Code quality with Oxlint

---

## 🔮 Future Improvements

The project can be extended with additional functionality such as:

* 🔍 Advanced plant search
* 🏷️ Plant category filtering
* 📄 Individual plant details pages
* ❤️ Favorite plants
* 🌱 Plant care guides
* 💧 Watering information
* ☀️ Sunlight requirements
* 🌡️ Growing conditions
* 📊 Advanced filtering
* 🔎 Search by plant name
* 🌙 Light/Dark theme switching
* 📱 Further mobile UI improvements
* ⚠️ Better API error handling
* 🔄 Retry functionality when API requests fail

---

## 🔗 Relevant Links

### 🌐 Live Website

https://plants-trees.netlify.app/

### 📦 GitHub Repository

https://github.com/Rumi-Parvez/Plants-Trees

### 🌿 Plant API

https://openapi.programming-hero.com/api/plants

---

## 👨‍💻 Developer

### Rumi Parvez

**Full-Stack Developer & Software Engineer**

I am passionate about building modern, responsive, scalable, and user-focused web applications. I enjoy learning new technologies, solving development problems, and turning ideas into functional digital experiences.

### GitHub

https://github.com/Rumi-Parvez

---

## ⭐ Support

If you like this project, feel free to:

* ⭐ Star the GitHub repository
* 🍴 Fork the repository
* 🐛 Report issues
* 💡 Suggest improvements

Your support and feedback are always appreciated!

---

## 📄 License

This project was created for **learning and development purposes**.
