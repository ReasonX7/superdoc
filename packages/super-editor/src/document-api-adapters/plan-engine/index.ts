/**
 * Plan engine — barrel export for all plan-engine modules.
 */

export { executePlan, executeCompiledPlan } from './executor';
export type { ExecuteCompiledOptions } from './executor';
export { previewPlan } from './preview';
export { queryMatchAdapter } from './query-match-adapter';
export { getRevision, initRevision, incrementRevision, checkRevision, trackRevisions } from './revision-tracker';
export { registerStepExecutor, getStepExecutor, hasStepExecutor, clearExecutorRegistry } from './executor-registry';
export { planError, PlanError } from './errors';
export { captureRunsInRange, resolveInlineStyle } from './style-resolver';
export type { CapturedRun, CapturedStyle } from './style-resolver';
export type { CompiledTarget, StepExecutor, CompileContext, ExecuteContext } from './executor-registry.types';
export { writeWrapper, insertStructuredWrapper, replaceStructuredWrapper, styleApplyWrapper } from './plan-wrappers';
