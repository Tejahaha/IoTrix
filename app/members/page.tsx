"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll"

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    bio: "Alex is a senior Computer Science student with a passion for IoT and embedded systems. They have led multiple award-winning projects.",
    image: "/placeholder.svg?height=300&width=300&text=AJ",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Sam Rodriguez",
    role: "Vice President",
    bio: "Sam specializes in cloud infrastructure and IoT connectivity. They have interned at major tech companies and bring industry experience to the team.",
    image: "/placeholder.svg?height=300&width=300&text=SR",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Taylor Kim",
    role: "Technical Lead",
    bio: "Taylor is an expert in hardware design and prototyping. They have designed several IoT devices that have been deployed in real-world applications.",
    image: "/placeholder.svg?height=300&width=300&text=TK",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Jordan Patel",
    role: "Workshop Coordinator",
    bio: "Jordan is passionate about education and making technology accessible. They organize our workshops and training sessions.",
    image: "/placeholder.svg?height=300&width=300&text=JP",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Casey Lee",
    role: "Project Manager",
    bio: "Casey has a background in project management and helps coordinate our collaborative projects, ensuring they stay on track and meet objectives.",
    image: "/placeholder.svg?height=300&width=300&text=CL",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Morgan Smith",
    role: "Outreach Coordinator",
    bio: "Morgan handles our relationships with industry partners and community organizations, creating opportunities for collaboration and growth.",
    image: "/placeholder.svg?height=300&width=300&text=MS",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 7,
    name: "Riley Chen",
    role: "Software Developer",
    bio: "Riley specializes in backend development and data processing for IoT applications. They have contributed to several open-source IoT frameworks.",
    image: "/placeholder.svg?height=300&width=300&text=RC",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 8,
    name: "Avery Williams",
    role: "Hardware Specialist",
    bio: "Avery has expertise in sensor technology and circuit design. They lead our hardware workshops and provide technical guidance on projects.",
    image: "/placeholder.svg?height=300&width=300&text=AW",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
]

export default function MembersPage() {
  useAnimateOnScroll('.member-card', {
    threshold: 0.1,
    direction: 'up',
    once: true
  });

  useAnimateOnScroll('.team-header', {
    threshold: 0.1,
    direction: 'left',
    once: true
  });

  useAnimateOnScroll('.join-section', {
    threshold: 0.1,
    direction: 'up',
    once: true
  });

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4 text-center team-header">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The talented individuals behind IOTRIX who make innovation happen
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 member-card"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                <div className="mt-4 flex gap-2">
                  <Link
                    href={member.social.twitter}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href={member.social.linkedin}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href={member.social.github}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center join-section">
          <h2 className="text-3xl font-bold">Join Our Team</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            Interested in becoming a part of IOTRIX? We&apos;re always looking for passionate individuals to join our
            community.
          </p>
          <div className="flex justify-center">
            <Link href="/join">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Apply to Join
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

