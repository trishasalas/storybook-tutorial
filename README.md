# Storybook Tutorial - Complete Guide with React & JSX

A comprehensive tutorial and example project demonstrating how to build, test, and document UI components using **Storybook v9.1.5** with **React** and **JSX** (not TypeScript). This project includes both a complete tutorial website and a working Storybook implementation with custom components.

![Storybook Tutorial](https://img.shields.io/badge/Storybook-v9.1.5-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 🌟 Features

- **Latest Storybook v9.1.5** - Uses the most recent version with all new features
- **React + JSX** - Pure JavaScript components without TypeScript complexity
- **npm Package Manager** - Standard npm instead of yarn for broader compatibility
- **Custom Components** - Card and Input components with full styling
- **Comprehensive Stories** - Multiple story variations demonstrating different states
- **Beautiful Tutorial Website** - Modern, responsive website explaining the entire process
- **Production Ready** - Optimized build configuration and deployment setup

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+
- Basic knowledge of React and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd storybook-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Storybook**
   ```bash
   npm run storybook
   ```

4. **Open your browser**
   Navigate to `http://localhost:6006` to see your Storybook interface

## 📁 Project Structure

```
storybook-tutorial/
├── .storybook/              # Storybook configuration
│   ├── main.js             # Main Storybook config
│   └── preview.js          # Global story settings
├── src/
│   └── stories/            # Component stories
│       ├── Button.jsx      # Example button component
│       ├── Button.stories.js
│       ├── Card.jsx        # Custom card component
│       ├── Card.stories.js
│       ├── card.css        # Card component styles
│       ├── Input.jsx       # Custom input component
│       ├── Input.stories.js
│       └── input.css       # Input component styles
├── package.json            # Project dependencies
├── TUTORIAL.md            # Complete tutorial guide
└── README.md              # This file
```

## 🎯 What You'll Learn

### 1. **Getting Started**
- Setting up a React project from scratch
- Installing and configuring Storybook v9.1.5
- Understanding the Storybook file structure
- Basic configuration and setup

### 2. **Creating Components**
- Building reusable React components with JSX
- Implementing proper PropTypes validation
- Creating modular CSS with BEM methodology
- Component composition and best practices

### 3. **Writing Stories**
- Understanding the story format and structure
- Creating multiple story variations
- Using args and argTypes for interactive controls
- Implementing actions and event handling

### 4. **Advanced Features**
- Auto-generated documentation
- Interactive controls and knobs
- Component testing within Storybook
- Deployment and sharing strategies

## 🧩 Components Included

### Card Component
A flexible card component with multiple variants and features:

- **Variants**: Default, Outlined, Filled
- **Elevation**: None, Low, Medium, High
- **Features**: Optional image, title, content, click handling
- **Stories**: 7 different story variations

```jsx
<Card
  title="Card Title"
  content="Card content goes here"
  variant="outlined"
  elevation="medium"
  onClick={handleClick}
/>
```

### Input Component
A comprehensive form input with full feature set:

- **Types**: Text, Email, Password, Number, Tel, URL
- **Variants**: Outlined, Filled, Standard
- **Sizes**: Small, Medium, Large
- **Features**: Label, helper text, error states, disabled state
- **Stories**: 11 different story variations

```jsx
<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  variant="outlined"
/>
```

## 📖 Tutorial Content

The project includes a comprehensive tutorial covering:

1. **Project Setup** - Creating React app and installing Storybook
2. **Component Development** - Building components with JSX and CSS
3. **Story Creation** - Writing comprehensive stories for components
4. **Testing & Documentation** - Using Storybook's built-in features
5. **Deployment** - Sharing and deploying your Storybook

## 🛠️ Available Scripts

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for production
npm run build-storybook

# Start React development server (if applicable)
npm start

# Build React app for production
npm run build

# Run tests
npm test
```

## 🌐 Tutorial Website

This project also includes a beautiful tutorial website built with:

- **React** - Modern component-based architecture
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide Icons** - Beautiful icon library
- **Responsive Design** - Mobile-first approach

### Website Features

- Modern gradient design with smooth animations
- Interactive code examples with syntax highlighting
- Step-by-step tutorial sections
- Mobile-responsive layout
- Professional typography and spacing

## 📚 Learning Resources

### Official Documentation
- [Storybook Documentation](https://storybook.js.org/docs)
- [React Documentation](https://react.dev)
- [JSX Documentation](https://react.dev/learn/writing-markup-with-jsx)

### Key Concepts Covered
- Component-driven development
- Design system creation
- UI testing strategies
- Documentation automation
- Collaborative development workflows

## 🚀 Deployment Options

### Storybook Deployment
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based automatic deployment
- **GitHub Pages** - Free hosting for open source
- **Chromatic** - Visual testing and review

### Tutorial Website Deployment
- **Netlify** - Static site hosting
- **Vercel** - Serverless deployment
- **GitHub Pages** - Documentation hosting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Storybook Team** - For creating an amazing tool for component development
- **React Team** - For the excellent React framework
- **Open Source Community** - For the countless libraries and tools that make this possible

## 📞 Support

If you have any questions or need help with the tutorial:

1. Check the [TUTORIAL.md](TUTORIAL.md) file for detailed instructions
2. Review the [Storybook documentation](https://storybook.js.org/docs)
3. Open an issue in this repository
4. Join the [Storybook Discord community](https://discord.gg/storybook)

## 🎉 What's Next?

After completing this tutorial, you'll be ready to:

- Build your own component library with Storybook
- Implement design systems in your projects
- Create comprehensive component documentation
- Set up automated visual testing
- Collaborate effectively with designers and developers

---

**Happy coding!** 🚀 Start building amazing UI components with Storybook today!