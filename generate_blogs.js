const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'pages', 'blog-post.html');
const blogsDir = path.join(__dirname, 'blogs');

if (!fs.existsSync(blogsDir)) {
    fs.mkdirSync(blogsDir);
}

let templateContent = fs.readFileSync(templatePath, 'utf8');

// Adjust logo link for the subdirectory specifically
templateContent = templateContent.replace(/href="index\.html"(?=[^>]*><img alt="Synergy Engineering Logo")/, 'href="../pages/index.html"');

// Adjust navigation links for the subdirectory
const pages = ['index', 'about', 'products', 'services', 'industries', 'blog', 'careers', 'contact', 'quote', 'bite5', 'flir-t840', 'det24c'];
pages.forEach(page => {
    // Only match href="page.html" exactly, not as part of another path
    // We already handled index.html for the logo, so this will catch the rest or catch index.html in nav
    const regex = new RegExp(`href="${page}\\.html"`, 'g');
    templateContent = templateContent.replace(regex, `href="../pages/${page}.html"`);
});

const blogs = [
    {
        id: 'non-destructive-testing',
        title: 'The Evolution of Non-Destructive Testing in High-Voltage Transformers',
        category: 'Electrical Testing',
        date: 'October 24, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_kgPi_W7KmBWk8dWu6bcMuQwb2iM6xBLFfxs6-qfIAOG48vbgBu3kfL_kjHHFa9rlVB1sNNiecsgmxY7IIzapQU_zWheqVqYVXRe_eofxpu2mi_yiXeVZvsYAYCG_PDZYb9DTWINW3u53fMllBdTxx_bqCdNxpp6EHbi7TC99sx9H5ze0I40X7VwLgBBDZ32_dUMKUvoC0spfV2X-S-EMpuUzPCUQfomBK76euzKIe1M_4d8XxxjptNP5RJxnAYCQXxcVcixShbk',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">As the backbone of global electrical grids, high-voltage transformers require rigorous maintenance. Modern Non-Destructive Testing (NDT) has transitioned from reactive repair to predictive precision.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Precision Beyond the Surface</h2>
            <p class="text-on-surface-variant leading-7 mb-6">The integrity of transformer insulation is paramount. Historically, testing required significant downtime and intrusive sampling that risked introducing contaminants. Today, advanced ultrasonic and thermal imaging allow engineers to visualize internal conditions without a single bolt being turned.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"Modern NDT isn't just about finding flaws; it's about understanding the remaining life of an asset with surgical accuracy."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Dr. Elena Vance, Lead Systems Architect</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Integrated Dissolved Gas Analysis (DGA)</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Perhaps the most significant evolution in NDT is the automation of Dissolved Gas Analysis. In the past, oil samples were taken manually and sent to laboratories, creating a lag in data response. Modern Synergy Engineering systems utilize continuous on-line monitoring, streaming gas concentrations directly to cloud-based diagnostic platforms.</p>
        `
    },
    {
        id: 'smart-grid-integration',
        title: 'Smart Grid Integration: The 2024 Engineering Forecast',
        category: 'Industry Trends',
        date: 'October 18, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhNIZ5CwSIGM4ZFLwXjR-4k7DTkxeiz0nXW-RZjVjCTgixzc4H62MAaT2yiFUrrU3qB7Nymbv7wIdybGE9o0TjghN3R-b6WW3suwRFRTKUhW6iguJZ1R6CoLaxx_z6Qczx394jURpAk8o2atFqLCuT5_qpagnrq_46LDPClTL1BSr_5wVVAll42tVCuI1_F4wH8mQ_3A5QBBPYeSwzGy3N7PZthKn4Zc3OfyJbIPKg97F0vvQeMQSf4U9bM96R7HM6xKJ8bA3SwNU',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">How AI and distributed ledger technology are reshaping how we design and deploy local microgrids for industrial complexes.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Decentralized Power Optimization</h2>
            <p class="text-on-surface-variant leading-7 mb-6">The transition to smart grids is no longer a futuristic concept but a present reality. By integrating AI-driven load balancing, industrial facilities can now optimize their energy consumption in real-time, significantly reducing peak demand charges and improving overall efficiency.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"The smart grid is the internet of energy, where every device is both a consumer and a potential stabilizer for the network."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Mark Sterling, Grid Innovation Lead</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">The Role of Blockchain in Energy Trading</h2>
            <p class="text-on-surface-variant leading-7 mb-6">We are seeing a surge in peer-to-peer energy trading within microgrids. Distributed ledger technology ensures transparent and secure transactions between local producers and consumers, paving the way for a more resilient and democratic energy ecosystem.</p>
        `
    },
    {
        id: 'hydroelectric-dam-retrofit',
        title: 'Retrofitting a 50-Year Old Hydroelectric Dam',
        category: 'Case Studies',
        date: 'October 05, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-QxGDq3Vpa-cGkWHxUrfyBms-u630FnA5AyVLN3cUprFEX6LU363-oKsJs55MvgqJd04500-GytinduQoCL-1BVvPQrT1-r1NrOCBBJw-TlbScIiPmv324iKkARL1h_MDMWWp2m0qbQCEVrM9NKZBHjATpKym8Q8P_m97cFH6IKJEy7D7qPCkEr3oGhSnBp_1yJzIFCxxdYRY1MP8pOTyIVMH2lMeLkpXSaXGrSaPrXLCLQpsCW5XYZKe3e_vWhm3UcoXMB7zov0',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">A deep dive into the technical hurdles and innovative custom switchgear solutions implemented at the Blackwood Project.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Bridging the Generational Gap</h2>
            <p class="text-on-surface-variant leading-7 mb-6">The Blackwood Hydroelectric facility was built in the 1970s. Retrofitting such a structure involves massive logistical challenges, specifically in integrating modern digital control systems with legacy mechanical hardware that still performs exceptionally well.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"You don't just replace history; you enhance it with the precision of the 21st century."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Sarah Jenkins, Projects Director</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Custom Switchgear Solutions</h2>
            <p class="text-on-surface-variant leading-7 mb-6">To maintain the dam's output without a complete teardown, Synergy Engineering developed bespoke medium-voltage switchgear cabinets designed to fit into the original subterranean galleries, saving millions in civil engineering costs.</p>
        `
    },
    {
        id: 'impact-of-5g',
        title: 'The Impact of 5G on Industrial IoT Infrastructure',
        category: 'Industry Trends',
        date: 'September 22, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3vkKEwhQkSW_1ke6iTDfPgpb6u6nsgJNcynhRxtAjEmSlhAlUqXq_tO7SoUqUJLAgGVFBfSi7a-foKKeHRkRyd0fiB64AvE9EWqN5Y0_nXVwt8-2XexDwF-xET1EsGVz5ODbjjxLZ4xqPS6sVsmgECeQJ48VTzGnqlLlwFvZcF-5W5zkmVFEGeteqTULQrAIUVptm0Lg5wMUhRJ5FSqFgnG4NLIWjizGmc5APm7tl-UzIgET1zxllmJZGixNfjYG1clATOxtFh5Y',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">Exploring the latency shifts and bandwidth opportunities for remote monitoring of critical power infrastructure.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Ultra-Low Latency Diagnostics</h2>
            <p class="text-on-surface-variant leading-7 mb-6">5G technology is the final piece of the puzzle for true real-time remote infrastructure management. In power utilities, the difference between a 100ms and a 10ms response time can be the difference between a successful grid isolation and a major equipment failure.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"5G is the central nervous system for the industrial machines of tomorrow."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— David Cho, CTO of IoT Synergy</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Scaling Massive Sensor Networks</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Modern industrial facilities can have tens of thousands of individual sensors monitoring vibration, temperature, and current. The massive machine-type communication (mMTC) capabilities of 5G allow these networks to operate without congestion for the first time.</p>
        `
    },
    {
        id: 'preventative-maintenance',
        title: 'Preventative Maintenance: Cost vs. Risk Assessment',
        category: 'Electrical Testing',
        date: 'September 14, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvAph1PnUecKRHWJ0HkGd6aD3du6d4B9hm2GNi53NlX9iSah88XYpm1LzIdLMpnxwm_6prScq9dG_1UcpGI2odQfQrIeD6hSQ85Rh2Ms1tsXjQbcai0tvL8DMBUl1iGN4P2NxCtNnnhKsuLuxrMk16SRc-qYlREfcrYTNqtjYGp-my5tmqX5xX-WUDPhepbS9acx93HPmXqtvC-YMsivxuoeSqakEoOqRpO_2bxrQm6NqAqNkU1fGor4B-w0_jATnHrFInbYjUCIU',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">A data-driven analysis of how scheduled electrical testing saves corporations millions in unplanned downtime.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">The Real Price of Downtime</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Industrial operations of scale can lose upwards of $20,000 per minute during an unplanned outage. While preventative maintenance represents an upfront cost, the risk-adjusted ROI is often calculated in the thousands of percent when catastrophic failures are avoided.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"In engineering, silence is expensive. If your machines aren't talking to you through data, they're planning a surprise."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Frank Miller, Maintenance Strategist</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Data-Driven Scheduling</h2>
            <p class="text-on-surface-variant leading-7 mb-6">By utilizing predictive analytics, Synergy Engineering helps clients identify high-risk assets that require immediate attention, while extending service intervals for healthy machines, further optimizing operational expenditure.</p>
        `
    },
    {
        id: 'offshore-wind-engineering',
        title: 'Offshore Wind: Engineering for Corrosive Environments',
        category: 'Case Studies',
        date: 'August 30, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX7EA_wSMerKuTqUP8ld7JTEpycUStLgwVgnSY4mGlWAzRV78CbHWEWBSVHIKmky7AW6a9l4Kqi18juKjLMn7HHx1u11pRYG8xufy6Dc8APmsc1_RVOaMfvMHahRMiO0wCURvFH3mptSiZ6I8_F2cnBY-pXVdZ_qO85MHYAg2FpykTL_v3DTxq9SczQxK0efivBd_KRslEWu2eHFQm_QfhODhK2nAbKPKZPklptyB26A6KBQkOPHCBYZewiFWChgWlmbsLL1nKsdk',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">How Synergy developed custom-shielded components for a major wind farm off the coast of the North Sea.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Combatting Salt and Humidity</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Offshore wind turbines represent one of the most hostile environments for electrical systems. Constant exposure to salt spray and extreme humidity can lead to rapid oxidation of critical contact points if not properly protected through advanced shielding and material science.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"Engineering for the ocean is a battle of persistence against the most powerful corrosive force on Earth."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Captain James Reed, Offshore Site Manager</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Custom Protective Enclosures</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Synergy Engineering designed a specialized line of IP68-rated junction boxes for this project, utilizing marine-grade stainless steel and automated environmental conditioning inside the nacelle to keep sensitive diagnostics dry and functional for decades.</p>
        `
    },
    {
        id: 'advanced-transformer-testing',
        title: 'Advanced Transformer Testing in High-Voltage Grids',
        category: 'Case Study',
        date: 'November 12, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1x2KDPxELWbaCmcm5qcURNiZQOtV0HyBw2OOGxJfDln_B-c8kjs5YHSH-Pkd1Vue8sNYPVxQgN0WJQgziJpgS6ie8Xob2DJ2FshkQkHgbINY4JCRMjwkiR3uiQ7YhpdHG2M6FUW5W0yLELrnWKGCh3gO8vDnC_Q0x68IH-J-9bMjx1oo8gRWD32EqhNC8CLeEg6NYEGRmSWeOrHeUbExblAe9CK7JZqY6EnIffXAckiBZPGECSike80xrzLurJg_O4XkHFYWIyQ',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">How Synergy Engineering implemented Megger's latest diagnostic tools for a major utility provider.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Digital Transformer Diagnostics</h2>
            <p class="text-on-surface-variant leading-7 mb-6">This case study examines the deployment of the Megger S1-series 15kV testers across a regional grid. The ability to perform high-voltage insulation tests with extreme noise immunity allowed for testing in live substation environments, saving weeks of coordinated downtime.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"Substations are noisy, both electrically and physically. Our tools need to hear the truth through the static."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Robert Haynes, Field Operations Lead</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Impact on Asset Life Extension</h2>
            <p class="text-on-surface-variant leading-7 mb-6">By identifying localized partial discharges and moisture ingress early, the utility provider was able to extend the projected lifespan of five 200MVA transformers by an estimated 15 years through targeted dehydration and filtration rather than replacement.</p>
        `
    },
    {
        id: 'future-smart-energy',
        title: 'The Future of Smart Energy Measurement',
        category: 'Industry Trends',
        date: 'November 28, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcjAD0XGZ6NQn3JuN_MgTlCoBUR7NuyyUF5-cGVIN3Sgx5aP-wn2mH9pTVzNuJhizCGtlLJHwNi_-MS2TdI5GVecmtb0fHX8KGtjuQxyv2B8L0AggWRZLOECL5uP2LrDXF9eKr14Y586WCnlWLOVKqbaKwHfy18qnYOENbHH2LzZVKdvJ8VimoyH0RZfQrt4cYEqLQJkiO1aeBhBKyPaTqbGn8rvqfhKK1DcNvCpw0nX11Xo5y2W8eivA9o0-l_jDwp5VA3fCES0g',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">Exploring the integration of MTE AG solutions in modernized data center energy monitoring.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Next-Generation Metering Accuracy</h2>
            <p class="text-on-surface-variant leading-7 mb-6">In the hyperscale data center industry, a 0.5% measurement error can translate to millions of dollars in billing discrepancies. We explore why the industry is moving toward 0.01% accuracy standard reference meters from MTE AG to calibrate entire power trains.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"If you can't measure it perfectly, you can't manage it efficiently."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Dr. Hans Weber, MTE Integration Specialist</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Integration with DCIM Software</h2>
            <p class="text-on-surface-variant leading-7 mb-6">The future of energy measurement lies in the seamless flow of data from physical meters to Data Center Infrastructure Management (DCIM) software. Real-time harmonic analysis is now becoming a standard requirement for maintaining power quality in high-density computing environments.</p>
        `
    },
    {
        id: 'precision-labeling-safety',
        title: 'Precision Labeling for Industrial Safety',
        category: 'Technical Guide',
        date: 'December 05, 2023',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxQpNjE3O44Zp6E5ydll4DdJVk2PWj6PBOLjnCmQiwlWGE0T7MNCnRmhUci7gkCzUOUFIyhWU01VXTDzbzdH4BUG4XopVISL9eBo2cD9dFyqRmgYYMN2d-yeHNOrQRksMJbmMQ3BaOiT9umKXkR52LBGITocGL0jhRGzsKimF-_3CgmKUEQlG5VHFzH3B8t2WVH1dB_mgB6CbA8uS6ussKYsLp7CkLLvqloW58Bg5Kn4VvVLJ8zcksGPnfJeur8D2TulSG4UpGBeE',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">A comprehensive guide to Brother's industrial systems for complex electrical identification.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Clarity in Complexity</h2>
            <p class="text-on-surface-variant leading-7 mb-6">In the aftermath of an arc flash or electrical failure, clear labeling saves lives. We take a look at how Brother's P-Touch Edge systems allow technicians to create durable, heat-resistant labels for wiring that stay legible even after years of high-temperature service.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"The most important piece of information in a panel is the one you can't read."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Alan Wright, Safety Inspections Officer</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Standardizing Identification Protocols</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Standardization is key to multi-contractor site safety. By implementing site-wide labeling protocols using integrated thermal transfer printing, facilities can ensure that any engineer, regardless of their background, can immediately identify critical isolation points.</p>
        `
    },
    {
        id: 'thermal-gradient-turbines',
        title: 'Optimizing Thermal Gradient Analysis in Turbines',
        category: 'Maintenance',
        date: 'October 12, 2024',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH94QyiOcoLBjP5m6IYnESkoB6y20b40ZmD3Kt2elLr2KfU9rkCK77vQXreyLX_43WKkECL4u35oIrWSg14eqm33QUHsoybnSyGwg8d15s6LpaCMJYaq2IKpd9gmV0DH-AAb9YMOLgJRokRDkScFBYxs0SlMFMlNA-s0lCLeeXoWKK8-nKXRkAn85fSP2lqxMHahc05rHjA3vWgZ0oPcijaHCDjTDvOfoRZi1BzraF703ipn-lRCPIYsea-DviiTpCljqyCRy7fmw',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">Precision thermal monitoring is revolutionizing high-rotation turbine efficiency. We break down the latest sensing technologies.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Visualizing Internal Heat Stress</h2>
            <p class="text-on-surface-variant leading-7 mb-6">High-speed steam and gas turbines operate at the thermal limits of their materials. Even a slight deviation in the expected thermal gradient can indicate bearing wear or steam path obstructions. Advanced infrared sensors now allow us to map these gradients in real-time during full-load operation.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"A turbine is a machine made of heat and motion. To master the motion, you must first map the heat."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Ingrid Larsson, Thermodynamics Specialist</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Predictive Failure Mapping</h2>
            <p class="text-on-surface-variant leading-7 mb-6">By correlating thermal data with vibration analysis, maintenance teams can pinpoint exactly which component is under stress before a failure occurs. This symbiotic approach to diagnostics is the new standard for the power generation industry.</p>
        `
    },
    {
        id: 'offshore-wind-integrity',
        title: 'The Future of Offshore Wind Structural Integrity',
        category: 'Renewables',
        date: 'September 28, 2024',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX7EA_wSMerKuTqUP8ld7JTEpycUStLgwVgnSY4mGlWAzRV78CbHWEWBSVHIKmky7AW6a9l4Kqi18juKjLMn7HHx1u11pRYG8xufy6Dc8APmsc1_RVOaMfvMHahRMiO0wCURvFH3mptSiZ6I8_F2cnBY-pXVdZ_qO85MHYAg2FpykTL_v3DTxq9SczQxK0efivBd_KRslEWu2eHFQm_QfhODhK2nAbKPKZPklptyB26A6KBQkOPHCBYZewiFWChgWlmbsLL1nKsdk',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">Extreme saline environments demand advanced surface diagnostics. Explore the next generation of corrosion sensors.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Sensor-Embedded Structures</h2>
            <p class="text-on-surface-variant leading-7 mb-6">The future of offshore wind lies in foundations that 'feel' the ocean's toll. New sensors embedded directly into the steel structures and transition pieces monitor cathodic protection levels and weld integrity, transmitting data via satellite for onshore analysis.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"We are building a fleet of intelligent structures that can tell us when they need help, long before the storm hits."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Niels Holger, Structural Engineering Lead</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Autonomous Inspection Drones</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Combined with fixed sensors, automated drone inspections are now performing high-resolution surface mapping of turbine blades and towers. By comparing these maps over time, AI can identify microscopic cracks and paint degradation before they evolve into major structural issues.</p>
        `
    },
    {
        id: 'arc-flash-prevention',
        title: 'Arc Flash Prevention: New Standards for 2025',
        category: 'Safety',
        date: 'September 15, 2024',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC1x2KDPxELWbaCmcm5qcURNiZQOtV0HyBw2OOGxJfDln_B-c8kjs5YHSH-Pkd1Vue8sNYPVxQgN0WJQgziJpgS6ie8Xob2DJ2FshkQkHgbINY4JCRMjwkiR3uiQ7YhpdHG2M6FUW5W0yLELrnWKGCh3gO8vDnC_Q0x68IH-J-9bMjx1oo8gRWD32EqhNC8CLeEg6NYEGRmSWeOrHeUbExblAe9CK7JZqY6EnIffXAckiBZPGECSike80xrzLurJg_O4XkHFYWIyQ',
        content: `
            <p class="text-xl leading-relaxed text-on-surface-variant mb-8 font-medium italic border-l-4 border-secondary pl-6">Stay compliant with upcoming regulatory shifts. We analyze the technical requirements for internal arc resistance testing.</p>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">Understanding the 2025 Mandates</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Safety standards for arc flash prevention are entering a new phase. Upcoming regulations will mandate more frequent arc-flash studies and stricter requirements for PPE calibration and testing, especially for personnel working on systems above 600V.</p>
            <blockquote class="my-12 py-8 px-10 bg-surface-container-low border-r-4 border-secondary relative">
                <span class="absolute top-4 left-4 text-6xl text-secondary/10 font-serif leading-none">"</span>
                <p class="text-2xl font-headline font-bold text-primary-container leading-snug">"In an arc flash, there is no second chance. Your last line of defense must be guaranteed."</p>
                <cite class="block mt-4 text-secondary font-bold not-italic">— Thomas Kade, Chief Safety Compliance Officer</cite>
            </blockquote>
            <h2 class="text-2xl font-extrabold text-primary-container mt-12 mb-6">The Importance of Relay Coordination</h2>
            <p class="text-on-surface-variant leading-7 mb-6">Many facilities rely on outdated protection settings. In this article, we discuss why modern digital relays and proper coordination studies are the most effective way to reduce the incident energy of an arc flash, moving safety from passive PPE to active protection.</p>
        `
    }
];

// Generate the individual blog pages
blogs.forEach(b => {
    let html = templateContent;
    html = html.replace(/<title>.*?<\/title>/, `<title>${b.title} | Synergy Engineering</title>`);
    html = html.replace(/<h1[^>]*>.*?<\/h1>/s, `<h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6">${b.title}</h1>`);
    html = html.replace(/<span class="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm mb-6 tracking-widest uppercase">.*?<\/span>/, `<span class="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-sm mb-6 tracking-widest uppercase">${b.category}</span>`);
    html = html.replace(/<span>Published .*?<\/span>/, `<span>Published ${b.date}</span>`);
    html = html.replace(/<img[^>]*class="w-full h-full object-cover"[^>]*src="[^"]*"[^>]*>/, `<img alt="${b.title}" class="w-full h-full object-cover" src="${b.image}"/>`);
    
    // Breadcrumb Update
    html = html.replace('<span class="text-white font-semibold">Blog Detail</span>', `<span class="text-white font-semibold line-clamp-1">${b.title}</span>`);

    const proseStart = '<div class="prose prose-slate max-w-none">';
    const proseEnd = '</div>\n<!-- Post Footer / Share -->';
    
    const startIdx = html.indexOf(proseStart);
    const endIdx = html.indexOf(proseEnd);
    
    if (startIdx !== -1 && endIdx !== -1) {
        html = html.substring(0, startIdx + proseStart.length) + b.content + html.substring(endIdx);
    }

    const outFile = path.join(blogsDir, `${b.id}.html`);
    fs.writeFileSync(outFile, html);
    console.log(`Created ${outFile}`);
});

