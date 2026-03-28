import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Activity, 
  BookOpen, 
  LineChart, 
  ChevronRight, 
  Timer, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  ChevronLeft,
  Info,
  Zap,
  TrendingUp,
  HeartPulse
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart as ReChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from './lib/utils';
import { exercises } from './data/exercises';
import { workouts } from './data/workouts';
import { recoveryPhases } from './data/recovery';
import { ExerciseType, Workout, UserProgress } from './types';

// --- Components ---

const Card = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={cn(
      "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 transition-all active:scale-95",
      onClick && "cursor-pointer hover:border-blue-500/50",
      className
    )}
  >
    {children}
  </div>
);

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  onClick,
  disabled
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
}) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
    outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800",
    ghost: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800",
    danger: "bg-red-600/20 text-red-500 border border-red-500/20 hover:bg-red-600/30"
  };

  return (
    <button 
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      className={cn(
        "px-4 py-2 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

const NavCard = ({ icon, title, subtitle, onClick }: { icon: React.ReactNode; title: string; subtitle: string; onClick: () => void }) => (
  <Card onClick={onClick} className="p-4 flex flex-col gap-3 hover:bg-zinc-900 transition-colors cursor-pointer group">
    <div className="p-2 bg-zinc-800 rounded-lg w-fit group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-white text-sm">{title}</h3>
      <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{subtitle}</p>
    </div>
  </Card>
);

// --- Screens ---

const HomeScreen = ({ onNavigate, onSelectWorkout, progress }: { onNavigate: (screen: string) => void; onSelectWorkout: (workout: Workout) => void; progress: UserProgress }) => {
  const nextWorkout = workouts.find(w => w.week === progress.currentWeek && w.day === progress.currentDay) || workouts[0];

  const getPhaseName = (week: number) => {
    if (week === 0) return "Preparação Isométrica";
    if (week <= 3) return "Fase 1: Adaptação";
    if (week <= 6) return "Fase 2: Força";
    if (week <= 9) return "Fase 3: Potência";
    return "Fase 4: Pico";
  };

  return (
    <div className="space-y-8 pb-24">
      <header className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-blue-500 font-bold text-xs uppercase tracking-widest">Bem-vindo, Atleta</p>
          <h1 className="text-4xl font-black text-white tracking-tight leading-none">Jump Master <span className="text-blue-500">Pro</span></h1>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2">
          <TrendingUp size={14} className="text-emerald-500" />
          <span className="text-xs font-bold text-white">Semana {progress.currentWeek}</span>
        </div>
      </header>

      <Card 
        onClick={() => onNavigate('workouts')}
        className="relative overflow-hidden border-none bg-gradient-to-br from-blue-600 to-blue-800 p-6 group cursor-pointer shadow-2xl shadow-blue-500/20"
      >
        <div className="relative z-10 space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-white/20 backdrop-blur-md text-[10px] font-black text-white px-2 py-0.5 rounded uppercase tracking-widest">
                {getPhaseName(nextWorkout.week)}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Próximo Treino</h3>
            <p className="text-blue-100 font-bold text-sm">{nextWorkout.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={(e) => { e.stopPropagation(); onSelectWorkout(nextWorkout); }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-black rounded-full px-6 py-2 h-auto text-xs uppercase tracking-widest shadow-lg"
            >
              Começar Agora
            </Button>
          </div>
        </div>
        <Dumbbell className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <NavCard 
          icon={<Zap className="text-yellow-400" />} 
          title="Treinos" 
          subtitle="10 Semanas" 
          onClick={() => onNavigate('workouts')} 
        />
        <NavCard 
          icon={<Activity className="text-emerald-400" />} 
          title="Recuperação" 
          subtitle="Saúde Tendão" 
          onClick={() => onNavigate('recovery')} 
        />
        <NavCard 
          icon={<BookOpen className="text-amber-400" />} 
          title="Técnica" 
          subtitle="Biblioteca" 
          onClick={() => onNavigate('technique')} 
        />
        <NavCard 
          icon={<LineChart className="text-purple-400" />} 
          title="Evolução" 
          subtitle="Progresso" 
          onClick={() => onNavigate('evolution')} 
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Dica do Dia</h3>
        <Card className="bg-zinc-900/50 border-zinc-800 p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <p className="text-sm text-zinc-300 leading-relaxed italic">
            "A rigidez do tornozelo é a chave para transferir a força do solo para o salto. Foque nos Pogos hoje!"
          </p>
        </Card>
      </div>
    </div>
  );
};

const ActiveWorkoutScreen = ({ onBack, workout, onFinish }: { onBack: () => void; workout: Workout; onFinish: () => void }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [user1RM, setUser1RM] = useState<number>(100);
  
  const currentWorkoutExercise = workout.exercises[currentExerciseIndex];
  const exercise = exercises.find(e => e.id === currentWorkoutExercise.exerciseId);

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startRest = () => {
    setTimeLeft(exercise?.defaultRest || 60);
    setIsActive(true);
  };

  const nextExercise = () => {
    if (currentExerciseIndex < workout.exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setIsActive(false);
      setTimeLeft(0);
    } else {
      onFinish();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onBack} className="p-2">
          <ChevronLeft size={24} />
        </Button>
        <h2 className="text-xl font-bold text-white">{workout.name}</h2>
      </div>

      <div className="relative aspect-video bg-zinc-800 rounded-2xl overflow-hidden flex items-center justify-center border border-zinc-700">
        {exercise?.videoUrl ? (
          <iframe 
            src={exercise.videoUrl} 
            className="w-full h-full border-0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <Play size={48} className="text-zinc-600" />
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
              <Info size={14} />
              Vídeo não disponível
            </div>
          </>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-white">{exercise?.name}</h3>
          <span className="text-zinc-500 text-sm">Exercício {currentExerciseIndex + 1} de {workout.exercises.length}</span>
        </div>
        <p className="text-zinc-400">{exercise?.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="text-center">
          <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Séries</p>
          <p className="text-3xl font-bold text-white">{currentWorkoutExercise.sets}</p>
        </Card>
        <Card className="text-center">
          <p className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Reps / Tempo</p>
          <p className="text-3xl font-bold text-white">{currentWorkoutExercise.reps}</p>
        </Card>
      </div>

      {currentWorkoutExercise.notes && (
        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-3 text-blue-400">
          <Info size={20} className="shrink-0" />
          <p className="text-sm">{currentWorkoutExercise.notes}</p>
        </div>
      )}

      <Card className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-bold text-zinc-500 uppercase">Calculadora de Carga</h4>
          <Dumbbell size={16} className="text-zinc-600" />
        </div>
        <div className="flex gap-3">
          <div className="flex-1 space-y-1">
            <label className="text-[10px] text-zinc-500 uppercase font-bold">Seu 1RM (kg)</label>
            <input 
              type="number" 
              value={user1RM}
              placeholder="Ex: 100"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                if (!isNaN(val)) {
                  setUser1RM(val);
                }
              }}
            />
          </div>
          <div className="flex-1 space-y-1">
            <label className="text-[10px] text-zinc-500 uppercase font-bold">Carga Alvo (kg)</label>
            <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-blue-500 font-bold">
              {/* Simple calculation logic for the UI */}
              {currentWorkoutExercise.notes?.includes('%') ? (
                (() => {
                  const match = currentWorkoutExercise.notes.match(/(\d+)%/);
                  const pct = match ? parseInt(match[1]) : 70;
                  return `${Math.round(user1RM * (pct / 100))} kg (${pct}%)`;
                })()
              ) : '---'}
            </div>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col items-center py-8 space-y-4">
        <div className="text-5xl font-mono font-bold text-white">
          {formatTime(timeLeft)}
        </div>
        <div className="flex gap-4">
          {!isActive && timeLeft === 0 ? (
            <Button onClick={startRest} className="flex items-center gap-2 px-8">
              <Timer size={20} /> Descanso
            </Button>
          ) : (
            <>
              <Button variant="secondary" onClick={() => setIsActive(!isActive)}>
                {isActive ? <Pause size={20} /> : <Play size={20} />}
              </Button>
              <Button variant="outline" onClick={() => { setTimeLeft(0); setIsActive(false); }}>
                <RotateCcw size={20} />
              </Button>
            </>
          )}
        </div>
      </Card>

      <div className="fixed bottom-6 left-6 right-6 flex gap-3">
        <Button 
          variant="secondary" 
          className="flex-1 py-4"
          onClick={() => setCurrentExerciseIndex(Math.max(0, currentExerciseIndex - 1))}
          disabled={currentExerciseIndex === 0}
        >
          Anterior
        </Button>
        <Button 
          className="flex-[2] py-4"
          onClick={nextExercise}
        >
          {currentExerciseIndex === workout.exercises.length - 1 ? 'Finalizar Treino' : 'Próximo Exercício'}
        </Button>
      </div>
    </div>
  );
};

const RecoveryScreen = ({ onBack }: { onBack: () => void }) => {
  const [painLevel, setPainLevel] = useState<number>(0);

  const getAlert = () => {
    if (painLevel >= 7) return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', message: 'PARE IMEDIATAMENTE. Risco alto de lesão. Siga a Fase 1 do protocolo.' };
    if (painLevel >= 4) return { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', message: 'CUIDADO. Reduza a carga e foque em isometrias. Siga a Fase 2.' };
    return { color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', message: 'TUDO OK. Continue com o treinamento planejado.' };
  };

  const recoveryAlert = getAlert();

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="p-2 aspect-square rounded-full">
          <ChevronLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-white">Saúde do Tendão</h2>
      </div>

      <Card className="space-y-6 p-6">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">Qual seu nível de dor hoje?</h3>
          <p className="text-zinc-500 text-xs">Escala de 0 a 10 (0 = sem dor, 10 = dor extrema)</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((level) => (
              <button
                key={level}
                onClick={() => setPainLevel(level)}
                className={cn(
                  "w-full aspect-square rounded-lg text-xs font-black transition-all",
                  painLevel === level 
                    ? "bg-blue-500 text-white scale-110 shadow-lg shadow-blue-500/20" 
                    : "bg-zinc-800 text-zinc-500 hover:bg-zinc-700"
                )}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className={`p-4 rounded-2xl border ${recoveryAlert.bg} ${recoveryAlert.border} ${recoveryAlert.color} text-sm font-bold text-center`}>
          {recoveryAlert.message}
        </div>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Protocolo de 4 Fases (THP)</h3>
        {recoveryPhases.map((phase) => (
          <Card key={phase.phase} className="space-y-2 p-5 bg-zinc-900/40 border-zinc-800/50">
            <div className="flex justify-between items-start">
              <h4 className="font-black text-white uppercase italic tracking-tighter text-lg">{phase.name}</h4>
              <span className="text-[10px] font-bold bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase tracking-widest">Fase {phase.phase}</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{phase.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const EvolutionScreen = ({ onBack }: { onBack: () => void }) => {
  const data = [
    { name: 'Sem 1', height: 60 },
    { name: 'Sem 2', height: 62 },
    { name: 'Sem 3', height: 61 },
    { name: 'Sem 4', height: 65 },
    { name: 'Sem 5', height: 68 },
    { name: 'Sem 6', height: 67 },
    { name: 'Sem 7', height: 72 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-4">
        <Button variant="outline" onClick={onBack} className="p-2 aspect-square rounded-full">
          <ChevronLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-white">Sua Evolução</h2>
      </div>

      <Card className="h-72 p-6 bg-zinc-900/40 border-zinc-800">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Altura do Salto (cm)</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <ReChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
              <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px', fontSize: '12px' }}
                itemStyle={{ color: '#3b82f6' }}
              />
              <Line type="monotone" dataKey="height" stroke="#3b82f6" strokeWidth={4} dot={{ fill: '#3b82f6', r: 4, strokeWidth: 2, stroke: '#18181b' }} activeDot={{ r: 6, strokeWidth: 0 }} />
            </ReChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="space-y-1 p-5 bg-zinc-900/40 border-zinc-800">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Recorde Atual</p>
          <p className="text-4xl font-black text-white italic tracking-tighter">72<span className="text-sm text-zinc-500 ml-1">cm</span></p>
          <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
            <TrendingUp size={10} /> +12cm total
          </p>
        </Card>
        <Card className="space-y-1 p-5 bg-zinc-900/40 border-zinc-800">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">1RM Agachamento</p>
          <p className="text-4xl font-black text-white italic tracking-tighter">140<span className="text-sm text-zinc-500 ml-1">kg</span></p>
          <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
            <TrendingUp size={10} /> +5kg este mês
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Histórico de Recordes</h3>
        <div className="space-y-2">
          {[
            { date: '25 Mar 2026', type: 'Salto 2 Pés', value: '72 cm' },
            { date: '18 Mar 2026', type: 'Salto 1 Pé', value: '65 cm' },
            { date: '10 Mar 2026', type: 'Deep Squat', value: '140 kg' },
          ].map((record, i) => (
            <Card key={i} className="flex justify-between items-center p-4 bg-zinc-900/20 border-zinc-800/50">
              <div>
                <p className="text-white font-bold text-sm">{record.type}</p>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{record.date}</p>
              </div>
              <div className="text-blue-500 font-black italic">{record.value}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechniqueScreen = ({ onBack }: { onBack: () => void }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const techniques = [
    {
      title: "Salto de 2 Pés (Penultimate Step)",
      description: "O passo penúltimo é o mais importante para converter velocidade em altura.",
      tips: [
        "Passo longo e rápido para baixar o centro de massa.",
        "O pé de bloqueio deve entrar em um ângulo de 45-90 graus.",
        "Balanço de braços explosivo de trás para cima."
      ],
      color: "text-blue-500",
      videoUrl: "https://www.youtube.com/embed/PenultimateStepPlaceholder"
    },
    {
      title: "Salto de 1 Pé (Speed Jump)",
      description: "Focado em atletas que saltam em velocidade, como no basquete ou salto em altura.",
      tips: [
        "Mantenha o tronco ereto, não incline para frente.",
        "A perna livre deve ser puxada agressivamente para cima (knee drive).",
        "Aceleração progressiva: comece lento e termine no máximo."
      ],
      color: "text-emerald-500",
      videoUrl: "https://www.youtube.com/embed/SpeedJumpPlaceholder"
    },
    {
      title: "Aterrissagem Segura",
      description: "Essencial para prevenir lesões nos joelhos e tornozelos.",
      tips: [
        "Aterrisse com a ponta dos pés e role para o calcanhar.",
        "Dobre os joelhos para absorver o impacto.",
        "Mantenha os joelhos alinhados com os pés, evite o valgo (joelhos para dentro)."
      ],
      color: "text-amber-500",
      videoUrl: "https://www.youtube.com/embed/LandingPlaceholder"
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-4 sticky top-0 bg-black/80 backdrop-blur-md py-4 z-10 -mx-6 px-6">
        <Button variant="outline" onClick={onBack} className="p-2 aspect-square rounded-full">
          <ChevronLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-white">Biblioteca Técnica</h2>
      </div>

      <div className="space-y-6">
        {techniques.map((tech, i) => (
          <Card key={i} className="space-y-4 overflow-hidden relative">
            <div className={cn("absolute top-0 left-0 w-1 h-full", tech.color.replace('text', 'bg'))}></div>
            <div className="aspect-video bg-zinc-800 rounded-xl flex items-center justify-center group cursor-pointer overflow-hidden relative">
              {activeVideo === tech.videoUrl ? (
                <iframe 
                  src={tech.videoUrl} 
                  className="w-full h-full border-0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center" onClick={() => setActiveVideo(tech.videoUrl)}>
                  <Play size={48} className="text-zinc-700 group-hover:scale-125 group-hover:text-blue-500 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">Assistir Tutorial</p>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <h3 className={cn("font-black uppercase tracking-tight text-lg", tech.color)}>{tech.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{tech.description}</p>
            </div>
            <ul className="space-y-3 pt-2">
              {tech.tips.map((tip, j) => (
                <li key={j} className="text-xs text-zinc-300 flex gap-3 items-start">
                  <div className={cn("mt-1 shrink-0 w-1.5 h-1.5 rounded-full", tech.color.replace('text', 'bg'))}></div>
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

const WorkoutListScreen = ({ onBack, onSelectWorkout }: { onBack: () => void; onSelectWorkout: (workout: Workout) => void }) => {
  const weeks = Array.from(new Set(workouts.map(w => w.week))).sort((a, b) => a - b);

  const getPhaseName = (week: number) => {
    if (week === 0) return "Preparação Isométrica";
    if (week <= 3) return "Fase 1: Adaptação Anatômica";
    if (week <= 6) return "Fase 2: Força Máxima";
    if (week <= 9) return "Fase 3: Conversão em Potência";
    return "Fase 4: Pico e Polimento";
  };

  const phases = Array.from(new Set(weeks.map(w => getPhaseName(w))));

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center gap-4 sticky top-0 bg-black/80 backdrop-blur-md py-4 z-10 -mx-6 px-6">
        <Button variant="outline" onClick={onBack} className="p-2 aspect-square rounded-full">
          <ChevronLeft size={20} />
        </Button>
        <h2 className="text-xl font-bold text-white">Programa Jump Master</h2>
      </div>

      <div className="space-y-10">
        {phases.map((phase) => (
          <div key={phase} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-zinc-800"></div>
              <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] whitespace-nowrap">{phase}</h3>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>

            <div className="space-y-8">
              {weeks.filter(w => getPhaseName(w) === phase).map((week) => (
                <div key={week} className="space-y-3">
                  <div className="flex items-end justify-between px-1">
                    <h4 className="text-sm font-bold text-white">Semana {week === 0 ? "Isométrica" : week}</h4>
                    <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
                      {workouts.filter(w => w.week === week).length} Treinos
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {workouts.filter(w => w.week === week).sort((a, b) => a.day - b.day).map((workout) => (
                      <Card 
                        key={workout.id} 
                        onClick={() => onSelectWorkout(workout)} 
                        className={cn(
                          "flex items-center justify-between py-4 px-5 transition-all active:scale-[0.98]",
                          workout.exercises.length === 0 
                            ? "bg-zinc-900/20 border-zinc-900 opacity-60" 
                            : "bg-zinc-900/40 border-zinc-800/50 hover:bg-zinc-900 hover:border-blue-500/30"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shadow-inner",
                            workout.exercises.length === 0 
                              ? "bg-zinc-800 text-zinc-600" 
                              : "bg-blue-500/10 text-blue-500"
                          )}>
                            D{workout.day}
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm">
                              {workout.exercises.length === 0 ? "Descanso Ativo" : `Treino ${workout.day}`}
                            </h5>
                            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mt-0.5">
                              {workout.exercises.length === 0 ? "Recuperação" : `${workout.exercises.length} Exercícios`}
                            </p>
                          </div>
                        </div>
                        {workout.exercises.length > 0 && <ChevronRight size={16} className="text-zinc-700" />}
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('jump_master_progress');
    return saved ? JSON.parse(saved) : {
      currentWeek: 0,
      currentDay: 1,
      completedWorkouts: [],
      oneRM: {},
      jumpHeight: [],
      painLog: []
    };
  });

  useEffect(() => {
    localStorage.setItem('jump_master_progress', JSON.stringify(progress));
  }, [progress]);

  const handleSelectWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
    setCurrentScreen('active-workout');
  };

  const handleFinishWorkout = () => {
    if (!selectedWorkout) return;

    setProgress(prev => {
      const weekWorkouts = workouts
        .filter(w => w.week === selectedWorkout.week)
        .sort((a, b) => a.day - b.day);
      
      const currentIndex = weekWorkouts.findIndex(w => w.id === selectedWorkout.id);
      const isLastDayOfWeek = currentIndex === weekWorkouts.length - 1;
      
      let nextWeek = prev.currentWeek;
      let nextDay = prev.currentDay;

      if (isLastDayOfWeek) {
        nextWeek = selectedWorkout.week + 1;
        const nextWeekWorkouts = workouts
          .filter(w => w.week === nextWeek)
          .sort((a, b) => a.day - b.day);
        nextDay = nextWeekWorkouts.length > 0 ? nextWeekWorkouts[0].day : 1;
      } else {
        nextDay = weekWorkouts[currentIndex + 1].day;
      }

      return {
        ...prev,
        currentWeek: nextWeek > 10 ? 10 : nextWeek,
        currentDay: nextWeek > 10 ? nextDay : nextDay,
        completedWorkouts: [...prev.completedWorkouts, selectedWorkout.id]
      };
    });

    setCurrentScreen('home');
    setSelectedWorkout(null);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-md mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentScreen === 'home' && <HomeScreen onNavigate={setCurrentScreen} onSelectWorkout={handleSelectWorkout} progress={progress} />}
            {currentScreen === 'workouts' && <WorkoutListScreen onBack={() => setCurrentScreen('home')} onSelectWorkout={handleSelectWorkout} />}
            {currentScreen === 'active-workout' && (
              <ActiveWorkoutScreen 
                onBack={() => setCurrentScreen('workouts')} 
                workout={selectedWorkout || workouts[0]} 
                onFinish={handleFinishWorkout}
              />
            )}
            {currentScreen === 'recovery' && <RecoveryScreen onBack={() => setCurrentScreen('home')} />}
            {currentScreen === 'evolution' && <EvolutionScreen onBack={() => setCurrentScreen('home')} />}
            {currentScreen === 'technique' && <TechniqueScreen onBack={() => setCurrentScreen('home')} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Nav (only on home) */}
      {currentScreen === 'home' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-900 px-6 py-4 flex justify-around items-center z-50">
          <button className="text-blue-500 flex flex-col items-center gap-1">
            <Activity size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Treino</span>
          </button>
          <button onClick={() => setCurrentScreen('recovery')} className="text-zinc-500 flex flex-col items-center gap-1">
            <AlertTriangle size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Saúde</span>
          </button>
          <button onClick={() => setCurrentScreen('evolution')} className="text-zinc-500 flex flex-col items-center gap-1">
            <LineChart size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Evolução</span>
          </button>
        </nav>
      )}
    </div>
  );
}
