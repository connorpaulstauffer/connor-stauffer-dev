import { Grid, ExternalLinkGridItem } from "@/ui/grid"
import { NextJSLogo, VercelLogo, ReactLogo, MySQLLogo, TypeScriptLogo, GraphQLLogo, TailwindLogo } from "./logos"

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
          <ExternalLinkGridItem href="https://react.dev/" className={cn(ITEM_CLASS_NAME, "p-6")}>
            <ReactLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://www.mysql.com/" className={cn(ITEM_CLASS_NAME, "p-5")}>
            <MySQLLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://www.typescriptlang.org/" className={cn(ITEM_CLASS_NAME, "p-5")}>
            <TypeScriptLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://graphql.org/" className={cn(ITEM_CLASS_NAME, "p-5")}>
            <GraphQLLogo />
          </ExternalLinkGridItem>
          {/* TODO figure out spacing */}
          <ExternalLinkGridItem href="https://tailwindcss.com/" className={cn(ITEM_CLASS_NAME, "p-6")}>
            <TailwindLogo />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://reactnative.dev/" className={cn(ITEM_CLASS_NAME, "p-6")}>
            {/* TODO update to React Native */}
            <ReactLogo />
          </ExternalLinkGridItem>
        </Grid>
      </div>
    </div>
  )
}
