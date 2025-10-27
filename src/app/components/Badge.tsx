type BadgeProps = {
    children: React.ReactNode;
  };
  
  export default function Badge({ children }: BadgeProps) {
    return (
      <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-300">
        {children}
      </span>
    );
  }
  