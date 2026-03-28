import { Exercise, ExerciseType } from '../types';

export const exercises: Exercise[] = [
  {
    id: 'spanish-squat',
    name: 'Spanish Squat',
    type: ExerciseType.ISOMETRIC,
    description: 'Agachamento isométrico com faixa atrás dos joelhos.',
    videoUrl: 'https://www.youtube.com/embed/SpanishSquatPlaceholder',
    defaultRest: 60
  },
  {
    id: 'afundo-isometrico',
    name: 'Afundo Isométrico',
    type: ExerciseType.ISOMETRIC,
    description: 'Manter a posição de afundo estática.',
    defaultRest: 60
  },
  {
    id: 'reverse-step-up',
    name: 'Reverse Step Up',
    type: ExerciseType.STRENGTH,
    description: 'Subida reversa focando no controle excêntrico.',
    defaultRest: 90
  },
  {
    id: 'seated-jumps-1-leg',
    name: 'Seated Jumps to 1 Leg',
    type: ExerciseType.PLYOMETRIC,
    description: 'Salto sentado aterrissando em uma perna.',
    defaultRest: 120
  },
  {
    id: 'box-drops',
    name: 'Box Drops',
    type: ExerciseType.PLYOMETRIC,
    description: 'Cair da caixa e aterrissar com firmeza.',
    videoUrl: 'https://www.youtube.com/embed/BoxDropsPlaceholder',
    defaultRest: 120
  },
  {
    id: 'sl-lateral-hops',
    name: 'SL Lateral Hops',
    type: ExerciseType.PLYOMETRIC,
    description: 'Saltos laterais em uma perna só.',
    defaultRest: 90
  },
  {
    id: '2-3-agachamento',
    name: '2/3 Agachamento',
    type: ExerciseType.STRENGTH,
    description: 'Agachamento parcial (2/3 da amplitude).',
    videoUrl: 'https://www.youtube.com/embed/SquatPlaceholder',
    defaultRest: 180
  },
  {
    id: 'afundo-lateral',
    name: 'Afundo Lateral',
    type: ExerciseType.STRENGTH,
    description: 'Afundo para o lado.',
    defaultRest: 90
  },
  {
    id: 'panturrilha-smith',
    name: 'Panturrilha Smith',
    type: ExerciseType.STRENGTH,
    description: 'Elevação de panturrilha no Smith (lento).',
    defaultRest: 60
  },
  {
    id: 'high-low-pogos',
    name: 'High Low Pogos',
    type: ExerciseType.PLYOMETRIC,
    description: 'Saltos pogo alternando altura.',
    defaultRest: 90
  },
  {
    id: 'stiff',
    name: 'Stiff',
    type: ExerciseType.STRENGTH,
    description: 'Levantamento terra stiff.',
    defaultRest: 120
  },
  {
    id: 'afundo',
    name: 'Afundo',
    type: ExerciseType.STRENGTH,
    description: 'Afundo dinâmico.',
    defaultRest: 90
  },
  {
    id: 'cable-knee-drive',
    name: 'Cable Knee Drive',
    type: ExerciseType.STRENGTH,
    description: 'Tração de joelho no cabo.',
    defaultRest: 60
  },
  {
    id: 'seated-jumps',
    name: 'Seated Jumps',
    type: ExerciseType.PLYOMETRIC,
    description: 'Salto saindo da posição sentada.',
    defaultRest: 120
  },
  {
    id: 'deep-squat',
    name: 'Deep Squat',
    type: ExerciseType.STRENGTH,
    description: 'Agachamento profundo.',
    defaultRest: 240
  },
  {
    id: 'cadeira-flexora',
    name: 'Cadeira Flexora',
    type: ExerciseType.STRENGTH,
    description: 'Flexão de pernas na máquina.',
    defaultRest: 90
  },
  {
    id: 'dorsiflexao',
    name: 'Dorsiflexão',
    type: ExerciseType.STRENGTH,
    description: 'Fortalecimento do tibial anterior.',
    defaultRest: 60
  },
  {
    id: 'aquecimento',
    name: 'Aquecimento',
    type: ExerciseType.WARMUP,
    description: 'Preparação geral para o treino.',
    defaultRest: 0
  },
  {
    id: 'salto-contramovimento',
    name: 'Salto Contramovimento',
    type: ExerciseType.TECHNIQUE,
    description: 'Salto vertical com movimento de descida prévio.',
    defaultRest: 120
  },
  {
    id: 'saltos-2-passos',
    name: 'Saltos 2 Passos',
    type: ExerciseType.TECHNIQUE,
    description: 'Salto com aproximação de 2 passos.',
    defaultRest: 120
  },
  {
    id: 'saltos-maximos',
    name: 'Saltos Máximos',
    type: ExerciseType.TECHNIQUE,
    description: 'Saltos com esforço máximo.',
    defaultRest: 180
  },
  {
    id: 'saltos-1-pe-max',
    name: 'Saltos - 1 Pé Max',
    type: ExerciseType.TECHNIQUE,
    description: 'Saltos máximos com uma perna só.',
    defaultRest: 180
  },
  {
    id: 'sprints',
    name: 'Sprints',
    type: ExerciseType.SPRINT,
    description: 'Corridas de velocidade máxima.',
    defaultRest: 180
  },
  {
    id: 'bounds',
    name: 'Bounds',
    type: ExerciseType.PLYOMETRIC,
    description: 'Saltos horizontais alternados.',
    defaultRest: 120
  },
  {
    id: 'broad-jumps',
    name: 'Broad Jumps',
    type: ExerciseType.PLYOMETRIC,
    description: 'Salto em distância parado.',
    defaultRest: 120
  },
  {
    id: 'box-squat',
    name: 'Box Squat',
    type: ExerciseType.STRENGTH,
    description: 'Agachamento na caixa.',
    defaultRest: 180
  },
  {
    id: 'afundo-para-tras',
    name: 'Afundo para Trás',
    type: ExerciseType.STRENGTH,
    description: 'Afundo recuando a perna.',
    defaultRest: 90
  },
  {
    id: 'tuck-jumps',
    name: 'Tuck Jumps',
    type: ExerciseType.PLYOMETRIC,
    description: 'Salto agrupado (joelhos no peito).',
    defaultRest: 120
  },
  {
    id: '1-leg-step-down',
    name: '1 Leg Step Down',
    type: ExerciseType.STRENGTH,
    description: 'Descida controlada em uma perna.',
    defaultRest: 90
  },
  {
    id: 'sl-ham-curl',
    name: 'SL Ham Curl',
    type: ExerciseType.STRENGTH,
    description: 'Flexão de perna unilateral.',
    defaultRest: 90
  },
  {
    id: 'exce-ove-ham-curl',
    name: 'Exce. Ove. Ham Curl',
    type: ExerciseType.STRENGTH,
    description: 'Flexão de perna com foco excêntrico.',
    defaultRest: 120
  },
  {
    id: 'sl-bounds-cycle',
    name: 'SL Bounds Cycle',
    type: ExerciseType.PLYOMETRIC,
    description: 'Ciclo de saltos em uma perna.',
    defaultRest: 120
  },
  {
    id: 'kot-split-squat',
    name: 'KOT Split Squat',
    type: ExerciseType.STRENGTH,
    description: 'Knee Over Toes Split Squat.',
    defaultRest: 90
  },
  {
    id: 'hops-series',
    name: 'Hops Series',
    type: ExerciseType.PLYOMETRIC,
    description: 'Série de saltos variados.',
    defaultRest: 90
  },
  {
    id: 'sl-seated-jump',
    name: 'SL Seated Jump',
    type: ExerciseType.PLYOMETRIC,
    description: 'Salto em uma perna saindo da posição sentada.',
    defaultRest: 120
  },
  {
    id: 'pogos',
    name: 'Pogos',
    type: ExerciseType.PLYOMETRIC,
    description: 'Saltos rápidos focando na rigidez do tornozelo.',
    defaultRest: 60
  },
  {
    id: 'back-squat',
    name: 'Back Squat',
    type: ExerciseType.STRENGTH,
    description: 'Agachamento com barra nas costas.',
    defaultRest: 180
  },
  {
    id: 'depth-jump',
    name: 'Depth Jump',
    type: ExerciseType.PLYOMETRIC,
    description: 'Cair da caixa e saltar imediatamente para cima.',
    defaultRest: 180
  },
  {
    id: 'isometria-agachamento',
    name: 'Isometria Agachamento',
    type: ExerciseType.ISOMETRIC,
    description: 'Manter a posição de agachamento estática.',
    defaultRest: 60
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian Split Squat',
    type: ExerciseType.STRENGTH,
    description: 'Agachamento búlgaro (um pé elevado atrás).',
    defaultRest: 120
  },
  {
    id: 'trap-bar-deadlift',
    name: 'Trap Bar Deadlift',
    type: ExerciseType.STRENGTH,
    description: 'Levantamento terra com barra hexagonal.',
    defaultRest: 180
  },
  {
    id: 'hamstring-curl',
    name: 'Hamstring Curl',
    type: ExerciseType.STRENGTH,
    description: 'Flexão de pernas na máquina ou com caneleira.',
    defaultRest: 90
  },
  {
    id: 'pogo-jumps',
    name: 'Pogo Jumps',
    type: ExerciseType.PLYOMETRIC,
    description: 'Saltos rápidos focando na rigidez do tornozelo.',
    defaultRest: 60
  }
];
