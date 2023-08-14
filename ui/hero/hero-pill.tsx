import { Pill, PillProps } from "@/ui/pill";

interface HeroPillProps extends PillProps { }

export function HeroPill({ children }: HeroPillProps) {
  return <div className="mb-5 flex justify-center">
    <Pill>
      {children}
    </Pill>
  </div>
}
