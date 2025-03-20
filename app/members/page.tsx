"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "President",
    bio: "Alex is a senior Computer Science student with a passion for IoT and embedded systems. They have led multiple award-winning projects.",
    image: "/t.jpg",
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
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
  const popupRef = useRef<HTMLDivElement | null>(null)

  const handleMemberHover = (event: React.MouseEvent, memberId: number) => {
    setHoveredMember(memberId)

    const card = event.currentTarget.getBoundingClientRect()
    const popupWidth = 300
    const popupHeight = 180
    const gap = 12

    let newLeft = card.right + gap
    let newTop = card.top

    if (newLeft + popupWidth > window.innerWidth) {
      newLeft = card.left - popupWidth - gap
    }
    if (newTop + popupHeight > window.innerHeight) {
      newTop = window.innerHeight - popupHeight - gap
    }

    setPopupPosition({ top: newTop, left: newLeft })
  }

  // No need to track mouse position anymore
  const handleMouseMove = () => {}

  const handleMouseLeave = () => {
    setHoveredMember(null)
  }

  return (
    <div 
      className="container mx-auto px-4 py-8 relative"
      onMouseMove={handleMouseMove}
    >
      {hoveredMember !== null && (
        <div 
          className="fixed inset-0 bg-black/40 pointer-events-none z-10"
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-20">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative group cursor-pointer transition-all duration-300"
            onMouseEnter={(e) => handleMemberHover(e, member.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className={`object-cover w-full h-full transition-all duration-300 rounded-xl ${hoveredMember === member.id ? 'scale-105 brightness-110' : hoveredMember !== null ? 'brightness-50' : ''}`}
              />
            </div>

            <AnimatePresence>
              {hoveredMember === member.id && (
                <motion.div
                  ref={popupRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[calc(100vw-2rem)] sm:w-72 border border-white/20 backdrop-blur-lg z-30 max-h-[80vh] overflow-y-auto"
                  style={{
                    top: window.innerWidth < 640 ? '50%' : popupPosition.top,
                    left: window.innerWidth < 640 ? '50%' : popupPosition.left,
                    transform: window.innerWidth < 640 ? 'translate(-50%, -50%)' : 'none'
                  }}
                >
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{member.bio}</p>
                  <div className="flex gap-3 mt-3">
                    <a href={member.social.twitter} className="text-gray-600 hover:text-primary">
                      <Twitter size={20} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-primary">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.github} className="text-gray-600 hover:text-primary">
                      <Github size={20} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
