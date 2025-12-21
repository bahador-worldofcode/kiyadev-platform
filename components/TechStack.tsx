"use client";

import { motion } from "framer-motion";
import { 
  Cpu, Database, Globe, Layers, Lock, Smartphone, Terminal, Zap, 
  Code2, Box, Activity, Server, Share2, FileJson, TabletSmartphone, Command 
} from "lucide-react";

const technologies = [
  // ردیف ۱: زبان‌های برنامه نویسی (The Brains)
  { name: "Python & Django", description: "AI & Backend Powerhouse", icon: Code2, color: "text-yellow-400", border: "group-hover:border-yellow-400/50", shadow: "group-hover:shadow-yellow-400/20" },
  { name: "TypeScript", description: "Strict Type Safety", icon: Terminal, color: "text-blue-600", border: "group-hover:border-blue-600/50", shadow: "group-hover:shadow-blue-600/20" },
  { name: "Rust", description: "Blazing Speed", icon: Cpu, color: "text-orange-500", border: "group-hover:border-orange-500/50", shadow: "group-hover:shadow-orange-500/20" },
  { name: "Golang", description: "Scalable Microservices", icon: Activity, color: "text-cyan-400", border: "group-hover:border-cyan-400/50", shadow: "group-hover:shadow-cyan-400/20" },
  
  // ردیف ۲: فرانت‌اند و موبایل (The Face)
  { name: "Next.js 15", description: "Modern Web Framework", icon: Globe, color: "text-white", border: "group-hover:border-white/50", shadow: "group-hover:shadow-white/20" },
  { name: "React", description: "Interactive UI", icon: Zap, color: "text-blue-400", border: "group-hover:border-blue-400/50", shadow: "group-hover:shadow-blue-400/20" },
  { name: "Flutter", description: "Native Mobile Apps", icon: TabletSmartphone, color: "text-blue-300", border: "group-hover:border-blue-300/50", shadow: "group-hover:shadow-blue-300/20" },
  { name: "Tailwind CSS", description: "Rapid Styling Engine", icon: Layers, color: "text-pink-400", border: "group-hover:border-pink-400/50", shadow: "group-hover:shadow-pink-400/20" },
  
  // ردیف ۳: داده و زیرساخت (The Backbone)
  { name: "Supabase", description: "Postgres Realtime DB", icon: Database, color: "text-emerald-400", border: "group-hover:border-emerald-400/50", shadow: "group-hover:shadow-emerald-400/20" },
  { name: "MongoDB", description: "NoSQL Flexible Data", icon: FileJson, color: "text-green-500", border: "group-hover:border-green-500/50", shadow: "group-hover:shadow-green-500/20" },
  { name: "GraphQL", description: "Efficient APIs", icon: Share2, color: "text-pink-600", border: "group-hover:border-pink-600/50", shadow: "group-hover:shadow-pink-600/20" },
  { name: "Docker", description: "Containerization", icon: Box, color: "text-blue-500", border: "group-hover:border-blue-500/50", shadow: "group-hover:shadow-blue-500/20" },
  
  // ردیف ۴: لبه تکنولوژی (The Future)
  { name: "AI Integration", description: "LLM & Neural Networks", icon: Cpu, color: "text-purple-500", border: "group-hover:border-purple-500/50", shadow: "group-hover:shadow-purple-500/20" },
  { name: "Web3 & Blockchain", description: "Smart Contracts", icon: Lock, color: "text-yellow-500", border: "group-hover:border-yellow-500/50", shadow: "group-hover:shadow-yellow-500/20" },
  { name: "Linux Server", description: "Infrastructure Control", icon: Command, color: "text-gray-400", border: "group-hover:border-gray-400/50", shadow: "group-hover:shadow-gray-400/20" },
  { name: "PWA", description: "Web Installable Apps", icon: Smartphone, color: "text-green-400", border: "group-hover:border-green-400/50", shadow: "group-hover:shadow-green-400/20" },
];

export default function TechStack() {
  return (
    <section className="bg-black py-20 px-6 border-y border-white/5">
      <div className="container mx-auto">
        
        {/* تیتر بخش */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-200">هسته فناوری کیا دِو</h3>
          <p className="mt-2 text-sm text-gray-500">مسلط به ۱۶ تکنولوژی برتر جهان برای اجرای هر نوع پروژه</p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        </div>

        {/* شبکه ماتریسی ۴ در ۴ */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-xl ${tech.border} ${tech.shadow}`}
            >
              {/* آیکون */}
              <div className={`rounded-full bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110 group-hover:bg-transparent`}>
                <tech.icon className={`h-8 w-8 ${tech.color}`} />
              </div>
              
              {/* متن‌ها */}
              <div className="text-center">
                <h4 className="text-sm font-bold text-gray-200 group-hover:text-white">{tech.name}</h4>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-mono mt-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-gray-400">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}