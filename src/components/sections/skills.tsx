'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  skillsData,
  educationData,
  certificationsData,
  type Skill,
} from '@/lib/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Skills() {
  return (
    <section id="skills" className="pt-24 lg:pt-32">
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Skills, Education & Certifications
        </h2>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skillsData.map((skill: Skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <Card className="group flex flex-col items-center justify-center p-4 text-center transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-1">
                  <skill.Icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                  <p className="mt-2 text-sm font-medium">{skill.name}</p>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.category}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <Tabs defaultValue="education" className="mt-12 w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
        <TabsContent value="education">
          <div className="mt-8 grid gap-8">
            {educationData.map((edu) => (
              <Card key={edu.school} className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certifications">
           <div className="mt-8 grid gap-8">
            {certificationsData.map((cert) => (
              <Card key={cert.name} className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-base">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="font-medium">{cert.issuer}</p>
                   <p className="text-sm text-muted-foreground">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
