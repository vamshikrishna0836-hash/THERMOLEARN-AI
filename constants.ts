
import { Topic, UserStats, CaseStudy, FormulaCategory } from './types';

export const TOPICS: Topic[] = [
  // --- Module 1: Introduction & Basic Concepts ---
  {
    id: 'thermo-systems',
    title: 'Systems & Surroundings',
    category: 'Basic Concepts',
    description: 'Closed vs. Open systems, boundaries, and properties.',
    longDescription: 'A thermodynamic system is a quantity of matter or a region in space chosen for study. A closed system (Control Mass) allows energy transfer but not mass transfer. An open system (Control Volume) allows both energy and mass transfer across its boundary. Properties are macroscopic characteristics like P, V, T.'
  },
  {
    id: 'state-equilibrium',
    title: 'State & Equilibrium',
    category: 'Basic Concepts',
    description: 'The State Postulate and thermodynamic equilibrium.',
    longDescription: 'The state of a simple compressible system is completely specified by two independent, intensive properties (State Postulate). A system is in equilibrium when there are no unbalanced potentials (thermal, mechanical, phase, chemical) driving change.'
  },

  // --- Module 2: The Zeroth Law ---
  {
    id: 'zeroth-law',
    title: 'The Zeroth Law',
    category: 'The Zeroth Law',
    description: 'Thermal equilibrium and temperature scales.',
    longDescription: 'The Zeroth Law states that if two bodies are in thermal equilibrium with a third body, they are also in thermal equilibrium with each other. This serves as the basis for the validity of temperature measurement using thermometers.'
  },

  // --- Module 3: Pure Substances (The "Working Fluid") ---
  {
    id: 'phases-matter',
    title: 'Phase Change Processes',
    category: 'Pure Substances',
    description: 'Saturation, Quality, and T-v/P-v diagrams.',
    longDescription: 'Pure substances (like Water or Refrigerant) undergo phase changes at specific saturation pressures and temperatures. The "Quality" (x) defines the ratio of vapor mass to total mass in a saturated mixture.'
  },
  {
    id: 'ideal-gas',
    title: 'Ideal Gas Law',
    category: 'Pure Substances',
    description: 'Pv = RT and compressibility factor.',
    longDescription: 'At low pressures and high temperatures relative to the critical point, gases obey the Ideal Gas Law (Pv = RT). For real gases, we use the Compressibility Factor (Z) to account for deviations.'
  },

  // --- Module 4: The First Law (Conservation of Energy) ---
  {
    id: 'first-law-closed',
    title: 'First Law: Closed Systems',
    category: 'The First Law',
    description: 'Energy balance (Q - W = ΔU) for fixed mass.',
    longDescription: 'The First Law states that energy cannot be created or destroyed. For a closed system, the net energy transferred across the boundary by heat (Q) and work (W) equals the change in the system\'s internal energy (ΔU).'
  },
  {
    id: 'boundary-work',
    title: 'Moving Boundary Work',
    category: 'The First Law',
    description: 'Expansion and compression work (PdV).',
    longDescription: 'Boundary work is the work done by the expansion or compression of a gas in a piston-cylinder device. It is calculated as the area under the process curve on a P-v diagram: W_b = ∫ P dV.'
  },
  {
    id: 'first-law-open',
    title: 'First Law: Open Systems',
    category: 'The First Law',
    description: 'Steady Flow Energy Equation (SFEE).',
    longDescription: 'For control volumes (nozzles, turbines, pumps), mass flow carries energy (enthalpy). The conservation of energy principle accounts for Heat, Work, and Mass Energy: Q - W = Σm(h + v²/2 + gz)_out - Σm(h + v²/2 + gz)_in.'
  },

  // --- Module 5: The Second Law (Entropy) ---
  {
    id: 'second-law-intro',
    title: 'Heat Engines & Refrigerators',
    category: 'The Second Law',
    description: 'Kelvin-Planck and Clausius statements.',
    longDescription: 'The Second Law dictates the direction of processes. Kelvin-Planck: No heat engine can have 100% efficiency. Clausius: Heat does not spontaneously flow from cold to hot. It introduces the concept of quality of energy.'
  },
  {
    id: 'entropy-concept',
    title: 'Entropy & Disorder',
    category: 'The Second Law',
    description: 'The Increase of Entropy Principle.',
    longDescription: 'Entropy (S) is a measure of molecular disorder. For an isolated system, entropy always increases or remains constant (reversible process). It provides the "arrow of time" and quantifies irreversibilities.'
  },
  {
    id: 'carnot-cycle',
    title: 'The Carnot Cycle',
    category: 'The Second Law',
    description: 'The theoretical limit of efficiency.',
    longDescription: 'The Carnot cycle is a totally reversible cycle composed of two isothermal and two isentropic processes. It defines the maximum theoretical efficiency for any heat engine operating between two temperatures: η = 1 - TL/TH.'
  },

  // --- Module 6: Third Law & Exergy ---
  {
    id: 'third-law',
    title: 'The Third Law',
    category: 'Third Law & Exergy',
    description: 'Absolute zero and absolute entropy.',
    longDescription: 'The Third Law states that the entropy of a pure crystalline substance at absolute zero temperature (0 K) is zero. This provides a baseline for calculating absolute entropy values.'
  },
  {
    id: 'exergy-intro',
    title: 'Exergy (Availability)',
    category: 'Third Law & Exergy',
    description: 'Maximum useful work potential.',
    longDescription: 'Exergy is the useful work potential of a system at a given state in a specified environment (Dead State). Unlike energy, exergy is destroyed by irreversibilities (friction, mixing, unconstrained expansion).'
  },

  // --- Module 7: Cycles ---
  {
    id: 'gas-power-cycles',
    title: 'Gas Power Cycles',
    category: 'Thermodynamic Cycles',
    description: 'Otto, Diesel, and Brayton cycles.',
    longDescription: 'These cycles model internal combustion engines and gas turbines. They typically approximate the working fluid as air (Air-Standard Assumptions) to simplify analysis.'
  },
  {
    id: 'vapor-power-cycles',
    title: 'Vapor Power Cycles',
    category: 'Thermodynamic Cycles',
    description: 'Rankine cycle for steam power plants.',
    longDescription: 'The Rankine cycle is the ideal cycle for vapor power plants. It involves pumping a liquid, evaporating it in a boiler, expanding it in a turbine, and condensing it back to liquid.'
  }
];

