const d = (name, title, intro, tags, impact, goals) => ({ name, title, intro, tags, impact, goals })

export const departmentDetails = [
  d('Accounts & Finance', 'FINANCIAL STEWARDSHIP', 'We safeguard the financial health of the business through accurate reporting, disciplined cost control, and timely payments that keep operations and partners moving.', ['Accounting', 'Treasury', 'Audit', 'Reporting'], [
    ['Financial Reporting', 'Prepared accurate monthly and annual reports that give management a clear view of performance.'],
    ['Cost & Budget Control', 'Tracked budgets against actuals and flagged variances before they became losses.'],
    ['Payments & Treasury', 'Managed supplier payments, receivables, and cash flow with consistent timeliness.'],
    ['Audit & Compliance', 'Maintained audit-ready records and compliance with statutory requirements.'],
  ], [
    ['Automated Finance', 'Reduce manual entry through automated reconciliation and approvals.'],
    ['Stronger Forecasting', 'Build forward-looking cash flow and margin forecasts.'],
    ['Cost Visibility', 'Give every team real-time insight into order-level costs.'],
    ['Faster Closing', 'Shorten the monthly close cycle with cleaner processes.'],
  ]),
  d('Administration', 'OPERATIONAL BACKBONE', 'We keep the organization running smoothly by managing facilities, logistics support, documentation, and the everyday services every team depends on.', ['Facilities', 'Support', 'Documentation', 'Coordination'], [
    ['Facility Management', 'Maintained safe, clean, and well-equipped workspaces for all teams.'],
    ['Office Coordination', 'Streamlined day-to-day services, travel, and procurement of office needs.'],
    ['Document Control', 'Kept records, permits, and agreements organized and easily retrievable.'],
    ['Vendor Relations', 'Managed service providers to ensure reliable, cost-effective support.'],
  ], [
    ['Digital Records', 'Move paper-based processes to a searchable digital system.'],
    ['Smarter Procurement', 'Standardize purchasing for better value and transparency.'],
    ['Better Workplace', 'Continuously improve comfort and safety for our people.'],
    ['Faster Service', 'Respond to internal requests with clearer tracking.'],
  ]),
  d('Business Intelligence', 'DIGITAL RELIABILITY', 'We transform business data into clear insights, dashboards, and management reports that support faster and more informed decisions. Our work focuses on performance analysis, process improvement, bottleneck identification, SMV analysis, efficiency monitoring, and decision support.', ['Infrastructure', 'Support', 'Security', 'Reliability'], [
    ['Performance Analytics', 'Developed dashboards and reports for production, efficiency, manpower, cost, subsidy, and key business KPIs.'],
    ['Process & Bottleneck Analysis', 'Identified process gaps, operational bottlenecks, productivity losses, and improvement opportunities.'],
    ['SMV & Efficiency Analysis', 'Analyzed SMV, capacity, operator performance, manpower utilization, and operational efficiency.'],
    ['Data-Driven Decision Support', 'Converted operational data into actionable insights and recommendations to support management decisions.'],
  ], [
    ['Proactive IT', 'Move from reactive support toward proactive monitoring and maintenance.'],
    ['Stronger Security', 'Continuously strengthen cybersecurity and access management.'],
    ['Infrastructure Growth', 'Build technology infrastructure that scales with the organization.'],
    ['Smart Support', 'Introduce more automated and intelligent support processes.'],
  ]),
  d('Commercial', 'COMMERCIAL GROWTH', 'We build and nurture buyer relationships, negotiate competitive terms, and turn market opportunities into lasting partnerships.', ['Buyers', 'Negotiation', 'Pricing', 'Growth'], [
    ['Buyer Relationships', 'Maintained strong, long-term partnerships with global brands and retailers.'],
    ['Pricing & Negotiation', 'Secured balanced pricing and terms that protect margins and value.'],
    ['Order Management', 'Converted enquiries into confirmed orders with clear commitments.'],
    ['Market Insight', 'Tracked trends and buyer needs to guide sourcing strategy.'],
  ], [
    ['New Markets', 'Expand into new regions and buyer segments.'],
    ['Deeper Partnerships', 'Grow strategic accounts through shared planning.'],
    ['Margin Strength', 'Improve profitability through smarter costing.'],
    ['Faster Quoting', 'Respond to buyer requests with quicker, data-backed quotes.'],
  ]),
  d('Compliance', 'RESPONSIBLE STANDARDS', 'We ensure our factories and partners meet social, environmental, and legal standards so every shipment reflects ethical and accountable production.', ['Audits', 'Social', 'Environment', 'Standards'], [
    ['Factory Audits', 'Assessed partner factories against buyer and international standards.'],
    ['Corrective Actions', 'Tracked findings to closure with clear ownership and timelines.'],
    ['Certification Support', 'Guided partners through certifications and renewals.'],
    ['Policy & Training', 'Raised awareness of compliance requirements across the supply chain.'],
  ], [
    ['Proactive Audits', 'Identify risks early through continuous monitoring.'],
    ['Digital Tracking', 'Centralize compliance data for instant visibility.'],
    ['Greener Practices', 'Promote sustainable, resource-efficient production.'],
    ['Partner Capability', 'Build stronger compliance capability in every factory.'],
  ]),
  d('Design & Development', 'CREATIVE DEVELOPMENT', 'Local and international design teams develop creative, commercially relevant products, taking ideas from sketch to approved sample.', ['Concepts', 'Trends', 'Samples', 'Product'], [
    ['Concept Creation', 'Translated trends and buyer briefs into fresh, commercial garment concepts.'],
    ['Tech Packs', 'Prepared precise specifications that guide accurate production.'],
    ['Trend Research', 'Monitored fashion and fabric trends to inform each season.'],
    ['Buyer Collaboration', 'Worked closely with buyers to refine designs and achieve approvals.'],
  ], [
    ['Digital Design', 'Adopt 3D and digital sampling to cut lead times.'],
    ['Sustainable Ranges', 'Develop more responsible material and product options.'],
    ['Wider Portfolio', 'Broaden product categories and capabilities.'],
    ['Faster Approvals', 'Streamline feedback loops with buyers.'],
  ]),
  d('Human Resources', 'PEOPLE & CULTURE', 'We attract, develop, and support the people who power Indesore, building a workplace where talent grows and teams thrive together.', ['Talent', 'Culture', 'Training', 'Wellbeing'], [
    ['Talent Acquisition', 'Recruited skilled professionals aligned with our values and needs.'],
    ['Learning & Development', 'Delivered training that builds skills and career growth.'],
    ['Employee Engagement', 'Organized events and initiatives that strengthen team spirit.'],
    ['Policy & Welfare', 'Maintained fair policies and supportive employee services.'],
  ], [
    ['Career Pathways', 'Create clear growth paths for every role.'],
    ['Digital HR', 'Simplify HR services through self-service tools.'],
    ['Stronger Culture', 'Deepen engagement and recognition across teams.'],
    ['Future Skills', 'Prepare our people for evolving industry needs.'],
  ]),
  d('IT Support', 'TECHNOLOGY RELIABILITY', 'We keep systems, devices, and networks dependable so every team can work without interruption, securely and efficiently.', ['Infrastructure', 'Helpdesk', 'Security', 'Uptime'], [
    ['Helpdesk Support', 'Resolved user issues quickly with clear tracking and communication.'],
    ['Network & Hardware', 'Maintained stable networks, devices, and office infrastructure.'],
    ['Security Management', 'Protected systems and data through access control and monitoring.'],
    ['System Maintenance', 'Kept software and services updated with minimal downtime.'],
  ], [
    ['Proactive IT', 'Move from reactive support toward proactive monitoring and maintenance.'],
    ['Stronger Security', 'Continuously strengthen cybersecurity and access management.'],
    ['Infrastructure Growth', 'Build technology infrastructure that scales with the organization.'],
    ['Smart Support', 'Introduce more automated and intelligent support processes.'],
  ]),
  d('Merchandising', 'ORDER TO DELIVERY', 'Dedicated merchandisers manage individual client requirements from development through production, keeping every order aligned and on time.', ['Orders', 'Coordination', 'Timelines', 'Clients'], [
    ['Order Coordination', 'Managed orders end to end across buyers, factories, and internal teams.'],
    ['Time & Action Planning', 'Built and monitored calendars that keep production on schedule.'],
    ['Sample Follow-up', 'Ensured samples met buyer expectations and approval deadlines.'],
    ['Buyer Communication', 'Provided clear, timely updates and quick issue resolution.'],
  ], [
    ['Real-time Tracking', 'Give buyers live visibility of order progress.'],
    ['Faster Turnaround', 'Shorten lead times through tighter coordination.'],
    ['Stronger Planning', 'Improve capacity planning across factories.'],
    ['Client Growth', 'Deepen service quality for long-term accounts.'],
  ]),
  d('Product Safety', 'SAFE BY DESIGN', 'We make sure every product meets safety, chemical, and regulatory requirements so what reaches the customer is safe and fully compliant.', ['Testing', 'Chemicals', 'Regulation', 'Safety'], [
    ['Safety Testing', 'Coordinated testing to confirm products meet buyer and legal limits.'],
    ['Chemical Management', 'Controlled restricted substances across materials and processes.'],
    ['Regulatory Alignment', 'Kept pace with market regulations and buyer safety standards.'],
    ['Risk Prevention', 'Identified and addressed safety risks before shipment.'],
  ], [
    ['Early Detection', 'Catch safety risks earlier in development.'],
    ['Supplier Capability', 'Strengthen safety knowledge across suppliers.'],
    ['Digital Records', 'Centralize test reports and certifications.'],
    ['Zero Incidents', 'Sustain a clean product safety record.'],
  ]),
  d('Quality Assurance (QA)', 'ZERO DEFECT MINDSET', 'We protect product quality at every stage with rigorous inspections, clear standards, and fast corrective action across our partner factories.', ['Inspection', 'Standards', 'Testing', 'Quality'], [
    ['Inline Inspection', 'Monitored production quality in real time to catch defects early.'],
    ['Final Inspection', 'Verified shipments against buyer standards before release.'],
    ['Root Cause Analysis', 'Investigated recurring issues and drove lasting fixes.'],
    ['Factory Guidance', 'Coached partners to improve first-time-right performance.'],
  ], [
    ['Digital Inspections', 'Capture inspection data digitally for faster insight.'],
    ['Higher First-Pass', 'Increase the share of orders passing first time.'],
    ['Preventive Quality', 'Shift from detecting defects to preventing them.'],
    ['Skilled Teams', 'Build deeper quality skills across the network.'],
  ]),
  d('Sample Section', 'PRECISION SAMPLING', 'Our sample room brings designs to life quickly and accurately, giving buyers confidence before bulk production begins.', ['Prototype', 'Fit', 'Speed', 'Craft'], [
    ['Prototype Development', 'Produced accurate first samples that reflect design intent.'],
    ['Fit & Revision', 'Refined garments through fit sessions and buyer comments.'],
    ['Pattern Making', 'Created clean patterns that scale smoothly into production.'],
    ['Timely Delivery', 'Met tight sampling deadlines without compromising quality.'],
  ], [
    ['Faster Sampling', 'Reduce sample lead times further.'],
    ['Digital Patterns', 'Expand digital pattern and fitting workflows.'],
    ['Skilled Craft', 'Upskill sample makers on new techniques.'],
    ['Less Waste', 'Minimize material waste in sampling.'],
  ]),
  d('Software Development', 'BUILT IN-HOUSE', 'We design and build internal software that digitizes operations, connects teams, and gives the business tools shaped around how it actually works.', ['Applications', 'Automation', 'Integration', 'Data'], [
    ['Custom Applications', 'Built tools that digitize and simplify core business workflows.'],
    ['Process Automation', 'Replaced repetitive manual tasks with reliable automated flows.'],
    ['System Integration', 'Connected systems so data moves smoothly between teams.'],
    ['Maintenance & Support', 'Kept applications stable, secure, and continuously improving.'],
  ], [
    ['Unified Platform', 'Bring key tools together in one connected platform.'],
    ['Smarter Automation', 'Apply automation and AI to more processes.'],
    ['Better Experience', 'Deliver faster, simpler interfaces for users.'],
    ['Scalable Systems', 'Architect software that grows with the business.'],
  ]),
  d('Technical', 'TECHNICAL EXCELLENCE', 'Our technical team ensures garments are engineered right, from construction and specifications to process improvement on the production floor.', ['Construction', 'Specs', 'Process', 'Engineering'], [
    ['Garment Engineering', 'Defined construction methods that balance quality and efficiency.'],
    ['Specification Control', 'Maintained accurate technical specs across every style.'],
    ['Production Support', 'Resolved technical issues on the floor to keep lines moving.'],
    ['Process Improvement', 'Introduced methods that improve consistency and output.'],
  ], [
    ['Standardization', 'Standardize technical practices across factories.'],
    ['Skill Building', 'Strengthen technical capability in partner teams.'],
    ['Digital Specs', 'Digitize tech packs for faster, clearer handoffs.'],
    ['Innovation', 'Explore new techniques and technologies.'],
  ]),
  d('Traceability', 'TRANSPARENT SUPPLY CHAIN', 'We trace products from raw material to finished garment, giving buyers verified, transparent visibility into how and where their orders are made.', ['Tracking', 'Transparency', 'Data', 'Verification'], [
    ['Material Tracking', 'Mapped fabrics and trims back to verified sources.'],
    ['Supplier Mapping', 'Maintained up-to-date records of supply chain partners.'],
    ['Data Verification', 'Validated documents and claims to ensure authenticity.'],
    ['Buyer Reporting', 'Provided clear traceability information on request.'],
  ], [
    ['Full Visibility', 'Extend traceability deeper into the supply chain.'],
    ['Digital Platform', 'Centralize traceability data in one system.'],
    ['Faster Reporting', 'Deliver traceability data to buyers instantly.'],
    ['Stronger Trust', 'Build confidence through verified transparency.'],
  ]),
  d('Wash Technician', 'FINISHING EXPERTISE', 'We develop and control washing and finishing processes that deliver the exact look, feel, and consistency each buyer expects, responsibly.', ['Washing', 'Finishing', 'Recipes', 'Sustainability'], [
    ['Wash Development', 'Created wash looks and recipes that match approved references.'],
    ['Process Control', 'Monitored batches for consistent shade, feel, and quality.'],
    ['Resource Efficiency', 'Reduced water, energy, and chemical usage in washing.'],
    ['Factory Training', 'Guided wash units on best practices and safe handling.'],
  ], [
    ['Eco Washing', 'Expand low-impact and water-saving techniques.'],
    ['Recipe Library', 'Build a digital library of proven wash recipes.'],
    ['Consistency', 'Improve repeatability across batches and units.'],
    ['Faster Approvals', 'Speed up wash development cycles.'],
  ]),
]
