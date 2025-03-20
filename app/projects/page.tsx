import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "IOTRIX Projects - IoT Innovation Club",
  description: "Explore the innovative IoT projects developed by IOTRIX members.",
}

const projects = [
  {
    id: 1,
    title: "Smart Home Automation System",
    description:
      "A comprehensive IoT solution for home automation, including lighting, temperature, security, and energy monitoring.",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Home",
    tags: ["IoT", "Automation", "Energy Efficiency"],
    link: "/projects/smart-home",
  },
  {
    id: 2,
    title: "Agricultural Monitoring System",
    description:
      "IoT sensors and analytics platform for monitoring soil conditions, weather, and crop health to optimize farming practices.",
    image: "/placeholder.svg?height=300&width=500&text=Agricultural+Monitoring",
    tags: ["IoT", "Agriculture", "Data Analytics"],
    link: "/projects/agricultural-monitoring",
  },
  {
    id: 3,
    title: "Smart Campus Initiative",
    description:
      "A network of IoT devices deployed across campus to monitor occupancy, energy usage, and environmental conditions.",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Campus",
    tags: ["IoT", "Smart Buildings", "Energy Management"],
    link: "/projects/smart-campus",
  },
  {
    id: 4,
    title: "Health Monitoring Wearable",
    description:
      "A wearable device that tracks vital signs and activity levels, with a companion app for health insights.",
    image: "/placeholder.svg?height=300&width=500&text=Health+Monitoring",
    tags: ["IoT", "Healthcare", "Wearables"],
    link: "/projects/health-monitoring",
  },
  {
    id: 5,
    title: "Smart Waste Management",
    description:
      "IoT-enabled waste bins that monitor fill levels and optimize collection routes for city waste management.",
    image: "/placeholder.svg?height=300&width=500&text=Waste+Management",
    tags: ["IoT", "Smart City", "Sustainability"],
    link: "/projects/waste-management",
  },
  {
    id: 6,
    title: "Air Quality Monitoring Network",
    description:
      "A distributed network of sensors monitoring air quality parameters across urban areas, with public data visualization.",
    image: "/placeholder.svg?height=300&width=500&text=Air+Quality",
    tags: ["IoT", "Environmental", "Data Visualization"],
    link: "/projects/air-quality",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Innovative IoT solutions developed by IOTRIX members
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover transition-all group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href={project.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">Have a Project Idea?</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
            We&apos;re always looking for new and exciting IoT projects to work on. If you have an idea, we&apos;d love to hear
            about it!
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                Submit Your Idea
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

