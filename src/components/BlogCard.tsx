import { ArrowRight, Clock } from "lucide-react";
import type { ElementType } from "react";

interface BlogCardProps {
  category: {
    id: string;
    title: string;
    description: string;
    icon: ElementType;
    topics: string[];
    color: string;
  };
}

export function BlogCard({ category }: BlogCardProps) {
  const Icon = category.icon;

  return (
<article className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-transparent hover:ring-2 hover:ring-pink-400/60 hover:ring-offset-0 transition-all duration-300 flex flex-col h-full group">      <div className="p-6 grow">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl ${category.color} bg-opacity-10 transition-transform group-hover:scale-110 duration-300`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>5 min read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {category.description}
        </p>
        
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Topics</h4>
          <div className="flex flex-wrap gap-2">
            {category.topics.map((topic, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-50 bg-gray-50/50 mt-auto rounded-b-2xl group-hover:bg-blue-50/30 transition-colors">
        <button 
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('companies');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read Articles
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
}
