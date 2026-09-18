window.PORTFOLIO_DATA = {
  name: "Sara Hawarneh",
  role: "Mechanical Engineering Student | Mechanical Design, Aerodynamics & Manufacturing",
  location: "Amman, Jordan",
  email: "sara.feras2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/sara-hawarneh-a544b0244",
  resume: "resume.html",
  intro: "Mechanical Engineering student at Al Hussein Technical University with hands-on experience in Formula Student vehicle development, CFD, carbon-fiber manufacturing, mechanical design, GD&T, and engineering validation. I work across design, simulation, manufacturing, and subsystem integration to turn engineering concepts into verified vehicle solutions.",
  metrics: [
    { value: "~2×", label: "Downforce", detail: "2026 aero development" },
    { value: "~1 min", label: "Lap-time reduction", detail: "Estimated endurance improvement" },
    { value: "~10 kg", label: "Vehicle mass reduction", detail: "Aero/manufacturing development" },
    { value: "7 kg", label: "Chassis mass reduction", detail: "With Rolling Chassis lead" }
  ],
  formulaStudent: {
    title: "Formula Student - Body, Aerodynamics & Vehicle Integration",
    subtitle: "From junior member to Mechanical Department System Lead",
    overview: "My Formula Student work combines vehicle integration, aerodynamic development, manufacturing strategy, engineering documentation, and cross-department coordination. For the 2026 FSUK Concept Class vehicle, I coordinated body assembly and positioning across departments while leading the aero design, simulation methodology, verification, validation, and result interpretation.",
    heroImage: "Screenshot 2026-09-18 164315.png",
    responsibilities: [
      "Coordinated vehicle-body integration across Rolling Chassis, Aerodynamics, Powertrain, and Low Voltage, including positioning and mechanical interfaces.",
      "Designed the steering wheel and dashboard and coordinated their integration between the Rolling Chassis and Low Voltage departments; also supported steering-geometry development.",
      "Designed the body panelling, nose cone, and front wing, while supporting team members responsible for the rear wing and undertray.",
      "Ran aerodynamic simulations using SolidWorks, ANSYS, Creo, and SimScale, including model selection, verification, validation, cross-software comparison, and interpretation of results.",
      "Produced GD&T drawings across 3 major vehicle systems, covering aerodynamic components plus steering and suspension subsystems.",
      "Led the aero manufacturing strategy by developing an in-house manufacturing plan, investigating vacuum-bagging alternatives, exploring prepreg carbon-fiber concepts, and starting manufacturing trials to verify process targets."
    ],
    conceptClassNote: "The 2026 FSUK entry is Concept Class, so a complete physical aero kit was not manufactured for competition. Manufacturing work focused on process development and physical trials so future aero packages can be produced with validated methods.",
    development: [
      { title: "2025 Vehicle - Junior Member", href: "projects/2025-formula-student.html", image: "Screenshot 2026-09-18 164420.png", text: "Designed the front wing, reduced its simulated drag by approximately 150 N, supported rear-wing development, and oversaw the aero manufacturing and assembly process." },
      { title: "Front Wing - Wake Management", href: "projects/front-wing-wake-management.html", image: "Screenshot 2026-09-18 164747.png", text: "Used wake management to reduce simulated vehicle drag by approximately 200 N and achieved the highest aerodynamic efficiency among the front-wing iterations." },
      { title: "High-Downforce Rear Wing", href: "projects/high-downforce-rear-wing.html", image: "Screenshot 2026-09-18 164831.png", text: "Raised downforce from approximately 200 N to 350 N with a 4-element design, but the concept added about 3 kg and increased drag." },
      { title: "Final Rear-Wing Iteration", href: "projects/final-rear-wing.html", image: "Screenshot 2026-09-18 164855.png", text: "Traded only about 20 to 30 N of downforce for a marginal drag reduction, approximately 4 kg less mass, and a more assembly-friendly endplate design." }
    ],
    results: [
      "Approximately doubled downforce while reducing drag through iterative aero development.",
      "Contributed to an estimated endurance lap-time reduction of almost one minute.",
      "Reduced vehicle mass by approximately 10 kg through design and carbon-fiber manufacturing refinement.",
      "Worked with the Rolling Chassis Head to reduce chassis mass by approximately 7 kg.",
      "Next-season focus: continue aero R&D while prioritizing Rolling Chassis development; the team does not plan to run a full aero kit next season while core vehicle systems continue to mature."
    ]
  },
  research: {
    title: "Published Research - Internal Ducting for Electric Trucks",
    href: "projects/published-research.html",
    journal: "Simulation: Transactions of the Society for Modeling and Simulation International (2026)",
    doi: "https://doi.org/10.1177/00375497261425257",
    summary: "Co-authored a CFD study investigating an internal duct as a passive aerodynamic solution for heavy-duty electric trucks. The work compared baseline and ducted configurations using ANSYS Fluent across 50-140 km/h and quantified aerodynamic and energy impacts.",
    metrics: [
      { value: "7.5%", label: "Max drag-force reduction" },
      { value: "7.53%", label: "Energy saving at 140 km/h" },
      { value: "8.2%", label: "Estimated range extension" },
      { value: "<0.6%", label: "Mesh-independence variation" }
    ]
  },
  universityProjects: [
    { title: "GearForge - Two-Stage Spur Gearbox", href: "projects/gearforge.html", image: "Screenshot 2026-09-18 165043.png", text: "Designed and fabricated a two-stage spur gearbox using SolidWorks and AutoCAD. Manufactured components using milling, drilling, and turning; checked tolerance fits, surface finish, and shaft alignment; prepared the BOM and material/cost plan; and tested speed ratio and torque transmission against design calculations." },
    { title: "Mechanical Mechanism Project", href: "projects/mechanism.html", image: "Screenshot 2026-09-18 165137.png", text: "Add the final project name, objective, your design responsibility, and whether the mechanism was manufactured or tested. This card is intentionally editable and ready for your final project details." }
  ],
  skills: {
    "CAD & Simulation": ["SolidWorks", "ANSYS Fluent", "Creo", "SimScale", "AutoCAD", "Autodesk CFD", "FEA"],
    "Manufacturing": ["CNC machining", "Milling", "Drilling", "Turning", "Carbon-fiber fabrication", "Vacuum-bagging development", "3D printing", "Laser cutting", "Welding", "Soldering"],
    "Engineering": ["CFD methodology", "Verification & validation", "GD&T", "BOM preparation", "Mechanical integration", "Prototyping", "Testing & validation", "Tolerance & fit analysis", "Material selection", "Cost estimation"],
    "Programming & Electronics": ["Arduino", "C", "Sensor integration", "Low-voltage packaging"]
  }
};