# Where to Upload Images

## Folder Structure Created:
```
C:\Users\navne\Downloads\auctus-forma---premium-web-&-ai-agency (1)\assets\images\projects\
```

## How to Upload Your Images:

### 1. **Upload Location:**
- Copy your images to: `assets/images/projects/`
- Recommended formats: `.jpg`, `.png`, `.webp`
- Recommended size: 1260x1750px (for consistency)

### 2. **How to Use in Code:**

Once uploaded, reference your images like this in `SelectedWork.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    category: "Category",
    system: "System Description", 
    image: "/src/assets/images/projects/your-image-name.jpg",
    url: "https://your-project-url.com"
  }
];
```

### 3. **For Vite Projects (like this one):**
```typescript
image: "./assets/images/projects/your-image-name.jpg"
```

### 4. **Example Usage:**
```typescript
const projects = [
  {
    title: "My Awesome Project",
    category: "Web Application",
    system: "Full-Stack Development",
    image: "./assets/images/projects/my-awesome-project.jpg",
    url: "https://my-awesome-project.com"
  }
];
```

## Tips:
- ✅ Use descriptive filenames (lowercase, no spaces)
- ✅ Optimize images for web (compress before uploading)
- ✅ Use consistent dimensions for all project images
- ✅ Backup your images externally as well

## Current Folder Path:
📁 `C:\Users\navne\Downloads\auctus-forma---premium-web-&-ai-agency (1)\assets\images\projects\`