import { Clock, Mail, MapPin, Phone } from "lucide-react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "The Outpost",
    subtitle: "New Orleans, LA",
    icon: (
      <MapPin className="h-5 w-5 text-zinc-500 group-hover:text-brandAmber transition-colors" />
    ),
  },
  {
    title: "Signal",
    subtitle: "+1 (555) WILDMEN",
    icon: (
      <Phone className="h-5 w-5 text-zinc-500 group-hover:text-brandAmber transition-colors" />
    ),
  },
  {
    title: "Watch",
    subtitle: "Daily: 10:00 - 19:00",
    icon: (
      <Clock className="h-5 w-5 text-zinc-500 group-hover:text-brandAmber transition-colors" />
    ),
  },
  {
    title: "Transmission",
    subtitle: "support@wildmen.com",
    icon: (
      <Mail className="h-5 w-5 text-zinc-500 group-hover:text-brandAmber transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-b border-white/5">
      {data.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.subtitle}
        />
      ))}
    </div>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-6 group hover:bg-white/5 p-8 transition-colors border-r border-white/5 last:border-r-0">
      <div className="p-3 rounded-sm border border-white/10 group-hover:border-brandAmber/50 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-brandAmber transition-colors mb-1">
          {title}
        </h3>
        <p className="text-white text-xs font-black uppercase tracking-tight group-hover:text-white transition-colors">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
