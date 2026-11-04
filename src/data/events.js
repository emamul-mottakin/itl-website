const gallery = (primary, photos) => [
  primary,
  ...photos.filter((photo) => photo !== primary),
]

const e = (title, date, summary, photos, details) => ({
  title,
  date,
  summary,
  details,
  photos,
})

const teamBuildingPhotos = ['c2459.png', '902ba.png', 'dd02a.png', '92e33.png', 'dc6bb.png', '36a4d.png']
const trainingPhotos = ['b2668.png', '84391.png', '93bab.png']
const feasiblePhotos = ['d2273.png', '139a7.png']
const corporatePhotos = ['19f78.png', '83d5f.png', 'a4d58.png']

export const eventCategories = [
  {
    name: 'Team building events',
    events: [
      e('Golden Tigers Outing Program', '27 August 2026', 'Golden Tigers’ outing promoted sustainability, teamwork, and fun.', gallery('c2459.png', teamBuildingPhotos)),
      e('Red Warriors Outing Program', '3 August 2026', 'INDESORE Trading Ltd. successfully held its fourth outing of the year, organized by the Red Warriors.', gallery('902ba.png', teamBuildingPhotos)),
      e('The Falcons Outing Program', '13 July 2026', 'On 25 June 2026, INDESORE Trading Ltd. held its third outing of the year', gallery('dd02a.png', teamBuildingPhotos)),
      e('The Wolves Outing Program', '18 May 2026', 'The May monthly outing, organized by the Wolves team under the Monochrome theme', gallery('92e33.png', teamBuildingPhotos)),
      e('Golden Tigers Outing Program', '13 April 2026', 'Film Industry & Red Carpet theme presented by The Golden Tigers.', gallery('dc6bb.png', teamBuildingPhotos)),
      e('A Memorable Outing', '16 March 2026', 'Indesore Trading Limited enjoyed a memorable team outing', gallery('36a4d.png', teamBuildingPhotos)),
    ],
  },
  {
    name: 'Awareness & training sessions',
    events: [
      e('AI Session Conducted By Raj Goodman', '19 May 2026', 'Raj Goodman’s AI session inspired leadership, innovation, and responsible AI adoption.', gallery('b2668.png', trainingPhotos)),
      e('AI Session Conducted By Raj Goodman', '19 May 2026', 'Raj Goodman’s AI session inspired leadership, innovation, and responsible AI adoption.', gallery('84391.png', trainingPhotos)),
      e('Safety First!', '1 August 2024', 'Our corporate office conducted a comprehensive fire drill training.', gallery('93bab.png', trainingPhotos)),
    ],
  },
  {
    name: 'Feasible events',
    events: [
      e('Bengali New Year', '23 April 2026', 'Indesore Family extends its warmest wishes for a prosperous Bengali New Year', gallery('d2273.png', feasiblePhotos)),
      e('Pre-Eid Mehndi Session', '3 April 2026', 'Indesore Trading Limited celebrated the spirit of Eid with its employees', gallery('139a7.png', feasiblePhotos)),
    ],
  },
  {
    name: 'Corporate events',
    events: [
      e('Annual Dinner, Auction, And Prize Ceremony 2026', '5 February 2026', 'A memorable corporate evening at Gulshan Club Limited. The night was filled with energy and celebration.', gallery('19f78.png', corporatePhotos)),
      e('Annual Auction, Dinner, And Prize Ceremony 2025', '3 March 2025', 'A wonderful event, filled with happiness and togetherness', gallery('83d5f.png', corporatePhotos)),
      e('Indesore Family Went For A Special VIP Screening', '28 November 2024', 'Our heartfelt thanks to our respected MD Sir for initiating the arrangement of an unforgettable evening filled with laughter, excitement.', gallery('a4d58.png', corporatePhotos)),
    ],
  },
]
