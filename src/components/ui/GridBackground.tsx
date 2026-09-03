export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] flex justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-stone-400 dark:bg-stone-500 opacity-[0.1] blur-[100px]"></div>
    </div>
  );
}
