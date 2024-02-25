import TaskList from './components/TaskList/TaskList.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'TaskList', typeof __VLS_localComponents, "TaskList", "TaskList", "TaskList">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.TaskList; __VLS_components.TaskList;
// @ts-ignore
[TaskList, TaskList,];
__VLS_intrinsicElements.template; __VLS_intrinsicElements.template;
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'TaskList' extends keyof typeof __VLS_ctx ? { 'TaskList': typeof __VLS_ctx.TaskList; } : typeof __VLS_resolvedLocalAndGlobalComponents).TaskList;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ onTaskAdded: {} as any, onTaskCompleted: {} as any, onTaskDeleted: {} as any, }, tasks: ((__VLS_ctx.tasks)), }));
({} as { TaskList: typeof __VLS_5; }).TaskList;
({} as { TaskList: typeof __VLS_5; }).TaskList;
const __VLS_7 = __VLS_6({ ...{ onTaskAdded: {} as any, onTaskCompleted: {} as any, onTaskDeleted: {} as any, }, tasks: ((__VLS_ctx.tasks)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ onTaskAdded: {} as any, onTaskCompleted: {} as any, onTaskDeleted: {} as any, }, tasks: ((__VLS_ctx.tasks)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
let __VLS_10 = { 'taskAdded': __VLS_pickEvent(__VLS_9['taskAdded'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onTaskAdded) };
__VLS_10 = { taskAdded: (__VLS_ctx.addTask) };
let __VLS_11 = { 'taskCompleted': __VLS_pickEvent(__VLS_9['taskCompleted'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onTaskCompleted) };
__VLS_11 = { taskCompleted: (__VLS_ctx.completeTask) };
let __VLS_12 = { 'taskDeleted': __VLS_pickEvent(__VLS_9['taskDeleted'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_6, typeof __VLS_7>).onTaskDeleted) };
__VLS_12 = { taskDeleted: (__VLS_ctx.deleteTask) };
{
const __VLS_13 = __VLS_intrinsicElements["template"];
const __VLS_14 = __VLS_elementAsFunctionalComponent(__VLS_13);
const __VLS_15 = __VLS_14({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_14));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_13, typeof __VLS_15> & Record<string, unknown>) => void)({ ...{}, });
{
(__VLS_8.slots!).header;
{
const __VLS_16 = __VLS_intrinsicElements["h2"];
const __VLS_17 = __VLS_elementAsFunctionalComponent(__VLS_16);
const __VLS_18 = __VLS_17({ ...{}, class: ("Titulo"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_18> & Record<string, unknown>) => void)({ ...{}, class: ("Titulo"), });
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
let __VLS_20!: __VLS_NormalizeEmits<typeof __VLS_19.emit>;
(__VLS_19.slots!).default;
}
// @ts-ignore
[tasks, tasks, tasks, addTask, completeTask, deleteTask,];
}
}
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
