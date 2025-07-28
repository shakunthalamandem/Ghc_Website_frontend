// src/types/custom.d.ts

export type BlockType = 'text' | 'card' | 'table' | 'chart' | 'link'| 'slides'  | 'suggested_questions';

export type ChartType =
  | 'bar'
  | 'pie'
  | 'line'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'area'
  | 'stackedBar'
  | 'tree'
  | 'calendar';

export interface BaseBlock {
  type: BlockType;
  row: number;
  column: number;
  total_columns: number;
}


//suggested questions
export interface SuggestedQuestionsBlock extends BaseBlock {
  type: 'suggested_questions';
  questions: string[];
}

// ------------------ Basic Blocks ------------------

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: string;
}

export interface CardBlock extends BaseBlock {
  type: 'card';
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface TableBlock extends BaseBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface LinkBlock extends BaseBlock {
  type: 'link';
  text: string;
  url: string;
}

// ------------------ Chart Blocks ------------------

interface BaseChartBlock extends BaseBlock {
  type: 'chart';
  title: string;
  chartType: ChartType;
}

// Pie Chart
export interface PieChartBlock extends BaseChartBlock {
  chartType: 'pie';
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

// Bar / StackedBar Chart
export interface BarChartBlock extends BaseChartBlock {
  chartType: 'bar';
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}

export interface StackedBarChartBlock extends BaseChartBlock {
 chartType:  'stackedBar';
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}
// Line / Area Chart
export interface LineChartBlock extends BaseChartBlock {
  chartType: 'line';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      fillColor?: string;
    }[];
  };
}
export interface AreaChartBlock extends BaseChartBlock {
  chartType: 'area';
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor?: string;
      fillColor?: string;
    }[];
  };
}

// Scatter Chart
export interface ScatterChartBlock extends BaseChartBlock {
  chartType: 'scatter';
  data: { x: number; y: number }[];
}

// Bubble Chart
export interface BubbleChartBlock extends BaseChartBlock {
  chartType: 'bubble';
  data: { x: number; y: number; r: number }[];
}

// Heatmap Chart
export interface HeatmapChartBlock extends BaseChartBlock {
  chartType: 'heatmap';
  data: number[][];
}

// Tree Chart
export interface TreeChartBlock extends BaseChartBlock {
  chartType: 'tree';
  data: {
    name: string;
    children?: TreeChartBlock['data'][];
  };
}

// Calendar Chart
export interface CalendarChartBlock extends BaseChartBlock {
  chartType: 'calendar';
  data: { date: string; value: number }[];
}


//slides

export interface Slide {
  title: string;
  content: string;
  image?: string | null;
}
export interface SlidesBlock extends BaseBlock {
  type: 'slides';
  title: string;
  slides: Slide[];
}


// Union of All Chart Types
export type ChartBlock =
  | PieChartBlock
  | BarChartBlock
  | StackedBarChartBlock
  | LineChartBlock
  | AreaChartBlock
  | ScatterChartBlock
  | BubbleChartBlock
  | HeatmapChartBlock
  | TreeChartBlock
  | CalendarChartBlock;


// ------------------ Unified Block Type ------------------

export type DynamicBlock =
  | TextBlock
  | CardBlock
  | TableBlock
  | LinkBlock
  | ChartBlock
  | SlidesBlock
  | SuggestedQuestionsBlock;
