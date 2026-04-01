// src/content/work/sherlock-python.ts
import { ContentItem } from '@/types/system';

export const content: ContentItem = {
  slug: 'sherlock-python',
  title: 'Sherlock — Lab Inventory & Lending System',
  date: '2025-11-11',
  category: 'work',
  type: 'project',
  uid: 'CPP-2025-002-SHERLOCK',
  summary: 'A full-stack inventory and lending system designed for real-world lab environments, rebuilt from an early Rails prototype into a production-ready Django application.',

  blocks: [

    // LOGO (identity)
    {
      type: 'image',
      src: '/cp099/assets/Work/Sherlock-python/logo.svg',
      alt: 'Sherlock Logo',
      caption: 'Sherlock System Identity'
    },

    {
      type: 'paragraph',
      content: '<span style="opacity:0.6;">Inventory & Lending Management System</span>'
    },

    // OPENING
    {
      type: 'paragraph',
      content: 'Managing lab inventory sounds simple — until real-world factors like borrowing, returns, damaged items, and tracking usage come into play. Sherlock turns this complexity into a structured, usable system.'
    },

    {
      type: 'highlight',
      content: 'Built for real lab environments — where inventory is constantly moving, borrowed, and evolving.'
    },

    // CONTEXT
    {
      type: 'heading',
      level: 2,
      content: 'Context & Evolution'
    },
    {
      type: 'paragraph',
      content: 'Sherlock began as a Ruby on Rails project developed in 2023 by <a href="https://github.com/sumukhprasad" target="_blank" rel="noopener noreferrer">Sumukh Prasad</a>, designed to organize inventory using a simple but powerful structure — Sections, Spaces, and Items.'
    },
    {
      type: 'paragraph',
      content: 'In 2025, I rebuilt the system from the ground up using Python and Django. This was not just a migration, but a complete transformation — expanding Sherlock from a static inventory tracker into a full inventory and lending management system designed for real lab environments.'
    },

    // WHAT I BUILT
    {
      type: 'heading',
      level: 2,
      content: 'What I Built'
    },
    {
      type: 'paragraph',
      content: 'Sherlock v2.0 introduces a complete system for managing inventory lifecycle — from tracking stock and organizing assets to handling lending workflows, user access, and real-time operational visibility.'
    },

    // DATA BLOCK
    {
      type: 'data',
      metrics: [
        { label: 'System Type', value: 'Full-Stack Web App' },
        { label: 'Framework', value: 'Django (Python)' },
        { label: 'Architecture', value: 'Modular Inventory Model' },
        { label: 'Core Feature', value: 'Inventory + Lending System' }
      ]
    },

    // EVOLUTION
    {
      type: 'heading',
      level: 2,
      content: 'System Evolution'
    },
    {
      type: 'paragraph',
      content: 'The biggest challenge was rebuilding a Ruby on Rails system into Python while preserving its core structure and logic. Each component had to be rethought — not just translated — to ensure consistency, reliability, and scalability.'
    },
    {
      type: 'paragraph',
      content: 'Beyond replication, the system was significantly expanded. Features like lending workflows, condition tracking, role-based access, and audit trails transformed Sherlock into a complete operational system rather than just a database.'
    },

    {
      type: 'highlight',
      content: 'This was not just a rewrite — it was a transition from a static inventory tracker to a dynamic system that interacts with real-world usage.'
    },

    // INTERFACE
    {
      type: 'heading',
      level: 2,
      content: 'Interface & Experience'
    },

    {
      type: 'image',
      src: '/cp099/assets/Work/Sherlock-python/dashboard.png',
      alt: 'Dashboard',
      caption: 'Command center dashboard providing real-time visibility into inventory and activity'
    },
    {
      type: 'image',
      src: '/cp099/assets/Work/Sherlock-python/checkout-terminal.png',
      alt: 'Checkout Terminal',
      caption: 'Fast, kiosk-style interface designed for efficient lending operations'
    },

    {
      type: 'paragraph',
      content: '<span style="opacity:0.7;">Beyond high-level dashboards, the system drills down into item-level activity, lending history, and condition tracking.</span>'
    },

    {
      type: 'image',
      src: '/cp099/assets/Work/Sherlock-python/item-detail.png',
      alt: 'Item Detail',
      caption: 'Detailed item-level tracking with audit history and status visibility'
    },
    {
      type: 'image',
      src: '/cp099/assets/Work/Sherlock-python/on-loan-report.png',
      alt: 'Loan Report',
      caption: 'System-wide insights into active loans and overdue items'
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
        'Designed around real-world lab workflows, not abstract data models',
        'Handles lending, returns, and condition tracking seamlessly',
        'Optimized for usability — minimal friction for students and staff',
        'Bridges physical inventory behavior with digital tracking'
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
      content: 'This project changed how I think about systems. Inventory is not just a list of items — it becomes complex when people interact with it. Borrowing, damage, and movement introduce layers of logic that must be carefully handled in software.'
    },
    {
      type: 'paragraph',
      content: 'It also reinforced the importance of usability. A system like this is only valuable if people can actually use it easily. Designing for real-world usage — and anticipating what can go wrong — became just as important as building the system itself.'
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
        <a href="https://github.com/cp099/Sherlock-Python.git" target="_blank" rel="noopener noreferrer">
          View Full Project on GitHub
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
      content: `
        Chirag P Patil — System Architecture, Backend, Product Design<br/>
        <a href="https://github.com/sumukhprasad" target="_blank" rel="noopener noreferrer">Sumukh Prasad</a> — Original Concept & Initial System (Rails Version)
      `
    },

    // FINAL STATEMENT
    {
      type: 'highlight',
      content: 'Sherlock is not just an inventory system — it transforms physical resources into a structured, trackable, and reliable system.'
    }

  ]
};