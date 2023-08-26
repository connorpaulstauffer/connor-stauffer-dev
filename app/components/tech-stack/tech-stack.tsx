import { Grid, ExternalLinkGridItem } from "@/ui/grid"
import { NextJSLogo, VercelLogo, ReactLogo, MySQLLogo, TypeScriptLogo, GraphQLLogo, TailwindLogo, ReactNativeLogo } from "./logos"

const ITEM_CLASS_NAME = "h-24"

export function TechStack() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Grid>
          <ExternalLinkGridItem href="https://nextjs.org/" className={ITEM_CLASS_NAME}>
            <NextJSLogo className="w-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://vercel.com/" className={ITEM_CLASS_NAME}>
            <VercelLogo className="w-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://react.dev/" className={ITEM_CLASS_NAME}>
            <ReactLogo className="h-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://reactnative.dev/" className={ITEM_CLASS_NAME}>
            <ReactNativeLogo className="h-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://www.typescriptlang.org/" className={ITEM_CLASS_NAME}>
            <TypeScriptLogo className="w-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://graphql.org/" className={ITEM_CLASS_NAME}>
            <GraphQLLogo className="w-2/3" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://tailwindcss.com/" className={ITEM_CLASS_NAME}>
            <TailwindLogo className="w-3/4" />
          </ExternalLinkGridItem>
          <ExternalLinkGridItem href="https://www.mysql.com/" className={ITEM_CLASS_NAME}>
            <MySQLLogo className="h-2/3" />
          </ExternalLinkGridItem>
        </Grid>
      </div>
    </div>
  )
}
