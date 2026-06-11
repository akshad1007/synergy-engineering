export const services = [
  {
    id: 'epc-division',
    title: 'EPC Project Division',
    icon: 'architecture',
    description: 'Comprehensive Engineering, Procurement, and Construction project management. We deliver reliable, efficient, and sustainable power solutions.',
    details: {
      'Construction & Procurement Execution': [
        'Detailed design, system studies, engineering drawings, and technical solutions.',
        'Procurement of high-quality materials and equipment from approved manufacturers.',
        'Construction execution with strict adherence to safety norms, quality procedures, and schedules.'
      ],
      'Electrical Design & Studies': [
        'Load Flow Analysis, Short Circuit Study, and Relay setting & Co-ordination.',
        'Equipment Sizing (Transformers, Cables, Earthing, Lightning protection, etc.).',
        'Single line diagrams, Cable route layouts, Substation layouts, Cable schedules, and BOQ/RFQ preparation.'
      ],
      'Instrumentation & Control': [
        'P&ID preparation, Instrument specifications & Data sheets, and I/O Lists.',
        'Control System Architecture and Specifications (PLC / DCS).',
        'Loop & Wiring drawings, JB & Cable Schedules, Cable Tray routes, and Hook-up drawings.'
      ]
    }
  },
  {
    id: 'electrical-testing',
    title: 'Electrical Testing & Calibration',
    icon: 'precision_manufacturing',
    description: 'ISO 9001:2015 certified & NABL accredited field services utilizing advanced diagnostic instruments to verify and certify critical industrial assets.',
    details: {
      'Transformer Testing': [
        'Sweep Frequency Response Analysis (SFRA)',
        'Capacitance & Dissipation Factor measurement (Tan Delta)',
        'Dielectric Frequency Response Analysis (DFRA)',
        'Partial Discharge Analysis (Online & Offline)',
        'Transformer Oil Tests (BDV, PPM, DGA, Dew Point)',
        'Turns Ratio, Winding Resistance, Vector Group, and Magnetic Balance'
      ],
      'Circuit Breaker Testing': [
        'Contact Resistance Measurement (CRM)',
        'Breaker Timing & Speed Tests',
        'Coil Resistance and Trip/Close Current Profiles',
        'SF6 Gas Leak Detection & Dew Point Measurement',
        'Spring Charging Motor & Mechanism Audits'
      ],
      'Cable Fault Locating': [
        'Fault Pre-location & Pinpointing (acoustic-magnetic)',
        'Very Low Frequency (VLF) Testing up to 36 kV',
        'HT & LT Cable Route Tracing & Identification',
        'High-pot (DC/AC) insulation tests'
      ],
      'Motor & Generator Testing': [
        'Static Analysis (Surge tests, RLC measurements)',
        'Rotor Influence Check (RIC) & Motor Condition Monitoring',
        'Insulation Resistance (IR) & Polarization Index (PI)',
        'Power Quality & Load Issue Diagnostics'
      ],
      'Other Specialized Services': [
        'NABL Calibration of testing equipment',
        'Protection Relay testing & Retrofitting',
        'Battery Bank testing (Ohmic, Float current, Discharge tests)',
        'Thermal Imaging (Thermography) & Earth Pit resistance tests'
      ]
    }
  },
  {
    id: 'product-supply',
    title: 'Product Supply & Stockist',
    icon: 'inventory',
    description: 'Direct channel supply for world-renowned brands (Megger, MTE AG, Brother, etc.) with official warranties and factory-backed support.',
    details: {
      'Authorized Channel Partner': [
        'Megger - Electrical testing & measurement equipment.',
        'MTE AG - Portable reference standards & energy meter test systems.',
        'Brother - Industrial label and ferrule printing solutions.',
        'Te Connectivity - Power cable accessories (EHVS, RPIT, ELBC, RSTI, EPKT).'
      ],
      'Technical Support': [
        'Pre-sales application engineering and requirement sizing.',
        'After-sales product training and diagnostic software configuration.',
        'On-site field demonstrations and compatibility testing.'
      ]
    }
  },
  {
    id: 'maintenance-amc',
    title: 'Maintenance & AMC',
    icon: 'engineering',
    description: 'Comprehensive preventive maintenance and Annual Maintenance Contracts designed to maximize uptime and prevent critical system failures.',
    details: {
      'Preventive Maintenance': [
        'Periodic checks, cleaning, and lubrication of mechanisms.',
        'Thermographic scans to identify hot spots before breakdown.',
        'Relay and protection system functionality audits.'
      ],
      'Annual Maintenance Contracts (AMC)': [
        'Priority response for emergency troubleshooting.',
        'Calibrated spare parts and backup test equipment availability.',
        'Compliance documentation for ISO and electrical inspector audits.'
      ]
    }
  },
  {
    id: 'training',
    title: 'Technical Training',
    icon: 'school',
    description: 'Specialized training programs on equipment operation, safety protocols, and diagnostic data interpretation for on-site personnel.',
    details: {
      'Equipment Operation': [
        'Hands-on tutorials for Megger insulation, earth, and battery testers.',
        'Software training for diagnostic analysis platforms (PowerDB, Baker DX).',
        'Best practices for cable fault locating and acoustic pinpointing.'
      ],
      'Safety & Compliance': [
        'Electrical safety procedures and arc flash prevention.',
        'Accreditation compliance standards (NABL / ISO / IEEE).'
      ]
    }
  }
];

export const processSteps = [
  {
    step: 1,
    title: 'Enquire',
    description: 'Submit your technical requirements or project scope via our digital portal.'
  },
  {
    step: 2,
    title: 'Consultation',
    description: 'On-site technical evaluation and requirement mapping with our factory-trained engineers.'
  },
  {
    step: 3,
    title: 'Execution & Support',
    description: 'Project delivery, accredited testing, calibration validation, and long-term lifecycle support.'
  }
];