export const INITIAL_STATS: UserStats = {
  progress: 8, 
  conceptsMastered: 1,
  totalConcepts: TOPICS.length,
  challengesWon: 0
};

export const CASE_STUDIES: CaseStudy[] = [
  // --- Rankine Variations ---
  {
    id: 'rankine',
    title: 'Ideal Rankine Cycle',
    description: 'The fundamental vapor power cycle used in steam power plants.',
    systemDiagram: 'rankine_svg',
    realLifeApplications: ['Nuclear Power', 'Coal Plants', 'Geothermal Plants'],
    processes: [
      { name: '1-2', description: 'Isentropic Compression (Pump)', thermoType: 's = constant' },
      { name: '2-3', description: 'Isobaric Heat Addition (Boiler)', thermoType: 'P = constant' },
      { name: '3-4', description: 'Isentropic Expansion (Turbine)', thermoType: 's = constant' },
      { name: '4-1', description: 'Isobaric Heat Rejection (Condenser)', thermoType: 'P = constant' }
    ],
    exampleCalculation: {
      title: 'Cycle Efficiency',
      givenValues: ['P_boiler = 3 MPa', 'T_inlet = 350°C', 'P_cond = 75 kPa'],
      steps: [
        { label: 'Step 1', formula: 'h3 (Superheated) @ 3MPa, 350C', result: '3116.1 kJ/kg' },
        { label: 'Step 2', formula: 's4 = s3 -> x4 -> h4', result: '2402.7 kJ/kg' },
        { label: 'Step 3', formula: 'w_net = (h3-h4) - w_pump', result: '710.4 kJ/kg' },
        { label: 'Step 4', formula: 'η = w_net / q_in', result: '26.0%' }
      ],
      finalResult: 'η = 26.0%'
    }
  },
  {
    id: 'reheat-rankine',
    title: 'Reheat Rankine Cycle',
    description: 'Increases efficiency and reduces moisture in the turbine by expanding in two stages with reheating in between.',
    systemDiagram: 'reheat_rankine_svg',
    realLifeApplications: ['Modern Thermal Power Plants', 'Supercritical Plants'],
    processes: [
      { name: '1-2', description: 'Pump Work', thermoType: 's = const' },
      { name: '2-3', description: 'Primary Boiler Heating', thermoType: 'P = const' },
      { name: '3-4', description: 'HP Turbine Expansion', thermoType: 's = const' },
      { name: '4-5', description: 'Reheating in Boiler', thermoType: 'P = const' },
      { name: '5-6', description: 'LP Turbine Expansion', thermoType: 's = const' }
    ],
    exampleCalculation: {
      title: 'Moisture Reduction',
      givenValues: ['P_high = 15 MPa', 'T_high = 600°C', 'P_reheat = 4 MPa'],
      steps: [
        { label: 'State 4', formula: 'Isentropic exp to 4 MPa', result: 'x4 ≈ 0.98' },
        { label: 'State 5', formula: 'Reheat to 600°C @ 4 MPa', result: 'h5 increased' },
        { label: 'Exit', formula: 'Quality at Condenser (x6)', result: '0.88 -> 0.96' }
      ],
      finalResult: 'x_exit = 0.96 (Drier)'
    }
  },
  {
    id: 'regenerative-rankine',
    title: 'Regenerative Rankine',
    description: 'Uses extracted steam to preheat feedwater, increasing average temperature of heat addition.',
    systemDiagram: 'regen_rankine_svg',
    realLifeApplications: ['High-Efficiency Power Stations'],
    processes: [
        { name: 'Bleed', description: 'Steam extraction from Turbine', thermoType: 'Fraction y' },
        { name: 'Mixing', description: 'Feedwater Heater (FWH)', thermoType: 'Adiabatic' }
    ],
    exampleCalculation: {
        title: 'Bleed Fraction (y)',
        givenValues: ['h_bleed = 2800', 'h_fwh_out = 600', 'h_cond_out = 200'],
        steps: [
            { label: 'Balance', formula: 'y*h_bleed + (1-y)*h_cond = h_fwh', result: 'Energy Balance' },
            { label: 'Solve y', formula: '(600 - 200) / (2800 - 200)', result: '0.153' }
        ],
        finalResult: 'y = 15.3%'
    }
  },

  // --- Gas Power Cycles ---
  {
    id: 'otto-cycle',
    title: 'Otto Cycle (Petrol)',
    description: 'Air-standard analysis of spark-ignition engines.',
    systemDiagram: 'otto_svg',
    realLifeApplications: ['Cars', 'Motorcycles'],
    processes: [
        { name: '1-2', description: 'Compression', thermoType: 'Adiabatic' },
        { name: '2-3', description: 'Combustion', thermoType: 'Isochoric' },
        { name: '3-4', description: 'Power Stroke', thermoType: 'Adiabatic' },
        { name: '4-1', description: 'Exhaust', thermoType: 'Isochoric' }
    ],
    exampleCalculation: {
        title: 'Thermal Efficiency',
        givenValues: ['r = 8', 'k = 1.4'],
        steps: [{ label: 'Formula', formula: '1 - 1/r^(k-1)', result: '1 - 0.435' }],
        finalResult: 'η = 56.5%'
    }
  },
  {
    id: 'diesel-cycle',
    title: 'Diesel Cycle',
    description: 'Ideal cycle for Compression-Ignition engines.',
    systemDiagram: 'diesel_svg',
    realLifeApplications: ['Trucks', 'Ships', 'Generators'],
    processes: [
        { name: '2-3', description: 'Fuel Injection', thermoType: 'Isobaric' },
        { name: '4-1', description: 'Exhaust', thermoType: 'Isochoric' }
    ],
    exampleCalculation: {
        title: 'Cutoff Efficiency',
        givenValues: ['r = 18', 'rc = 2', 'k = 1.4'],
        steps: [{ label: 'Complex', formula: 'Diesel Efficiency Eq', result: 'Calc...' }],
        finalResult: 'η = 63.2%'
    }
  },
  {
    id: 'brayton-cycle',
    title: 'Brayton Cycle',
    description: 'Ideal cycle for Gas Turbine engines.',
    systemDiagram: 'brayton_svg',
    realLifeApplications: ['Jet Engines', 'Gas Power Plants'],
    processes: [
        { name: 'Comp', description: 'Compressor', thermoType: 's = const' },
        { name: 'Turb', description: 'Turbine', thermoType: 's = const' }
    ],
    exampleCalculation: {
        title: 'Efficiency',
        givenValues: ['rp = 10', 'k = 1.4'],
        steps: [{ label: 'Formula', formula: '1 - 1/rp^((k-1)/k)', result: '1 - 0.52' }],
        finalResult: 'η = 48.2%'
    }
  },
  {
    id: 'combined-cycle',
    title: 'Combined Cycle (CCPP)',
    description: 'Merges a Gas Turbine (Brayton) topping cycle with a Steam Turbine (Rankine) bottoming cycle.',
    systemDiagram: 'combined_cycle_svg',
    realLifeApplications: ['Modern Base-Load Power Plants'],
    processes: [
        { name: 'Top', description: 'Gas Turbine produces Work', thermoType: 'Brayton' },
        { name: 'HRSG', description: 'Heat Recovery Steam Generator', thermoType: 'Heat Exchanger' },
        { name: 'Bottom', description: 'Steam Turbine produces Work', thermoType: 'Rankine' }
    ],
    exampleCalculation: {
        title: 'Plant Efficiency',
        givenValues: ['η_gas = 40%', 'η_steam = 30%', 'Recoverable Heat = 100%'],
        steps: [
            { label: 'Concept', formula: 'Total W / Heat In', result: 'Combined' },
            { label: 'Formula', formula: 'η_cc = η_g + (1-η_g)η_s', result: '0.4 + (0.6)(0.3)' }
        ],
        finalResult: 'η_cc = 58%'
    }
  },
  {
    id: 'stirling-cycle',
    title: 'Stirling Cycle',
    description: 'A closed-cycle regenerative heat engine with high theoretical efficiency.',
    systemDiagram: 'stirling_svg',
    realLifeApplications: ['Submarines (AIP)', 'Solar Dish Concentrators', 'Cryocoolers'],
    processes: [
        { name: '1-2', description: 'Isothermal Expansion', thermoType: 'Heat In' },
        { name: '2-3', description: 'Isochoric Cooling', thermoType: 'Regeneration' },
        { name: '3-4', description: 'Isothermal Compression', thermoType: 'Heat Out' },
        { name: '4-1', description: 'Isochoric Heating', thermoType: 'Regeneration' }
    ],
    exampleCalculation: {
        title: 'Regenerator Effectiveness',
        givenValues: ['Ideally ε = 100%', 'Actual ε = 90%'],
        steps: [
            { label: 'Impact', formula: 'Q_regen_loss needs extra Q_in', result: 'Lowers η' },
            { label: 'Result', formula: 'Efficiency drops below Carnot', result: 'Significant' }
        ],
        finalResult: 'η < η_carnot'
    }
  },

  // --- Refrigeration & Heat Pumps ---
  {
    id: 'refrigeration-cycle',
    title: 'Vapor-Compression Fridge',
    description: 'Standard refrigeration cycle moving heat from cold to hot.',
    systemDiagram: 'refrigeration_svg',
    realLifeApplications: ['Fridges', 'AC Units'],
    processes: [
        { name: 'Evap', description: 'Absorbs Heat (QL)', thermoType: 'P = const' },
        { name: 'Cond', description: 'Rejects Heat (QH)', thermoType: 'P = const' }
    ],
    exampleCalculation: {
        title: 'COP Cooling',
        givenValues: ['q_L = 150', 'w_in = 50'],
        steps: [{ label: 'Calc', formula: '150/50', result: '3' }],
        finalResult: 'COP = 3.0'
    }
  },
  {
    id: 'heat-pump',
    title: 'Heat Pump Cycle',
    description: 'Identical to refrigeration but the objective is heating the hot space (QH).',
    systemDiagram: 'heat_pump_svg',
    realLifeApplications: ['Residential Heating', 'EV Cabin Heating'],
    processes: [
        { name: 'Objective', description: 'Deliver QH to room', thermoType: 'Heating' },
        { name: 'Source', description: 'Extract QL from outside', thermoType: 'Cooling' }
    ],
    exampleCalculation: {
        title: 'COP Heating',
        givenValues: ['COP_Cooling = 3.0'],
        steps: [
            { label: 'Relation', formula: 'COP_HP = COP_R + 1', result: '3.0 + 1' },
            { label: 'Why?', formula: 'QH = QL + Win', result: 'Energy Conservation' }
        ],
        finalResult: 'COP_HP = 4.0'
    }
  },
  {
    id: 'cascade-refrigeration',
    title: 'Cascade Refrigeration',
    description: 'Two or more refrigeration cycles operating in series to achieve very low temperatures.',
    systemDiagram: 'cascade_svg',
    realLifeApplications: ['Industrial Freezing', 'Liquefaction of Gases', 'Medical Storage'],
    processes: [
        { name: 'Top Cycle', description: 'Cools the Bottom Cycle Condenser', thermoType: 'High T' },
        { name: 'Bottom Cycle', description: 'Cools the target space', thermoType: 'Low T' },
        { name: 'Heat Exchanger', description: 'Couples the two cycles', thermoType: 'Adiabatic' }
    ],
    exampleCalculation: {
        title: 'Work Input',
        givenValues: ['W_top = 5 kW', 'W_bot = 4 kW', 'Q_L = 18 kW'],
        steps: [
            { label: 'Total Work', formula: 'W_tot = W_top + W_bot', result: '9 kW' },
            { label: 'Overall COP', formula: 'Q_L / W_tot', result: '18 / 9' }
        ],
        finalResult: 'COP = 2.0'
    }
  },

  // --- Others ---
  {
    id: 'mixing-chamber',
    title: 'Mixing Chamber',
    description: 'Adiabatic mixing of two fluid streams.',
    systemDiagram: 'mixing_svg',
    realLifeApplications: ['Showers', 'Deaerators'],
    processes: [],
    exampleCalculation: {
        title: 'T_final',
        givenValues: ['m1, T1', 'm2, T2'],
        steps: [{ label: 'Energy Balance', formula: 'Enthalpy avg', result: 'T3' }],
        finalResult: 'T_out calculated'
    }
  },
  {
    id: 'carnot-cycle',
    title: 'Carnot Heat Engine',
    description: 'Theoretical maximum efficiency cycle.',
    systemDiagram: 'carnot_svg',
    realLifeApplications: ['Benchmark'],
    processes: [],
    exampleCalculation: {
        title: 'Max Efficiency',
        givenValues: ['TH', 'TL'],
        steps: [{ label: '1 - TL/TH', formula: 'Carnot', result: '%' }],
        finalResult: 'Max Possible'
    }
  }
];

