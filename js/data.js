/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   DATA.JS â€” Photo metadata, captions, chapter mapping
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

window.STORY_DATA = {

  /* â”€â”€ CHAPTERS: 7 chapters Ã— 10 photos each â”€â”€â”€â”€â”€â”€â”€â”€â”€
     Photos photo01.jpg â€¦ photo70.jpg
     Chapter 1 â†’ indices 0â€“9   (photo01â€“photo10)
     Chapter 2 â†’ indices 10â€“19 (photo11â€“photo20)
     Chapter 3 â†’ indices 20â€“29 (photo21â€“photo30)
     Chapter 4 â†’ indices 30â€“39 (photo31â€“photo40)
     Chapter 5 â†’ indices 40â€“49 (photo41â€“photo50)
     Chapter 6 â†’ indices 50â€“59 (photo51â€“photo60)
     Chapter 7 â†’ indices 60â€“69 (photo61â€“photo70)
  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

  chapters: [
    {
      id: 1,
      title: 'The Beginning',
      photos: [
        { file: 'photo01.jpg', caption: 'August 23 â€” When it started' },
        { file: 'photo02.jpg', caption: 'Little by little...' },
        { file: 'photo03.jpg', caption: 'Conversations that changed everything' },
        { file: 'photo04.jpg', caption: 'Something was different' },
        { file: 'photo05.jpg', caption: 'September 7 â€” That feeling' },
        { file: 'photo06.jpg', caption: 'Kushi â€” Our first movie ðŸŽ¬' },
        { file: 'photo07.jpg', caption: 'Ukkadam Boating ðŸš¤' },
        { file: 'photo08.jpg', caption: 'College days ðŸŽ“' },
        { file: 'photo09.jpg', caption: 'Bike rides ðŸï¸' },
        { file: 'photo10.jpg', caption: 'Our random conversations ðŸ’¬' },
      ]
    },
    {
      id: 2,
      title: 'When We Started Becoming "Us"',
      photos: [
        { file: 'photo11.jpg', caption: 'The little moments âœ¨' },
        { file: 'photo12.jpg', caption: 'College â€” where it all began' },
        { file: 'photo13.jpg', caption: 'Our college days together' },
        { file: 'photo14.jpg', caption: 'His hometown, our memory' },
        { file: 'photo15.jpg', caption: 'Kushi â€” First movie together ðŸŽ¬' },
        { file: 'photo16.jpg', caption: 'Ukkadam Boating ðŸš¤' },
        { file: 'photo17.jpg', caption: 'Bike rides together ðŸï¸' },
        { file: 'photo18.jpg', caption: 'The road with you' },
        { file: 'photo19.jpg', caption: 'Us being us ðŸ˜Š' },
        { file: 'photo20.jpg', caption: 'Together â¤ï¸' },
      ]
    },
    {
      id: 3,
      title: 'College, Chaos & Crazy Us',
      photos: [
        { file: 'photo21.jpg', caption: 'College corridors' },
        { file: 'photo22.jpg', caption: 'Chaos and laughter' },
        { file: 'photo23.jpg', caption: 'Our crazy days' },
        { file: 'photo24.jpg', caption: 'Late night talks' },
        { file: 'photo25.jpg', caption: 'Class hours ðŸ˜„' },
        { file: 'photo26.jpg', caption: 'College fest vibes' },
        { file: 'photo27.jpg', caption: 'Random walks' },
        { file: 'photo28.jpg', caption: 'Our spot' },
        { file: 'photo29.jpg', caption: 'Canteen days â˜•' },
        { file: 'photo30.jpg', caption: 'The crazy us ðŸ’«' },
      ]
    },
    {
      id: 4,
      title: 'Places That Became Memories',
      photos: [
        { file: 'photo31.jpg', caption: 'Ukkadam â€” The lake âœ¨' },
        { file: 'photo32.jpg', caption: 'Boating together ðŸš¤' },
        { file: 'photo33.jpg', caption: 'Cinema hall memories ðŸŽ¬' },
        { file: 'photo34.jpg', caption: 'His native place' },
        { file: 'photo35.jpg', caption: 'Road trips ðŸï¸' },
        { file: 'photo36.jpg', caption: 'Places we explored' },
        { file: 'photo37.jpg', caption: 'Somewhere beautiful' },
        { file: 'photo38.jpg', caption: 'A new place, a new memory' },
        { file: 'photo39.jpg', caption: 'Every place with you â¤ï¸' },
        { file: 'photo40.jpg', caption: 'Our map of memories ðŸ—ºï¸' },
      ]
    },
    {
      id: 5,
      title: 'Our Random Little Moments',
      photos: [
        { file: 'photo41.jpg', caption: 'Just us, randomly' },
        { file: 'photo42.jpg', caption: 'The unexpected ones' },
        { file: 'photo43.jpg', caption: 'Unplanned moments âœ¨' },
        { file: 'photo44.jpg', caption: 'Random happiness' },
        { file: 'photo45.jpg', caption: 'Silly us ðŸ˜‚' },
        { file: 'photo46.jpg', caption: 'Those late evenings' },
        { file: 'photo47.jpg', caption: 'The quiet ones' },
        { file: 'photo48.jpg', caption: 'Just being together' },
        { file: 'photo49.jpg', caption: 'Random little things â¤ï¸' },
        { file: 'photo50.jpg', caption: 'Moments that matter' },
      ]
    },
    {
      id: 6,
      title: 'The Memories I Never Want to Forget',
      photos: [
        { file: 'photo51.jpg', caption: 'This one is special' },
        { file: 'photo52.jpg', caption: 'A memory I hold close' },
        { file: 'photo53.jpg', caption: 'This day â¤ï¸' },
        { file: 'photo54.jpg', caption: 'Never want to forget this' },
        { file: 'photo55.jpg', caption: 'Saved forever' },
        { file: 'photo56.jpg', caption: 'My favourite memory' },
        { file: 'photo57.jpg', caption: 'If I could go back...' },
        { file: 'photo58.jpg', caption: 'I would choose this moment again' },
        { file: 'photo59.jpg', caption: 'Unforgettable âœ¨' },
        { file: 'photo60.jpg', caption: 'Permanently in my heart â¤ï¸' },
      ]
    },
    {
      id: 7,
      title: 'Still My Favourite Person',
      photos: [
        { file: 'photo61.jpg', caption: 'Still you â¤ï¸' },
        { file: 'photo62.jpg', caption: '3 years later...' },
        { file: 'photo63.jpg', caption: 'Still my favourite' },
        { file: 'photo64.jpg', caption: 'And somehow, still here' },
        { file: 'photo65.jpg', caption: 'September 15, 2026 â¤ï¸' },
        { file: 'photo66.jpg', caption: '3 years of us' },
        { file: 'photo67.jpg', caption: 'Still choosing you' },
        { file: 'photo68.jpg', caption: 'My person â¤ï¸' },
        { file: 'photo69.jpg', caption: 'Still us âœ¨' },
        { file: 'photo70.jpg', caption: 'Forever my favourite ðŸ’•' },
      ]
    }
  ],

  /* â”€â”€ VIDEOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  videos: [
    { file: 'video01.mp4', thumb: 'thumb01.svg', caption: 'A moment I wish I could relive.' },
    { file: 'video02.mp4', thumb: 'thumb02.svg', caption: 'Just us being us.' },
    { file: 'video03.mp4', thumb: 'thumb03.svg', caption: 'One of my favourite memories.' },
    { file: 'video04.mp4', thumb: 'thumb04.svg', caption: 'A little piece of our story.' },
    { file: 'video05.mp4', thumb: 'thumb05.svg', caption: 'If I could go backâ€¦' },
    { file: 'video06.mp4', thumb: 'thumb06.svg', caption: 'I would choose this moment again.' },
  ],

  /* â”€â”€ TAMIL LETTER LINES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
  letterLines: [
    'à®‡à®¨à¯à®¤à®•à¯ à®•à®Ÿà®¿à®¤à®¤à¯à®¤à¯ˆ à®Žà®´à¯à®¤à¯à®±à®¤à¯à®•à¯à®•à¯ à®®à¯à®©à¯à®©à®¾à®Ÿà®¿,',
    'à®Žà®¤à¯à®¤à®©à¯ˆ à®¤à®Ÿà®µà¯ˆ à®Žà®©à¯à®©à¯ˆ à®¨à®¾à®©à¯‡ à®•à¯‡à®Ÿà¯à®Ÿà¯‡à®©à¯à®©à¯ à®¤à¯†à®°à®¿à®¯à¯à®®à®¾â€¦',
    '',
    '"à®¨à®¾à®©à¯ à®Žà®™à¯à®•à¯‡ à®¤à®ªà¯à®ªà¯à®šà¯à®šà¯†à®¯à¯à®¤à¯‡à®©à¯?"',
    '"à®Žà®©à¯à®©à®¾à®² à®‰à®©à¯à®©à¯ˆ à®Žà®µà¯à®µà®³à®µà¯ à®•à®¾à®¯à®ªà¯à®ªà®Ÿà¯à®¤à¯à®¤à®¿à®¯à®¿à®°à¯à®ªà¯à®ªà¯‡à®©à¯?"',
    '"à®Žà®²à¯à®²à®¾à®¤à¯à®¤à¯ˆà®¯à¯à®®à¯ à®µà¯‡à®± à®®à®¾à®¤à®¿à®°à®¿ à®šà¯†à®¯à¯à®¤à®¿à®°à¯à®•à¯à®•à®²à®¾à®®à¯‡â€¦"',
    '',
    'à®Žà®©à¯à®©à®¾à®² à®‰à®©à®•à¯à®•à¯ à®µà®²à®¿à®šà¯à®šà®¿à®°à¯à®¨à¯à®¤à®¾â€¦',
    'à®Žà®©à¯ à®µà®¾à®°à¯à®¤à¯à®¤à¯ˆà®•à®³à¯ à®‰à®©à¯à®©à¯ˆ à®•à®¾à®¯à®ªà¯à®ªà®Ÿà¯à®¤à¯à®¤à®¿à®¯à®¿à®°à¯à®¨à¯à®¤à®¾â€¦',
    'à®Žà®©à¯à®©à¯‹à®Ÿ à®•à¯‹à®ªà®®à¯, à®ªà®¿à®Ÿà®¿à®µà®¾à®¤à®®à¯, overthinking,',
    'à®Žà®©à¯à®©à¯‹à®Ÿ à®šà®¿à®² à®šà¯†à®¯à®²à¯à®•à®³à¯ à®‰à®©à¯à®©à¯ˆ à®¤à®³à¯à®³à®¿ à®µà¯ˆà®¤à¯à®¤à®¿à®°à¯à®¨à¯à®¤à®¾â€¦',
    '',
    'à®Žà®²à¯à®²à®¾à®¤à¯à®¤à¯à®•à¯à®•à¯à®®à¯ à®®à®©à®šà®¾à®° à®®à®©à¯à®©à®¿à®ªà¯à®ªà¯ à®•à¯‡à®Ÿà¯à®•à®¿à®±à¯‡à®©à¯. ðŸ¥º',
    '',
    'à®¨à®¾à®©à¯ à®Žà®ªà¯à®ªà¯‹à®¤à¯à®®à¯‡ à®šà®°à®¿à®¯à®¾à®©à®µà®³à®¾ à®‡à®°à¯à®¨à¯à®¤à®¤à®¿à®²à¯à®²à¯ˆ.',
    '',
    'à®šà®¿à®² à®¨à¯‡à®°à®®à¯ à®‰à®©à¯à®©à¯ˆ à®ªà¯à®°à®¿à®žà¯à®šà¯à®•à¯à®•à®¾à®® à®ªà¯‡à®šà®¿à®°à¯à®•à¯à®•à¯‡à®©à¯.',
    'à®šà®¿à®² à®¨à¯‡à®°à®®à¯ à®Žà®©à¯ à®ªà®¯à®¤à¯à®¤à¯ˆà®¯à¯à®®à¯ insecurity-à®¯à¯ˆà®¯à¯à®®à¯',
    'à®‰à®©à¯à®®à¯‡à®²à¯ à®•à¯‹à®ªà®®à®¾ à®•à®¾à®Ÿà¯à®Ÿà®¿à®°à¯à®•à¯à®•à¯‡à®©à¯.',
    '',
    'à®†à®©à®¾ à®’à®°à¯ à®µà®¿à®·à®¯à®®à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®ªà¯Šà®¯à¯ à®‡à®²à¯à®²â€¦',
    '',
    'à®¨à®¾à®©à¯ à®‰à®©à¯à®©à¯ˆ à®‰à®£à¯à®®à¯ˆà®¯à®¾ à®¨à¯‡à®šà®¿à®šà¯à®šà¯‡à®©à¯.',
    'à®‡à®ªà¯à®ªà®µà¯à®®à¯ à®¨à¯‡à®šà®¿à®•à¯à®•à®¿à®±à¯‡à®©à¯. â¤ï¸',
    '',
    'à®¨à®®à¯à®® à®µà®¾à®´à¯à®•à¯à®•à¯ˆà®¯à®¿à®² à®Žà®²à¯à®²à®¾ à®¨à®¾à®Ÿà¯à®•à®³à¯à®®à¯ perfect-à®† à®‡à®°à¯à®•à¯à®•à®².',
    '',
    'à®šà®£à¯à®Ÿà¯ˆà®•à®³à¯ à®‡à®°à¯à®¨à¯à®¤à®¤à¯â€¦',
    'à®•à®£à¯à®£à¯€à®°à¯ à®‡à®°à¯à®¨à¯à®¤à®¤à¯â€¦',
    'à®¤à®µà®±à®¾à®© à®ªà¯à®°à®¿à®¤à®²à¯à®•à®³à¯ à®‡à®°à¯à®¨à¯à®¤à®¤à¯â€¦',
    '',
    'à®†à®©à®¾ à®…à®¤à¯à®•à¯à®•à¯à®³à¯à®³à®¯à¯à®®à¯',
    'à®¨à®¾à®©à¯ à®®à®¿à®•à®µà¯à®®à¯ à®ªà¯Šà®•à¯à®•à®¿à®·à®®à®¾ à®¨à®¿à®©à¯ˆà®•à¯à®•à®¿à®± à®šà®¿à®² à®¨à®¿à®©à¯ˆà®µà¯à®•à®³à¯ à®‡à®°à¯à®•à¯à®•à®¿à®±à®¤à¯.',
    '',
    'à®¨à®®à¯à®® à®®à¯à®¤à®²à¯ à®ªà¯‡à®šà¯à®šà¯â€¦',
    'à®¨à®®à¯à®® à®•à®¾à®¤à®²à¯ à®†à®°à®®à¯à®ªà®¿à®šà¯à®š à®¨à®¾à®³à¯â€¦',
    'à®¨à®®à¯à®® à®®à¯à®¤à®²à¯ movieâ€¦',
    'à®¨à®®à¯à®® bike ridesâ€¦',
    'à®¨à®®à¯à®® random conversationsâ€¦',
    'à®¨à®®à¯à®® à®šà®¿à®©à¯à®© à®šà®¿à®©à¯à®© à®šà®¨à¯à®¤à¯‹à®·à®™à¯à®•à®³à¯â€¦',
    '',
    'à®…à®¨à¯à®¤ à®¨à®¿à®©à¯ˆà®µà¯à®•à®³à¯à®² à®Žà®²à¯à®²à®¾à®®à¯‡ à®¨à¯€ à®‡à®°à¯à®•à¯à®•.',
    'à®…à®¤à®©à®¾à®²à®¤à®¾à®©à¯ à®…à®µà¯ˆ à®Žà®©à®•à¯à®•à¯ à®‡à®µà¯à®µà®³à®µà¯ à®®à¯à®•à¯à®•à®¿à®¯à®®à¯.',
    '',
    'à®¨à®¾à®©à¯ à®‰à®©à¯à®©à®¿à®Ÿà®®à¯ perfect relationship à®•à¯‡à®Ÿà¯à®•à®²â€¦',
    '',
    'à®Žà®©à¯à®©à¯ˆ à®µà®¿à®Ÿà¯à®Ÿà¯ à®ªà¯‹à®•à®¾à®¤à¯‡à®©à¯à®©à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®•à¯‡à®Ÿà¯à®•à®¿à®±à¯‡à®©à¯.',
    '',
    'à®¨à®®à¯à®®à®¿à®Ÿà¯ˆà®¯à¯‡ à®¨à®Ÿà®¨à¯à®¤à®¤à¯ˆ à®Žà®²à¯à®²à®¾à®®à¯ à®®à®±à®¨à¯à®¤à¯à®Ÿà¯ à®Žà®©à¯à®±à¯ à®šà¯Šà®²à¯à®²à®².',
    'à®…à®¤à¯ˆ à®µà¯ˆà®¤à¯à®¤à¯ à®¨à®®à¯à®®à¯ˆ à®®à¯à®Ÿà®¿à®šà¯à®šà®¿à®Ÿà®¾à®¤à¯‡à®©à¯à®©à¯ à®¤à®¾à®©à¯ à®šà¯Šà®²à¯à®±à¯‡à®©à¯.',
    '',
    'à®Žà®©à¯à®©à¯‹à®Ÿ à®¤à®µà®±à¯à®•à®³à¯ˆ à®¨à®¾à®©à¯ à®ªà¯à®°à®¿à®žà¯à®šà¯à®•à¯à®•à®¿à®Ÿà¯à®Ÿà¯‡à®©à¯.',
    'à®Žà®©à¯à®© à®®à®¾à®±à¯à®±à®£à¯à®®à¯‹ à®…à®¤à¯ˆ à®®à®¾à®±à¯à®± à®®à¯à®¯à®±à¯à®šà®¿ à®šà¯†à®¯à¯à®±à¯‡à®©à¯.',
    '',
    'à®Žà®©à®•à¯à®•à¯ à®‰à®©à¯à®©à¯‹à®Ÿ à®µà®¾à®´à¯à®•à¯à®•à¯ˆà®¯à®¿à®²à¯',
    'à®’à®°à¯ à®‡à®Ÿà®®à¯ à®®à®Ÿà¯à®Ÿà¯à®®à¯ à®µà¯‡à®£à¯à®Ÿà¯à®®à¯â€¦',
    '',
    'à®‰à®©à¯à®©à¯‹à®Ÿ à®µà®¾à®´à¯à®•à¯à®•à¯ˆà®¯à®¿à®²à¯',
    '"à®’à®°à¯ à®•à®¾à®²à®¤à¯à®¤à®¿à®²à¯ à®‡à®°à¯à®¨à¯à®¤à®µà®³à¯" à®†à®• à®‡à®²à¯à®²â€¦',
    '"à®‡à®©à¯à®©à¯à®®à¯ à®‡à®°à¯à®•à¯à®•à®¿à®±à®µà®³à¯" à®†à®•. â¤ï¸',
    '',
    'à®•à®Ÿà®¨à¯à®¤à®¤à¯ˆ à®¤à®¿à®°à¯à®¤à¯à®¤ à®®à¯à®Ÿà®¿à®¯à®¾à®¤à¯.',
    'à®†à®©à®¾ à®µà®°à®ªà¯à®ªà¯‹à®•à®¿à®± à®¨à®¾à®Ÿà¯à®•à®³à¯ˆ',
    'à®¨à®®à¯à®®à®¾à®²à¯ à®…à®´à®•à®¾à®• à®Žà®´à¯à®¤ à®®à¯à®Ÿà®¿à®¯à¯à®®à¯.',
    '',
    'à®…à®¤à®©à®¾à®²â€¦',
    '',
    'à®Žà®©à¯à®©à®¾à®² à®‰à®©à®•à¯à®•à¯ à®µà®²à®¿à®šà¯à®š à®Žà®²à¯à®²à®¾à®¤à¯à®¤à¯à®•à¯à®•à¯à®®à¯',
    'à®®à®©à¯à®©à®¿à®šà¯à®šà®¿à®Ÿà¯. â¤ï¸',
    '',
    'à®¨à®®à¯à®® à®•à®¤à¯ˆ à®Žà®ªà¯à®ªà®Ÿà®¿à®¤à¯ à®¤à¯Šà®Ÿà®™à¯à®•à¯à®šà¯à®šà¯‹,',
    'à®…à®¤à¯‡ à®®à®¾à®¤à®¿à®°à®¿ à®Žà®²à¯à®²à®¾à®®à¯‡ à®®à¯€à®£à¯à®Ÿà¯à®®à¯ à®†à®°à®®à¯à®ªà®¿à®•à¯à®•à®£à¯à®®à¯à®©à¯ à®¨à®¾à®©à¯ à®•à¯‡à®Ÿà¯à®•à®².',
    '',
    'à®‡à®©à¯à®©à¯à®®à¯ à®…à®´à®•à®¾à®• à®†à®°à®®à¯à®ªà®¿à®•à¯à®•à®£à¯à®®à¯.',
    '',
    'à®Žà®¤à¯à®¤à®©à¯ˆ à®µà®°à¯à®Ÿà®™à¯à®•à®³à¯ à®•à®Ÿà®¨à¯à®¤à®¾à®²à¯à®®à¯,',
    'à®¨à®®à¯à®®à¯à®Ÿà¯ˆà®¯ à®‡à®¨à¯à®¤ chapter-à®',
    'à®Žà®©à¯ à®®à®©à®šà¯ à®Žà®ªà¯à®ªà¯‹à®¤à¯à®®à¯ special-à®† à®µà¯ˆà®¤à¯à®¤à®¿à®°à¯à®•à¯à®•à¯à®®à¯.',
    '',
    'Happy Love Anniversary, my love. â¤ï¸',
    '',
    'I\'m sorry.',
    'I miss you.',
    'I love you.',
    'And most importantlyâ€¦',
    '',
    'à®Žà®©à®•à¯à®•à¯ à®¨à¯€ à®µà¯‡à®£à¯à®Ÿà¯à®®à¯. â¤ï¸',
    '',
    'â€” à®Žà®ªà¯à®ªà¯‹à®¤à¯à®®à¯ à®‰à®©à¯à®©à¯ˆ à®¨à¯‡à®šà®¿à®•à¯à®•à¯à®®à¯ à®¨à®¾à®©à¯.',
  ],

  /* â”€â”€ MEMORY WALL PHOTOS (shown in final screen) â”€â”€â”€ */
  memoryWallIndices: [0, 5, 6, 7, 8, 9, 11, 14, 15, 16, 17, 19, 20, 25, 30, 40, 50, 60, 65, 69]
};


