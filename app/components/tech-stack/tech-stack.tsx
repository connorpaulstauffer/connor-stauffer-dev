import { Grid, ExternalLinkGridItem } from "@/ui/grid"
import { NextJSLogo, VercelLogo, ReactLogo, MySQLLogo } from "./logos"

import { cn } from "@/utils"

const ITEM_CLASS_NAME = "h-24"

export function TechStack() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Grid>
          <ExternalLinkGridItem href="https://nextjs.org/" className={ITEM_CLASS_NAME}>
            <NextJSLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://vercel.com/" className={ITEM_CLASS_NAME}>
            <VercelLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://react.dev/" className={cn(ITEM_CLASS_NAME, "p-4 sm:p-6")}>
            <ReactLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://www.mysql.com/" className={cn(ITEM_CLASS_NAME, "p-3 sm:p-5")}>
            <MySQLLogo />
          </ExternalLinkGridItem>
        </Grid>
      </div>
    </div>
  )
}
