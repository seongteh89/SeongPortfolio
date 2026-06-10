import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react";
import {
  Barcode,
  CheckCircle,
  ClipboardCheck,
  Cloud,
  Cog,
  Cpu,
  Database,
  Factory,
  FileText,
  MonitorSmartphone,
  Network,
  Radar,
} from "lucide-react";
import {
  type ElementType,
  type PointerEvent,
  type PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const heroAvatar = "/assets/hero-3d-avatar.png";
const heroVideo = "/assets/hero-programming-bg.mp4";

const metrics = [
  ["13+", "years of production software delivery"],
  ["6", "industrial and enterprise domains"],
  ["24/7", "factory system support exposure"],
  ["3", "engineers led on approval automation"],
];

const experienceHighlights = [
  {
    role: "Senior Software Application Engineer Lead",
    company: "Softing Singapore Pte Ltd",
    period: "Jun 2023 - Present",
    summary:
      "Leading Windows industrial/product software across requirements, system design, coding, debugging, documentation and release support.",
  },
  {
    role: "Senior Software Application Engineer",
    company: "NTT Limited",
    period: "May 2022 - Jun 2023",
    summary:
      "Delivered legacy application recovery, Access Control Review modernization, SMS API vendor integration and recurring reporting support.",
  },
  {
    role: "Senior Software Engineer",
    company: "Lite-On Singapore Pte Ltd",
    period: "Feb 2021 - May 2022",
    summary:
      "Built LIDAR calibration, motor-control tuning and traceability tools with WPF, WinForms, Prism MVVM and PCAN/CAN workflows.",
  },
  {
    role: "MES / Factory Software Engineer",
    company:
      "STMicroelectronics / ZNT Richter Malaysia Sdn. Bhd / AMD Export Sdn. Bhd",
    period: "2012 - Feb 2021",
    summary:
      "Delivered Camstar MES, Oracle-backed workflows, label verification, approval automation, SAP/INCA services and production support.",
  },
];

const strengths = [
  {
    name: "Product & Device Software",
    description:
      "Windows product applications, engineering tools, calibration workflows, diagnostic screens, PCAN/CAN communication and report generation.",
  },
  {
    name: "Industrial / MES Systems",
    description:
      "Camstar MES, semiconductor factory workflows, traceability, barcode and label verification, Oracle/SQL troubleshooting and production support.",
  },
  {
    name: "C#/.NET Delivery",
    description:
      "C#/.NET Framework, WinForms, WPF, ASP.NET exposure, REST/SOAP services, database-driven applications and full SDLC delivery.",
  },
  {
    name: "Legacy Modernization",
    description:
      "Modernizing older .NET, SQL CE, Access and C++ application areas while keeping active business and factory users stable.",
  },
  {
    name: "Technical Leadership",
    description:
      "Task coordination, solution review, debugging support, mentoring, stakeholder communication, documentation and issue ownership.",
  },
];

const skillGroups = [
  {
    name: "Languages & Frameworks",
    accent: "#C8FF2E",
    skills: ["C#", ".NET Framework", "C++", "WPF", "WinForms", "Prism MVVM", "ASP.NET", "JavaScript"],
  },
  {
    name: "Industrial / MES",
    accent: "#FFB84D",
    skills: ["Camstar", "MES Workflow", "Oracle SQL", "Barcode", "Label Verification", "Lot Transactions"],
  },
  {
    name: "Device & Tooling",
    accent: "#62D7FF",
    skills: ["LIDAR", "PCAN/CAN", "Motor Control", "Calibration", "Diagnostics", "Traceability"],
  },
  {
    name: "Data & Integration",
    accent: "#5DFFB0",
    skills: ["SQLite", "SQL Server", "MySQL", "Microsoft Access", "REST API", "SOAP API", "SAP", "INCA"],
  },
  {
    name: "Delivery",
    accent: "#FF5D9E",
    skills: ["SDLC", "UAT", "Production Support", "Release Notes", "Documentation", "Stakeholder Communication"],
  },
];

const projects = [
  {
    name: "Softing eXport Product Software",
    category: "Industrial Product Software",
    summary:
      "Enhanced C# Windows product modules for tester-result import, SQLite data handling, graph/report presentation and PDF certificate generation.",
    tags: ["C#/.NET", "SQLite", "Reporting", "Product QA"],
    accent: "#C8FF2E",
    visual: "export",
  },
  {
    name: "LIDAR Calibration / Motor Control",
    category: "Device Engineering Tools",
    summary:
      "Built WPF and WinForms tools for calibration, motor tuning, diagnostics and firmware communication through PCAN/CAN workflows.",
    tags: ["WPF", "WinForms", "PCAN/CAN", "Calibration"],
    accent: "#62D7FF",
    visual: "lidar",
  },
  {
    name: "STMicro EChecklist & MES",
    category: "Manufacturing Workflow",
    summary:
      "Led approval automation and enhanced C++ / C# MES modules for label verification, data validation and plant-user control.",
    tags: ["Team Lead", "C++ / C#", "Oracle SQL", "SOAP API"],
    accent: "#BE4CFF",
    visual: "checklist",
    video: "/assets/mes-facility-monitoring.mp4",
  },
  {
    name: "Camstar MES Angular Migration",
    category: "MES Modernization",
    summary:
      "Customized semiconductor MES UI and backend workflows using AngularJS, C#, Oracle SQL and client-specific Camstar frameworks.",
    tags: ["AngularJS", "Camstar", "Oracle", "Deployment"],
    accent: "#FFB84D",
    visual: "mes",
    video: "/assets/camstar-interaction.mp4",
  },
  {
    name: "AMD Export SAP / INCA / Ship Services",
    category: "Enterprise Integration",
    summary:
      "Delivered production-critical integration services, reporting tools and Camstar business rules for global semiconductor operations.",
    tags: ["SOAP", "REST", "Camstar", "24/7 Support"],
    accent: "#5DFFB0",
    visual: "integration",
  },
  {
    name: "NTT Access Review & SMS Portal",
    category: "Application Recovery",
    summary:
      "Modernized legacy Windows applications and upgraded a self-service reset password portal with new SMS API connectivity.",
    tags: ["C#", "WinForms", "SQL", "API Integration"],
    accent: "#FF5D9E",
    visual: "portal",
  },
];

const visualSystems: Record<
  string,
  {
    center: string;
    Icon: ElementType;
    nodes: Array<{ label: string; Icon: ElementType; x: number; y: number }>;
  }
> = {
  export: {
    center: "PDF",
    Icon: FileText,
    nodes: [
      { label: "TEST", Icon: Cpu, x: 18, y: 28 },
      { label: "SQL", Icon: Database, x: 76, y: 25 },
      { label: "GRAPH", Icon: Network, x: 22, y: 72 },
      { label: "CERT", Icon: FileText, x: 78, y: 70 },
    ],
  },
  lidar: {
    center: "LIDAR",
    Icon: Radar,
    nodes: [
      { label: "CAN", Icon: Network, x: 18, y: 30 },
      { label: "MOTOR", Icon: Cog, x: 78, y: 30 },
      { label: "CAL", Icon: Radar, x: 24, y: 74 },
      { label: "TRACE", Icon: Database, x: 76, y: 72 },
    ],
  },
  checklist: {
    center: "CHECK",
    Icon: ClipboardCheck,
    nodes: [
      { label: "XLS", Icon: FileText, x: 18, y: 28 },
      { label: "VALID", Icon: CheckCircle, x: 78, y: 28 },
      { label: "SOAP", Icon: Network, x: 24, y: 72 },
      { label: "PLANT", Icon: Factory, x: 76, y: 72 },
    ],
  },
  mes: {
    center: "MES",
    Icon: Factory,
    nodes: [
      { label: "LOT", Icon: Barcode, x: 16, y: 30 },
      { label: "RULE", Icon: Cog, x: 80, y: 30 },
      { label: "UI", Icon: MonitorSmartphone, x: 24, y: 74 },
      { label: "ORACLE", Icon: Database, x: 76, y: 74 },
    ],
  },
  integration: {
    center: "API",
    Icon: Network,
    nodes: [
      { label: "SAP", Icon: Cloud, x: 16, y: 28 },
      { label: "REST", Icon: Network, x: 80, y: 30 },
      { label: "LOT", Icon: Barcode, x: 24, y: 76 },
      { label: "INCA", Icon: Database, x: 76, y: 72 },
    ],
  },
  portal: {
    center: "SMS",
    Icon: MonitorSmartphone,
    nodes: [
      { label: "ACS", Icon: CheckCircle, x: 18, y: 30 },
      { label: "API", Icon: Network, x: 78, y: 28 },
      { label: "SQL", Icon: Database, x: 24, y: 74 },
      { label: "UAT", Icon: MonitorSmartphone, x: 76, y: 72 },
    ],
  },
};

type FadeInProps = PropsWithChildren<{
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}>;

function FadeIn({
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  children,
}: FadeInProps) {
  const MotionElement = useMemo(() => motion.create(as), [as]);

  return (
    <MotionElement
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionElement>
  );
}

function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 outline-offset-[-3px] outline-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      Contact Me
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </a>
  );
}

