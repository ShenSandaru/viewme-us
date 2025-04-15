export interface Highlight {
  title: string;
  text: string;
}

export interface Destination {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  fullDescription: string;
  highlights: Highlight[];
}

export const destinations: Destination[] = [
  {
    id: 'galle',
    title: 'Galle',
    imageSrc: 'https://images.unsplash.com/flagged/photo-1567498975675-a3adf1574cb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdhbGxlfGVufDB8fDB8fHww',
    description: 'Explore the historic Galle Fort and its beautiful surroundings.',
    fullDescription: 'Explore the historic Galle Fort, a UNESCO World Heritage site, with its colonial architecture, vibrant streets, and stunning ocean views.',
    highlights: [
      { title: 'Historical Sites', text: 'Visit the Dutch Reformed Church, Maritime Museum, and ancient ramparts.' },
      { title: 'Local Culture', text: 'Experience the blend of Dutch-colonial and Sri Lankan architecture and culture.' },
      { title: 'Beaches', text: 'Enjoy the beautiful beaches of Unawatuna and Jungle Beach nearby.' }
    ]
  },
  {
    id: 'ella',
    title: 'Ella',
    imageSrc: 'https://images.unsplash.com/photo-1704797389166-c7dac99fc633?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the scenic beauty and hiking trails of Ella.',
    fullDescription: 'Experience the scenic beauty of Ella, nestled in the heart of Sri Lanka, renowned for its breathtaking landscapes and adventurous hiking trails.',
    highlights: [
      { title: 'Hiking Trails', text: 'Trek up Little Adam’s Peak and Nine Arch Bridge for stunning views.' },
      { title: 'Tea Plantations', text: 'Explore lush tea gardens and learn about tea production.' },
      { title: 'Local Cuisine', text: 'Savor traditional Sri Lankan dishes in cozy local cafes.' }
    ]
  },
  {
    id: 'kandy',
    title: 'Kandy',
    imageSrc: 'https://images.unsplash.com/photo-1562698013-ac13558052cd?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Visit the Temple of the Tooth and enjoy the cultural heritage of Kandy.',
    fullDescription: 'Visit the sacred Temple of the Tooth in Kandy, a center of Buddhist worship and a testament to Sri Lanka’s rich cultural heritage.',
    highlights: [
      { title: 'Temple of the Tooth', text: 'Witness the relic of the tooth of Buddha.' },
      { title: 'Royal Botanical Gardens', text: 'Stroll through the expansive gardens filled with diverse flora.' },
      { title: 'Cultural Shows', text: 'Enjoy traditional Kandyan dance performances and music.' }
    ]
  },
  {
    id: 'sigiriya',
    title: 'Sigiriya',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lnaXJpeWElMjByb2NrfGVufDB8fDB8fHww',
    description: 'Climb the ancient rock fortress of Sigiriya and enjoy panoramic views.',
    fullDescription: 'Climb the iconic Sigiriya Rock Fortress, marvel at its ancient frescoes, and soak in the panoramic views of the surrounding landscape.',
    highlights: [
      { title: 'Rock Fortress', text: 'Ascend the rock and explore the remnants of ancient civilization.' },
      { title: 'Frescoes', text: 'Admire the stunning frescoes depicting celestial maidens.' },
      { title: 'Gardens and Pools', text: 'Explore the landscaped gardens and tranquil pools.' }
    ]
  },
  {
    id: 'nuwara-eliya',
    title: 'Nuwara Eliya',
    imageSrc: 'https://media.istockphoto.com/id/1184101265/photo/horton-plains-national-park.jpg?s=612x612&w=0&k=20&c=SOoowFJK3CaMWIn3hen7ypyqRFQ8KoOcQ1HsbbeII7k=',
    description: 'Relax in the cool climate and lush tea plantations of Nuwara Eliya.',
    fullDescription: 'Experience the serene beauty of Nuwara Eliya, known for its cool climate, sprawling tea plantations, and picturesque landscapes.',
    highlights: [
      { title: 'Tea Plantations', text: 'Tour the verdant tea estates and learn about tea processing.' },
      { title: 'Horton Plains', text: 'Hike through Horton Plains National Park and visit Gregory Lake.' },
      { title: 'Botanical Gardens', text: 'Visit the Royal Botanical Gardens with a diverse collection of plants.' }
    ]
  },
  {
    id: 'yala',
    title: 'Yala',
    imageSrc: 'https://media.istockphoto.com/id/534789901/photo/elephant.jpg?s=612x612&w=0&k=20&c=RenAVA9qVsmH5gdHuvFi6qRUdkfJ_7g8f_ob8UCuNc0=',
    description: 'Discover the wildlife and natural beauty of Yala National Park.',
    fullDescription: 'Embark on a wildlife adventure in Yala National Park, home to a diverse range of animals including elephants, leopards, and exotic birds.',
    highlights: [
      { title: 'Safari Tours', text: 'Join guided safaris to spot leopards, elephants, and more.' },
      { title: 'Bird Watching', text: 'Observe a variety of bird species in their natural habitat.' },
      { title: 'Camping', text: 'Experience the wilderness by camping within the park.' }
    ]
  },
];