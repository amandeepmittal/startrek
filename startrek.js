/*
.dBBBBP dBBBBBBP dBBBBBb   dBBBBBb  dBBBBBBP dBBBBBb    dBBBP  dBP dBP
BP                    BB       dBP               dBP          d8P.dBP
`BBBBb   dBP      dBP BB   dBBBBK    dBP     dBBBBK   dBBP   dBBBBP
   dBP  dBP      dBP  BB  dBP  BB   dBP     dBP  BB  dBP    dBP BB
dBBBBP'  dBP      dBBBBBBB dBP  dB'  dBP     dBP  dB' dBBBBP dBP dBP
*/

var stQuotes = [
  'Change is the essential process of all existence.',
  'Logic is the beginning of all wisdom... not the end.',
  'Insufficient facts always invite danger.',
  'Without freedom of choice there is no creativity. The body dies.',
  'Things are only impossible until they\'re not.',
  'You can’t appreciate Shakespeare until you’ve read him in the original Klingon.',
  'Hang on tight and survive. Everybody does.',
  'You either believe in yourself or you don\'t.',
  'You know the greatest danger facing us is ourselves, an irrational fear of the unknown. But there\'s no such thing as the unknown — only things temporarily hidden, temporarily not understood.',
  'There are a million things in this universe you can have and there are a million things you can\'t have. It\'s no fun facing that, but that\'s the way things are.',
  'Most legends have their basis in fact.',
  'We\'re human beings with the blood of a million savage years on our hands! But we can stop it. We can admit that we\'re killers . . . but we\'re not going to kill today. That\'s all it takes! Knowing that we’re not going to kill — today!',
  'There\'s another way to survive — mutual trust and help.',
  'The prejudices people feel about each other disappear when they get to know each other.',
  'Sometimes a feeling is all we humans have to go on.',
  'Most people are afraid of being alone.',
  'If I can have honesty, it\'s easier to overlook mistakes.',
  'Love sometimes expresses itself in sacrifice.',
  'One can begin to reshape the landscape with a single flower.',
  'The needs of many outweigh the needs of the few, or the one.',
  'Insults are effective only where emotion is present.',
  'Live long, and prosper.',
  'Without followers, evil cannot spread.',
  'Each of us at some time in our life turns to someone, a father, a brother, a God and asks \"Why I am here? What was I meant to be?\"',
  'There is no reason that function should not be beautiful- in fact beauty usually makes it more effective.',
  'Creativity is necessary for the health of the body.',
  'I have been and always shall be your friend.',
  'In critical moments, men sometimes see exactly what they wish to see.',
  'When you eliminate the impossible, whatever remains, however improbable, must be the truth.',
  'Irritating? [smiling] Ah, yes. One of your Earth emotions.',
  'We have here an unusual opportunity to appraise the human mind, or to examine, in Earth terms, the roles of good and evil in a man-- his negative side, which you call hostility, lust, violence, and his positive side, which Earth people express as compassion, love, tenderness.',
  'Interesting. You Earth people glorify organized violence for forty centuries, but you imprison those who employ it privately.',
  'No. "Fascinating" is a word I use for the unexpected.',
  'Madness has no purpose. Or reason. But it may have a goal.',
  'Pain is a thing of the mind. The mind can be controlled.',
  'Logic is a little tweeting bird, chirping in a meadow. Logic is a wreath of pretty flowers which smell bad.',
  'You humans have that emotional need to express gratitude. \"You\'re welcome,\" I believe is the correct response.',
  'Physical reality is consistent with universal laws. Where the laws do not operate, there is no reality. All of this...is unreal.'
];

module.exports = function(){
  return stQuotes[Math.floor(Math.random() * stQuotes.length)];
}

module.exports.stQuotes = stQuotes;
