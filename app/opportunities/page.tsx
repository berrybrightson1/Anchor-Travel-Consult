"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Clock } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROGRAMS = [
  {
    id: "undergrad-oxford",
    name: "Undergraduate Programme",
    university: "University of Oxford",
    location: "Oxford, England",
    level: "Undergraduate",
    duration: "3 years",
    ranking: "#1 UK",
    description: "World-renowned undergraduate programs across all disciplines.",
    students: 12000,
  },
  {
    id: "undergrad-cambridge",
    name: "Undergraduate Programme",
    university: "University of Cambridge",
    location: "Cambridge, England",
    level: "Undergraduate",
    duration: "3 years",
    ranking: "#2 UK",
    description: "Prestigious undergraduate education with exceptional facilities.",
    students: 11500,
  },
  {
    id: "masters-lse",
    name: "MSc Economics",
    university: "London School of Economics",
    location: "London, England",
    level: "Masters",
    duration: "1 year",
    ranking: "#3 UK",
    description: "Leading graduate program in economics and finance.",
    students: 5000,
  },
  {
    id: "masters-imperial",
    name: "MSc Engineering",
    university: "Imperial College London",
    location: "London, England",
    level: "Masters",
    duration: "1-2 years",
    ranking: "#4 UK",
    description: "Advanced engineering graduate programs.",
    students: 4500,
  },
  {
    id: "phd-oxford",
    name: "PhD Research Programme",
    university: "University of Oxford",
    location: "Oxford, England",
    level: "PhD",
    duration: "3-4 years",
    ranking: "#1 UK",
    description: "Doctoral research across sciences, humanities, and social sciences.",
    students: 3000,
  },
  {
    id: "phd-cambridge",
    name: "PhD Research Programme",
    university: "University of Cambridge",
    location: "Cambridge, England",
    level: "PhD",
    duration: "3-4 years",
    ranking: "#2 UK",
    description: "Prestigious doctoral programs with world-leading research.",
    students: 2800,
  },
  {
    id: "masters-manchester",
    name: "MSc Data Science",
    university: "University of Manchester",
    location: "Manchester, England",
    level: "Masters",
    duration: "1 year",
    ranking: "#27 UK",
    description: "Cutting-edge data science and AI master's program.",
    students: 800,
  },
  {
    id: "undergrad-ucl",
    name: "Undergraduate Programme",
    university: "University College London",
    location: "London, England",
    level: "Undergraduate",
    duration: "3 years",
    ranking: "#8 UK",
    description: "Comprehensive undergraduate education in diverse fields.",
    students: 13000,
  },
];

const LEVEL_OPTIONS = [
  { value: "all", label: "All Levels" },
  { value: "Undergraduate", label: "Undergraduate" },
  { value: "Masters", label: "Masters" },
  { value: "PhD", label: "PhD" },
];

const DURATION_OPTIONS = [
  { value: "all", label: "All Durations" },
  { value: "1 year", label: "1 Year" },
  { value: "1-2 years", label: "1-2 Years" },
  { value: "3 years", label: "3 Years" },
  { value: "3-4 years", label: "3-4 Years" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function OpportunitiesPage() {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PROGRAMS.filter((program) => {
    const matchLevel = selectedLevel === "all" || program.level === selectedLevel;
    const matchDuration = selectedDuration === "all" || program.duration === selectedDuration;
    const matchSearch =
      searchQuery === "" ||
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.university.toLowerCase().includes(searchQuery.toLowerCase());

    return matchLevel && matchDuration && matchSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-b-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            UK Education Opportunities
          </h1>
          <p className="text-lg text-gray-600">
            Explore thousands of programs across the UK's leading universities.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-50 p-6 rounded-xl border border-gray-200"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="University or program..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Level
              </label>
              <Combobox
                items={LEVEL_OPTIONS}
                value={selectedLevel}
                onChange={setSelectedLevel}
                placeholder="Select level..."
              />
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <Combobox
                items={DURATION_OPTIONS}
                value={selectedDuration}
                onChange={setSelectedDuration}
                placeholder="Select duration..."
              />
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <p className="text-sm text-gray-600 font-medium">
                {filtered.length} opportunity{filtered.length !== 1 ? "ies" : ""} found
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              No opportunities match your filters. Try adjusting your search.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((program) => (
              <motion.div key={program.id} variants={itemVariants}>
                <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        {program.level}
                      </span>
                      <span className="text-yellow-500 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs font-semibold">{program.ranking}</span>
                      </span>
                    </div>
                    <CardTitle className="text-lg">{program.name}</CardTitle>
                    <CardDescription className="font-semibold text-gray-900">
                      {program.university}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-gray-600 mb-4">{program.description}</p>

                    {/* Program Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span>~{program.students.toLocaleString()} students</span>
                      </div>
                      <p className="text-sm text-gray-500">{program.location}</p>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full" variant="secondary">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </main>
  );
}
