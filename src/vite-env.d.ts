/// <reference types="vite/client" />
// import type { AttributifyAttributes } from '@unocss/preset-attributify';

// declare module 'react' {
//   interface HTMLAttributes<T> extends AttributifyAttributes {}
// }

/** 从字段到函数的推导 */
type Watcher<T> = {
  on<K extends keyof T & string>(
    eventName: `${K}Changed`,
    callback: (oldValue: T[K], newValue: T[K]) => void
  ): void;
};

declare function watch<T>(obj: T): Watcher<T>;
