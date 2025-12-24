import React from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { SkillCard, Skill } from '../SkillCard';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const MOCK_SKILLS: Skill[] = [
  {
    id: '1',
    title: 'Urban Gardening 101',
    category: 'Hobby',
    description: 'Top tips for aspiring Urban Gardeners. A blog post with practical tips and advice for urban gardeners.',
    author: { 
      name: 'Sarah Green', 
      avatar: 'https://github.com/shadcn.png',
      level: 'Expert'
    },
    likes: 124,
    comments: 45,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: '3D Printing Basics',
    category: 'Tech',
    description: 'Beginner\'s Guide to 3D Printing. A complete tutorial regarding the basics of 3D printing and modeling.',
    author: { 
      name: 'Mike Tech', 
      avatar: 'https://github.com/shadcn.png',
      level: 'Intermediate'
    },
    likes: 89,
    comments: 21,
    image: 'https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'React Performance',
    category: 'Coding',
    description: 'Advanced techniques for optimizing React applications. Learn about memoization, virtualization, and more.',
    author: { 
      name: 'Dev Guru', 
      avatar: 'https://github.com/shadcn.png',
      level: 'Senior'
    },
    likes: 342,
    comments: 87,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
  },
];

export function Home() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John</h1>
          <p className="text-gray-500 mt-1">Here's some personalized content based on your interests.</p>
        </div>
        <div className="hidden md:block">
           <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
           </Avatar>
        </div>
      </div>

      {/* Primary Action Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01]">
         <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl font-bold mb-2">Share Skills. Build Together.</h2>
            <p className="mb-6 text-blue-50">Post a resource and share with your community...</p>
            <Button size="icon" className="rounded-full w-12 h-12 bg-white/20 hover:bg-white/30 text-white border-0">
               <Plus className="w-6 h-6" />
            </Button>
         </div>
         {/* Decorative circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl" />
         <div className="absolute bottom-0 right-20 w-32 h-32 bg-blue-300/20 rounded-full translate-y-1/2 blur-xl" />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
         <Button variant="default" className="rounded-full bg-[#1E90FF] hover:bg-blue-600">All</Button>
         <Button variant="secondary" className="rounded-full bg-white hover:bg-gray-100 text-gray-700">Trending</Button>
         <Button variant="secondary" className="rounded-full bg-white hover:bg-gray-100 text-gray-700">Coding</Button>
         
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button variant="ghost" className="rounded-full ml-auto">
                 Filter <ChevronDown className="ml-1 w-4 h-4" />
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
               <DropdownMenuItem>Date</DropdownMenuItem>
               <DropdownMenuItem>Popularity</DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {MOCK_SKILLS.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
         ))}
      </div>
    </div>
  );
}
