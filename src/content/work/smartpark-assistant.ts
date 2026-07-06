import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'smartpark-assistant',
  title: 'SmartPark Assistant',
  date: '2023-12-31',
  category: 'work',
  type: 'project',
  uid: 'CPP-PROJECT-2023-SMARTPARK',

  dependencies: ['Arduino UNO', 'HC-SR04', 'C++', 'Embedded Systems'],

  summary:
    'An Arduino-based parking assistance prototype using ultrasonic distance sensing, dynamic buzzer feedback, and real-time proximity logic.',

  blocks: [

    // OPENING
    {
      type: 'paragraph',
      content:
        'SmartPark Assistant was one of my early hardware experimentation projects — built while exploring Arduino, embedded systems, and real-world sensor interaction.'
    },

    {
      type: 'highlight',
      content:
        'This was the project where software stopped being just code on a screen and started interacting with the physical world.'
    },

    // PROJECT OVERVIEW
    {
      type: 'heading',
      level: 2,
      content: 'Project Overview'
    },

    {
      type: 'paragraph',
      content:
        'The system was designed as a compact parking assistance prototype using an ultrasonic distance sensor, LED indicators, and a buzzer feedback system. Based on object proximity, the system dynamically adjusted beep frequency and visual feedback to help simulate real-world parking assistance behavior.'
    },

    {
      type: 'image',
      src: '/assets/Work/smartpark-assistant/circuit-diagram.webp',
      alt: 'SmartPark Assistant Circuit Diagram',
      caption:
        'Physical circuit layout built using Arduino UNO, HC-SR04 ultrasonic sensor, LED indicators, and buzzer feedback.'
    },

    // SYSTEM DESIGN
    {
      type: 'heading',
      level: 2,
      content: 'System Design'
    },

    {
      type: 'paragraph',
      content:
        'The system continuously measured object distance using the HC-SR04 ultrasonic sensor and processed the incoming signal using Arduino-based logic.'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'Ultrasonic distance sensing using HC-SR04',
        'Dynamic buzzer feedback based on proximity',
        'LED visual indicators for close-range detection',
        'Distance calculation using echo timing',
        'Real-time response loop with calibrated thresholds'
      ]
    },

    {
      type: 'code',
      language: 'cpp',
      code:
`if (distance < 10) {
  digitalWrite(ledPin, HIGH);
  beep(200, 1000);
}
else if (distance < 20) {
  beep(100, 1500);
}
else if (distance < 30) {
  beep(150, 1000);
}`
    },

    // ENGINEERING CHALLENGE
    {
      type: 'heading',
      level: 2,
      content: 'Engineering Challenges'
    },

    {
      type: 'paragraph',
      content:
        'The most difficult part of the project was calibrating reliable distance thresholds while maintaining responsive feedback behavior. Small changes in timing or sensor readings could drastically affect the user experience.'
    },

    {
      type: 'paragraph',
      content:
        'Considerable tuning was required to balance sensor responsiveness, buzzer timing, and LED behavior without creating false triggers or inconsistent feedback.'
    },

    {
      type: 'highlight',
      content:
        'Even simple embedded systems require careful balancing between hardware behavior and software logic.'
    },

    // SCHEMATIC
    {
      type: 'heading',
      level: 2,
      content: 'Circuit Architecture'
    },

    {
      type: 'image',
      src: '/assets/Work/smartpark-assistant/schematic.webp',
      alt: 'SmartPark Assistant Schematic',
      caption:
        'System schematic showing sensor input, output devices, and Arduino interconnections.'
    },

    {
      type: 'paragraph',
      content:
        'The project was physically assembled, wired, and tested using a breadboard-based architecture. The final prototype successfully responded to real-world distance changes with stable feedback behavior.'
    },

    // SCALE
    {
      type: 'heading',
      level: 2,
      content: 'Technical Stack'
    },

    {
      type: 'data',
      metrics: [
        { label: 'Platform', value: 'Arduino UNO' },
        { label: 'Sensor', value: 'HC-SR04 Ultrasonic' },
        { label: 'Language', value: 'Arduino C++' },
        { label: 'System Type', value: 'Embedded Prototype' }
      ]
    },

    // LEARNING
    {
      type: 'heading',
      level: 2,
      content: 'Learning Outcome'
    },

    {
      type: 'paragraph',
      content:
        'This project became one of my first real introductions to embedded systems and hardware-software interaction. It helped me understand how logic written in software directly influences physical electronic behavior.'
    },

    {
      type: 'paragraph',
      content:
        'More importantly, it showed me how systems like these exist everywhere in the real world — from parking assistance systems to industrial automation and robotics.'
    },

    {
      type: 'highlight',
      content:
        'Building physical systems teaches a different kind of debugging — one where wires, timing, hardware noise, and logic all matter together.'
    },

    // ACCESS
    {
      type: 'heading',
      level: 2,
      content: 'Project Access'
    },

    {
      type: 'paragraph',
      content: `
      <a href="https://github.com/cp099/SmartPark-Assistant.git" target="_blank" rel="noopener noreferrer">
        View Repository on GitHub
      </a>
      `
    }

  ]
};