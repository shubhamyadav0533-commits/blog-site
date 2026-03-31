import {
  Briefcase,
  Building,
  HeartPulse,
  Workflow,
  Users,
  Package,
  Rocket,
  Zap,
  Cloud,
  Palette
} from "lucide-react";

// Image Imports
import tcsHero from "./assets/tcs1.png";
import tcsContent from "./assets/tcs2.png";
import hclHero from "./assets/hcl1.png";
import hclContent from "./assets/hcl2.png";
import adobeHero from "./assets/adobe1.png";
import adobeContent from "./assets/adobe2.png";
import oracleHero from "./assets/oracle1.png";
import oracleContent from "./assets/oracle2.png";
import anquestLogo from "./assets/anquestlogo.png";

export interface BlogSection {
  type: "heading" | "paragraph" | "image";
  text?: string;
  url?: string;
  caption?: string;
}

export interface Company {
  id: string;
  badge: string;
  title: string;
  description: string;
  icon?: any;
  logo?: string;
  theme: "blue" | "purple" | "rose" | "amber";
  url: string;
  isExternal?: boolean;
  blog?: {
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: BlogSection[];
  };
}

export const companies: Company[] = [
  {
    id: "tcs",
    badge: "AI & Enterprise Solutions",
    title: "Tata Consultancy Services",
    description: "TCS is a global leader in AI services and enterprise solutions. Recognized by IDC as a leader in AI services, TCS helps enterprises scale AI from experimentation to production.",
    icon: Rocket,
    theme: "blue",
    url: "https://www.tcs.com/",
    blog: {
      author: "Dr. Arvind Krishna",
      date: "March 15, 2026",
      readTime: "8 min read",
      image: tcsHero,
      content: [
        {
          type: "heading",
          text: "Scaling AI from Experimentation to Production"
        },
        {
          type: "paragraph",
          text: "In the rapidly evolving landscape of enterprise technology, Artificial Intelligence has moved from a buzzword to a critical utility. At TCS, we've seen firsthand how organizations struggle to move beyond the pilot phase of AI adoption."
        },
        {
          type: "paragraph",
          text: "The key to successful AI implementation lies in a holistic approach that integrates data strategy, cloud infrastructure, and ethical frameworks. Our IDC-recognized leadership in AI services is built on this very principle."
        },
        {
          type: "heading",
          text: "Integrated Ecosystems"
        },
        {
          type: "paragraph",
          text: "We help our clients build integrated ecosystems where AI doesn't just solve isolated problems but drives organizational growth across all departments—from Finance to Operations."
        },
        {
          type: "image",
          url: tcsContent,
          caption: "Data visualization and AI insights dashboard."
        },
        {
          type: "paragraph",
          text: "The road to maturity in AI involves more than just selecting the right algorithms; it requires a culture of data-driven decision making."
        }
      ]
    }
  },

  {
    id: "hcl",
    badge: "AI Solutions & Engineering",
    title: "HCL Technologies",
    description: "HCL Tech is ambitious to be the best AI Solutions company in the world. With 220+ delivery centers and 70+ innovation labs, we offer cutting-edge AI/GenAI services.",
    icon: Zap,
    theme: "purple",
    url: "https://www.hcl-software.com/",
    blog: {
      author: "C. Vijayakumar",
      date: "March 20, 2026",
      readTime: "10 min read",
      image: hclHero,
      content: [
        {
          type: "heading",
          text: "Engineering the Future of Generative AI"
        },
        {
          type: "paragraph",
          text: "HCL Technologies is committed to engineering a future where AI is seamlessly woven into the fabric of every business process. Our focus on GenAI is not just about automation; it's about augmentative intelligence."
        },
        {
          type: "paragraph",
          text: "With over 70 innovation labs worldwide, we are constantly pushing the boundaries of what's possible in cloud computing and engineering services. Our 2,200+ patents are a testament to our relentless pursuit of innovation."
        },
        {
          type: "image",
          url: hclContent,
          caption: "Innovation lab where engineering meets future technology."
        },
        {
          type: "paragraph",
          text: "By focusing on the developer experience and robust API ecosystems, HCL Tech ensures that businesses can integrate AI solutions with minimal friction."
        }
      ]
    }
  },

  {
    id: "anquest",
    badge: "CRM & Development",
    title: "aNquest Media",
    description: "Specialized CRM software built for Real Estate and Healthcare Management. aNquest delivers industry-specific solutions that simplify workflows and accelerate growth. With automated lead tracking, secure cloud storage, and intelligent automation, we help professionals manage relationships efficiently and drive business growth.",
    logo: anquestLogo,
    theme: "blue",
    url: "https://anquestmedia.com/",
    isExternal: true
  },
  {
    id: "adobe",
    badge: "Creative & Experience Cloud",
    title: "Adobe",
    description: "Adobe empowers everyone to imagine, create, and bring digital experiences to life. From Creative Cloud for designers to Document Cloud for PDFs and Experience Cloud for businesses, Adobe provides industry-leading solutions.",
    icon: Palette,
    theme: "rose",
    url: "https://www.adobe.com/",
    blog: {
      author: "Shantanu Narayen",
      date: "March 10, 2026",
      readTime: "6 min read",
      image: adobeHero,
      content: [
        {
          type: "heading",
          text: "Creativity at Scale: The AI Revolution at Adobe"
        },
        {
          type: "paragraph",
          text: "Adobe has always been at the intersection of technology and creativity. With the introduction of Firefly and AI-driven workflows, we are opening up new horizons for creators worldwide."
        },
        {
          type: "paragraph",
          text: "The future of experience cloud lies in personalization. By leveraging AI, we enable businesses to deliver unique digital experiences to every customer, at scale."
        },
        {
          type: "image",
          url: adobeContent,
          caption: "Creative design tools powered by Adobe Sensei AI."
        }
      ]
    }
  },

  {
    id: "oracle",
    badge: "Cloud Infrastructure & ERP",
    title: "Oracle",
    description: "Oracle delivers cloud infrastructure and enterprise applications at the lowest cost. With OCI, AI Database across 200+ data centers, and Fusion Applications, Oracle powers businesses globally.",
    icon: Cloud,
    theme: "amber",
    url: "https://www.oracle.com/",
    blog: {
      author: "Safra Catz",
      date: "March 25, 2026",
      readTime: "7 min read",
      image: oracleHero,
      content: [
        {
          type: "heading",
          text: "Optimizing Enterprise Operations with OCI"
        },
        {
          type: "paragraph",
          text: "Oracle Cloud Infrastructure (OCI) is designed to run every application, from high-performance AI workloads to mission-critical enterprise apps, more securely and at lower cost."
        },
        {
          type: "paragraph",
          text: "Our Fusion Applications suite provides a unified platform for Finance, HR, and Supply Chain, allowing businesses to operate with unprecedented agility and intelligence."
        },
        {
          type: "image",
          url: oracleContent,
          caption: "Global infrastructure powering enterprise cloud ecosystems."
        }

      ]
    }
  }
];

