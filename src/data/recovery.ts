import { RecoveryPhase } from '../types';

export const recoveryPhases: RecoveryPhase[] = [
  {
    phase: 1,
    name: 'Carga Isométrica',
    description: 'Foco em alívio da dor e restauração da ativação muscular.',
    frequency: '3x ao dia (a cada 6 horas)',
    exercises: [
      { exerciseId: 'spanish-squat', sets: 5, reps: '45s', notes: '70% da contração voluntária máxima' },
      { exerciseId: 'afundo-isometrico', sets: 5, reps: '45s', notes: '70% da contração voluntária máxima' }
    ]
  },
  {
    phase: 2,
    name: 'Carregamento Lento e Intenso',
    description: 'Aumento da rigidez do tendão e força muscular.',
    frequency: 'Dia sim, dia não',
    exercises: [
      { exerciseId: 'deep-squat', sets: 4, reps: '8', notes: '4s descida, 4s subida' },
      { exerciseId: 'reverse-step-up', sets: 4, reps: '8', notes: '4s descida, 4s subida' }
    ]
  },
  {
    phase: 3,
    name: 'Armazenamento de Energia',
    description: 'Treina o tendão para absorver forças rápidas.',
    frequency: '2-3x por semana',
    exercises: [
      { exerciseId: 'box-drops', sets: 4, reps: '8', notes: 'Aumentar altura progressivamente' }
    ]
  },
  {
    phase: 4,
    name: 'Armazenamento e Liberação',
    description: 'Retorno gradual aos saltos de alta intensidade.',
    frequency: '2x por semana',
    exercises: [
      { exerciseId: 'saltos-maximos', sets: 1, reps: '20 saltos totais', notes: 'Intensidade gradual' }
    ]
  }
];
