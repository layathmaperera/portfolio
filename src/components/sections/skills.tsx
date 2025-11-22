'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skillsData, type SkillCategory } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Badge } from '../ui/badge';

const categories: SkillCategory[] = ['Cloud', 'DevOps', 'Languages', 'Tools'];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory | 'All'>('All');

  const filteredSkills = useMemo(() => {
    return skillsData.filter(
      (skill) =>
        (activeCategory === 'All' || skill.category === activeCategory) &&
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCategory]);

  return (
    <section id="skills" className="bg-card py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Technical Skillset
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of technologies I work with to build and manage modern
            applications.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={activeCategory === 'All' ? 'default' : 'secondary'}
              onClick={() => setActiveCategory('All')}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  activeCategory === category ? 'default' : 'secondary'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.name}
              className="transform-gpu transition-transform duration-300 hover:-translate-y-2"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">
                  {skill.name}
                </CardTitle>
                <skill.Icon className="h-6 w-6 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="outline">{skill.category}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredSkills.length === 0 && (
          <p className="mt-8 text-center text-muted-foreground">
            No skills found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
}