export const blogCategories = [
  {
    id: "Tata-Consultancy-Services",
    title: "Tata Consultancy Services",
    description: "TCS is a global leader in AI services and enterprise solutions. Recognized by IDC as a leader in AI services, TCS helps enterprises scale AI from experimentation to production. With 2,200+ patents and 20,000+ clients, we drive innovation through cloud, AI, and digital transformation for organizations worldwide. ",
    icon: Briefcase,
    topics: ["Finance & Accounting", "Operations Management", "Enterprise Reporting"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "real-estate-crm",
    title: "Real Estate CRM",
    description: "Manage listings, track commissions, and automate client follow-ups seamlessly.",
    icon: Building,
    topics: ["Listing Management", "Commission Calculator", "Client Portal", "Lead Management & Follow-Ups"],
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: "hospital-management",
    title: "Hospital Management CRM",
    description: "Patient management, appointment scheduling, and healthcare workflow optimization platform.",
    icon: HeartPulse,
    topics: ["EHR Systems", "Appointment Booking", "Doctor Availability"],
    color: "bg-rose-100 text-rose-600",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Eliminate manual tasks with intelligent triggers and automated actions seamlessly.",
    icon: Workflow,
    topics: ["Auto-Responders", "Task Assignment", "Notifications", "Workflow Scheduling"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "hrms",
    title: "HRMS",
    description: "Centralize employee data, payroll, attendance, and performance management in one secure platform.",
    icon: Users,
    topics: ["Employee Management", "Payroll & Attendance", "Leave & Performance Tracking"],
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    description: "Track stock levels, manage suppliers, and optimize inventory operations in real time.",
    icon: Package,
    topics: ["Stock Tracking", "Supplier Management", "Low-Stock Alerts"],
    color: "bg-indigo-100 text-indigo-600",
  },
];