function Header() {
  const links = [
    ["Work Experience", "#about"],
    ["Projects", "#projects"],
    ["Strengths", "#services"],
  ];

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:top-5 md:px-10">
      <nav className="mx-auto flex h-16 max-w-[1700px] items-center justify-between rounded-full border border-white/12 bg-[#0C0C0C]/38 px-4 shadow-[0_18px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-[#C8FF2E] px-5 py-2.5 text-sm font-black uppercase tracking-wide text-[#0C0C0C] shadow-[0_0_32px_rgba(200,255,46,0.52)]"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0C0C0C] text-[#C8FF2E]">
            <Cpu className="h-4 w-4" strokeWidth={3} />
          </span>
          Seong
        </a>

        <div className="hidden items-center gap-14 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/72 transition-colors duration-200 hover:text-[#C8FF2E]"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/25 bg-white/[0.06] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-white/[0.12]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function HeroCommandCenter() {
  const commandNodes = [
    ["MES", "Camstar / Oracle", "#FFB84D"],
    ["LIDAR", "PCAN / Calibration", "#62D7FF"],
    ["API", "SOAP / REST / SAP", "#5DFFB0"],
    ["QA", "Reports / Certificates", "#C8FF2E"],
  ];

  return (
    <FadeIn
      delay={0.25}
      y={26}
      className="relative min-h-[430px] overflow-hidden rounded-[38px] border border-[#D7E2EA]/15 bg-white/[0.035] p-6 shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,255,46,0.22),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(98,215,255,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="relative z-10 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.32em] text-[#C8FF2E]">
            Production Systems
          </p>
          <h2 className="mt-3 max-w-[420px] text-[clamp(2rem,3.6vw,4.8rem)] font-black uppercase leading-[0.9] text-[#D7E2EA]">
            Software that runs on factory floors
          </h2>
        </div>
        <span className="rounded-full border border-[#D7E2EA]/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#D7E2EA]/70">
          Live stack
        </span>
      </div>

      <div className="relative z-10 mt-8 grid min-h-[230px] place-items-center">
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-[#C8FF2E]/35"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-40 w-40 rounded-full border border-[#62D7FF]/25"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="grid h-32 w-32 place-items-center rounded-full border border-[#D7E2EA]/20 bg-[#C8FF2E] text-center text-[#0C0C0C] shadow-[0_0_90px_rgba(200,255,46,0.45)]">
          <Factory className="h-8 w-8" strokeWidth={2.5} />
          <span className="text-2xl font-black uppercase leading-none">MES</span>
        </div>
        {commandNodes.map(([label, desc, color], index) => (
          <motion.div
            key={label}
            className="absolute rounded-2xl border bg-[#0C0C0C]/75 px-4 py-3 backdrop-blur"
            style={{
              borderColor: `${color}55`,
              boxShadow: `0 0 42px ${color}22`,
              left: `${index % 2 === 0 ? 5 : 68}%`,
              top: `${index < 2 ? 18 : 68}%`,
            }}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <strong className="block text-sm font-black uppercase tracking-widest" style={{ color }}>
              {label}
            </strong>
            <span className="mt-1 block text-xs font-light uppercase tracking-widest text-[#D7E2EA]/55">
              {desc}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
        {metrics.slice(0, 3).map(([value, label]) => (
          <div key={label} className="rounded-2xl border border-[#D7E2EA]/12 bg-[#0C0C0C]/55 p-4">
            <strong className="block text-3xl font-black leading-none text-[#C8FF2E]">
              {value}
            </strong>
            <span className="mt-2 block text-[10px] font-light uppercase tracking-widest text-[#D7E2EA]/55">
              {label}
            </span>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

function HeroProjectStrip() {
  return (
    <FadeIn delay={0.4} y={20} className="relative z-20 mt-8 overflow-hidden">
      <div className="flex gap-3">
        {projects.slice(0, 4).map((project) => (
          <a
            key={project.name}
            href="#projects"
            className="group min-w-[230px] rounded-[24px] border border-[#D7E2EA]/12 bg-white/[0.035] p-4 transition-transform duration-300 hover:-translate-y-1"
          >
            <span
              className="mb-4 block h-2 w-12 rounded-full"
              style={{ background: project.accent, boxShadow: `0 0 28px ${project.accent}` }}
            />
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D7E2EA]/45">
              {project.category}
            </p>
            <h3 className="mt-2 text-lg font-black uppercase leading-none text-[#D7E2EA]">
              {project.name}
            </h3>
          </a>
        ))}
      </div>
    </FadeIn>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#0C0C0C]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-58"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.92)_0%,rgba(12,12,12,0.72)_43%,rgba(12,12,12,0.38)_100%),linear-gradient(180deg,rgba(12,12,12,0.28)_0%,rgba(12,12,12,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,255,46,0.16),transparent_32%),radial-gradient(circle_at_84%_16%,rgba(190,76,255,0.14),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-24 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-20 mx-auto grid w-full max-w-[1700px] flex-1 items-center gap-10 px-6 pb-10 pt-28 md:px-10 md:pt-32 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <FadeIn
            as="p"
            delay={0.06}
            y={18}
            className="mb-5 inline-flex rounded-full border border-[#C8FF2E]/35 bg-[#C8FF2E]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C8FF2E]"
          >
            Senior Software Engineer / Team Lead / Solution Architect
          </FadeIn>
          <FadeIn
            as="h1"
            delay={0.1}
            y={36}
            className="text-[clamp(5rem,12vw,13rem)] font-black uppercase leading-[0.78] tracking-tight"
          >
            <span className="block text-[#C8FF2E] drop-shadow-[0_0_34px_rgba(200,255,46,0.28)]">
              Seong
            </span>
            <span className="block text-[#D7E2EA]">Portfolio</span>
          </FadeIn>
          <FadeIn
            as="p"
            delay={0.25}
            y={22}
            className="mt-7 max-w-3xl text-[clamp(1.15rem,2vw,1.85rem)] font-medium uppercase leading-snug tracking-wide text-[#D7E2EA]"
          >
            Industrial product software, MES workflow modernization, device
            engineering tools and enterprise integration.
          </FadeIn>
          <FadeIn
            as="p"
            delay={0.3}
            y={18}
            className="mt-4 max-w-2xl text-base font-light leading-relaxed text-[#D7E2EA]/68 md:text-lg"
          >
            13+ years delivering production-grade Windows applications,
            Camstar/MES systems, LIDAR tooling, reporting platforms and
            factory-support software.
          </FadeIn>
          <FadeIn delay={0.35} y={18} className="mt-8 flex flex-wrap gap-3">
            {["C#/.NET", "MES", "LIDAR", "Camstar", "Oracle SQL", "REST/SOAP"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D7E2EA]/14 bg-white/[0.035] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#D7E2EA]"
              >
                {tag}
              </span>
            ))}
          </FadeIn>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <FadeIn delay={0.45} y={18}>
              <ContactButton />
            </FadeIn>
            <FadeIn delay={0.5} y={18}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:text-sm"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </FadeIn>
          </div>
          <HeroProjectStrip />
        </div>
        <HeroCommandCenter />
      </div>
    </section>
  );
}

function ProjectBackplate({
  project,
  compact,
}: {
  project: (typeof projects)[number];
  compact: boolean;
}) {
  const accent = project.accent;

  if (project.visual === "mes") {
    return (
      <>
        <div className="absolute left-1/2 top-1/2 h-[76%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0C0C0C]/35 shadow-2xl" />
        <svg
          className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 opacity-80"
          viewBox="0 0 240 240"
        >
          <circle cx="120" cy="120" r="84" fill="none" stroke={`${accent}88`} strokeWidth="1.5" />
          <ellipse cx="120" cy="120" rx="84" ry="26" fill="none" stroke={`${accent}55`} strokeWidth="1.5" />
          <ellipse cx="120" cy="120" rx="34" ry="84" fill="none" stroke={`${accent}55`} strokeWidth="1.5" />
          <motion.path
            d="M42 120 C84 52 158 188 198 92"
            fill="none"
            stroke={accent}
            strokeDasharray="8 11"
            strokeWidth="2"
            animate={compact ? undefined : { strokeDashoffset: [0, -120] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        <span className="absolute left-6 top-7 text-[clamp(2rem,5vw,5.5rem)] font-black uppercase leading-none tracking-tight text-white/[0.05]">
          CAMSTAR
        </span>
      </>
    );
  }

  if (project.visual === "integration") {
    return (
      <div className="absolute left-1/2 top-1/2 h-[66%] w-[78%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute bottom-[12%] left-[10%] h-[44%] w-[78%] rounded-[999px] border border-white/10 bg-white/[0.06]"
          style={{ boxShadow: `inset 0 0 70px ${accent}22, 0 0 90px ${accent}25` }}
        />
        <div className="absolute bottom-[36%] left-[18%] h-[42%] w-[35%] rounded-full border border-white/10 bg-white/[0.06]" />
        <div className="absolute bottom-[40%] left-[42%] h-[52%] w-[38%] rounded-full border border-white/10 bg-white/[0.06]" />
        <Cloud className="absolute left-[24%] top-[22%] h-[52%] w-[52%] text-white/10" strokeWidth={1.2} />
      </div>
    );
  }

  if (project.visual === "lidar") {
    return (
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
        <span className="absolute inset-[16%] rounded-full border border-white/10" />
        <span className="absolute inset-[32%] rounded-full border border-white/10" />
        <motion.span
          className="absolute left-1/2 top-1/2 h-[3px] w-[48%] origin-left rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
          animate={compact ? undefined : { rotate: [0, 360] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (project.visual === "checklist") {
    return (
      <>
        <div
          className="absolute left-[10%] top-[18%] grid w-[36%] gap-3 rounded-[26px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur"
          style={{ boxShadow: `0 20px 80px ${accent}20` }}
        >
          <span className="h-3 rounded-full bg-[#D7E2EA]/70" />
          <span className="h-3 rounded-full bg-[#D7E2EA]/35" />
          <span className="h-3 w-2/3 rounded-full bg-[#D7E2EA]/25" />
          <span className="mt-2 h-10 rounded-2xl border border-white/10 bg-white/[0.06]" />
        </div>
        {[0, 1, 2].map((index) => (
          <motion.span
            key={index}
            className="project-cube absolute"
            style={{
              background: index === 0 ? accent : index === 1 ? "#62D7FF" : "#FFB84D",
              left: `${58 + index * 9}%`,
              top: `${24 + index * 17}%`,
              boxShadow: `0 0 42px ${accent}44`,
            }}
            animate={compact ? undefined : { y: [0, -10, 0], rotate: [8, -6, 8] }}
            transition={{ duration: 3.8 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </>
    );
  }

  if (project.visual === "portal") {
    return (
      <div className="absolute left-1/2 top-1/2 h-[62%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border border-white/10 bg-white/[0.06] p-5">
        <div className="h-[68%] rounded-[24px] border border-white/15 bg-[#0C0C0C]/70" />
        <div className="mx-auto mt-4 h-3 w-[28%] rounded-full bg-white/15" />
        <div
          className="absolute right-[16%] top-[23%] grid h-16 w-16 place-items-center rounded-2xl text-[#0C0C0C]"
          style={{ background: accent, boxShadow: `0 0 58px ${accent}` }}
        >
          <MonitorSmartphone className="h-8 w-8" strokeWidth={2.5} />
        </div>
      </div>
    );
  }

  return (
    <>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="absolute rounded-[28px] border border-white/10 bg-white/[0.07]"
          style={{
            left: `${18 + index * 9}%`,
            top: `${22 + index * 10}%`,
            height: `${46 - index * 5}%`,
            width: "42%",
            transform: `rotate(${index * 5 - 8}deg)`,
            boxShadow: `0 22px 80px ${accent}20`,
          }}
        />
      ))}
      <span className="absolute right-8 top-8 text-[clamp(2.5rem,5vw,6rem)] font-black uppercase leading-none text-white/[0.06]">
        PDF
      </span>
    </>
  );
}

function ProjectOrbitSystem({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  const system = visualSystems[project.visual] ?? visualSystems.export;
  const Icon = system.Icon;
  const displayedNodes = compact ? system.nodes.slice(0, 3) : system.nodes;

  return (
    <motion.div
      className="absolute inset-0"
      whileHover={{ scale: compact ? 1.025 : 1.015 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
    >
      <ProjectBackplate project={project} compact={compact} />

      <svg className="absolute inset-[11%] h-[78%] w-[78%]" viewBox="0 0 100 100">
        <defs>
          <radialGradient id={`${project.visual}-node-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={project.accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor={project.accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="36" fill={`url(#${project.visual}-node-glow)`} opacity="0.16" />
        {displayedNodes.map((node) => (
          <motion.line
            key={node.label}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke={project.accent}
            strokeWidth="0.45"
            strokeDasharray="2 2.4"
            opacity="0.6"
            animate={compact ? undefined : { strokeDashoffset: [0, -16] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-center sm:h-32 sm:w-32"
        style={{
          borderColor: `${project.accent}AA`,
          background: `radial-gradient(circle at 35% 22%, #FFFFFFCC, ${project.accent} 34%, #071011 74%)`,
          boxShadow: `0 0 90px ${project.accent}66, inset 0 0 28px #FFFFFF55`,
        }}
        animate={compact ? undefined : { y: [0, -8, 0], rotateY: [-8, 8, -8] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid place-items-center text-[#0C0C0C]">
          <Icon className="h-7 w-7" strokeWidth={2.6} />
          <span className="mt-1 text-xl font-black uppercase leading-none tracking-tight">
            {system.center}
          </span>
        </div>
      </motion.div>

      {displayedNodes.map((node, index) => {
        const NodeIcon = node.Icon;
        return (
          <motion.div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border bg-[#0C0C0C]/78 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#D7E2EA] backdrop-blur"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              borderColor: `${project.accent}77`,
              boxShadow: `0 0 34px ${project.accent}28`,
            }}
            animate={compact ? undefined : { y: [0, -8, 0] }}
            transition={{
              duration: 3.6 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.18,
            }}
            whileHover={{ scale: 1.12, y: -6 }}
          >
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-[#0C0C0C]"
              style={{ background: project.accent }}
            >
              <NodeIcon className="h-4 w-4" strokeWidth={2.6} />
            </span>
            {!compact && node.label}
          </motion.div>
        );
      })}

      <div className="absolute left-6 top-6 max-w-[270px]">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D7E2EA]/55">
          {project.category}
        </p>
        <h3 className={`${compact ? "mt-2 text-xl" : "mt-2 text-2xl"} font-black uppercase leading-none text-[#D7E2EA]`}>
          {project.name}
        </h3>
      </div>
    </motion.div>
  );
}

function ProjectArtwork({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  const videoSrc = "video" in project ? project.video : undefined;

  return (
    <div
      className={`group relative overflow-hidden rounded-[34px] border border-[#D7E2EA]/15 bg-[#111] ${compact ? "h-[270px] w-[420px]" : "h-full min-h-[220px] w-full"}`}
      style={{
        background: `radial-gradient(circle at 16% 8%, ${project.accent}4f, transparent 30%), radial-gradient(circle at 80% 70%, ${project.accent}2f, transparent 34%), linear-gradient(135deg, #111, #080808 70%)`,
      }}
    >
      {videoSrc && !compact && (
        <>
          <video
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-50 saturate-[1.12]"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.88)_0%,rgba(12,12,12,0.52)_48%,rgba(12,12,12,0.78)_100%)]" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 58% 46%, ${project.accent}33, transparent 35%)`,
            }}
          />
          <div className="absolute right-6 top-6 rounded-full border border-white/18 bg-[#0C0C0C]/55 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#D7E2EA]/75 backdrop-blur">
            Live system visual
          </div>
        </>
      )}
      <div className="absolute inset-0 opacity-55 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <ProjectOrbitSystem project={project} compact={compact} />
      <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 gap-2">
        {project.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span
            key={tag}
            className="truncate rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 px-3 py-2 text-center text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  offset,
}: {
  items: typeof projects;
  direction: "left" | "right";
  offset: number;
}) {
  const tripled = [...items, ...items, ...items];
  const translate = direction === "right" ? offset - 240 : -(offset - 240);

  return (
    <div className="relative h-[270px] w-full overflow-hidden">
      <div
        className="absolute left-0 top-0 flex gap-3"
        style={{
          transform: `translate3d(${translate}px, 0, 0)`,
          willChange: "transform",
        }}
      >
        {tripled.map((project, index) => (
          <ProjectArtwork
            key={`${project.name}-${index}`}
            project={project}
            compact
          />
        ))}
      </div>
    </div>
  );
}

function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow items={projects.slice(0, 3)} direction="right" offset={offset} />
        <MarqueeRow items={projects.slice(3)} direction="left" offset={offset} />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C8FF2E]/10 blur-[120px]" />
      <div className="mx-auto max-w-[1700px]">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <FadeIn>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-[#C8FF2E]">
              Work Experience
            </p>
            <h2 className="hero-heading text-[clamp(3.6rem,10vw,155px)] font-black uppercase leading-[0.88] tracking-tight">
              Engineering lead for real production systems.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} y={24}>
            <p className="max-w-3xl text-[clamp(1rem,1.7vw,1.45rem)] font-light leading-relaxed text-[#D7E2EA]/80">
              Senior software engineer and hands-on technical lead with 13+
              years delivering product software, device-related engineering
              tools, manufacturing/MES systems and database-backed enterprise
              applications.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[380px_1fr] lg:items-start">
          <FadeIn className="overflow-hidden rounded-[34px] border border-[#D7E2EA]/15 bg-white/[0.035] p-4">
            <div className="relative grid h-[340px] place-items-center overflow-hidden rounded-[28px] bg-[#111]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(200,255,46,0.24),transparent_42%)]" />
              <img
                src={heroAvatar}
                alt="Teh Theam Seong 3D avatar"
                className="relative z-10 h-full w-full object-contain object-bottom"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-[#C8FF2E] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#0C0C0C]">
                Singapore
              </div>
            </div>
            <div className="px-2 pb-1 pt-5">
              <h3 className="text-2xl font-black uppercase leading-none text-[#D7E2EA]">
                Teh Theam Seong
              </h3>
              <p className="mt-3 text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                Senior Software Application Engineer Lead
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["C#/.NET", "WPF", "WinForms", "MES", "Camstar", "Oracle SQL", "PCAN/CAN", "REST/SOAP"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#D7E2EA]/15 px-3 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid gap-3 rounded-[24px] border border-[#D7E2EA]/12 bg-[#0C0C0C]/55 p-4">
                <a href="mailto:teh_ts@hotmail.com" className="flex items-center gap-3 text-sm text-[#D7E2EA]/80">
                  <Mail className="h-4 w-4 text-[#C8FF2E]" />
                  teh_ts@hotmail.com
                </a>
                <a href="tel:+6588788923" className="flex items-center gap-3 text-sm text-[#D7E2EA]/80">
                  <Phone className="h-4 w-4 text-[#C8FF2E]" />
                  +65 8878 8923
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-4">
              {metrics.map(([value, label]) => (
                <FadeIn
                  key={label}
                  className="min-h-[150px] rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.035] p-5"
                >
                  <strong className="block text-[clamp(2rem,5vw,4rem)] font-black leading-none text-[#C8FF2E]">
                    {value}
                  </strong>
                  <span className="mt-4 block max-w-[13rem] text-xs font-light uppercase tracking-widest text-[#D7E2EA]/70">
                    {label}
                  </span>
                </FadeIn>
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {skillGroups.map((group, index) => (
                <FadeIn
                  key={group.name}
                  delay={index * 0.05}
                  className="rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.035] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-black uppercase leading-none text-[#D7E2EA]">
                      {group.name}
                    </h3>
                    <span
                      className="h-3 w-12 rounded-full"
                      style={{ background: group.accent, boxShadow: `0 0 28px ${group.accent}` }}
                    />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#D7E2EA]/12 bg-[#0C0C0C]/55 px-3 py-2 text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="grid gap-3">
              {experienceHighlights.map((item, index) => (
                <FadeIn
                  key={item.role}
                  delay={index * 0.08}
                  className="grid gap-5 rounded-[28px] border border-[#D7E2EA]/15 bg-white/[0.035] p-5 md:grid-cols-[150px_1fr]"
                >
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#C8FF2E]">
                      {item.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[clamp(1.2rem,2vw,2rem)] font-black uppercase leading-tight text-[#D7E2EA]">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/50">
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-4xl text-base font-light leading-relaxed text-[#D7E2EA]/70">
                      {item.summary}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const strengthIcons = [MonitorSmartphone, Factory, Cpu, Database, Network];

  return (
    <section
      id="services"
      className="relative overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="pointer-events-none absolute left-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#62D7FF]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[8%] h-[560px] w-[560px] rounded-full bg-[#C8FF2E]/10 blur-[130px]" />
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-10 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight md:mb-16"
      >
        Strengths
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        className="mx-auto mb-12 max-w-3xl text-center text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-[#D7E2EA]/70"
      >
        The practical blend behind the work: engineering depth, factory domain
        knowledge, production support discipline and hands-on technical
        leadership.
      </FadeIn>
      <div className="relative z-10 mx-auto grid max-w-[1700px] gap-4 md:grid-cols-2 xl:grid-cols-5">
        {strengths.map((strength, index) => (
          (() => {
            const Icon = strengthIcons[index] ?? Cpu;
            const accent = skillGroups[index]?.accent ?? "#C8FF2E";
            return (
          <FadeIn
            key={strength.name}
            delay={index * 0.1}
            className="group min-h-[390px] overflow-hidden rounded-[32px] border border-[#D7E2EA]/15 bg-white/[0.035] p-6 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[clamp(2.5rem,5vw,5rem)] font-black leading-none text-[#D7E2EA]/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-[#0C0C0C]"
                style={{ background: accent, boxShadow: `0 0 52px ${accent}44` }}
              >
                <Icon className="h-7 w-7" strokeWidth={2.4} />
              </span>
            </div>
            <h3 className="mt-8 text-[clamp(1.4rem,2vw,2.2rem)] font-black uppercase leading-none text-[#D7E2EA]">
                {strength.name}
            </h3>
            <p className="mt-5 text-[clamp(0.9rem,1.1vw,1.05rem)] font-light leading-relaxed text-[#D7E2EA]/68">
                {strength.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {(skillGroups[index]?.skills.slice(0, 4) ?? []).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#D7E2EA]/12 bg-[#0C0C0C]/55 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#D7E2EA]/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
            );
          })()
        ))}
      </div>
    </section>
  );
}

function LiveProjectButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Discuss Project
      <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
    </a>
  );
}

function ProjectRailCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      className="relative h-[min(64vh,620px)] min-h-[440px] w-[min(78vw,760px)] shrink-0 snap-center overflow-hidden rounded-[38px] border border-[#D7E2EA]/20 bg-[#0C0C0C]"
      whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <ProjectArtwork project={project} />
      <div className="pointer-events-none absolute right-7 top-6 text-[clamp(3rem,8vw,6.5rem)] font-black leading-none text-[#D7E2EA]/10">
        {String(index + 1).padStart(2, "0")}
      </div>
      <p className="pointer-events-none absolute bottom-20 left-6 max-w-[520px] text-[clamp(0.95rem,1.2vw,1.15rem)] font-light leading-relaxed text-[#D7E2EA]/80">
        {project.summary}
      </p>
    </motion.article>
  );
}

function ProjectScroller() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * Math.min(780, window.innerWidth * 0.72),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || event.button !== 0) return;
    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: rail.scrollLeft,
    };
    rail.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail || !dragState.current.active) return;
    const distance = event.clientX - dragState.current.startX;
    rail.scrollLeft = dragState.current.scrollLeft - distance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    dragState.current.active = false;
    setIsDragging(false);
    try {
      rail?.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture can already be released if the browser cancels the drag.
    }
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => scrollRail(-1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => scrollRail(1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div
        ref={railRef}
        className={`project-rail flex snap-x snap-mandatory gap-4 overflow-x-auto pb-8 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        {projects.map((project, index) => (
          <ProjectRailCard
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 min-h-screen overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1700px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-[#C8FF2E]">
              Selected Works
            </p>
            <h2 className="hero-heading text-[clamp(3.2rem,10vw,145px)] font-black uppercase leading-[0.9] tracking-tight">
              Project systems
            </h2>
          </FadeIn>
          <FadeIn delay={0.12} y={24}>
            <p className="max-w-xl text-[clamp(1rem,1.5vw,1.25rem)] font-light leading-relaxed text-[#D7E2EA]/75">
              Production software, MES workflows, device tools and enterprise
              integrations translated into interactive system cards.
            </p>
          </FadeIn>
        </div>
        <ProjectScroller />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-[#0C0C0C] px-5 py-20 text-center sm:px-8 md:px-10"
    >
      <div className="flex max-w-5xl flex-col items-center gap-10">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight"
        >
          Let&apos;s build
        </FadeIn>
        <FadeIn
          as="p"
          delay={0.15}
          className="max-w-2xl text-[clamp(1rem,2vw,1.35rem)] font-light uppercase leading-relaxed tracking-wide text-[#D7E2EA]"
        >
          Reliable product software, industrial systems and engineering tools
          that survive real production use.
        </FadeIn>
        <FadeIn
          delay={0.25}
          className="grid gap-3 rounded-[34px] border border-[#D7E2EA]/15 bg-white/[0.03] p-5 text-left text-[#D7E2EA] sm:grid-cols-2"
        >
          <a href="mailto:teh_ts@hotmail.com" className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-[#C8FF2E]" />
            teh_ts@hotmail.com
          </a>
          <a href="tel:+6588788923" className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-[#C8FF2E]" />
            +65 8878 8923
          </a>
        </FadeIn>
        <FadeIn delay={0.35}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
