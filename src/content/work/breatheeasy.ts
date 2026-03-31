import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'breatheeasy',
  title: 'BreatheEasy — AQI Intelligence System',
  date: '2025-01-20',
  category: 'work',
  type: 'project',
  uid: 'CPP-2025-002-BREATHEEASY',
  summary: 'A real-time AQI analysis and forecasting system that turns complex air quality data into clear, usable insights.',
  blocks: [

    // LOGO (HERO VISUAL)
    {
      type: 'image',
      src: '/cp099/assets/Work/BreatheEasy/logo_dark.png',
      alt: 'BreatheEasy Logo',
      caption: 'BreatheEasy — AQI Intelligence System'
    },

    // OPENING HOOK
    {
      type: 'paragraph',
      content: '<strong>What if the air you breathe could speak?</strong> Most of us see AQI as just a number, without really understanding what it means for our health or daily life.'
    },

    // PROBLEM
    {
      type: 'heading',
      level: 2,
      content: 'The Problem'
    },
    {
      type: 'paragraph',
      content: 'Air quality data is widely available, but it is not easily understandable in terms of real-world impact. Raw AQI values, pollutant codes, and scattered datasets make it difficult for people to interpret what the air actually means for them.'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Raw AQI numbers without context',
        'Confusing pollutant breakdowns',
        'No clear health interpretation',
        'No short-term predictive insight'
      ]
    },

    // WHAT WE BUILT
    {
      type: 'heading',
      level: 2,
      content: 'What We Built'
    },
    {
      type: 'paragraph',
      content: 'BreatheEasy is a system designed to bridge that gap — combining real-time data, historical trends, and machine learning to make air quality understandable and actionable.'
    },

    // SYSTEM OVERVIEW
    {
      type: 'heading',
      level: 2,
      content: 'System Overview'
    },
    {
      type: 'paragraph',
      content: 'The system integrates live AQI data, weather forecasts, and historical datasets into a unified pipeline. A trained LightGBM model generates predictions, which are then calibrated against live data to improve accuracy.'
    },

    {
      type: 'data',
      metrics: [
        { label: 'System Type', value: 'Full-Stack ML System' },
        { label: 'Forecast Horizon', value: '3 Days' },
        { label: 'Cities Supported', value: '4' },
        { label: 'Model', value: 'LightGBM' }
      ]
    },

    // MODEL DECISION (KEY STORY)
    {
      type: 'heading',
      level: 2,
      content: 'Model Evolution & Decisions'
    },
    {
      type: 'paragraph',
      content: 'The project initially began with Meta’s Prophet model. While it worked well for long-term forecasting, it showed significant deviation for short-term predictions — which was critical for this use case.'
    },
    {
      type: 'paragraph',
      content: 'After evaluating performance and researching alternatives, the system was rebuilt using <strong>LightGBM</strong>, which provided better control, improved accuracy, and faster training cycles for short-term AQI forecasting.'
    },
    {
      type: 'paragraph',
      content: 'Another key decision was refining the dataset itself. Cities like Delhi showed extremely high variability, and Hyderabad had inconsistent data availability. To maintain reliability, the system was focused on: Bangalore, Chennai, Kolkata, and Mumbai.'
    },

    // KEY INSIGHT
    {
      type: 'highlight',
      content: 'Building an AI system is not about picking a model — it’s about how well you connect data, logic, and real-world context into something meaningful.'
    },

    // INTERFACE SECTION
    {
      type: 'heading',
      level: 2,
      content: 'Interface & Experience'
    },

    {
      type: 'image',
      src: '/cp099/assets/Work/BreatheEasy/dark_dashboard_screenshot.png',
      alt: 'Main Dashboard',
      caption: 'Main dashboard showing AQI, forecasts, and pollutant insights.'
    },
    {
      type: 'paragraph',
      content: 'The interface translates complex AQI data into intuitive visuals, clear health advisories, and minimal interactions — making it usable even for non-technical users.'
    },
    
    {
      type: 'paragraph',
      content: 'Alongside the main dashboard, the system includes a dedicated <strong>Live Performance Hub</strong> — a real-time monitoring interface that tracks CPU usage, memory consumption, network activity, and application logs. This ensures the system is not just functional, but also observable and reliable during runtime.'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Real-time CPU, memory, and network monitoring',
        'Live application logs and process tracking',
        'Time-series performance visualization',
        'Continuous background data collection'
      ]
    },

    {
      type: 'paragraph',
      content: 'A major focus of the system was simplicity. The interface translates complex data into intuitive visuals, clear health advisories, and minimal interactions — making it usable even for non-technical users.'
    },

    // WHAT MAKES IT DIFFERENT
    {
      type: 'heading',
      level: 2,
      content: 'What Makes It Different'
    },
    {
      type: 'list',
      ordered: false,
      items: [
        'Self-correcting forecast model anchored to live AQI data',
        'Clear health-based interpretation using CPCB standards',
        'Integrated performance monitoring system',
        'Minimalist UI focused on clarity over complexity'
      ]
    },

    // REFLECTION
    {
      type: 'heading',
      level: 2,
      content: 'Reflection'
    },
    {
      type: 'paragraph',
      content: 'Working on this project changed how I think about both data and systems. AQI is not just a number — it represents something real that affects people every day.'
    },
    {
      type: 'paragraph',
      content: 'I also realized that building an AI system is not just about training a model. The real challenge lies in collecting reliable data, processing it correctly, and connecting everything in a way that produces meaningful output.'
    },
    {
      type: 'paragraph',
      content: 'And most importantly — UI matters. Even the most accurate system fails if people cannot understand or use it.'
    },

    // PROJECT ACCESS
    {
      type: 'heading',
      level: 2,
      content: 'Project Access'
    },
    {
      type: 'paragraph',
      content: `
      <a href="https://github.com/cp099/BreatheEasy.git" target="_blank" rel="noopener noreferrer">
        View Source Code on GitHub
      </a>
      <br/>
      <a href="https://youtu.be/HQEPkb_qyzM" target="_blank" rel="noopener noreferrer">
        Watch Project Walkthrough
      </a>
      `
    },

    // CONTRIBUTORS
    {
      type: 'heading',
      level: 2,
      content: 'Contributors'
    },
    {
      type: 'paragraph',
      content: 'This project was built as a collaborative effort. While I led the system design, modeling, and overall architecture, it would not have been possible without the contributions of the team.'
    },
    {
      type: 'paragraph',
      content: `
      – Chirag P Patil — System Design, ML Pipeline, Integration<br/>
      – <a href="https://github.com/kimayaa23" target="_blank" rel="noopener noreferrer">Kimaya Anand</a> — UI Development & Testing<br/>
      – <a href="https://github.com/arnavmeow" target="_blank" rel="noopener noreferrer">Arnav Vaidya</a> — Data Handling & Support
      `
    },

    // FOOTER NOTE
    {
      type: 'highlight',
      content: 'BreatheEasy is not just a project — it is a step towards making environmental data more understandable, accessible, and actionable.'
    }

  ]
};