function updateFileLinks(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Determine depth based on path
    const isBlogDir = filePath.includes(path.join(__dirname, 'blogs'));
    const isPagesDir = filePath.includes(path.join(__dirname, 'pages'));
    
    // Blogs need ../pages/, Root needs pages/, Pages siblings need nothing
    let pagesPrefix = '';
    if (isBlogDir) pagesPrefix = '../pages/';
    else if (!isPagesDir) pagesPrefix = 'pages/';
    
    // Blogs need ../blogs/ (or just filename if in blogs/, but let's keep consistency)
    // Root needs blogs/, Pages need ../blogs/
    let blogsPrefix = 'blogs/';
    if (isBlogDir) blogsPrefix = ''; // siblings
    else if (isPagesDir) blogsPrefix = '../blogs/';

    // Prefix all normal site links
    const pagesList = ['index', 'about', 'products', 'services', 'industries', 'blog', 'careers', 'contact', 'quote', 'bite5', 'flir-t840', 'det24c'];
    pagesList.forEach(page => {
        // Match href="index.html", href="pages/index.html", or href="../pages/index.html"
        const regex = new RegExp(`href="(?:\\.\\.\\/pages\\/|pages\\/)?${page}\\.html"`, 'g');
        content = content.replace(regex, `href="${pagesPrefix}${page}.html"`);
    });

    blogs.forEach(b => {
        const titleEscaped = b.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Match 1: Sidebar/Footer links - Limited to 300 chars
        const blockRegex = new RegExp(`(<a[^>]*href=")(?:[^"]+?)("[^>]*>[\\s\\S]{0,300}<h[35][^>]*>\\s*${titleEscaped}\\s*</h[35]>)`, 'g');
        content = content.replace(blockRegex, `$1${blogsPrefix}${b.id}.html$2`);

        // Match 2: Grid Titles
        const gridTitleRegex = new RegExp(`(<h3[^>]*>)\\s*(${titleEscaped})\\s*(</h3>)`, 'g');
        content = content.replace(gridTitleRegex, `$1<a href="${blogsPrefix}${b.id}.html" class="hover:text-secondary transition-colors">$2</a>$3`);
        
        // Match 3: Already wrapped titles
        const gridTitleWrappedRegex = new RegExp(`(<h3[^>]*>\\s*<a[^>]*href=")(?:[^"]+?)("[^>]*>\\s*${titleEscaped}\\s*</a>\\s*</h3>)`, 'g');
        content = content.replace(gridTitleWrappedRegex, `$1${blogsPrefix}${b.id}.html$2`);

        // Match 4: "Read More" Button
        const readMoreBlockRegex = new RegExp(`(<h3[^>]*>\\s*<a[^>]*href="${blogsPrefix}${b.id}\\.html"[^>]*>${titleEscaped}</a>\\s*</h3>[\\s\\S]{0,500}<a[^>]*href=")(?:[^"]+?)("[^>]*>\\s*Read More)`, 'g');
        content = content.replace(readMoreBlockRegex, `$1${blogsPrefix}${b.id}.html$2`);
    });
    
    fs.writeFileSync(filePath, content);
}

// Update primary pages
updateFileLinks(path.join(__dirname, 'pages', 'blog.html'));
updateFileLinks(path.join(__dirname, 'pages', 'index.html'));
// Do NOT update template files on disk, as they are managed via templateContent variable logic

// Update all generated files
const generatedFiles = fs.readdirSync(blogsDir);
generatedFiles.forEach(file => {
    updateFileLinks(path.join(blogsDir, file));
});

console.log('Successfully updated all links and unique content across all pages.');
