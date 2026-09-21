const microsoftDenise = { language: 'fr-FR', voice: 'fr-FR-DeniseNeural', provider: 'microsoft', fallbackAllowed: false };

export const audioManifest = {
  mer: { ...microsoftDenise, text: 'mer', role: 'matching-audio', path: 'audio/mer-denise.mp3' },
  vertu: { ...microsoftDenise, text: 'vertu', role: 'matching-audio', path: 'audio/vertu-denise.mp3' },
  parler: { ...microsoftDenise, text: 'parler', role: 'matching-audio', path: 'audio/parler-denise.mp3' },
  fer: { ...microsoftDenise, text: 'fer', role: 'word-reference', path: 'audio/fer-denise.mp3' },
  'fer-distractor': { ...microsoftDenise, text: 'fée', role: 'distractor-/fe/', path: 'audio/fer-distractor-fe-denise.mp3' },
  perdu: { ...microsoftDenise, text: 'perdu', role: 'word-reference', path: 'audio/perdu-denise.mp3' },
  'perdu-distractor': { ...microsoftDenise, text: 'pedu', role: 'distractor-/pedu/', path: 'audio/pedu-distractor-denise.mp3' },
  danser: { ...microsoftDenise, text: 'danser', role: 'word-reference', path: 'audio/danser-denise.mp3' },
  'danser-distractor': { ...microsoftDenise, text: 'dansère', role: 'distractor-/dɑ̃sɛr/', path: 'audio/danser-distractor-dansere-denise.mp3' },
  ver: { ...microsoftDenise, text: 'ver', role: 'speaking-reference', path: 'audio/ver-denise.mp3' },
  habiter: { ...microsoftDenise, text: 'habiter', role: 'speaking-reference', path: 'audio/habiter-denise.mp3' },
  merci: { ...microsoftDenise, text: 'merci', role: 'speaking-reference', path: 'audio/merci-denise.mp3' },
  'correct-speak': { text: 'correct', language: 'und', voice: 'UI', provider: 'local', fallbackAllowed: false, role: 'feedback', path: 'audio/correct-speak.mp3' },
};
