'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function PortfolioJs() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application with real-time data synchronization and responsive design.",
      image: "https://marketplace.canva.com/EAGRieNfp1A/1/0/1600w/canva-PXaFV8BuJ_E.jpg",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      id: 2,
      title: "Project Two", 
      description: "Cross-platform mobile app with offline capabilities and push notifications.",
      image: "https://marketplace.canva.com/EAGRj4YKXoU/1/0/1600w/canva-09XuG9w2hJo.jpg",
      tech: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "Project Three",
      description: "E-commerce platform with advanced search, personalized recommendations, and secure payments.",
      image: "https://marketplace.canva.com/EAEvfpUVXKo/2/0/1600w/canva-TmK48CpsmJI.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Elasticsearch"]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">My Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-gray-900/50 border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={250}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400 mt-1">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Me</h2>
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-800 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a passionate full-stack developer with a keen interest in building modern web applications. With several years of experience in web development, I specialize in creating responsive and user-friendly interfaces using cutting-edge technologies.
              </p>
              <p>
                My expertise includes:
              </p>
              <ul className="list-none space-y-2 ml-4">
                {[
                  "Frontend Development (React, Next.js, TypeScript)",
                  "Backend Development (Node.js, Express, Python)",
                  "Database Management (MongoDB, PostgreSQL)",
                  "Cloud Services (AWS, Firebase)",
                  "UI/UX Design Principles"
                ].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}