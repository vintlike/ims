/**
 * watch 函数实现
 */
export function watch<T>(obj: T): Watcher<T> {
  // 实现 watch 函数的逻辑
  return {
    on: <K extends keyof T & string>(
      eventName: `${K}Changed`,
      callback: (oldValue: T[K], newValue: T[K]) => void
    ) => {
      // 监听属性变化的逻辑
    }
  };
}
