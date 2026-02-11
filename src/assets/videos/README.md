# Where to Upload Videos

## Folder Structure Created:
```
C:\Users\navne\Documents\CODDING\AUCTUS FORMA\assets\videos\
```

## How to Upload Your Videos:

### 1. **Upload Location:**
- Copy your videos to: `assets/videos/`
- Recommended formats: `.mp4` (H.264), `.webm` (optional fallback)
- Recommended size: 5-15MB (web-optimized)

### 2. **Hero Video Specifications:**
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Duration**: 15-25 seconds (seamless loop)
- **Frame rate**: 24-30fps
- **Opacity**: Set to 30% in code (adjustable)

### 3. **How to Use in Code:**
```typescript
<video 
  className="absolute inset-0 w-full h-full object-cover opacity-30"
  autoPlay 
  loop 
  muted 
  playsInline
>
  <source src="/assets/videos/hero.mp4" type="video/mp4" />
</video>
```

### 4. **Video Optimization Tips:**
- ✅ Use H.264 codec for best browser support
- ✅ Compress for web (target 5-15MB)
- ✅ Create seamless loop points
- ✅ Test autoplay in different browsers
- ✅ Add fallback poster image if needed

### 5. **Current Folder Path:**
📁 `C:\Users\navne\Documents\CODDING\AUCTUS FORMA\assets\videos\`

### 6. **Hero Video Status:**
- ✅ Video element added to Hero.tsx
- ✅ Set to 30% opacity for subtlety
- ✅ Autoplay, loop, muted enabled
- ✅ Positioned behind content with proper z-index
- ⏳ Waiting for video file: `hero.mp4`