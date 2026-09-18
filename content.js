window.PORTFOLIO_DATA = {
  name: "Sara Hawarneh",
  role: "Mechanical Engineering Student | Mechanical Design, Aerodynamics & Manufacturing",
  location: "Amman, Jordan",
  email: "sara.feras2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/sara-hawarneh-a544b0244",
  resume: "assets/Sara_Hawarneh_Resume.docx",
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
    heroImage: "assets/2026-body-assembly.png",
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
      { title: "2025 Vehicle - Junior Member", image: "assets/2025-body-assembly.png", text: "As a junior member, I designed the front wing and supported the member developing the rear wing. I planned the aero manufacturing sequence, mounting approach, and assembly process. I also worked with the Low Voltage team on mechanical packaging and waterproofing for the battery enclosure, PCB enclosure, and dashboard." },
      { title: "Front Wing - Wake Management", image: "assets/front-wing.png", text: "This front-wing iteration was developed primarily for wake management after the new vehicle assembly introduced additional drag associated with disturbed flow. It achieved the highest aerodynamic efficiency among the front-wing iterations evaluated by the team." },
      { title: "High-Downforce Rear Wing", image: "assets/rear-wing-high-downforce.png", text: "After aero efficiency had been improved, overall downforce was still too low. I developed this four-element rear wing to solve the downforce deficit. It achieved the aerodynamic objective, but introduced an approximately 4 kg mass penalty." },
      { title: "Final Rear-Wing Iteration", image: "assets/rear-wing-final.png", text: "The final iteration focused on keeping the aerodynamic gains while reducing mass. It resolved the weight issue with only a negligible decrease in downforce compared with the heavier four-element concept." }
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
    { title: "GearForge - Two-Stage Spur Gearbox", image: "assets/gearbox.png", text: "Designed and fabricated a two-stage spur gearbox using SolidWorks and AutoCAD. Manufactured components using milling, drilling, and turning; checked tolerance fits, surface finish, and shaft alignment; prepared the BOM and material/cost plan; and tested speed ratio and torque transmission against design calculations." },
    { title: "Mechanical Mechanism Project", image: "assets/mechanism.png", text: "Add the final project name, objective, your design responsibility, and whether the mechanism was manufactured or tested. This card is intentionally editable and ready for your final project details." }
  ],
  skills: {
    "CAD & Simulation": ["SolidWorks", "ANSYS Fluent", "Creo", "SimScale", "AutoCAD", "Autodesk CFD", "FEA"],
    "Manufacturing": ["CNC machining", "Milling", "Drilling", "Turning", "Carbon-fiber fabrication", "Vacuum-bagging development", "3D printing", "Laser cutting", "Welding", "Soldering"],
    "Engineering": ["CFD methodology", "Verification & validation", "GD&T", "BOM preparation", "Mechanical integration", "Prototyping", "Testing & validation", "Tolerance & fit analysis", "Material selection", "Cost estimation"],
    "Programming & Electronics": ["Arduino", "C", "Sensor integration", "Low-voltage packaging"]
  }
};