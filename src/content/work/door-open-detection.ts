import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'door-open-detection',
  title: 'Door Open Detection System',
  date: '2023-12-28',
  category: 'work',
  type: 'project',
  uid: 'CPP-PROJECT-2023-DOOR-DETECTION',

  dependencies: ['Arduino UNO', 'HC-SR04', 'Embedded C++', 'Breadboard Electronics'],

  summary:
    'An Arduino-based door monitoring prototype featuring ultrasonic sensing, armed/disarmed system states, and real-time alarm triggering.',

  blocks: [

    // OPENING
    {
      type: 'paragraph',
      content:
        'Door Open Detection System was an early embedded systems prototype built while experimenting with Arduino, sensors, and real-world automation logic.'
    },

    {
      type: 'highlight',
      content:
        'This project introduced the idea of system states — where software logic controlled how the hardware behaved in different operational modes.'
    },

    // OVERVIEW
    {
      type: 'heading',
      level: 2,
      content: 'Project Overview'
    },

    {
      type: 'paragraph',
      content:
        'The system was designed as a simple door monitoring and intrusion detection prototype using an ultrasonic distance sensor. The system could be manually armed or disarmed using hardware switches and would trigger an audible alarm whenever door movement was detected while armed.'
    },

    {
      type: 'list',
      ordered: false,
      items: [
        'Manual armed/disarmed system control',
        'Ultrasonic distance-based door detection',
        'Visual system-state indicators using LEDs',
        'Persistent alarm triggering logic',
        'Real-time sensor monitoring'
      ]
    },

    // ARMED / DISARMED STATES
    {
      type: 'heading',
      level: 2,
      content: 'System States'
    },

    {
      type: 'paragraph',
      content:
        'One of the core ideas behind the project was separating system behavior into operational states. The system behaved differently depending on whether it was armed or disarmed.'
    },

    {
      type: 'image',
      src: '/assets/Work/door-open-detection/disarmed-system.webp',
      alt: 'Disarmed Door Detection System',
      caption:
        'Disarmed state — green LED active while monitoring systems remain inactive.'
    },

    {
      type: 'image',
      src: '/assets/Work/door-open-detection/armed-system.webp',
      alt: 'Armed Door Detection System',
      caption:
        'Armed state — ultrasonic monitoring and alarm logic become active.'
    },

    // LOGIC SYSTEM
    {
      type: 'heading',
      level: 2,
      content: 'Detection Logic'
    },

    {
      type: 'paragraph',
      content:
        'The ultrasonic sensor continuously measured the distance between the sensor and the door surface. If the measured distance crossed a defined threshold while the system was armed, the alarm state was activated.'
    },

    {
      type: 'code',
      language: 'cpp',
      code:
`if (distance < thresholdDistance && !alarmActive) {
    activateAlarm();
}`
    },

    {
      type: 'paragraph',
      content:
        'The project introduced persistent system-state handling using boolean logic — allowing the alarm to remain active until manually disarmed.'
    },

    // ENGINEERING
    {
      type: 'heading',
      level: 2,
      content: 'Engineering Challenges'
    },

    {
      type: 'paragraph',
      content:
        'The most difficult part of the project was balancing sensor calibration and system responsiveness. Distance thresholds had to be tuned carefully to avoid false triggers while still reacting reliably to actual door movement.'
    },

    {
      type: 'paragraph',
      content:
        'Another challenge was ensuring stable transitions between armed and disarmed states without inconsistent alarm behavior.'
    },

    {
      type: 'highlight',
      content:
        'Embedded systems are not just about reading sensors — they are about controlling behavior across changing states.'
    },

    // CIRCUIT
    {
      type: 'heading',
      level: 2,
      content: 'Circuit Architecture'
    },

    {
      type: 'image',
      src: '/assets/Work/door-open-detection/schematic.webp',
      alt: 'Door Detection Schematic',
      caption:
        'System schematic showing ultrasonic sensing, LED indicators, manual controls, and alarm output.'
    },

    {
      type: 'paragraph',
      content:
        'The complete system was physically assembled and tested using a breadboard prototype architecture with manually wired sensor and control connections.'
    },

    // TECH STACK
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
        { label: 'Control Logic', value: 'Armed / Disarmed States' },
        { label: 'System Type', value: 'Security Prototype' }
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
        'This project helped me better understand how software and electronics interact together inside physical systems. It also introduced me to state-based logic design, which later became useful while working on larger software systems.'
    },

    {
      type: 'paragraph',
      content:
        'More importantly, it demonstrated how relatively simple hardware components can be combined to create practical real-world automation systems.'
    },

    {
      type: 'highlight',
      content:
        'Small embedded projects teach the foundations of systems thinking — inputs, states, outputs, and control.'
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
      <a href="https://github.com/cp099/Door-Open-Detection-system.git" target="_blank" rel="noopener noreferrer">
        View Repository on GitHub
      </a>
      `
    }

  ]
};