export const MOCK_PV_DATA = [
  { v: 0.001, boundary_liq: 1, boundary_vap: null },
  { v: 0.00101, boundary_liq: 100, boundary_vap: null },
  { v: 0.00104, boundary_liq: 500, boundary_vap: null },
  { v: 0.00109, boundary_liq: 1500, boundary_vap: null },
  { v: 0.00117, boundary_liq: 4000, boundary_vap: null },
  { v: 0.00128, boundary_liq: 8000, boundary_vap: null },
  { v: 0.0014, boundary_liq: 12000, boundary_vap: null },
  { v: 0.002, boundary_liq: 18000, boundary_vap: null },
  { v: 0.003106, boundary_liq: 22064, boundary_vap: 22064 }, // Critical Point
  { v: 0.005, boundary_liq: null, boundary_vap: 19000 },
  { v: 0.01, boundary_liq: null, boundary_vap: 13000 },
  { v: 0.05, boundary_liq: null, boundary_vap: 4000 },
  { v: 0.1, boundary_liq: null, boundary_vap: 2000 },
  { v: 0.2, boundary_liq: null, boundary_vap: 900 },
  { v: 0.5, boundary_liq: null, boundary_vap: 350 },
  { v: 1.0, boundary_liq: null, boundary_vap: 180 },
  { v: 2.0, boundary_liq: null, boundary_vap: 90 },
  { v: 5.0, boundary_liq: null, boundary_vap: 35 },
  { v: 10.0, boundary_liq: null, boundary_vap: 15 },
];

