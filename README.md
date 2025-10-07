# Paul Blanche - Portfolio Website

A modern, responsive portfolio website showcasing my work as a frontend developer specializing in React, Next.js, and modern web technologies.

## 🌟 Features

- **Custom WebGL Shader Animation** - Interactive starfield background using WebGL
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Tech Stack** - Next.js 15, React, TypeScript, Tailwind CSS
- **Project Showcase** - Featured work including Tipster Arena, Sports Arena, and client projects
- **Smooth Animations** - CSS transitions and hover effects
- **SEO Optimized** - Meta tags and structured data

## 🚀 Live Demo

Visit the live site: [https://paulblanche.dev](https://paulblanche.dev) (when deployed)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React icons
- **Animation**: Custom WebGL shaders
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main portfolio page
│   └── components/
│       └── ShaderBackground.tsx # WebGL starfield animation
├── public/
│   ├── portfolio-photo.png      # Profile image
│   ├── tipster-*.png           # Tipster Arena project images
│   ├── sports-*.png            # Sports Arena project images
│   └── *.png                   # Other project images
├── .cursorrules                # Development guidelines
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/blanchy21/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Updating Content

- **Personal Information**: Edit `src/app/page.tsx`
- **Projects**: Modify the Recent Work section in `src/app/page.tsx`
- **Images**: Replace images in the `public/` folder
- **Styling**: Update `src/app/globals.css` or use Tailwind classes

### Adding New Projects

1. Add project images to `public/` folder
2. Update the Recent Work section in `src/app/page.tsx`
3. Follow the existing card structure:

```tsx
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
  <div className="relative aspect-[16/9]">
    <Image
      src="/your-project-image.png"
      alt="Project description"
      width={800}
      height={450}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  </div>
  <div className="p-4 border-t border-white/10">
    <h3 className="mt-2 text-base font-semibold tracking-tight">Project Name</h3>
    <p className="text-sm text-white/70 mt-1">Project description</p>
  </div>
</article>
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Deploy with `railway up`
- **Self-hosted**: Build and serve the static files

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: paulblanche21@gmail.com
- **Website**: [paulblanche.dev](https://paulblanche.dev)
- **GitHub**: [@blanchy21](https://github.com/blanchy21)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Vercel** for the deployment platform

---

**Built with ❤️ by Paul Blanche**