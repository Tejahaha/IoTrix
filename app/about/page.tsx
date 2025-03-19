"use client"

import Image from "next/image"
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll"

export default function AboutPage() {
  useAnimateOnScroll('.about-image', {
    threshold: 0.1,
    direction: 'right',
    once: true
  });

  useAnimateOnScroll('.about-section', {
    threshold: 0.2,
    direction: 'left',
    once: true,
    rootMargin: '50px'
  });

  useAnimateOnScroll('.value-card', {
    threshold: 0.15,
    direction: 'down',
    once: true,
    rootMargin: '20px'
  });

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4 text-center about-section">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About IOTRIX</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Innovating the future with IoT technology
          </p>
        </div>

        <div className="space-y-8">
          <div className="overflow-hidden rounded-lg about-image">
            <Image
              src="/placeholder.svg?height=400&width=800&text=IOTRIX+Team"
              alt="IOTRIX Team"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4 about-section">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-500 dark:text-gray-400">
              IOTRIX is dedicated to fostering innovation and excellence in the field of Internet of Things (IoT). Our
              mission is to create a collaborative environment where students can learn, experiment, and develop
              cutting-edge IoT solutions that address real-world challenges.
            </p>
          </div>

          <div className="space-y-4 about-section">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We envision a future where IoT technology is seamlessly integrated into everyday life, enhancing
              efficiency, sustainability, and quality of life. IOTRIX aims to be at the forefront of this technological
              revolution, nurturing the next generation of innovators and leaders in the IoT space.
            </p>
          </div>

          <div className="space-y-4 about-section">
            <h2 className="text-3xl font-bold">Our History</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Founded in 2018, IOTRIX began as a small group of passionate students interested in exploring the
              potential of IoT technology. Over the years, we have grown into a vibrant community of tech enthusiasts,
              developers, and innovators, collaborating on projects that push the boundaries of what&apos;s possible with
              IoT.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              From our humble beginnings, we have expanded our activities to include workshops, hackathons, industry
              collaborations, and community outreach programs. Our members have gone on to work with leading tech
              companies and start their own ventures in the IoT space.
            </p>
          </div>

          <div className="space-y-4 about-section">
            <h2 className="text-3xl font-bold">What We Do</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Organize regular workshops and training sessions on IoT technologies, programming, and hardware</li>
              <li>Facilitate collaborative projects that solve real-world problems using IoT solutions</li>
              <li>Host hackathons, tech talks, and networking events with industry professionals</li>
              <li>Provide resources and mentorship for members to develop their skills and knowledge</li>
              <li>Partner with industry leaders to create opportunities for our members</li>
              <li>Engage with the wider community through outreach programs and educational initiatives</li>
            </ul>
          </div>

          <div className="space-y-4 about-section">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 value-card">
                <h3 className="text-lg font-bold">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We embrace creativity and forward-thinking approaches to solve complex problems.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 value-card">
                <h3 className="text-lg font-bold">Collaboration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe in the power of teamwork and knowledge sharing to achieve greater results.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800 value-card">
                <h3 className="text-lg font-bold">Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We strive for the highest standards in everything we do, from code to communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

