"use client"

import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import { useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to IoT Workshop",
    date: "April 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Tech Building, Room 101",
    description:
      "A beginner-friendly workshop covering the basics of IoT, including sensors, microcontrollers, and connectivity options.",
    image: "/placeholder.svg?height=300&width=500&text=IoT+Workshop",
    registrationLink: "/events/register/1",
  },
  {
    id: 2,
    title: "IoT Hackathon: Smart Campus Challenge",
    date: "May 5-7, 2025",
    time: "9:00 AM - 6:00 PM (all days)",
    location: "Innovation Center",
    description:
      "A 3-day hackathon where teams will develop IoT solutions to improve campus life. Prizes for the top three teams!",
    image: "/placeholder.svg?height=300&width=500&text=IoT+Hackathon",
    registrationLink: "/events/register/2",
  },
  {
    id: 3,
    title: "Industry Talk: The Future of IoT in Healthcare",
    date: "May 20, 2025",
    time: "4:00 PM - 5:30 PM",
    location: "Virtual (Zoom)",
    description:
      "Join us for a talk by Dr. Jane Smith, CTO of HealthTech Inc., on how IoT is transforming healthcare delivery and patient monitoring.",
    image: "/placeholder.svg?height=300&width=500&text=IoT+Healthcare+Talk",
    registrationLink: "/events/register/3",
  },
  {
    id: 4,
    title: "IoT Security Workshop",
    date: "June 10, 2025",
    time: "2:00 PM - 4:30 PM",
    location: "Tech Building, Room 205",
    description:
      "Learn about the security challenges in IoT systems and how to implement secure practices in your IoT projects.",
    image: "/placeholder.svg?height=300&width=500&text=IoT+Security",
    registrationLink: "/events/register/4",
  },
  {
    id: 5,
    title: "Smart Agriculture IoT Demo Day",
    date: "June 25, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "University Farm",
    description:
      "See real-world applications of IoT in agriculture with live demonstrations of soil monitoring, automated irrigation, and crop health tracking systems.",
    image: "/placeholder.svg?height=300&width=500&text=Smart+Agriculture",
    registrationLink: "/events/register/5",
  },
  {
    id: 6,
    title: "IoT Project Showcase",
    date: "July 15, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Innovation Center",
    description:
      "IOTRIX members will showcase their latest IoT projects. Come see innovative solutions and network with fellow IoT enthusiasts.",
    image: "/placeholder.svg?height=300&width=500&text=Project+Showcase",
    registrationLink: "/events/register/6",
  },
]

const pastEvents = [
  {
    id: 7,
    title: "Arduino Programming Workshop",
    date: "March 10, 2025",
    location: "Tech Building, Room 203",
    image: "/placeholder.svg?height=200&width=400&text=Arduino+Workshop",
  },
  {
    id: 8,
    title: "IoT Security Seminar",
    date: "February 25, 2025",
    location: "Science Center Auditorium",
    image: "/placeholder.svg?height=200&width=400&text=IoT+Security",
  },
  {
    id: 9,
    title: "Smart Home Project Showcase",
    date: "January 15, 2025",
    location: "Innovation Center",
    image: "/placeholder.svg?height=200&width=400&text=Project+Showcase",
  },
]



export default function EventsPage() {

  useEffect(() => {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
      const direction = index % 4;
      switch(direction) {
        case 0:
          (card as HTMLElement).dataset.direction = 'left';
          break;
        case 1:
          (card as HTMLElement).dataset.direction = 'right';
          break;
        case 2:
          (card as HTMLElement).dataset.direction = 'up';
          break;
        case 3:
          (card as HTMLElement).dataset.direction = 'down';
          break;
      }
    });
  }, []);

  useAnimateOnScroll('.event-card[data-direction="left"]', {
    threshold: 0.1,
    direction: 'left',
    once: true
  });

  useAnimateOnScroll('.event-card[data-direction="right"]', {
    threshold: 0.1,
    direction: 'right',
    once: true
  });

  useAnimateOnScroll('.event-card[data-direction="up"]', {
    threshold: 0.1,
    direction: 'up',
    once: true
  });

  useAnimateOnScroll('.event-card[data-direction="down"]', {
    threshold: 0.1,
    direction: 'down',
    once: true
  });


  return (
    <div className="container px-4 py-8 md:px-6 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter sm:text-5xl">Events</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light dark:text-gray-400">
            Join us for workshops, hackathons, and other exciting IoT events
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">Upcoming Events</h2>

          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="event-card group overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50/50 dark:border-gray-800 dark:from-gray-950 dark:to-gray-900/50 shadow-sm"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-all group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{event.title}</h3>

                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">{event.location}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">{event.description}</p>

                    <div className="mt-6">
                      <Link href={event.registrationLink}>
                        <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-600">
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Past Events</h2>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="event-card group overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-b from-white to-gray-50/50 dark:border-gray-800 dark:from-gray-950 dark:to-gray-900/50 shadow-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{event.title}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.date}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gradient-to-b from-gray-50 to-background p-6 dark:border-gray-800 dark:from-gray-900/50 dark:to-background">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-2xl font-bold">Want to Propose an Event?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Have an idea for a workshop, talk, or other event related to IoT? We&apos;re always open to suggestions!
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

