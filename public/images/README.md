# Images Directory

Place your personal image in this directory to use it in the portfolio.

To add your image to the portfolio:

1. Add your image file to this directory (e.g., profile.jpg, profile.png)
2. Then update the Hero component in `src/components/sections/Hero.tsx` by replacing:

```jsx
<div className="w-full h-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300">
  <span className="text-2xl font-bold">HS</span>
</div>
```

with:

```jsx
<img 
  src="/images/YOUR_IMAGE_FILENAME" 
  alt="Houssam Eddine SAFIR" 
  className="w-full h-full object-cover"
/>
```

Replace `YOUR_IMAGE_FILENAME` with the name of your image file.