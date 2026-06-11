import json
import os

products_data_path = r'C:\Users\KANHA\Desktop\SYNERGY_ENGG_WEBSITE\synergy-engg-nextjs\src\data\products.js'

# Existing featured products to preserve exactly as they are
# We will read them or define them, but since we want to keep them, we can parse them or hardcode them first.
# Let's read the existing products.js file, extract the existing array, and then add the new products.
# To do this safely, we can define the new products in Python and append them to the existing array.

new_products = [
    # CABLE FAULT LOCATION (Megger)
    {
        "id": "ez-thump",
        "name": "Megger EZ-Thump 3/4/12 kV",
        "title": "Megger EZ-Thump Portable Cable Fault Locator",
        "brand": "megger",
        "desc": "Compact, portable cable fault locator for shielded power cables in low and medium voltage grids.",
        "image": "/images/img_1.webp",
        "keySpecs": [
            "Dual-stage capacitor discharge (thumping) at 3, 4, or 12 kV",
            "Built-in TDR with up to 10 km range",
            "Automatic fault pre-location on power-up",
            "Battery or AC mains operated for field flexibility"
        ],
        "overview": {
            "title": "Portable High-Performance Cable Fault Locating",
            "paragraphs": [
                "The Megger EZ-Thump series is a compact, lightweight cable fault locating system designed for testing low and medium voltage shielded cables. It is ideal for quick fault location on underground power systems.",
                "Equipped with an intuitive touchscreen, the EZ-Thump guides the operator through testing. It performs testing, fault pre-location (via TDR/ARM methods), and pinpointing in a single portable package."
            ]
        },
        "specs": {
            "Output Voltages": "3 kV, 4 kV, or 12 kV options",
            "Energy Output": "Up to 500 Joules",
            "TDR Range": "Up to 10 km (30,000 ft)",
            "Safety Rating": "CAT IV 600 V",
            "IP Rating": "IP54"
        },
        "downloads": [{"name": "Technical Brochure", "type": "pdf", "path": "/contact"}],
        "related": ["bite5", "bm5200", "mit5252"]
    },
    {
        "id": "smart-thump",
        "name": "Megger Smart Thump ST16-20",
        "title": "Megger Smart Thump Portable Cable Fault Locator",
        "brand": "megger",
        "desc": "16 kV / 20 kV advanced portable cable fault locator with intelligent automation.",
        "image": "/images/img_2.webp",
        "keySpecs": [
            "16 kV or 20 kV diagnostic testing and thumping capability",
            "Integrated high-energy thumper up to 1500 Joules",
            "Automatic 'Easy Go' software interface for automatic fault finding",
            "Rugged weather-proof enclosure for harsh outdoor environments"
        ],
        "overview": {
            "title": "Intelligent Automation for Cable Fault Recovery",
            "paragraphs": [
                "The Megger Smart Thump is a high-energy portable cable fault locating system. It provides comprehensive testing, insulation diagnostics, pre-location, and pinpointing for medium voltage distribution networks.",
                "With its automated testing sequences, the system determines the best fault finding method automatically, reducing training requirements and speeding up utility restoration times."
            ]
        },
        "specs": {
            "Output Voltages": "16 kV or 20 kV options",
            "Energy Output": "Up to 1500 Joules",
            "Enclosure": "Rugged IP64 case",
            "Display": "10.4-inch sunlight-readable color screen",
            "Weight": "Under 60 kg (highly portable)"
        },
        "downloads": [{"name": "Technical Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["ez-thump", "mit5252"]
    },
    {
        "id": "digiphone2",
        "name": "Megger digiPHONE+2",
        "title": "Megger digiPHONE+2 Cable Fault Pinpointing System",
        "brand": "megger",
        "desc": "Acoustic and electromagnetic pinpoint locator for high-precision cable fault localization.",
        "image": "/images/img_3.webp",
        "keySpecs": [
            "Combines acoustic detection and electromagnetic field tracing",
            "Active noise cancellation for crystal-clear auditory detection",
            "Automatic mute function when lifting the sensor to protect hearing",
            "Left-Right navigation compass for precise route alignment"
        ],
        "overview": {
            "title": "The Industry Gold Standard for Fault Pinpointing",
            "paragraphs": [
                "The digiPHONE+2 pinpoint locator utilizes advanced acoustic and electromagnetic sensors to pinpoint underground cable faults. It calculates the time delay between the thump sound and the magnetic pulse, directing the user to the exact fault location.",
                "With built-in ambient noise suppression, it isolates the thumping sound even in busy city streets and heavy traffic environments."
            ]
        },
        "specs": {
            "Detection Method": "Acoustic-magnetic delay measurement",
            "Noise Cancellation": "Automatic ambient noise suppression",
            "Hearing Protection": "Auto-mute at >85 dB(A)",
            "Display": "High-contrast LCD with compass",
            "Power Supply": "6 x AA batteries / 10-hour battery life"
        },
        "downloads": [{"name": "User Guide", "type": "pdf", "path": "/contact"}],
        "related": ["ez-thump", "smart-thump"]
    },
    {
        "id": "tdr2000",
        "name": "Megger TDR2000 Series",
        "title": "Megger TDR2000 Time Domain Reflectometer",
        "brand": "megger",
        "desc": "Dual-channel, high-resolution time domain reflectometer for cable fault pre-location.",
        "image": "/images/img_4.webp",
        "keySpecs": [
            "Dual channel TDR for comparison testing",
            "Large color graphic display with auto-selection options",
            "Ultra-fast pulses for detecting near-end faults",
            "IP54 rating for field use"
        ],
        "overview": {
            "title": "Advanced Time Domain Reflectometry",
            "paragraphs": [
                "The Megger TDR2000 is a state-of-the-art dual-channel reflectometer designed for locating faults on metallic cables. It sends high-speed pulses down the cable and measures reflections to find opens, shorts, and splices.",
                "With trace comparison and trace subtraction capabilities, it helps engineers identify subtle faults by comparing suspect lines against healthy reference lines."
            ]
        },
        "specs": {
            "Channels": "Dual Channel",
            "Range": "Up to 20 km (60,000 ft)",
            "Resolution": "0.1 m",
            "Pulse Width": "2 ns to 20 µs",
            "Connectivity": "USB for PC data transfer"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["ez-thump", "digiphone2"]
    },
    
    # EARTH OR GROUND TESTERS (Megger)
    {
        "id": "det4-series",
        "name": "Megger DET4 Series",
        "title": "Megger DET4 Series Earth Tester",
        "brand": "megger",
        "desc": "4-terminal earth resistance and soil resistivity testing kit.",
        "image": "/images/img_6.webp",
        "keySpecs": [
            "2, 3, and 4-point earth resistance testing",
            "Soil resistivity measurements using Wenner method",
            "Selectable test frequencies to filter noise",
            "Clamp-on option for stake-less ground testing"
        ],
        "overview": {
            "title": "Comprehensive Ground Grid Testing",
            "paragraphs": [
                "The Megger DET4 series ground testers are professional tools for verifying substation grounding, lightning protection grids, and soil resistivity surveys before construction.",
                "Designed with a user-friendly selector dial and high noise rejection, they ensure accurate readings in noisy substation environments."
            ]
        },
        "specs": {
            "Resistance Range": "0.01 Ω to 20 kΩ",
            "Resistivity Range": "Wenner or Schlumberger methods",
            "Test Voltage": "25 V or 50 V selectable",
            "Safety Category": "CAT IV 100 V",
            "Battery Life": "Up to 3 hours continuous testing"
        },
        "downloads": [{"name": "User Guide", "type": "pdf", "path": "/contact"}],
        "related": ["bm5200", "mit5252"]
    },
    {
        "id": "det24c",
        "name": "Megger DET14C / DET24C",
        "title": "Megger DET14C & DET24C Clamp-on Earth Testers",
        "brand": "megger",
        "desc": "Clamp-on ground testers for testing earth resistance without disconnecting ground rods.",
        "image": "/images/img_7.webp",
        "keySpecs": [
            "Stake-less earth resistance testing",
            "Measures ground leakage current from 0.5 mA to 35 A",
            "Elliptical clamp shape fits flat straps and large cables",
            "Bluetooth® data logging on DET24C model"
        ],
        "overview": {
            "title": "Fast, Safe Ground Loop Resistance Measurements",
            "paragraphs": [
                "The Megger DET14C and DET24C represent the next generation of clamp-on earth resistance testers. They measure ground loop resistance without requiring disconnecting utility rods, saving significant testing time.",
                "Their heavy-duty jaws are engineered to withstand dirt and dust in industrial fields while maintaining calibration accuracy."
            ]
        },
        "specs": {
            "Resistance Range": "0.05 Ω to 1500 Ω",
            "Current Range": "0.5 mA to 35 A",
            "Jaw Opening": "39 mm x 55 mm elliptical",
            "Memory": "Up to 2000 records (DET24C)",
            "Safety Class": "CAT IV 600 V"
        },
        "downloads": [{"name": "Product Brochure", "type": "pdf", "path": "/contact"}],
        "related": ["det4-series"]
    },

    # MULTIMETERS & CLAMPS (Megger)
    {
        "id": "dcm1500s",
        "name": "Megger DCM1500S",
        "title": "Megger DCM1500S Solar Clamp Meter",
        "brand": "megger",
        "desc": "1500 V AC/DC smart clamp meter with PV system analytics.",
        "image": "/images/img_8.webp",
        "keySpecs": [
            "Measures up to 2000 V DC and 1500 V AC",
            "Ideal for PV solar array inspections and wind turbine systems",
            "Smart Bluetooth® connectivity for real-time monitoring",
            "CAT IV 600 V safety rating"
        ],
        "overview": {
            "title": "High-Voltage Clamp Meter for Renewable Energies",
            "paragraphs": [
                "The Megger DCM1500S clamp meter is designed for installation, maintenance, and troubleshooting on high-voltage solar energy systems and industrial electrical networks.",
                "With its slim jaw and dual lead configuration, it provides safe voltage measurement up to 2000V DC on utility-scale solar panels."
            ]
        },
        "specs": {
            "DC Voltage": "2000 V",
            "AC Voltage": "1500 V",
            "AC/DC Current": "1500 A",
            "Safety Rating": "CAT IV 600 V / CAT III 1000 V",
            "Jaws Opening": "51 mm"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["det4-series", "bm5200"]
    },
    {
        "id": "mft-x1",
        "name": "Megger MFT-X1 & EVX100",
        "title": "Megger MFT-X1 Multifunction Tester",
        "brand": "megger",
        "desc": "Next-generation electrical installation tester with EV charge-point adapter.",
        "image": "/images/img_11.webp",
        "keySpecs": [
            "Complete installation testing including loop, RCD, and insulation",
            "EVCA210/EVX100 adapter for EV charging station verification",
            "Full-color high-resolution screen with active lead connection guidance",
            "Rechargeable battery pack with USB charging"
        ],
        "overview": {
            "title": "Electric Vehicle Charger and Grid Installation Testing",
            "paragraphs": [
                "The Megger MFT-X1 is the flagship multi-function installation tester. It provides complete electrical safety testing for commercial, industrial, and residential electrical installations.",
                "When paired with the EVX100 adapter, it simulates electrical vehicle connections, allowing technicians to fully test and certify EV chargers."
            ]
        },
        "specs": {
            "Testing Modes": "Loop, RCD, Earth, Insulation, Phase Rotation",
            "EV Adapter compatibility": "EVCA210 / EVX100 adapters",
            "Display": "Vibrant color display",
            "Safety Rating": "CAT IV 300 V / CAT III 600 V",
            "Memory": "On-board wireless sync to database"
        },
        "downloads": [{"name": "Product Brochure", "type": "pdf", "path": "/contact"}],
        "related": ["dcm1500s", "det4-series"]
    },

    # ACOUSTICS IMAGING (Megger)
    {
        "id": "mpac208",
        "name": "Megger MPAC208",
        "title": "Megger MPAC208 Acoustic Imaging Camera",
        "brand": "megger",
        "desc": "Acoustic imaging camera for real-time gas leak and partial discharge visualization.",
        "image": "/images/img_12.webp",
        "keySpecs": [
            "Visualizes air leaks and electrical partial discharge on screen",
            "124 MEMS microphones for high-frequency sound pinpointing",
            "Real-time decibel overlays and distance calculation",
            "IECEx certified model available for hazardous fields"
        ],
        "overview": {
            "title": "See Sound: Partial Discharge and Gas Leak Detection",
            "paragraphs": [
                "The Megger MPAC208 acoustic imaging camera is a predictive maintenance tool that visualizes sound. It overlays acoustic hot spots onto real-time visual feeds, allowing engineers to instantly locate pressurized gas leaks or partial discharge on high-voltage insulators.",
                "By catching insulation degradation and leaks early, it prevents catastrophic grid failures and reduces energy overheads."
            ]
        },
        "specs": {
            "Microphones": "124 MEMS digital microphones",
            "Frequency Range": "2 kHz to 48 kHz",
            "Detection Distance": "Up to 120 m",
            "Battery Life": "4 hours continuous",
            "Output Format": "JPEG photo / MP4 video"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["mit5252", "680-adx"]
    },

    # SUBSTATION & RELAY TESTING (Megger)
    {
        "id": "sverker900",
        "name": "Megger SVERKER 900",
        "title": "Megger SVERKER 900 Substation Test System",
        "brand": "megger",
        "desc": "Three-phase substation and protection relay testing system.",
        "image": "/images/img_14.webp",
        "keySpecs": [
            "Three-phase current and voltage generation",
            "Ideal for protection relays, CTs, and VT diagnostics",
            "Touchscreen user interface with automatic test sequences",
            "Powerful current source up to 250 A"
        ],
        "overview": {
            "title": "Protection Relay and Substation Diagnostics",
            "paragraphs": [
                "The SVERKER 900 is the ultimate engineer’s toolbox for substation testing. It is specifically designed for basic manual and automated testing of protection relays and substation components.",
                "With its modular architecture, it can generate currents and voltages with phase displacement, making it capable of testing directional protection relays."
            ]
        },
        "specs": {
            "Current Outputs": "3 x 90 A or 1 x 250 A",
            "Voltage Outputs": "4 x 300 V AC",
            "Phase Angle": "0 to 360° programmable",
            "Display": "7-inch color touchscreen",
            "Weight": "Under 15 kg for field transport"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["mit5252", "680-adx"]
    },
    {
        "id": "vidar",
        "name": "Megger VIDAR",
        "title": "Megger VIDAR Vacuum Interrupter Tester",
        "brand": "megger",
        "desc": "High-voltage tester to check the integrity and vacuum of circuit breaker interrupters.",
        "image": "/images/img_15.webp",
        "keySpecs": [
            "Quick pass/fail test for vacuum circuit breakers",
            "Selectable test voltages from 10 kV to 60 kV DC",
            "Automatic discharge of the test object on test completion",
            "Ultra-rugged case for field safety"
        ],
        "overview": {
            "title": "Vacuum Circuit Breaker Integrity Analysis",
            "paragraphs": [
                "The Megger VIDAR tester checks the vacuum inside circuit breaker interrupters by applying a high DC voltage across open contacts and measuring leakage current. If the vacuum is compromised, the interrupter fails the check.",
                "This compact field unit ensures substation safety by validating switchgear operational integrity before re-energizing lines."
            ]
        },
        "specs": {
            "Test Voltages": "10 kV to 60 kV DC selectable",
            "Indication": "Clear Green (Pass) / Red (Fail) lamps",
            "Safety": "Double safety ground terminals",
            "Enclosure": "Heavy duty transport case",
            "Power": "Universal AC mains input"
        },
        "downloads": [{"name": "Technical Guide", "type": "pdf", "path": "/contact"}],
        "related": ["sverker900", "mit5252"]
    },

    # MOTOR TESTING (Megger Baker)
    {
        "id": "baker-adx",
        "name": "Megger Baker ADX",
        "title": "Megger Baker ADX Automatic Motor Analyzer",
        "brand": "megger",
        "desc": "Automated static motor analyzer for comprehensive winding and insulation diagnostics.",
        "image": "/images/img_16.webp",
        "keySpecs": [
            "Surge, DC Hipot, Step Voltage, and Polarization Index tests",
            "Fully automated test sequences to prevent operator error",
            "Available in voltage configurations up to 15 kV",
            "Cloud-enabled data sync for winding trend analysis"
        ],
        "overview": {
            "title": "Predictive Motor Diagnostic and Testing Systems",
            "paragraphs": [
                "The Megger Baker ADX is an automatic static motor analyzer designed to test insulation loops on high-voltage motors, generators, and coils.",
                "By tracking degradation trends over time, the ADX helps industrial plants prevent unplanned motor failures on critical pumps, fans, and compressors."
            ]
        },
        "specs": {
            "Max Voltage Range": "4 kV, 6 kV, 12 kV, or 15 kV configurations",
            "Testing Protocols": "Surge, RLC, Hipot, PI, DAR",
            "Display": "10-inch rugged tablet interface",
            "Data Sync": "Wireless Cloud Integration",
            "Compliance": "IEEE 522 / IEEE 95 insulation standards"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["mpac208", "680-adx"]
    },

    # MTE PORTABLE REFERENCE STANDARDS
    {
        "id": "checkmeter-genx",
        "name": "MTE CheckMeter 2.3 genX",
        "title": "MTE CheckMeter 2.3 genX Portable Reference Standard",
        "brand": "emh",
        "desc": "Three-phase portable reference standard and power quality analyzer for energy meter calibration.",
        "image": "/images/img_37.webp",
        "keySpecs": [
            "Precision accuracy class of 0.05% or 0.1%",
            "Built-in power quality analyzer to track harmonics up to 40th order",
            "Large color touch screen for real-time wave-shape plotting",
            "Supports CT and direct current connections"
        ],
        "overview": {
            "title": "High-Precision On-Site Energy Meter Testing",
            "paragraphs": [
                "The CheckMeter 2.3 genX is a portable standard meter designed to test and calibrate electricity meters in the field. It allows utilities to verify billing accuracy without removing the meter.",
                "With its built-in waveform display and vector diagrams, it identifies wiring errors, CT ratio mismatches, and power quality distortions."
            ]
        },
        "specs": {
            "Accuracy Class": "0.05% / 0.1% selectable",
            "Current Range": "1 mA to 120 A (direct) / 3000 A (with clamp)",
            "Voltage Range": "12 V to 500 V AC",
            "Harmonics": "Up to 40th order analysis",
            "Memory": "SD card storage for test logs"
        },
        "downloads": [{"name": "Datasheet", "type": "pdf", "path": "/contact"}],
        "related": ["mte-filters", "mte-reactors"]
    },

    # BROTHER LABEL PRINTERS
    {
        "id": "pt-e110vp",
        "name": "Brother PT-E110VP",
        "title": "Brother PT-E110VP Handheld Industrial Label Maker",
        "brand": "brother",
        "desc": "Compact handheld label printer with dedicated keys for cable wrapping and faceplates.",
        "image": "/images/img_46.webp",
        "keySpecs": [
            "Dedicated hotkeys for cable wrap, cable flag, and faceplate labels",
            "Prints on durable laminated TZe tapes up to 12mm wide",
            "Includes 200+ built-in electrical and safety symbols",
            "Supplied with a protective carrying case and AC adapter"
        ],
        "overview": {
            "title": "Handheld Cable and Panel Labeling",
            "paragraphs": [
                "The Brother PT-E110VP is a compact handheld label printer designed for electricians, network installers, and field technicians. It provides fast, durable tagging on cables and distribution boards.",
                "Using industrial laminated labels that resist water, chemicals, and extreme temperatures, it ensures compliance with safety regulations and cabling standards."
            ]
        },
        "specs": {
            "Print Speed": "20 mm/s",
            "Maximum Tape Width": "12 mm",
            "Resolution": "180 dpi",
            "Power Supply": "6 x AAA batteries or AC adapter",
            "Cutter": "Manual blade"
        },
        "downloads": [{"name": "User Manual", "type": "pdf", "path": "/contact"}],
        "related": ["pt-e560btvp", "pt-e850tkw"]
    }
]

# Read products.js and append
if os.path.exists(products_data_path):
    with open(products_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to insert the new products right before the closing bracket of the products array.
    # The products array starts with "export const products = [" and ends with "];".
    # Let's find the closing bracket "];" of the array.
    # Let's verify how it ends:
    # "  }\n];"
    
    array_end_idx = content.rfind('];')
    if array_end_idx != -1:
        # Generate JS objects for new products
        new_js_objects = []
        for p in new_products:
            js_obj = json.dumps(p, indent=2)
            # Remove top level JSON quotes for keys and keep JS format
            # A simple way is to use python's json.dumps but we can format it nicely.
            new_js_objects.append(js_obj)
        
        insertion_str = ",\n" + ",\n".join(new_js_objects)
        
        new_content = content[:array_end_idx] + insertion_str + "\n];\n"
        
        with open(products_data_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully appended {len(new_products)} products to products.js!")
    else:
        print("Could not find the closing bracket of the products array.")
else:
    print("products.js not found.")
