export const productCategories = [
  { name: "Sensors", slug: "sensors", available: true },
  { name: "Electrics", slug: "electrics", available: true },
  { name: "Ignition", slug: "ignition", available: true },
  { name: "Cooling", slug: "cooling", available: true },
  { name: "AC System", slug: "ac-system", available: true },
  { name: "Chassis", slug: "chassis", available: true },
  { name: "Exhaust", slug: "exhaust", available: true },
  { name: "Engine", slug: "engine", available: true },
  { name: "Brakes", slug: "brakes", available: true },
];
export const sensorCategory = {
  name: "Sensors",
  description: "The nervous system of modern vehicles. Our sensors feature gold-plated contacts and hermetic sealing to ensure precise signal accuracy (±1% tolerance) and long-term durability in extreme environments (-40°C to +125°C).",
  items: [
    { name: "ABS Sensor", image: "imgRectangle111.png", x: 0, y: 0, width: 200, corner: "tr" },
    { name: "Oxygen Sensor", image: "imgRectangle112.png", x: 232, y: 0, width: 200, corner: "br" },
    { name: "Mass Air Flow", image: "imgRectangle113.png", x: 464, y: 0, width: 300, corner: "tl" },
    { name: "Crankshaft Position Sensor", image: "imgRectangle119.png", x: 0, y: 225, width: 300, corner: "tr" },
    { name: "Camshaft Position Sensor", image: "imgRectangle117.png", x: 332, y: 225, width: 200, corner: "br" },
    { name: "Throttle Position Sensor", image: "imgRectangle118.png", x: 564, y: 225, width: 200, corner: "tl" },
    { name: "Manifold Absolute Pressure", image: "imgRectangle114.png", x: 0, y: 450, width: 200, corner: "tr" },
    { name: "Knock Sensor", image: "imgRectangle115.png", x: 232, y: 450, width: 200, corner: "br" },
    { name: "Tire Pressure Monitoring Sensor", image: "imgRectangle116.png", x: 464, y: 450, width: 300, corner: "tl" },
  ],
};

export const electricsCategory = {
  name: "Electrics",
  spriteImage: "electrics-products-v1.png",
  description: "Reliable electrical components keep every vehicle function powered, controlled, and connected. Our range is engineered for stable output, precise fitment, low electrical resistance, and dependable operation under heat, vibration, moisture, and demanding daily use.",
  items: [
    { name: "Alternator", sprite: [0,0], x: 0, y: 0, width: 200, corner: "tr" },
    { name: "Starter Motor", sprite: [1,0], x: 232, y: 0, width: 200, corner: "br" },
    { name: "Wiper Motor", sprite: [2,0], x: 464, y: 0, width: 300, corner: "tl" },
    { name: "Window Regulator Motor", sprite: [0,1], x: 0, y: 225, width: 300, corner: "tr" },
    { name: "Cooling Fan Assembly", sprite: [1,1], x: 332, y: 225, width: 200, corner: "br" },
    { name: "Ignition Switch", sprite: [2,1], x: 564, y: 225, width: 200, corner: "tl" },
    { name: "Horn", sprite: [0,2], x: 0, y: 450, width: 200, corner: "tr" },
    { name: "Door Lock Actuator", sprite: [1,2], x: 232, y: 450, width: 200, corner: "br" },
    { name: "Relay & Fuse Module", sprite: [2,2], x: 464, y: 450, width: 300, corner: "tl" },
  ],
};

