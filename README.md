# Portfolio Website - Prakhar Jain

A modern, responsive, and emotionally impactful portfolio website built with React, TailwindCSS, and Framer Motion. Designed to stand out in college applications to elite universities.

![Portfolio Preview](https://via.placeholder.com/1200x600?text=Portfolio+Website+Preview)

## Features

- **Modern Tech Stack**: Built with React 18, Vite, TailwindCSS, and shadcn/ui components
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Custom Image Gallery**: Circular/infinite navigation with keyboard and touch support
- **Form Validation**: Contact form with React Hook Form + Zod validation
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Ready**: Semantic HTML and meta tags for better search engine visibility

## Pages

1. **Home** - Hero section with animated background and call-to-action
2. **About** - Personal story, values, and academic interests
3. **Projects** - Showcase of work with custom image galleries
4. **Awards** - Academic, athletic, leadership, and competition achievements
5. **Skills** - Technical and soft skills with categorized sections
6. **Blog** - Thoughts and reflections (with filtering)
7. **Contact** - Form with validation and social links

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS 3
- **UI Components**: shadcn/ui (custom built)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio_website.git
cd portfolio_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 1. Update Personal Information

Replace placeholder data in the following files:

- **Header/Footer**: `src/components/layout/Header.jsx` and `Footer.jsx`
  - Change "Your Name" to "Prakhar Jain"
  - Update social media links
  - Update email and contact information

- **Home Page**: `src/pages/Home.jsx`
  - Update the hero quote and subtitle
  - Customize the featured sections

- **About Page**: `src/pages/About.jsx`
  - Replace placeholder story with your own
  - Update values, interests, and hobbies
  - Add your photo (replace placeholder)

- **Projects**: `src/pages/Projects.jsx`
  - Replace project data in the `projects` array
  - Add your own project images
  - Update links to GitHub/demo

- **Awards**: `src/pages/Awards.jsx`
  - Update all awards in the `awardsData` object
  - Customize categories as needed

- **Skills**: `src/pages/Skills.jsx`
  - Update skills in the `skillsData` array
  - Add/remove skill categories

- **Blog**: `src/pages/Blog.jsx`
  - Replace blog posts in the `blogPosts` array
  - Update categories

- **Contact**: `src/pages/Contact.jsx`
  - Update contact information
  - Configure form submission endpoint

### 2. Add Your Resume

Replace the placeholder file at `public/resume.pdf` with your actual resume PDF.

### 3. Add Images

- Place your photos in `src/assets/images/`
- Update image paths in the respective components
- For project images, use high-quality screenshots (recommended: 800x450px)
- For your profile photo, use a square image (recommended: 800x800px)

### 4. Customize Colors & Fonts

Edit `src/index.css` to change:
- Color scheme (CSS variables under `:root`)
- Font families (already includes Inter, Playfair Display, IBM Plex Mono)
- Custom utilities and effects

Edit `tailwind.config.js` for:
- Additional colors
- Custom animations
- Breakpoints

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will auto-detect Vite settings

6. Click "Deploy"

7. **Set up custom domain (prakharjain.com)**:
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add "prakharjain.com" and "www.prakharjain.com"
   - Follow the instructions to update your DNS settings with your domain registrar
   - Add the following DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Wait for DNS propagation (can take up to 48 hours, but usually much faster)

### Deploy to Netlify

1. Push your code to GitHub

2. Visit [Netlify](https://netlify.com) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Deploy"

7. **Set up custom domain**:
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter "prakharjain.com"
   - Follow DNS configuration instructions from Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://prakharjain.com"
```

3. Update `vite.config.js`:
```js
export default {
  base: '/',
  // ... rest of config
}
```

4. Deploy:
```bash
npm run deploy
```

5. **Set up custom domain**:
   - Create a file `public/CNAME` with content: `prakharjain.com`
   - In GitHub repo settings → Pages → Custom domain, enter "prakharjain.com"
   - Update your DNS settings:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153

     Type: A
     Name: @
     Value: 185.199.109.153

     Type: A
     Name: @
     Value: 185.199.110.153

     Type: A
     Name: @
     Value: 185.199.111.153

     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

## Custom Domain Setup (prakharjain.com)

To use your custom domain `prakharjain.com`:

1. **Purchase the domain** from a registrar (GoDaddy, Namecheap, Google Domains, etc.)

2. **Configure DNS** based on your hosting platform (see deployment sections above)

3. **Enable HTTPS** (automatic on Vercel/Netlify)

4. **Test your site** by visiting `https://prakharjain.com`

## Project Structure

```
portfolio_website/
├── public/
│   └── resume.pdf          # Your resume PDF
├── src/
│   ├── assets/
│   │   └── images/         # Your images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx  # Navigation header
│   │   │   ├── Footer.jsx  # Footer with links
│   │   │   └── Layout.jsx  # Main layout wrapper
│   │   ├── ui/             # UI components (Button, Card, Input, etc.)
│   │   └── ImageGallery.jsx # Custom gallery component
│   ├── lib/
│   │   └── utils.js        # Utility functions
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Awards.jsx
│   │   ├── Skills.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app with routing
│   ├── index.css           # Global styles + Tailwind
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Use WebP format for better compression
- Lazy load images below the fold
- Consider using a CDN for images (Cloudinary, imgix)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing this portfolio:
- Check the [Issues](https://github.com/yourusername/portfolio_website/issues) page
- Open a new issue with your question
- Email: your.email@example.com

## Acknowledgments

- Design inspiration from modern portfolio websites
- UI components based on shadcn/ui
- Icons from Lucide React
- Fonts from Google Fonts

---

Built with ❤️ using React, TailwindCSS, and Framer Motion
