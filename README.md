# Professional Portfolio - Hiram Lugo

## Overview
A modern, responsive portfolio website showcasing my professional experience, skills, and projects as a Full-Stack Software Engineer. Built with HTML5, CSS3, and JavaScript, featuring a clean, atomic design approach and seamless user experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark theme with professional color scheme
- **Interactive UI**: 
  - Animated sections
  - Smooth scrolling
  - Dynamic content loading
  - Custom cursor effects
- **Service Sections**: Detailed overview of professional services including:
  - Full-Stack Development
  - Mobile Development
  - RPA (Robotic Process Automation)
  - UI/UX Design
- **Portfolio Showcase**: Interactive gallery of projects and certifications
- **Contact Form**: PHP-powered contact form with email integration
- **AI Chatbot**: Interactive chatbot for visitor engagement
- **Blog Section**: Technical articles and professional insights

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP
- Bootstrap
- Docker
- Font Awesome
- Google Fonts
- Particle.js
- DialogFlow (Chatbot)

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/gearhiram1397/hiram-portfolio.git
   ```

2. **Using Docker**
   ```bash
   docker build -t portfolio .
   docker run -d -p 80:80 portfolio
   ```

3. **Traditional Setup**
   - Place files in your web server directory
   - Configure PHP mail settings in `php/mail.php`
   - Ensure proper permissions for PHP files

## 💡 Configuration

### Email Setup
Update the mail configuration in `php/mail.php`:
php
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'your-app-password';

## 📱 Responsive Breakpoints

- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

## 🔧 Customization

The site can be customized by modifying:
- `css/style_dark.css` for styling
- Color variables in CSS root
- Content in `index.html`
- Particle effects in `js/particles_shape_dark.js`

## 📄 License

MIT License - feel free to use this template for your own portfolio

## 📞 Contact

Hiram Lugo
- Email: hiram1397@gmail.com
- LinkedIn: [Hiram Lugo](https://www.linkedin.com/in/hiram-lugo-rodriguez-34539597)
- GitHub: [GearHiram1397](https://github.com/GearHiram1397)
