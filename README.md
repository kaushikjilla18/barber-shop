# Classic Cuts - Modern Barber Shop Website

A modern, responsive website for a barber shop built with React, TypeScript, and Tailwind CSS. The website features a clean, professional design with smooth animations and a great user experience.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🎯 Interactive components
- 📝 Online booking system
- 🖼️ Image gallery with lightbox
- 💬 Customer testimonials
- 📍 Contact information and location
- 🔍 SEO friendly

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Scroll

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/barber-shop.git
   cd barber-shop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
barber-shop/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Booking.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── index.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1a1a1a',
        dark: '#000000',
        light: '#333333',
      },
      accent: {
        gold: '#D4AF37',
        burgundy: '#800020',
        tan: '#D2B48C',
      },
    },
  },
}
```

### Images

Replace the placeholder images in the `public/images` directory with your own:
- hero-bg.jpg
- gallery-1.jpg through gallery-6.jpg
- testimonial-1.jpg through testimonial-3.jpg
- barber-1.jpg and barber-2.jpg

### Content

Update the content in each component to match your barber shop's information:
- Services and prices
- Working hours
- Contact information
- About section
- Testimonials

## Deployment

The website can be deployed to any static hosting service. For example, to deploy to Vercel:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Fonts: Montserrat and Playfair Display from Google Fonts
- Icons: Heroicons
- Images: Replace with your own images 