'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'assets',
      [
        {
          id: uuid.v4(),
          name: '20 GAL. 200 PSI OIL LUBED BELT DRIVE PORTABLE HORIZONTAL ELECTRIC AIR COMPRESSOR',
          description: 'With industry-leading 2-stage performance, the durable DEWALT 20 gal. belt drive air compressor is the ideal choice for tackling a variety of tasks. This tool was built for routine professional use with 200 maximum psi, which provides 53% more air tool run time versus 20 gal. 155 psi compressors. At 78 dBA, you’ll be able to work in a quieter environment with its oil-lubricated twin cylinder pump and cast iron construction. Transport this compressor with ease using the 10 in. pneumatic wheels on jobsites inside your garage, or at the shop. The DEWALT 25 gal. 200 psi air compressor is perfect for light automotive tasks, medium-duty metal working, and agricultural equipment repairs.',
          model: 'DXCM201',
          sn: '5345326-2343211',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_F2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_F6.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca591',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '25 GAL. 200 PSI OIL LUBED BELT DRIVE PORTABLE VERTICAL ELECTRIC AIR COMPRESSOR',
          description: 'With industry-leading 2-stage performance and a maximum of 200 PSI, the DEWALT® 25 gal. Oil Lubed Belt Drive Air Compressor is built to deliver. This tool is innovatively designed to provide 76% more air tool run time versus 30 gal. 155 PSI compressors and at 78 dBA, the oil-lubricated twin cylinder pump with cast iron construction creates an exceptionally quiet work environment. Transport this tool with ease around the jobsite or inside your garage with its 10 in. pneumatic wheels. The compressor is ideal for light automotive tasks, medium-duty metal working and agricultural equipment repairs.',
          model: 'DXCM251',
          sn: '5345326-2343212',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM251/DXCM251_10.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM251/DXCM251_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM251/DXCM251_3.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca591',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '1.1 HP CONTINUOUS 4 GALLON ELECTRIC HAND CARRY COMPRESSOR',
          description: '3.2 CFM delivered at 100 psi pump enables quick recovery, Oil lubricated pump improves durability, Cast iron cylinder enhances pump life, High-flow regulator for increased performance, 4 Gal. twin stack tank design proven acceptance in the market, Need help. CLICK HERE to view our Air Compressor Buying Guide',
          model: 'D55151',
          sn: '5345326-2343213',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_F2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca592',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '1.1 HP CONTINUOUS 4 GALLON ELECTRIC HAND CARRY COMPRESSOR',
          description: '3.2 CFM delivered at 100 psi pump enables quick recovery, Oil lubricated pump improves durability, Cast iron cylinder enhances pump life, High-flow regulator for increased performance, 4 Gal. twin stack tank design proven acceptance in the market, Need help. CLICK HERE to view our Air Compressor Buying Guide',
          model: 'D55153',
          sn: '5345326-2343214',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/D55153/D55153_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55153/D55153_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55153/D55153_F2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca592',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'PALM SANDER',
          description: 'The Pneumatic Palm Sander features 12000 RPMs for professional quality sanding. The touch control trigger allows the user to apply needed amount of power when prepping surfaces for paint jobs. The stick on pad provides convenience and saves times as it allows the user to quickly change pads',
          model: 'DWMT70781L',
          sn: '5345326-2343215',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70781L/DWMT70781L_1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca593',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'DUAL ACTION SANDER',
          description: 'The Dual Action Sander features and ergonomic rubber handle and cushion grip housing cover for user comfort. The keyless disk replacement allows the user to change pads quickly eliminating time wasted on the job',
          model: 'DWMT70780',
          sn: '5345326-2343216',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70780/DWMT70780_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70780/DWMT70780_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca593',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'ANGLE DIE GRINDER',
          description: 'The 1/4" Angle Die Grinder features a lightweight aluminum body with an ergonomically designed cushion grip for user comfort. It features a touch control trigger with a self-locking throttle to provide protection from accidental start ups.',
          model: 'DWMT70782L',
          sn: '5345326-2343217',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_A2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca594',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'STRAIGHT DIE GRINDER',
          description: 'The Pneumatic Straight Die Grinder features a self-locking touch control trigger and an ergonomically designed cushion body grip for comfort.',
          model: 'DWMT70783',
          sn: '5345326-2343218',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70783/DWMT70783_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70783/DWMT70783_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca594',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'HP ALUMINUM CUTTING WHEELS TYPE 1',
          description: 'Built for long life, users can continuously expose sharp edges with these High-Performance Aluminum Cutting Wheels’ quick-fracturing grains. The wheels are optimized for cutting copper, tin, zinc, brass, aluminum, and other non-iron metals. Extend wheel life and routinely make clean cuts with a unique polymer blend that reduces frictional heat for minimized loading. Reduce wheel cracking and splitting with 2 built-in sheets of fiberglass for optimized strength.',
          model: 'DWACWT534',
          sn: '5345326-2343219',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW8062A/DW8062A_1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca595',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'HIGH-PERFORMANCE CUTTING WHEELS',
          description: 'Replace wheels less often with Temper Point grains that are built tougher to maintain razor sharpness for up to 50% longer life*. Get a longer lasting cutting edge that resists wear-and-tear with enhanced adhesion between the coated grains and resin. Efficiently cut a wide range of metals including carbon steel, stainless, and nickel-based alloys with the wheels’ thin designs and high-grain concentration. These wheels are exceptionally durable and are built with 2 sheets of fiberglass for optimized strength to help to reduce breakage.',
          model: 'DWHPCW353',
          sn: '5345326-2343220',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW8062H/DW8062H_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW8062H/DW8062H_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW8062H/DW8062H_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca595',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'HP GENERAL PURPOSE SEGMENTED DIAMOND BLADE',
          description: 'Engineered to cut concrete, brick, and block with sintered diamond* segments, this high-performance blade is ideal for the toughest tasks. Its diamond construction lets you efficiently tackle work and increase productivity by quickly removing material as you cut. Get accurate cuts and minimal deflection with this blade’s premium-strength steel core.',
          model: 'DWHGPSDB23',
          sn: '5345326-2343229',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_F2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca596',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'XP ALL-PURPOSE SEGMENTED DIAMOND BLADES',
          description: 'Take on more masonry work with XP All-Purpose Segmented Diamond Blades that offer up to 3X longer life**. You’ll use fewer wheels over time with the blades’ diamond* segments which offer long-lasting performance. Seamlessly remove material with a segmented turbo design that delivers aggressive cutting action. Integrated vents keep the high-strength steel core cool while reducing bending and buckling.',
          model: 'DWXAPSDB24',
          sn: '5345326-2343230',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW4741T/DW4741T_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW4741T/DW4741T_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW4741T/DW4741T_F1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca596',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* XR® 10.0AH LITHIUM ION BATTERY',
          description: 'Get the highest capacity within the DEWALT® 20V MAX* XR® lineup with this DCB210 10.0Ah Lithium Ion Battery. This battery provides optimized runtime using state-of-the-art technology. Compatible with our new XR® Power Detect™ line of tools that adjust output based on power source, the battery delivers maximum performance to get the job done. Eliminate unplanned stops with an included LED Fuel Gauge charge indicator for added convenience.',
          model: 'DCB210',
          sn: '5345326-2343231',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_3.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca597',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* XR® 10.0AH LITHIUM ION BATTERY (2 PK)',
          description: 'Get the highest capacity within the DEWALT® 20V MAX* XR® lineup with this DCB210 10.0Ah Lithium Ion Battery 2-Pack. These batteries provide optimized runtime using state-of-the-art technology. Compatible with our new XR® Power Detect™ line of tools that adjust output based on power source, this battery delivers maximum performance to get the job done. Eliminate unplanned stops with an included LED Fuel Gauge charge indicator for added convenience.',
          model: 'DCB210-2',
          sn: '5345326-2343232',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210-2/DCB210-2_1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca597',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'MULTIPORT SIMULTANEOUS FAST CHARGER',
          description: 'This charger is a four-port fast charger that charges 12V MAX*, 20V MAX*, and FLEXVOLT® 20V/60V MAX* batteries at the same time. This fast charger quickly charges a 4.0Ah 20V MAX* battery in 40 minutes, and a 6.0Ah 20V MAX* battery in 60 minutes. It is also designed to fit our Tool Connect™ Tag, and is ToughSystem™ compatible.',
          model: 'DCB104',
          sn: '5345326-2343233',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_F1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca598',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '20V MAX* FAN COOLED FAST CHARGER',
          description: 'The DCB118 Fast Charger is a fan-cooled charger that is compatible with 20V MAX* batteries and FLEXVOLT® 20V/60V MAX* batteries. The charge rate is 8 amps for premium batteries and 4 amps for compact batteries.',
          model: 'DCB118',
          sn: '5345326-2343234',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB118/DCB118_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB118/DCB118_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB118/DCB118_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca598',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4 LB. FIBERGLASS BLACKSMITH HAMMER',
          description: 'This 4 lb. Fiberglass Blacksmith Hammer is built tough with a forged steel body, great for metalworking or shaping. The durable handle is created with lightweight fiberglass and has overstrike protection to reinforce where handles break most. It also has an over-mold textured grip to help improve comfort and control of the tool.',
          model: 'DWHT56147',
          sn: '5345326-2343235',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_2.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca599',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '4 LB. FIBERGLASS ENGINEERING HAMMER',
          description: 'This 4 lb. fiberglass drilling hammer has a concentrated strike face for superior impact. With its forged steel body, this sledge hammer is built tough and great for driving stakes, breaking concrete and demolition work. The durable handle is created with lightweight fiberglass and has overstrike protection to reinforce where handles break most. It also has an over-molded, textured grip to help improve comfort and control of the tool.',
          model: 'DWHT56148',
          sn: '5345326-2343236',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56148/DWHT56148_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56148/DWHT56148_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56148/DWHT56148_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca599',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '12 IN. PRECISION CLAW BAR',
          description: 'The 12 in. precision claw bar is constructed with an i-beam design for durability. Use this pry bar to dig and remove embedded nails easily with the pointed beveled end. It also includes a nail digging feature for striking and creating access to recessed nails.',
          model: 'DWHT55166',
          sn: '5345326-2343237',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca600',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: '9 IN. PRECISION CLAW BAR',
          description: 'The 9 in. precision claw bar is constructed with an i-beam design for durability. Use this pry bar to dig and remove embedded nails easily with the pointed beveled end. It also includes a nail digging feature for striking and creating access to recessed nails.',
          model: 'DWHT55164',
          sn: '5345326-2343238',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55164/DWHT55164_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55164/DWHT55164_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55164/DWHT55164_A1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca600',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'GRAVITY FEED SPRAY GUN HVLP',
          description: '',
          model: 'DWMT70777',
          sn: '5345326-2343239',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70777/DWMT70777_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70777/DWMT70777_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70777/DWMT70777_3.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca601',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid.v4(),
          name: 'SIPHON SPRAY GUN',
          description: '',
          model: 'DWMT70779',
          sn: '5345326-2343240',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70779/DWMT70779_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70779/DWMT70779_1.jpg',
          productId: '109ffd20-3ea9-4c11-a87e-527fcf7ca601',
          locationId: '1f5f556f-bf1d-492a-bc71-088ab8bae559',
          make: 'DEWALT',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('assets', null, {})
  },
}
