'use strict'
const uuid = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca591',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: 'AIR COMPRESSOR',
          description:
            'With industry-leading 2-stage performance, the durable DEWALT 20 gal. belt drive air compressor is the ideal choice for tackling a variety of tasks. This tool was built for routine professional use with 200 maximum psi, which provides 53% more air tool run time versus 20 gal. 155 psi compressors. At 78 dBA, you’ll be able to work in a quieter environment with its oil-lubricated twin cylinder pump and cast iron construction. Transport this compressor with ease using the 10 in. pneumatic wheels on jobsites inside your garage, or at the shop. The DEWALT 25 gal. 200 psi air compressor is perfect for light automotive tasks, medium-duty metal working, and agricultural equipment repairs.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_3.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DXCM201/DXCM201_F4.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca592',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f01',
          name: 'CARRY COMPRESSOR',
          description:
            '',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/D55151/D55151_F2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca593',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: 'SANDER',
          description:
            'The Pneumatic Palm Sander features 12000 RPMs for professional quality sanding. The touch control trigger allows the user to apply needed amount of power when prepping surfaces for paint jobs. The stick on pad provides convenience and saves times as it allows the user to quickly change pads',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70781L/DWMT70781L_1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca594',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356900',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f02',
          name: 'GRINDER',
          description:
            'The 1/4" Angle Die Grinder features a lightweight aluminum body with an ergonomically designed cushion grip for user comfort. It features a touch control trigger with a self-locking throttle to provide protection from accidental start ups.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWMT70782L/DWMT70782L_A2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca595',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: 'CUTTING WHEELS',
          description:
            'Built for long life, users can continuously expose sharp edges with these High-Performance Aluminum Cutting Wheels’ quick-fracturing grains. The wheels are optimized for cutting copper, tin, zinc, brass, aluminum, and other non-iron metals. Extend wheel life and routinely make clean cuts with a unique polymer blend that reduces frictional heat for minimized loading. Reduce wheel cracking and splitting with 2 built-in sheets of fiberglass for optimized strength.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW8062A/DW8062A_1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca596',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f03',
          name: 'DIAMOND BLADE',
          description:
            'Engineered to cut concrete, brick, and block with sintered diamond* segments, this high-performance blade is ideal for the toughest tasks. Its diamond construction lets you efficiently tackle work and increase productivity by quickly removing material as you cut. Get accurate cuts and minimal deflection with this blade’s premium-strength steel core.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_F1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DW47410/DW47410_F2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca597',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f04',
          name: 'LITHIUM ION BATTERY',
          description:
            'Get the highest capacity within the DEWALT® 20V MAX* XR® lineup with this DCB210 10.0Ah Lithium Ion Battery. This battery provides optimized runtime using state-of-the-art technology. Compatible with our new XR® Power Detect™ line of tools that adjust output based on power source, the battery delivers maximum performance to get the job done. Eliminate unplanned stops with an included LED Fuel Gauge charge indicator for added convenience.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_2.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB210/DCB210_3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca598',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356901',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f04',
          name: 'FAST CHARGER',
          description:
            'This charger is a four-port fast charger that charges 12V MAX*, 20V MAX*, and FLEXVOLT® 20V/60V MAX* batteries at the same time. This fast charger quickly charges a 4.0Ah 20V MAX* battery in 40 minutes, and a 6.0Ah 20V MAX* battery in 60 minutes. It is also designed to fit our Tool Connect™ Tag, and is ToughSystem™ compatible.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_A1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DCB104/DCB104_F1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca599',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f05',
          name: 'HAMMER',
          description:
            'This 4 lb. Fiberglass Blacksmith Hammer is built tough with a forged steel body, great for metalworking or shaping. The durable handle is created with lightweight fiberglass and has overstrike protection to reinforce where handles break most. It also has an over-mold textured grip to help improve comfort and control of the tool.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT56147/DWHT56147_2.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '109ffd20-3ea9-4c11-a87e-527fcf7ca600',
          categoryId: '2f2d4937-b5fe-4435-8d7d-97b5bf356902',
          sectionId: '035b7535-52a7-4699-a7cb-3c604c890f05',
          name: 'CLAW BAR',
          description:
            'The 12 in. precision claw bar is constructed with an i-beam design for durability. Use this pry bar to dig and remove embedded nails easily with the pointed beveled end. It also includes a nail digging feature for striking and creating access to recessed nails.',
          images:
            'https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_P1.jpg,https://www.dewalt.com/NA/product/images/3000x3000x96/DWHT55166/DWHT55166_A1.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {})
  },
}
