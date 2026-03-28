export enum ExerciseType {
  STRENGTH = 'Strength',
  PLYOMETRIC = 'Plyometric',
  ISOMETRIC = 'Isometric',
  TECHNIQUE = 'Technique',
  WARMUP = 'Warmup',
  SPRINT = 'Sprint'
}

export interface Exercise {
  id: string;
  name: string;
  type: ExerciseType;
  description?: string;
  videoUrl?: string;
  defaultRest: number; // in seconds
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: string; // can be "5", "30s", "FALHA", "60, 70, 80%"
  loadPercentage?: number;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  week: number;
  day: number;
  exercises: WorkoutExercise[];
}

export interface RecoveryPhase {
  phase: number;
  name: string;
  description: string;
  exercises: WorkoutExercise[];
  frequency: string;
}

export interface UserProgress {
  currentWeek: number;
  currentDay: number;
  oneRM: { [exerciseId: string]: number };
  jumpHeight: { date: string; height: number }[];
  painLog: { date: string; level: number }[];
  completedWorkouts: string[];
}
