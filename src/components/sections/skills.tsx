'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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
  type SkillCategory,
} from '@/lib/data';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const skillCategories: ['All', ...SkillCategory[]] = [
  'All',
  'Languages',
  'Frameworks & Libraries',
  'Databases',
  'Tools',
];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | SkillCategory
  >('All');

  const filteredSkills = useMemo(() => {
    return skillsData
      .filter((skill) =>
        selectedCategory === 'All' ? true : skill.category === selectedCategory
      )
      .filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, selectedCategory]);

  return (
    <section id="skills" className="pt-24 lg:pt-32">
      <div className="mb-12">
        <h2 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">
          Skills, Education & Certifications
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search for a skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {skillCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredSkills.map((skill: Skill) => (
              <Card
                key={skill.name}
                className="group flex flex-col items-center justify-center p-4 text-center transition-all hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"
              >
                <skill.Icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                <p className="mt-2 text-sm font-medium">{skill.name}</p>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex h-24 items-center justify-center">
            <p className="text-center text-muted-foreground">
              No skills found matching your criteria.
            </p>
          </div>
        )}
      </div>

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
