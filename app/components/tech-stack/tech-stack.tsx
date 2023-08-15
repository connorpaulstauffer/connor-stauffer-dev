import { Grid, ExternalLinkGridItem } from "@/ui/grid"
import { NextJSLogo } from "./logos/next-js"

function TechStackLink({ href }: { href: string }) {

}

export function TechStack() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Grid>
          <ExternalLinkGridItem href="https://nextjs.org/">
            <NextJSLogo />
          </ExternalLinkGridItem>
        </Grid>
      </div>
    </div>
  )
}
