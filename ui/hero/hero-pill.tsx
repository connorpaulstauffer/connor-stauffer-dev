import { Pill, PillProps } from "@/ui/pill";
import { Ping } from "@/ui/ping";

interface HeroPillProps extends PillProps { }

export function HeroPill({ children }: HeroPillProps) {
  return <div className="mb-5 flex justify-center">
    <Pill asChild>
      <a href="#">
        <Ping className="mr-2" />
        {children}
      </a>
    </Pill>
  </div>
}
