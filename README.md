# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite. This single-page application showcases professional experience, projects, skills, and contact information with a clean, dark-themed design.

## 🚀 Features

- Responsive layout for all devices
- Dark theme with custom color variables
- Smooth scrolling and animations
- Interactive navigation
- Multiple sections:
  - About with services and testimonials
  - Portfolio with filterable projects
  - Resume with timeline and skills
  - Contact form
- Sidebar with personal info and social links

## 🛠️ Built With

- React 19
- Vite 7
- React Router
- React Icons
- CSS3 with custom properties
- CSS Grid and Flexbox for layouts

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shohidulislamemon/portfolio.git
```

2. Navigate to project directory:
```bash
cd portfolio-website
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── projects.json
│   ├── services.json
│   └── testimonials.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── pages/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Portfolio/
│   │   └── Resume/
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

## 🎨 Customization

1. Update personal information in the JSON files under the `public` directory
2. Modify color schemes in `src/App.css` (look for `:root` variables)
3. Add/modify components in the `src/components` directory
4. Update page content in the `src/pages` directory

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- 450px - Small devices
- 580px - Medium devices
- 768px - Tablets
- 1024px - Desktop
- 1250px - Large desktop

## 🚥 Status

Project is: _in development_

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

Created by [@shohidulislamemon](https://github.com/shohidulislamemon) - feel free to contact me!
