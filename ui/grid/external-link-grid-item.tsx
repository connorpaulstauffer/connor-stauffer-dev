import { GridItem, GridItemProps } from "./grid-item"

interface LinkGridItemProps extends GridItemProps {
  href: string
}

export function ExternalLinkGridItem({ href, children, ...props }: LinkGridItemProps) {
  return <GridItem {...props} asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </GridItem>
}
