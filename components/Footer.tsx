import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
/* import Logo from '@/data/logo.svg' */

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {/* <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} /> */}
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <Link href="https://decaldas.github.io/home/" target="_blank">
              {siteMetadata.author}
            </Link>
          </div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* 
          <Logo />
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
          </div>
        */}
      </div>
    </footer>
  )
}
