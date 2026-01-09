
export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  LESSON = 'LESSON',
  QUIZ = 'QUIZ',
  DIAGRAMS = 'DIAGRAMS',
  CASE_STUDIES = 'CASE_STUDIES',
  CHAT = 'CHAT',
  CHALLENGES = 'CHALLENGES',
  NOTES = 'NOTES',
  FLASHCARDS = 'FLASHCARDS',
  VIDEOS = 'VIDEOS',
  PROFILE = 'PROFILE',
  PYQ_ANALYSIS = 'PYQ_ANALYSIS',
  FORMULA_SHEET = 'FORMULA_SHEET'
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
  joinedDate: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string; // Added category for grouping
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface UserStats {
  progress: number;
  conceptsMastered: number;
  totalConcepts: number;
  challengesWon: number;
}

export interface CalculationStep {
  label: string;
  formula: string;
  result: string;
}

export interface ExampleCalculation {
  title: string;
  givenValues: string[];
  steps: CalculationStep[];
  finalResult: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  systemDiagram: string; // SVG path or description
  processes: {
    name: string;
    description: string;
    thermoType: string; // e.g. "Isentropic Compression"
  }[];
  exampleCalculation?: ExampleCalculation;
  realLifeApplications?: string[];
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface FormulaTerm {
  symbol: string;
  definition: string;
  unit?: string;
}

export interface FormulaCategory {
  category: string;
  formulas: {
    name: string;
    equation: string;
    description: string;
    terms: FormulaTerm[]; // Structured explanation of variables
    application?: string; // Where this formula is used
  }[];
}