export const ignitionCategory = {
  name: 'Ignition',
  description: 'Engineered ignition components deliver consistent spark energy, precise timing, and reliable cold starts. Designed for thermal stability and secure electrical connection, the range supports efficient combustion and dependable performance.',
  spriteImage: 'ignition' + "-products-v1.png",
  items: [
    { name: 'Ignition Coil', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Spark Plug', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Glow Plug', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Distributor Cap', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Ignition Control Module', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Ignition Cable Set', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Coil Pack', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'Ignition Relay', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Crank Trigger Wheel', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const coolingCategory = {
  name: 'Cooling',
  description: 'Efficient thermal management protects the engine under every operating condition. Our cooling components support stable temperatures, controlled coolant flow, corrosion resistance, and dependable sealing throughout the vehicle lifecycle.',
  spriteImage: 'cooling' + "-products-v1.png",
  items: [
    { name: 'Engine Radiator', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Electric Water Pump', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Mechanical Water Pump', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Thermostat Housing', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Coolant Expansion Tank', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Radiator Hose', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Radiator Fan Motor', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'Coolant Flange', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Oil Cooler', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const ac_systemCategory = {
  name: 'AC System',
  description: 'Precision climate components help maintain clean airflow and consistent cabin temperature. Each part is designed for efficient heat exchange, reliable refrigerant control, quiet operation, and accurate OE-style fitment.',
  spriteImage: 'ac-system' + "-products-v1.png",
  items: [
    { name: 'AC Compressor', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'AC Condenser', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'AC Evaporator', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Receiver Drier', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Expansion Valve', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Cabin Blower Motor', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Heater Core', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'AC Pressure Switch', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Compressor Clutch', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const chassisCategory = {
  name: 'Chassis',
  description: 'Chassis components translate steering input into stable, controlled movement. Our range focuses on accurate geometry, secure articulation, vibration isolation, and long service life across demanding road conditions.',
  spriteImage: 'chassis' + "-products-v1.png",
  items: [
    { name: 'Control Arm', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Ball Joint', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Tie Rod End', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Wheel Hub Bearing', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Stabilizer Link', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Engine Mount', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Suspension Bushing', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'CV Joint', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Subframe Mount', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const exhaustCategory = {
  name: 'Exhaust',
  description: 'Durable exhaust components manage gas flow, emissions, sound, and heat. Materials and joining surfaces are selected for corrosion resistance, reliable sealing, low back pressure, and consistent operation at high temperatures.',
  spriteImage: 'exhaust' + "-products-v1.png",
  items: [
    { name: 'Catalytic Converter', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Exhaust Manifold', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Muffler', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Diesel Particulate Filter', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'EGR Valve', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Exhaust Flex Pipe', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Exhaust Clamp', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'Resonator', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Exhaust Hanger', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const engineCategory = {
  name: 'Engine',
  description: 'Core engine components are built for precise movement, effective sealing, and controlled lubrication. Dimensional accuracy and material durability support efficient power delivery under repeated thermal and mechanical loads.',
  spriteImage: 'engine' + "-products-v1.png",
  items: [
    { name: 'Piston & Connecting Rod', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Timing Chain Kit', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Cylinder Head Gasket', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Oil Pump', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Rocker Arm', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Hydraulic Tappet', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Intake Manifold', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'Crankshaft Pulley', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'Valve Cover', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};

export const brakesCategory = {
  name: 'Brakes',
  description: 'Brake components are engineered for predictable response, stable friction, and reliable hydraulic pressure. The range supports confident stopping performance, low vibration, and durability in daily and demanding driving conditions.',
  spriteImage: 'brakes' + "-products-v1.png",
  items: [
    { name: 'Brake Disc Rotor', sprite: [0,0], x: 0, y: 0, width: 200, corner: 'tr' },
    { name: 'Brake Pad Set', sprite: [1,0], x: 232, y: 0, width: 200, corner: 'br' },
    { name: 'Brake Caliper', sprite: [2,0], x: 464, y: 0, width: 300, corner: 'tl' },
    { name: 'Brake Master Cylinder', sprite: [0,1], x: 0, y: 225, width: 300, corner: 'tr' },
    { name: 'Wheel Brake Cylinder', sprite: [1,1], x: 332, y: 225, width: 200, corner: 'br' },
    { name: 'Brake Hose', sprite: [2,1], x: 564, y: 225, width: 200, corner: 'tl' },
    { name: 'Parking Brake Cable', sprite: [0,2], x: 0, y: 450, width: 200, corner: 'tr' },
    { name: 'Brake Shoe Set', sprite: [1,2], x: 232, y: 450, width: 200, corner: 'br' },
    { name: 'ABS Tone Ring', sprite: [2,2], x: 464, y: 450, width: 300, corner: 'tl' }
  ],
};
