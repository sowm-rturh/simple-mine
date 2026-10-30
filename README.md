# 🎂 Happy Birthday, My Love — His World, Our World
### A Cinematic Romantic Birthday Celebration Website

A premium, emotional, and mobile-first romantic **Birthday Celebration Website** built with deep black, burgundy, wine red, soft pink, and subtle gold tones. It unfolds like a romantic movie—celebrating his journey through the years from childhood and youth, revealing shared memories, and presenting an interactive birthday cake with candle blow-out, celebratory confetti, and a handwritten birthday love letter.

---

## ✨ Birthday Celebration Features & Chapters

1. **Cinematic Birthday Intro**:
   - Dark cinematic opening screen with gentle Ken Burns slow-motion zoom on his childhood and youth photos.
   - Poetic birthday quotes:
     * *“Before you became my everything… the universe gifted this world with you.”*
     * *“Another year older, another year of you being my whole world. Happy Birthday, my love.”*
   - Shimmering **“Celebrate With Me ♡”** button that smoothly enters the celebration.

2. **Chapter 1 — The Journey of You (His World)**:
   - Celebrates his milestones: baby boy in cane chair, toddler in embroidered vest, schoolboy in uniform, and handsome youth portraits.

3. **Chapter 2 — The Day You Became Mine**:
   - The first sparks: hand doodles, shadow heart on pavement, blessings at Adiyogi statue, and shared chocolates.

4. **Chapter 3 — Another Year of Memories**:
   - Scrapbook collage with alternating full-width hero views, overlapping polaroid cards, and washi tape details (Ukkadam boating, tea garden hills, bike rides).

5. **Chapter 4 — Your Smile, My World (Our Beautiful Chaos)**:
   - Candid, playful, and fun memories: playful cheek pinching, silly faces, dog/cat/butterfly filters, and spontaneous laughter.

6. **Chapter 5 — Make a Wish, Birthday Boy (Interactive Birthday Cake & Real Memory)**:
   - **Real Memory**: Features your real photo celebrating his birthday with chocolate cake and a glowing candle (`ch5_05_birthday_cake.jpg`)!
   - **Interactive 3D Cake**: Realistic multi-tier velvet burgundy cake with glowing, flickering candles.
   - **Blow Out Candles & Make a Wish 🎂✨**: Tap the button or tap individual candles! The flames extinguish with realistic smoke animations, play a gentle celebration chime, burst a cascade of golden & rose confetti across the screen, and reveal your romantic Birthday Wish card!
   - **Relight Feature**: Tap again anytime to relight the candles and make another wish!

7. **Chapter 6 — A Birthday Love Letter**:
   - Realistic 3D envelope with a golden wax seal.
   - Tap the seal to smoothly unroll the handwritten parchment birthday love letter with emotional Tamil words.

8. **Final Chapter — Forever My Birthday Boy**:
   - Climax couple portrait surrounded by subtle floating hearts and closing birthday message:
     * *“Out of all the people in this world, my heart will always choose you. Happy Birthday, my love.”*
     * *“Today is your day, but you are my everyday. Happy Birthday! 🎂❤️”*

9. **Interactive Audio & Full-Screen Lightbox**:
   - Floating **“♫ Our Song”** player with animated sound equalizer bars.
   - Full-screen lightbox viewer with keyboard and touch swipe support.

---

## 🚀 How to Run the Website

### Option 1: Direct Double Click (No Setup Required)
Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, Safari, or any modern web browser.

### Option 2: Local Web Server (Recommended for Mobile Sharing)
If you want to view it across your home Wi-Fi on your mobile phone:
```bash
# Using Python
py -m http.server 8000

# Or using Node.js / npx
npx serve .
```
Then visit `http://localhost:8000` on your laptop, or `http://<your-computer-ip>:8000` on your mobile phone!

---

## 🎨 How to Customize Birthday Content

### 1. Editing Birthday Wishes & Captions
Open `js/story-data.js` in any text editor (Notepad, VS Code, etc.).
All captions, headings, and chapter descriptions are organized in plain text:
```javascript
// Example in js/story-data.js
wishCard: {
  title: "My Birthday Wish For You ✨",
  message: "Your personalized birthday message here...",
  subtext: "Happy Birthday to my Favourite Person! 🎂❤️"
}
```

### 2. Editing the Birthday Love Letter
In `js/story-data.js`, scroll to `chapter6.letterParagraphs`. You can edit, add, or customize any of the letter lines in Tamil or English!

### 3. Changing the Music
- Place your `.mp3` song into the `assets/music/` folder as `our-song.mp3`.
- If your file has another name, simply update the path in `js/story-data.js`:
```javascript
music: {
  title: "♫ Our Song",
  src: "assets/music/your-song-name.mp3"
}
```

---

## 📂 Project Structure

```
website/
├── index.html                  ← Birthday celebration website
├── README.md                   ← Instructions & customization guide
├── css/
│   ├── theme.css               ← Romantic palette, glassmorphism, fonts & film grain
│   ├── main.css                ← Layout, progress bar, audio player & lightbox
│   ├── scrapbook.css           ← Polaroids, washi tape, tilted scrapbook cards
│   ├── envelope.css            ← 3D wax-sealed envelope & parchment letter
│   └── birthday.css            ← Interactive cake, candle flames, smoke & wish card
├── js/
│   ├── story-data.js           ← Birthday photos, captions, wish text & love letter
│   ├── particles.js            ← Canvas stardust and floating hearts
│   ├── confetti.js             ← Celebration confetti burst engine
│   ├── birthday-cake.js        ← Candle blow-out, sound, and wish reveal
│   ├── audio-player.js         ← Floating music player with sound equalizer
│   ├── cinematic-intro.js      ← Dark opening slideshow & Ken Burns effects
│   ├── envelope.js             ← Interactive wax seal and letter animation
│   ├── lightbox.js             ← Touch & keyboard full-screen photo viewer
│   └── main.js                 ← Scroll progress & reveal animations
└── assets/
    ├── curated_story/          ← 49 curated and normalized story photos
    └── music/
        └── our-song.mp3        ← Your romantic song
```

---

*Made with all my love for an unforgettable birthday celebration.* 🎂❤️
