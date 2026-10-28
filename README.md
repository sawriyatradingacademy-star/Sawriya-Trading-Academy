# Sawriya Trading Academy - React Application

A modern, institutional-grade React trading academy web application converted from `demo.html` into a modular, component-driven architecture.

## 🚀 Architecture & File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── MarketTicker.jsx      # Infinite scrolling market watch marquee
│   │   ├── Navbar.jsx            # Sticky glassmorphic navigation header
│   │   └── Footer.jsx            # Regulatory disclaimer, social links, back-to-top
│   ├── sections/
│   │   ├── HeroSection.jsx       # Hero with key stats & CTA actions
│   │   ├── LiveTradingPreview.jsx# Interactive candlestick visualizer & asset setups
│   │   ├── AboutSection.jsx      # 4 core institutional pillars
│   │   ├── CurriculumSection.jsx # 12-week syllabus accordion with expand/collapse
│   │   ├── MentorsSection.jsx    # Practitioner bios with fallback avatar support
│   │   ├── TestimonialsSection.jsx# 5-star alumni student feedback
│   │   ├── FaqSection.jsx        # Interactive FAQ accordion
│   │   ├── ContactSection.jsx    # Headquarters details & inquiry section
│   │   └── EnrollmentForm.jsx    # Validated course application form with loading & success state
│   └── ui/
│       ├── SectionHeader.jsx     # Reusable section title & badge component
│       └── EnrollModal.jsx       # Modal dialog for instant enrollment
├── data/
│   ├── marketData.js             # Stock, forex, and crypto index feeds
│   ├── featuresData.js           # Course specification pillars
│   ├── curriculumData.js         # 12-week module topics and breakdown
│   ├── mentorsData.js            # Mentor credentials and biographies
│   ├── testimonialsData.js       # Student reviews and ratings
│   └── faqData.js                # Frequently asked questions
├── App.jsx                       # Root application layout
├── index.css                     # Design tokens, glow effects, custom scrollbar
└── main.jsx                      # React 19 entrypoint
```

## ✨ Features Added During Migration

- **Component-Driven Modular Architecture**: Separated single monolithic HTML file into structured, reusable React components and decoupled data files.
- **Interactive Candlestick Chart**: Switch between `NIFTY 50`, `BANK NIFTY`, and `BTC/USD` setups with real Open/High/Low/Close candlestick tooltips on hover.
- **Curriculum Accordion with Global Controls**: Expand/collapse individual modules or use the "Expand All" / "Collapse All" triggers.
- **Controlled Enrollment Form**: Real-time form validation, submission simulation, reset capability, and success banner feedback.
- **Modal Popup + In-Page Enrollment**: Accessible via "Enroll Now" header button or direct on-page form.
- **Resilient Image Handling**: Custom image error fallback mechanism for mentor portraits and testimonials.
- **Infinite Marquee Ticker**: CSS keyframe ticker with pause-on-hover interaction.

## 🛠️ Development

```bash
npm run dev
```
