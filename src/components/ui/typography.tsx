import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * @example
 * ```tsx
 * <div className="max-w-2xl space-y-6">
 *   <TypographyH1>The Quick Brown Fox</TypographyH1>
 *   <TypographyH2>Section Heading</TypographyH2>
 *   <TypographyH3>Subsection Heading</TypographyH3>
 *   <TypographyH4>Minor Heading</TypographyH4>
 *   <TypographyLead>A lead paragraph introduces a section with slightly larger, muted text.</TypographyLead>
 *   <TypographyP>
 *     Regular paragraph text. The quick brown fox jumps over the lazy dog.
 *   </TypographyP>
 *   <TypographyBlockquote>
 *     "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs
 *   </TypographyBlockquote>
 *   <TypographyList>
 *     <li>First list item</li>
 *     <li>Second list item</li>
 *     <li>Third list item</li>
 *   </TypographyList>
 *   <TypographyP>
 *     Inline code example: <TypographyInlineCode>npm install cobalt-lite-kit</TypographyInlineCode>
 *   </TypographyP>
 *   <TypographyLarge>Large emphasized text</TypographyLarge>
 *   <TypographySmall>Small secondary text</TypographySmall>
 *   <TypographyMuted>Muted helper text for captions and hints</TypographyMuted>
 * </div>
 * ```
 */
export function TypographyH1({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
      {...props}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export function TypographyH4({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h4>
  )
}

export function TypographyP({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function TypographyBlockquote({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  )
}

export function TypographyList({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...props}
    >
      {children}
    </ul>
  )
}

export function TypographyInlineCode({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}

export function TypographyLead({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function TypographyLarge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function TypographySmall({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </small>
  )
}

export function TypographyMuted({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}
