declare module 'pliny/mdx-components' {
  import type { ComponentType, ReactNode } from 'react'
  export const MDXLayoutRenderer: ComponentType<{
    code: string
    components?: any
    toc?: any
    children?: ReactNode
  }>
}

declare module 'pliny/utils/contentlayer' {
  export type CoreContent<T> = T
  export function coreContent<T extends Record<string, unknown>>(doc: T): T
  export function allCoreContent<T extends Record<string, unknown>>(docs: T[]): T[]
  export function sortPosts<T extends { date?: string }>(posts: T[]): T[]
}

declare module 'pliny/newsletter' {
  type Provider = 'buttondown' | 'convertkit' | 'mailchimp' | 'newsletter'
  export function NewsletterAPI(config: {
    provider: Provider
    apiKey?: string
    listId?: string
  }): (req: unknown) => Promise<Response>
}

declare module 'pliny/analytics' {
  export type AnalyticsConfig = {
    plausibleDataDomain?: string
    simpleAnalytics?: boolean
    umamiWebsiteId?: string
    googleAnalyticsId?: string
  }
  export const Analytics: (
    props: AnalyticsConfig | { analyticsConfig: AnalyticsConfig }
  ) => any
}

declare module 'pliny/search' {
  export type SearchConfig = {
    provider: 'kbar' | 'algolia'
    algoliaAppId?: string
    algoliaSearchKey?: string
    algoliaIndexName?: string
  }
  export const SearchProvider: (
    props: ({ children?: any } & SearchConfig) | { children?: any; searchConfig: SearchConfig }
  ) => any
}

declare module 'pliny/utils/formatDate' {
  export const formatDate: (date: string, locale?: string) => string
}

declare module 'pliny/ui/NewsletterForm' {
  import type { ReactNode } from 'react'
  export interface NewsletterFormProps {
    title?: string
    apiUrl?: string
  }
  const NewsletterForm: (props: NewsletterFormProps) => ReactNode
  export default NewsletterForm
}

declare module 'pliny/comments' {
  import type { ComponentType } from 'react'
  
  export type CommentsConfig = any
  
  export interface CommentsProps {
    commentsConfig: CommentsConfig
    slug?: string
  }
  
  export const Comments: ComponentType<CommentsProps>
}

declare module 'pliny/ui/TOCInline' {
  import type { ComponentType } from 'react'
  export interface TOCInlineProps {
    toc: any
    fromHeading?: number
    toHeading?: number
    asDisclosure?: boolean
    exclude?: string | string[]
    collapse?: boolean
    ulClassName?: string
    liClassName?: string
  }
  const TOCInline: ComponentType<TOCInlineProps>
  export default TOCInline
}

declare module 'pliny/ui/Pre' {
  import type { ReactNode, ComponentType } from 'react'
  const Pre: ComponentType<{ children: ReactNode }>
  export default Pre
}

declare module 'pliny/ui/BlogNewsletterForm' {
  import type { ComponentType } from 'react'
  import type { NewsletterFormProps } from 'pliny/ui/NewsletterForm'
  const BlogNewsletterForm: ComponentType<NewsletterFormProps>
  export default BlogNewsletterForm
}

declare module 'pliny/search/AlgoliaButton' {
  import type { ComponentType, ReactNode } from 'react'
  export interface AlgoliaButtonProps {
    children?: ReactNode
    [key: string]: any
  }
  export const AlgoliaButton: ComponentType<AlgoliaButtonProps>
}

declare module 'pliny/search/KBarButton' {
  import type { ComponentType, ReactNode } from 'react'
  export interface KBarButtonProps {
    children?: ReactNode
  }
  export const KBarButton: ComponentType<KBarButtonProps>
}

declare module 'pliny/ui/Bleed' {
  import type { ComponentType, ReactNode } from 'react'
  export interface BleedProps {
    full?: boolean
    children: ReactNode
  }
  const Bleed: ComponentType<BleedProps>
  export default Bleed
}