export const MOCK_TS_DATA = [
  { s: 0.0, boundary_liq: 0, boundary_vap: null },
  { s: 0.5, boundary_liq: 20, boundary_vap: null },
  { s: 1.0, boundary_liq: 50, boundary_vap: null },
  { s: 1.5, boundary_liq: 80, boundary_vap: null },
  { s: 2.0, boundary_liq: 120, boundary_vap: null },
  { s: 2.5, boundary_liq: 160, boundary_vap: null },
  { s: 3.0, boundary_liq: 210, boundary_vap: null },
  { s: 3.5, boundary_liq: 260, boundary_vap: null },
  { s: 4.0, boundary_liq: 310, boundary_vap: null },
  { s: 4.43, boundary_liq: 374, boundary_vap: 374 },
  { s: 5.0, boundary_liq: null, boundary_vap: 340 },
  { s: 5.5, boundary_liq: null, boundary_vap: 290 },
  { s: 6.0, boundary_liq: null, boundary_vap: 240 },
  { s: 6.5, boundary_liq: null, boundary_vap: 180 },
  { s: 7.0, boundary_liq: null, boundary_vap: 130 },
  { s: 7.5, boundary_liq: null, boundary_vap: 90 },
  { s: 8.0, boundary_liq: null, boundary_vap: 60 },
  { s: 9.0, boundary_liq: null, boundary_vap: 20 },
];

