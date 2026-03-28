import { Workout } from '../types';

export const workouts: Workout[] = [
  // --- SEMANA 0 (ISOMÉTRICA) ---
  {
    id: 'w0-d1',
    name: 'Semana Isométrica - Dia 1',
    week: 0,
    day: 1,
    exercises: [
      { exerciseId: 'spanish-squat', sets: 3, reps: '30s' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: '30s', notes: 'Cada perna' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'seated-jumps-1-leg', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 2, reps: '4' }
    ]
  },
  {
    id: 'w0-d2',
    name: 'Semana Isométrica - Dia 2',
    week: 0,
    day: 2,
    exercises: [
      { exerciseId: 'spanish-squat', sets: 3, reps: '30s' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: '30s', notes: 'Cada perna' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'seated-jumps-1-leg', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 2, reps: '4' }
    ]
  },
  {
    id: 'w0-d3',
    name: 'Semana Isométrica - Dia 3',
    week: 0,
    day: 3,
    exercises: [
      { exerciseId: 'spanish-squat', sets: 3, reps: '30s' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: '30s', notes: 'Cada perna' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'seated-jumps-1-leg', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 2, reps: '4' }
    ]
  },
  {
    id: 'w0-d4',
    name: 'Semana Isométrica - Dia 4',
    week: 0,
    day: 4,
    exercises: [
      { exerciseId: 'spanish-squat', sets: 3, reps: '30s' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: '30s', notes: 'Cada perna' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'seated-jumps-1-leg', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 2, reps: '4' }
    ]
  },
  {
    id: 'w0-d5',
    name: 'Semana Isométrica - Dia 5',
    week: 0,
    day: 5,
    exercises: [
      { exerciseId: 'spanish-squat', sets: 3, reps: '30s' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: '30s', notes: 'Cada perna' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'seated-jumps-1-leg', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 2, reps: '4' }
    ]
  },

  // --- SEMANA 1 ---
  {
    id: 'w1-d1',
    name: 'Semana 1 - Dia 1',
    week: 1,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'sl-lateral-hops', sets: 2, reps: '20', notes: 'Cada perna' },
      { exerciseId: '2-3-agachamento', sets: 6, reps: '5', notes: '50% - 55% - 4x60%' },
      { exerciseId: 'afundo-lateral', sets: 2, reps: '6', notes: 'Cada perna - 10%' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w1-d2',
    name: 'Semana 1 - Dia 2',
    week: 1,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 6, reps: '20m' },
      { exerciseId: 'stiff', sets: 2, reps: '10', notes: '40%' },
      { exerciseId: 'afundo', sets: 2, reps: '6', notes: 'Cada perna - 20%' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '10', notes: 'Cada leve' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: 'FALHA', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w1-d3',
    name: 'Semana 1 - Dia 3',
    week: 1,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'seated-jumps', sets: 3, reps: '6' },
      { exerciseId: 'box-drops', sets: 1, reps: '10' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'cadeira-flexora', sets: 2, reps: '8', notes: 'Médio-Pesado' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' },
      { exerciseId: 'dorsiflexao', sets: 2, reps: '8', notes: 'Pesado' }
    ]
  },

  // --- SEMANA 2 ---
  {
    id: 'w2-d1',
    name: 'Semana 2 - Dia 1',
    week: 2,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'sl-lateral-hops', sets: 3, reps: '20', notes: 'Cada perna' },
      { exerciseId: '2-3-agachamento', sets: 8, reps: '5', notes: '50% - 60% - 65% - 5x70%' },
      { exerciseId: 'afundo-lateral', sets: 2, reps: '10', notes: 'Cada perna - 15%' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w2-d2',
    name: 'Semana 2 - Dia 2',
    week: 2,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'high-low-pogos', sets: 4, reps: '10', notes: '5 altos e 5 baixos' },
      { exerciseId: 'stiff', sets: 3, reps: '10', notes: '40% - 45% - 50%' },
      { exerciseId: 'afundo', sets: 3, reps: '10', notes: 'Cada perna - 20%' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '10', notes: 'Cada leve' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: 'FALHA', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w2-d3',
    name: 'Semana 2 - Dia 3',
    week: 2,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'seated-jumps', sets: 3, reps: '6' },
      { exerciseId: 'box-drops', sets: 1, reps: '10' },
      { exerciseId: 'deep-squat', sets: 4, reps: '5', notes: '50%' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'cadeira-flexora', sets: 2, reps: '8', notes: 'Pesado' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' },
      { exerciseId: 'dorsiflexao', sets: 2, reps: '8', notes: 'Pesado' }
    ]
  },

  // --- SEMANA 3 ---
  {
    id: 'w3-d1',
    name: 'Semana 3 - Dia 1',
    week: 3,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'sl-lateral-hops', sets: 3, reps: '20', notes: 'Cada perna' },
      { exerciseId: '2-3-agachamento', sets: 8, reps: '5', notes: '50% - 60% - 70% - 5x75%' },
      { exerciseId: 'afundo-lateral', sets: 2, reps: '10', notes: 'Cada perna - 20%' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w3-d2',
    name: 'Semana 3 - Dia 2',
    week: 3,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 8, reps: '2x20m, 6x30m' },
      { exerciseId: 'high-low-pogos', sets: 5, reps: '10', notes: '5 altos e 5 baixos' },
      { exerciseId: 'stiff', sets: 3, reps: '10', notes: '40% - 50% - 55%' },
      { exerciseId: 'afundo', sets: 3, reps: '10', notes: 'Cada perna - 25%' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '15', notes: 'Cada leve' },
      { exerciseId: 'afundo-isometrico', sets: 3, reps: 'FALHA', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w3-d3',
    name: 'Semana 3 - Dia 3',
    week: 3,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'seated-jumps', sets: 3, reps: '6' },
      { exerciseId: 'box-drops', sets: 1, reps: '10' },
      { exerciseId: '2-3-agachamento', sets: 4, reps: '5', notes: '60% - DESCE E SOBE RÁPIDO' },
      { exerciseId: 'reverse-step-up', sets: 3, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'cadeira-flexora', sets: 3, reps: '10', notes: 'Pesado' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' },
      { exerciseId: 'dorsiflexao', sets: 2, reps: '8', notes: 'Pesado' }
    ]
  },

  // --- SEMANA 4 ---
  {
    id: 'w4-d1',
    name: 'Semana 4 - Dia 1',
    week: 4,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'hops-series', sets: 1, reps: '1 série' },
      { exerciseId: 'deep-squat', sets: 5, reps: '5', notes: '50-60-70-80-82' },
      { exerciseId: 'reverse-step-up', sets: 3, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w4-d2',
    name: 'Semana 4 - Dia 2',
    week: 4,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 6, reps: '2x20, 2x30, 2x40m' },
      { exerciseId: 'pogo-jumps', sets: 2, reps: '10' },
      { exerciseId: 'stiff', sets: 3, reps: '8', notes: '50-55-60' },
      { exerciseId: '1-leg-step-down', sets: 2, reps: '8', notes: 'Cada perna' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '15', notes: 'Cada perna - MÉDIO' }
    ]
  },
  {
    id: 'w4-d3',
    name: 'Semana 4 - Dia 3',
    week: 4,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sl-seated-jump', sets: 3, reps: '3', notes: '3 aterrissagem em cada perna' },
      { exerciseId: 'bounds', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 1, reps: '10', notes: 'Aumentar a altura da queda' },
      { exerciseId: '2-3-agachamento', sets: 4, reps: '5', notes: '65% - DESCE E SOBE RÁPIDO' },
      { exerciseId: 'afundo-para-tras', sets: 2, reps: '10', notes: 'Cada perna - 20%' },
      { exerciseId: 'sl-ham-curl', sets: 3, reps: '8', notes: 'Cada perna - PESADO' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },

  // --- SEMANA 5 ---
  {
    id: 'w5-d1',
    name: 'Semana 5 - Dia 1',
    week: 5,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'hops-series', sets: 2, reps: '2 séries' },
      { exerciseId: 'deep-squat', sets: 6, reps: '3', notes: '50, 60, 70, 80, 87, 94%' },
      { exerciseId: 'reverse-step-up', sets: 3, reps: '10', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w5-d2',
    name: 'Semana 5 - Dia 2',
    week: 5,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 8, reps: '2x20, 2x30, 2x40, 2x60m' },
      { exerciseId: 'pogos', sets: 4, reps: '10' },
      { exerciseId: 'stiff', sets: 3, reps: '8', notes: '50-60-65' },
      { exerciseId: '1-leg-step-down', sets: 3, reps: '8', notes: 'Cada perna' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '15', notes: 'Cada perna - MÉDIO' }
    ]
  },
  {
    id: 'w5-d3',
    name: 'Semana 5 - Dia 3',
    week: 5,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'bounds', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'broad-jumps', sets: 6, reps: '3' },
      { exerciseId: 'box-drops', sets: 1, reps: '10' },
      { exerciseId: 'box-squat', sets: 4, reps: '5', notes: '60, 65, 70, 75%' },
      { exerciseId: 'afundo-para-tras', sets: 3, reps: '10', notes: '20, 25, 30%' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },

  // --- SEMANA 6 ---
  {
    id: 'w6-d1',
    name: 'Semana 6 - Dia 1',
    week: 6,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sl-seated-jump', sets: 3, reps: '3', notes: '3 aterrissagem em cada perna' },
      { exerciseId: 'bounds', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 1, reps: '10', notes: 'Aumentar a altura da queda' },
      { exerciseId: '2-3-agachamento', sets: 4, reps: '5', notes: '65% - DESCE E SOBE RÁPIDO' },
      { exerciseId: 'afundo-para-tras', sets: 2, reps: '10', notes: 'Cada perna - 20%' },
      { exerciseId: 'sl-ham-curl', sets: 3, reps: '8', notes: 'Cada perna - PESADO' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w6-d2',
    name: 'Semana 6 - Dia 2',
    week: 6,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 8, reps: '2x20, 2x30, 4x40' },
      { exerciseId: 'tuck-jumps', sets: 3, reps: '10' },
      { exerciseId: 'stiff', sets: 3, reps: '8', notes: '50-60-63' },
      { exerciseId: '1-leg-step-down', sets: 2, reps: '8', notes: 'Cada perna' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '15', notes: 'Cada perna - MÉDIO' }
    ]
  },
  {
    id: 'w6-d3',
    name: 'Semana 6 - Dia 3',
    week: 6,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sl-seated-jump', sets: 3, reps: '3', notes: '3 aterrissagem em cada perna' },
      { exerciseId: 'bounds', sets: 2, reps: '6', notes: 'Cada perna' },
      { exerciseId: 'box-drops', sets: 1, reps: '10', notes: 'Aumentar a altura da queda' },
      { exerciseId: 'deep-squat', sets: 5, reps: '5', notes: '50-60-70-80-82' },
      { exerciseId: 'afundo-para-tras', sets: 3, reps: '10', notes: 'Cada perna - 20-25-25' },
      { exerciseId: 'exce-ove-ham-curl', sets: 2, reps: '5', notes: 'Cada perna - alternado - PESADO' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },

  // --- SEMANA 7 ---
  {
    id: 'w7-d1',
    name: 'Semana 7 - Dia 1',
    week: 7,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'bounds', sets: 1, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'sl-bounds-cycle', sets: 3, reps: '5', notes: 'Cada perna' },
      { exerciseId: 'broad-jumps', sets: 8, reps: '2' },
      { exerciseId: 'deep-squat', sets: 5, reps: '3', notes: '50, 60, 65, 70, 75%' },
      { exerciseId: 'kot-split-squat', sets: 3, reps: '5', notes: 'Cada perna - 15' },
      { exerciseId: 'exce-ove-ham-curl', sets: 2, reps: '5', notes: 'Cada perna - alternado - PESADO' },
      { exerciseId: 'panturrilha-smith', sets: 2, reps: '5', notes: '90% - LENTO' }
    ]
  },
  {
    id: 'w7-d2',
    name: 'Semana 7 - Dia 2',
    week: 7,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 10, reps: '2x20, 2x30, 2x40, 2x60' },
      { exerciseId: 'tuck-jumps', sets: 4, reps: '10' },
      { exerciseId: 'stiff', sets: 4, reps: '6', notes: '50, 60, 65, 70%' },
      { exerciseId: '1-leg-step-down', sets: 3, reps: '8', notes: 'Cada perna' },
      { exerciseId: 'cable-knee-drive', sets: 2, reps: '15', notes: 'Cada perna - MÉDIO' }
    ]
  },
  {
    id: 'w7-d3',
    name: 'Semana 7 - Dia 3',
    week: 7,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: '2-3-agachamento', sets: 5, reps: '5', notes: '60, 70, 75, 80, 85%' },
      { exerciseId: 'reverse-step-up', sets: 3, reps: '10', notes: 'Cada perna' }
    ]
  },

  // --- SEMANA 8 ---
  {
    id: 'w8-d1',
    name: 'Semana 8 - Dia 1',
    week: 8,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'sprints', sets: 4, reps: '20m' }
    ]
  },
  {
    id: 'w8-d2',
    name: 'Semana 8 - Dia 2',
    week: 8,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'deep-squat', sets: 6, reps: '1', notes: '60, 70, 80, 90, 95%, MAX' },
      { exerciseId: 'stiff', sets: 2, reps: '6', notes: '40%' }
    ]
  },
  {
    id: 'w8-d3',
    name: 'Semana 8 - Dia 3 (Descanso)',
    week: 8,
    day: 3,
    exercises: []
  },

  // --- SEMANA 9 ---
  {
    id: 'w9-d1',
    name: 'Semana 9 - Dia 1',
    week: 9,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'deep-squat', sets: 6, reps: '4', notes: '50, 60, 70, 80, 85, máx' },
      { exerciseId: 'reverse-step-up', sets: 2, reps: '10', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w9-d2',
    name: 'Semana 9 - Dia 2',
    week: 9,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'sprints', sets: 8, reps: '2x20, 2x30, 2x40, 2x60' },
      { exerciseId: 'pogo-jumps', sets: 4, reps: '10' },
      { exerciseId: 'stiff', sets: 4, reps: '6', notes: '50, 60, 65, 70%' },
      { exerciseId: '1-leg-step-down', sets: 3, reps: '8', notes: 'Cada perna' }
    ]
  },
  {
    id: 'w9-d3',
    name: 'Semana 9 - Dia 3',
    week: 9,
    day: 3,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'bounds', sets: 1, reps: '10', notes: 'Cada perna' },
      { exerciseId: 'sl-bounds-cycle', sets: 3, reps: '5', notes: 'Cada perna' },
      { exerciseId: 'broad-jumps', sets: 5, reps: '3' },
      { exerciseId: 'box-squat', sets: 5, reps: '3', notes: '60, 65, 70, 75, 80%' },
      { exerciseId: 'kot-split-squat', sets: 4, reps: '5', notes: '15, 18, 20, 22%' },
      { exerciseId: 'hamstring-curl', sets: 2, reps: '10', notes: 'MÉDIO - SOBE E DESCE RÁPIDO' },
      { exerciseId: 'dorsiflexao', sets: 2, reps: '8', notes: 'Pesado' }
    ]
  },

  // --- SEMANA 10 ---
  {
    id: 'w10-d1',
    name: 'Semana 10 - Dia 1',
    week: 10,
    day: 1,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'sprints', sets: 4, reps: '20m' }
    ]
  },
  {
    id: 'w10-d2',
    name: 'Semana 10 - Dia 2',
    week: 10,
    day: 2,
    exercises: [
      { exerciseId: 'aquecimento', sets: 1, reps: '1' },
      { exerciseId: 'salto-contramovimento', sets: 1, reps: '5' },
      { exerciseId: 'saltos-2-passos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-maximos', sets: 1, reps: '5' },
      { exerciseId: 'saltos-1-pe-max', sets: 1, reps: '3' },
      { exerciseId: 'deep-squat', sets: 6, reps: '1', notes: '60, 70, 80, 90, 95%, MAX' }
    ]
  },
  {
    id: 'w10-d3',
    name: 'Semana 10 - Dia 3 (Descanso)',
    week: 10,
    day: 3,
    exercises: []
  }
];
