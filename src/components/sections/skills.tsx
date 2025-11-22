'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData, type SkillCategory } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Badge } from '../ui/badge';

const categories: SkillCategory[] = ['Languages', 'Frontend', 'Backend', 'Tools'];

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
    <section id="skills" className="border-t py-20 sm:py-32">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Technical Skillset
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Constantly learning and adapting to new technologies. Here's what I'm proficient in.
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
              variant={activeCategory === 'All' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('All')}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  activeCategory === category ? 'default' : 'outline'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredSkills.map((skill) => (
            <Card
              key={skill.name}
              className="group flex flex-col items-center justify-center p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <skill.Icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
              <p className="mt-2 text-sm font-medium">{skill.name}</p>
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
