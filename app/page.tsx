"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Calendar, Zap, Clock, MapPin } from "lucide-react"
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll"

export default function Home() {
  useAnimateOnScroll('.hero-content', {
    threshold: 0.1,
    direction: 'left',
    once: true
  });

  useAnimateOnScroll('.hero-image', {
    threshold: 0.1,
    direction: 'right',
    once: true
  });

  useAnimateOnScroll('.feature-card', {
    threshold: 0.1,
    direction: 'up',
    once: true
  });

  useAnimateOnScroll('.event-card', {
    threshold: 0.1,
    direction: 'up',
    once: true
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50/70 to-background dark:from-blue-900/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 hero-content">
              <div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Welcome to IOTRIX
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter sm:text-5xl">
                Innovating the Future with IoT
              </h1>
              <p className="max-w-[600px] text-gray-500 text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-light dark:text-gray-400">
                IOTRIX is a premier club dedicated to exploring and advancing Internet of Things technology through
                collaboration, education, and innovation.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:from-blue-700 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-600 dark:focus-visible:ring-blue-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/members">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  >
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center hero-image">
              <Image
                src="/iotrix.png"
                alt="IOTRIX Hero Image"
                width={350}
                height={350}
                className="rounded-lg object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900/80 px-3 py-1 text-sm">
                What We Do
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the World of IoT with Us</h2>
              <p className="max-w-[900px] text-gray-500 text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-light dark:text-gray-400">
                IOTRIX provides a platform for students to learn, collaborate, and innovate in the field of Internet of
                Things.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20">
                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Technical Workshops</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Regular hands-on workshops on IoT technologies, programming, and hardware.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Collaborative Projects</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Work with peers on innovative IoT projects that solve real-world problems.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-gray-800 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-950 dark:to-gray-900/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Events & Competitions</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Participate in hackathons, tech talks, and industry networking events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 px-3 py-1 text-sm text-blue-600 dark:text-blue-300">
                Our Events
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Events</h2>
              <p className="max-w-[900px] text-gray-500 text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed font-light dark:text-gray-400">
                Join us for workshops, hackathons, and other exciting IoT events.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50/50 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:from-gray-950 dark:to-gray-900/50 event-card"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Event+${i}`}
                    alt={`Event ${i}`}
                    width={500}
                    height={300}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">IoT Workshop {i}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">April {10 + i}, 2025</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">3:00 PM - 5:00 PM</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Tech Building, Room 10{i}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Join us for a hands-on workshop on IoT technologies and applications.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/events">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-900 dark:to-blue-800"
        style={{ display: "none" }}
      >
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Join IOTRIX Today
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">
                Become a part of our innovative community and explore the exciting world of IoT technology.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/join">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50">
                  Join Now
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

