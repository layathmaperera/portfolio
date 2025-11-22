'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData, type Skill, type SkillCategory } from '@/lib/data';

const categories: SkillCategory[] = ['Cloud', 'Containerization', 'IaC', 'CI/CD', 'Monitoring'];

export default function Skills() {
  return (
    <section id="skills" className="pt-24 lg:pt-32">
       <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill: Skill) => (
          <Card
            key={skill.name}
            className="group flex flex-col items-center justify-center p-4 text-center transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-1"
          >
            <skill.Icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
