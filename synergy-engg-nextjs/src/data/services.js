export const services = [
  {
    id: 'epc-division',
    title: 'EPC Project Division',
    icon: 'architecture',
    description: 'Comprehensive Engineering, Procurement, and Construction project management. We deliver reliable, efficient, and sustainable power solutions.',
    details: {
      'Electrical Design & Studies': [
        'Load Flow Analysis, Short Circuit Study, and Relay setting & Co-ordination.',
        'Equipment Sizing (Transformers, Cables, Earthing, Lightning protection, etc.).',
        'Single line diagrams, Cable route layouts, Substation layouts, Cable schedules, and BOQ/RFQ preparation.'
      ],
      'Instrumentation & Control': [
        'P&ID preparation, Instrument specifications & Data sheets, and I/O Lists.',
        'Control System Architecture and Specifications (PLC / DCS).',
        'Loop & Wiring drawings, JB & Cable Schedules, Cable Tray routes, and Hook-up drawings.'
      ],
      'EPC Execution & Commissioning': [
        'Substation and transmission line installation up to 220 kV grid standards.',
        'Precision structural erection, earthing grid layout, and panel wiring.',
        'Procurement of high-quality switchgear, transformers, and cables from Tier-1 manufacturers.',
        'Final safety auditing, coordination with electrical inspectors, and grid-charging coordination.'
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
      'Cable Fault Locating & Route Tracing': [
        'Fault Pre-location & Pinpointing (acoustic-magnetic)',
        'Very Low Frequency (VLF) Testing up to 36 kV',
        'HT & LT Cable Route Tracing & Identification',
        'High-pot (DC/AC) insulation tests',
        'Cable sheath integrity diagnostics and partial discharge analysis'
      ],
      'Motor & Generator Testing': [
        'Static Analysis (Surge tests, RLC measurements)',
        'Rotor Influence Check (RIC) & Motor Condition Monitoring',
        'Insulation Resistance (IR) & Polarization Index (PI)',
        'Power Quality & Load Issue Diagnostics',
        'Dynamic machine testing and winding insulation diagnostics using Baker ADX'
      ],
      'Other Specialized Services': [
        'NABL Calibration of testing equipment in accredited laboratory',
        'Protection Relay testing & Retrofitting',
        'Battery Bank testing (Ohmic, Float current, and discharge tests using TORKEL load banks)',
        'Thermal Imaging (Thermography) & Earth Pit resistance tests'
      ]
    }
  },
  {
    id: 'transformer-monitoring',
    title: 'Online Transformer Monitoring',
    icon: 'monitoring',
    description: 'Continuous online monitoring of critical power transformers including multi-gas Dissolved Gas Analysis (DGA) and bushing diagnostics.',
    details: {
      'Online DGA Systems (HYDROCAL)': [
        'Continuous analysis of up to 11 key dissolved fault gases (Acetylene, Hydrogen, Carbon Monoxide, etc.) and moisture.',
        'Early detection of thermal, electrical, and discharge faults in transformer windings.',
        'Portable online DGA (HYDROCAL 1011 genX P) for on-site verification and mobile diagnostic audits.'
      ],
      'Bushing Insulation Monitoring': [
        'Continuous leakage current amplitude and phase shift tracking for up to 6 bushings.',
        'Dissipation Factor (tan delta) and bushing capacitance (C1) diagnostics under live grid loads.',
        'Alarms for moisture ingress and aging insulation to prevent sudden bushing explosions.'
      ],
      'System Integration': [
        'Seamless integration with utility SCADA systems via Modbus RTU/TCP, DNP3, and IEC 61850 protocols.',
        'Remote web-server interface for real-time alerts and historic gas trend visualization.'
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
        'TE Connectivity - Power cable accessories (EHVS, RPIT, ELBC, RSTI, EPKT).',
        'Greenlee & RIDGID - Battery-powered hydraulic crimping and cutting tools.',
        'KL-ARC - Specialized arc flash protection and electrical safety wear.'
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
