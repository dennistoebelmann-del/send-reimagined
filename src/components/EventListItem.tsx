import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface EventListItemProps {
  title: string;
  artist: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  featured?: boolean;
}

const EventListItem = ({ 
  title, 
  artist, 
  description, 
  date, 
  time, 
  location, 
  image,
  featured = false 
}: EventListItemProps) => {
  return (
    <div className="group border-b border-border last:border-b-0 py-8 hover:bg-muted/30 transition-colors px-4 -mx-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Image */}
        <div className="md:col-span-3">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{time} Uhr</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">
            {title}
          </h3>
          
          <p className="text-xl md:text-2xl font-light text-foreground/90 mb-4">
            {artist}
          </p>

          <p className="text-base text-muted-foreground leading-relaxed line-clamp-2 font-light">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="md:col-span-2 flex md:flex-col gap-3 md:justify-center md:items-end">
          <Button 
            className="flex-1 md:w-full font-bold uppercase tracking-wide text-sm py-6 h-auto"
            size="lg"
          >
            Tickets
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 md:w-full font-bold uppercase tracking-wide text-sm py-6 h-auto"
            size="lg"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventListItem;