export const MOCK_HS_DATA = [
  { s: 0.0, boundary_liq: 0, boundary_vap: null },
  { s: 1.0, boundary_liq: 450, boundary_vap: null },
  { s: 2.0, boundary_liq: 900, boundary_vap: null },
  { s: 3.0, boundary_liq: 1400, boundary_vap: null },
  { s: 3.5, boundary_liq: 1650, boundary_vap: null },
  { s: 4.0, boundary_liq: 1900, boundary_vap: null },
  { s: 4.4, boundary_liq: 2100, boundary_vap: 2100 },
  { s: 5.0, boundary_liq: null, boundary_vap: 2600 },
  { s: 5.5, boundary_liq: null, boundary_vap: 2700 },
  { s: 6.0, boundary_liq: null, boundary_vap: 2750 },
  { s: 7.0, boundary_liq: null, boundary_vap: 2780 },
  { s: 8.0, boundary_liq: null, boundary_vap: 2720 },
  { s: 9.0, boundary_liq: null, boundary_vap: 2650 },
];

export const FORMULAS: FormulaCategory[] = [
  {
    category: "Mass & Energy Analysis",
    formulas: [
      { 
          name: "Mass Flow Rate", 
          equation: "ṁ = ρAV = A / v", 
          description: "Rate of mass passing through a cross-section.",
          terms: [
              { symbol: "ṁ", definition: "Mass flow rate", unit: "kg/s" },
              { symbol: "ρ", definition: "Density", unit: "kg/m³" },
              { symbol: "A", definition: "Cross-sectional Area", unit: "m²" },
              { symbol: "V", definition: "Velocity", unit: "m/s" },
              { symbol: "v", definition: "Specific Volume", unit: "m³/kg" }
          ],
          application: "Sizing pipes, ducts, and nozzles." 
      },
      { 
          name: "Continuity Equation", 
          equation: "Σṁ_in = Σṁ_out", 
          description: "Conservation of mass for steady flow.",
          terms: [
              { symbol: "Σ", definition: "Summation of", unit: "-" },
              { symbol: "ṁ_in", definition: "Mass flow rate entering", unit: "kg/s" },
              { symbol: "ṁ_out", definition: "Mass flow rate leaving", unit: "kg/s" }
          ],
          application: "Analyzing mixing chambers and heat exchangers."
      },
      { 
          name: "Flow Work", 
          equation: "w_flow = Pv", 
          description: "Energy required to push fluid into/out of control volume.",
          terms: [
              { symbol: "w_flow", definition: "Specific flow work", unit: "kJ/kg" },
              { symbol: "P", definition: "Pressure", unit: "kPa" },
              { symbol: "v", definition: "Specific Volume", unit: "m³/kg" }
          ],
          application: "Enthalpy calculations (h = u + Pv)."
      },
      { 
          name: "SFEE (Steady Flow)", 
          equation: "q - w = Δh + Δke + Δpe", 
          description: "First Law for open systems.",
          terms: [
              { symbol: "q", definition: "Net heat transfer per unit mass", unit: "kJ/kg" },
              { symbol: "w", definition: "Net work per unit mass", unit: "kJ/kg" },
              { symbol: "Δh", definition: "Change in specific Enthalpy", unit: "kJ/kg" },
              { symbol: "Δke", definition: "Change in specific Kinetic Energy", unit: "kJ/kg" },
              { symbol: "Δpe", definition: "Change in specific Potential Energy", unit: "kJ/kg" }
          ],
          application: "Turbines, Compressors, Nozzles, Diffusers."
      }
    ]
  },
  {
    category: "Properties of Pure Substances",
    formulas: [
      { 
          name: "Ideal Gas Law", 
          equation: "Pv = RT", 
          description: "Equation of state for ideal gases.",
          terms: [
            { symbol: "P", definition: "Absolute Pressure", unit: "kPa" },
            { symbol: "v", definition: "Specific Volume", unit: "m³/kg" },
            { symbol: "R", definition: "Gas Constant", unit: "kJ/(kg·K)" },
            { symbol: "T", definition: "Absolute Temperature", unit: "K" }
          ],
          application: "Gas power cycles (Otto, Diesel, Brayton)."
      },
      { 
          name: "Quality (x)", 
          equation: "x = m_vapor / m_total", 
          description: "Mass fraction of vapor in a saturated mixture.",
          terms: [
            { symbol: "x", definition: "Quality", unit: "Dimensionless" },
            { symbol: "m_vapor", definition: "Mass of vapor", unit: "kg" },
            { symbol: "m_total", definition: "Total mass (vapor + liquid)", unit: "kg" }
          ],
          application: "Steam power plants (Rankine cycle)."
      },
      { 
          name: "Mixture Property", 
          equation: "y = y_f + x(y_g - y_f)", 
          description: "Calculate v, u, h, s for two-phase mixtures.",
          terms: [
            { symbol: "y", definition: "Average specific property (v, u, h, or s)", unit: "Varies" },
            { symbol: "y_f", definition: "Property of saturated liquid", unit: "Varies" },
            { symbol: "y_g", definition: "Property of saturated vapor", unit: "Varies" },
            { symbol: "x", definition: "Quality", unit: "Dimensionless" }
          ],
          application: "Determining state inside the vapor dome."
      },
      { 
          name: "Incompressible Substance", 
          equation: "Δh ≈ c_avg ΔT + v ΔP", 
          description: "Enthalpy change for solids and liquids.",
          terms: [
            { symbol: "Δh", definition: "Change in enthalpy", unit: "kJ/kg" },
            { symbol: "c_avg", definition: "Average specific heat", unit: "kJ/(kg·K)" },
            { symbol: "ΔT", definition: "Temperature change", unit: "K" },
            { symbol: "v", definition: "Specific Volume", unit: "m³/kg" },
            { symbol: "ΔP", definition: "Pressure change", unit: "kPa" }
          ],
          application: "Pump work calculation (w_pump = vΔP)."
      }
    ]
  },
  {
    category: "The First Law (Closed Systems)",
    formulas: [
      { 
          name: "Energy Balance", 
          equation: "Q - W = ΔU", 
          description: "Conservation of energy for fixed mass.",
          terms: [
            { symbol: "Q", definition: "Net heat transfer", unit: "kJ" },
            { symbol: "W", definition: "Net work done by system", unit: "kJ" },
            { symbol: "ΔU", definition: "Change in Internal Energy", unit: "kJ" }
          ],
          application: "Piston-cylinder devices, sealed tanks."
      },
      { 
          name: "Boundary Work", 
          equation: "W_b = ∫ P dV", 
          description: "Work done by expansion or compression.",
          terms: [
            { symbol: "W_b", definition: "Boundary Work", unit: "kJ" },
            { symbol: "P", definition: "Pressure", unit: "kPa" },
            { symbol: "dV", definition: "Differential change in Volume", unit: "m³" }
          ],
          application: "Calculating work output of IC engine pistons."
      },
      { 
          name: "Polytropic Work", 
          equation: "W = (P2V2 - P1V1) / (1-n)", 
          description: "Work for process PV^n = C (n ≠ 1).",
          terms: [
            { symbol: "P1, P2", definition: "Initial/Final Pressure", unit: "kPa" },
            { symbol: "V1, V2", definition: "Initial/Final Volume", unit: "m³" },
            { symbol: "n", definition: "Polytropic Index", unit: "Dimensionless" }
          ],
          application: "Real compression/expansion processes."
      },
      { 
          name: "Specific Heats Relation", 
          equation: "k = Cp / Cv", 
          description: "Specific heat ratio (Adiabatic Index).",
          terms: [
            { symbol: "k", definition: "Specific Heat Ratio", unit: "Dimensionless" },
            { symbol: "Cp", definition: "Specific heat at constant pressure", unit: "kJ/(kg·K)" },
            { symbol: "Cv", definition: "Specific heat at constant volume", unit: "kJ/(kg·K)" }
          ],
          application: "Isentropic relations for ideal gases."
      }
    ]
  },
  {
    category: "The Second Law & Entropy",
    formulas: [
      { 
          name: "Clausius Inequality", 
          equation: "∮ δQ/T ≤ 0", 
          description: "Criteria for reversibility.",
          terms: [
            { symbol: "δQ", definition: "Differential heat transfer", unit: "kJ" },
            { symbol: "T", definition: "Boundary Temperature", unit: "K" }
          ],
          application: "Determining if a cycle is possible or irreversible."
      },
      { 
          name: "Entropy Change (Ideal Gas)", 
          equation: "Δs = Cp ln(T2/T1) - R ln(P2/P1)", 
          description: "Entropy change calc using constant Cp.",
          terms: [
            { symbol: "Δs", definition: "Change in specific Entropy", unit: "kJ/(kg·K)" },
            { symbol: "Cp", definition: "Specific heat (const P)", unit: "kJ/(kg·K)" },
            { symbol: "T", definition: "Temperature", unit: "K" },
            { symbol: "P", definition: "Pressure", unit: "kPa" },
            { symbol: "R", definition: "Gas Constant", unit: "kJ/(kg·K)" }
          ],
          application: "Gas turbine and nozzle efficiency analysis."
      },
      { 
          name: "Isentropic Relations", 
          equation: "T2/T1 = (P2/P1)^((k-1)/k)", 
          description: "T-P relation for reversible adiabatic process.",
          terms: [
            { symbol: "T", definition: "Absolute Temperature", unit: "K" },
            { symbol: "P", definition: "Absolute Pressure", unit: "kPa" },
            { symbol: "k", definition: "Adiabatic Index", unit: "Dimensionless" }
          ],
          application: "Ideal compressor and turbine work."
      },
      { 
          name: "Tds Equations", 
          equation: "Tds = du + Pdv = dh - vdP", 
          description: "Fundamental property relations.",
          terms: [
            { symbol: "ds", definition: "Differential Entropy", unit: "kJ/(kg·K)" },
            { symbol: "du", definition: "Differential Internal Energy", unit: "kJ/kg" },
            { symbol: "dh", definition: "Differential Enthalpy", unit: "kJ/kg" },
            { symbol: "v", definition: "Specific Volume", unit: "m³/kg" },
            { symbol: "P", definition: "Pressure", unit: "kPa" }
          ],
          application: "Deriving property changes for any process."
      },
      { 
          name: "Isentropic Efficiency (Turbine)", 
          equation: "η_T = w_a / w_s = (h1-h2a)/(h1-h2s)", 
          description: "Actual vs Ideal work output.",
          terms: [
            { symbol: "η_T", definition: "Isentropic Efficiency", unit: "Dimensionless" },
            { symbol: "w_a", definition: "Actual work output", unit: "kJ/kg" },
            { symbol: "w_s", definition: "Isentropic (ideal) work output", unit: "kJ/kg" },
            { symbol: "h1", definition: "Inlet Enthalpy", unit: "kJ/kg" },
            { symbol: "h2a", definition: "Actual exit Enthalpy", unit: "kJ/kg" },
            { symbol: "h2s", definition: "Isentropic exit Enthalpy", unit: "kJ/kg" }
          ],
          application: "Real-world turbine performance evaluation."
      }
    ]
  },
  {
    category: "Power & Refrigeration Cycles",
    formulas: [
      { 
          name: "Thermal Efficiency", 
          equation: "η_th = W_net / Q_in = 1 - Q_out/Q_in", 
          description: "Performance measure for heat engines.",
          terms: [
            { symbol: "η_th", definition: "Thermal Efficiency", unit: "Dimensionless" },
            { symbol: "W_net", definition: "Net Work Output", unit: "kJ" },
            { symbol: "Q_in", definition: "Heat Input", unit: "kJ" },
            { symbol: "Q_out", definition: "Heat Rejected", unit: "kJ" }
          ],
          application: "Comparing power plant designs."
      },
      { 
          name: "Carnot Efficiency", 
          equation: "η_max = 1 - T_L / T_H", 
          description: "Maximum theoretical efficiency limit.",
          terms: [
            { symbol: "η_max", definition: "Carnot Efficiency", unit: "Dimensionless" },
            { symbol: "T_L", definition: "Sink Temperature", unit: "K" },
            { symbol: "T_H", definition: "Source Temperature", unit: "K" }
          ],
          application: "Benchmarking real engine performance."
      },
      { 
          name: "Otto Cycle Efficiency", 
          equation: "η_otto = 1 - 1 / r^(k-1)", 
          description: "Ideal efficiency for spark-ignition engines.",
          terms: [
            { symbol: "r", definition: "Compression Ratio (V_max/V_min)", unit: "Dimensionless" },
            { symbol: "k", definition: "Specific Heat Ratio", unit: "Dimensionless" }
          ],
          application: "Gasoline engine design."
      },
      { 
          name: "Diesel Cycle Efficiency", 
          equation: "η = 1 - (1/r^(k-1)) * [(rc^k - 1)/(k(rc-1))]", 
          description: "Ideal efficiency for compression-ignition engines.",
          terms: [
            { symbol: "r", definition: "Compression Ratio", unit: "Dimensionless" },
            { symbol: "rc", definition: "Cutoff Ratio (V3/V2)", unit: "Dimensionless" },
            { symbol: "k", definition: "Specific Heat Ratio", unit: "Dimensionless" }
          ],
          application: "Diesel engine analysis."
      },
      { 
          name: "COP (Refrigerator)", 
          equation: "COP_R = Q_L / W_in", 
          description: "Cooling effect per unit work input.",
          terms: [
            { symbol: "COP_R", definition: "Coefficient of Performance", unit: "Dimensionless" },
            { symbol: "Q_L", definition: "Heat removed from cold space", unit: "kJ" },
            { symbol: "W_in", definition: "Work input", unit: "kJ" }
          ],
          application: "Household fridge and AC selection."
      }
    ]
  },
  {
    category: "Exergy (Availability)",
    formulas: [
      {
          name: "Exergy (Closed System)",
          equation: "Φ = (u - u0) + P0(v - v0) - T0(s - s0)",
          description: "Useful work potential relative to dead state.",
          terms: [
            { symbol: "Φ", definition: "Specific Exergy", unit: "kJ/kg" },
            { symbol: "u, v, s", definition: "Properties at current state", unit: "Var" },
            { symbol: "u0, v0, s0", definition: "Properties at dead state", unit: "Var" },
            { symbol: "P0", definition: "Dead State Pressure", unit: "kPa" },
            { symbol: "T0", definition: "Dead State Temperature", unit: "K" }
          ],
          application: "Determining max possible work from a closed system."
      },
      {
          name: "Flow Exergy",
          equation: "ψ = (h - h0) - T0(s - s0) + V²/2 + gz",
          description: "Work potential of a flowing fluid.",
          terms: [
            { symbol: "ψ", definition: "Specific Flow Exergy", unit: "kJ/kg" },
            { symbol: "h", definition: "Enthalpy", unit: "kJ/kg" },
            { symbol: "V", definition: "Velocity", unit: "m/s" },
            { symbol: "z", definition: "Elevation", unit: "m" },
            { symbol: "g", definition: "Gravitational acceleration", unit: "m/s²" }
          ],
          application: "Second-law efficiency of turbines and heat exchangers."
      },
      {
          name: "Exergy Destruction",
          equation: "X_destroyed = T0 * S_gen",
          description: "Lost work due to irreversibilities.",
          terms: [
            { symbol: "X_destroyed", definition: "Exergy Destroyed", unit: "kJ" },
            { symbol: "T0", definition: "Dead State Temperature", unit: "K" },
            { symbol: "S_gen", definition: "Entropy Generated", unit: "kJ/K" }
          ],
          application: "Identifying inefficiencies in system components."
      }
    ]
  }
];
