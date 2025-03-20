import * as React from "react"
import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = [
  {
    title: "Links",
    items: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/members", label: "Members" },
      { href: "/events", label: "Events" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "/join", label: "Join Us" },
      { href: "/projects", label: "Projects" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Social",
    items: [
      { href: "https://twitter.com/iotrix", label: "Twitter" },
      { href: "https://github.com/iotrix", label: "GitHub" },
      { href: "https://linkedin.com/company/iotrix", label: "LinkedIn" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="font-bold">IOTRIX</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              IOTRIX is a premier club dedicated to exploring and advancing Internet of Things technology
              through collaboration, education, and innovation.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-sm font-medium">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-8 md:h-16 md:flex-row md:items-center md:py-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a href="https://iotrix.org" className="font-medium underline underline-offset-4">
              IOTRIX
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/iotrix/iotrix-web"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}