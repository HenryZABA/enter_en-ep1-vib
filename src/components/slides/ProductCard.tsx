interface ProductCardProps {
  name: string;
  desc: string;
  logo: string;
}

export const ProductCard = ({ name, desc, logo }: ProductCardProps) => (
  <div className="flex items-center gap-3 p-2 rounded border bg-background/50">
    <img 
      src={logo} 
      alt={name}
      crossOrigin="anonymous"
      className="w-6 h-6 rounded object-cover flex-shrink-0"
    />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium">{name}</p>
    </div>
    <p className="text-xs text-muted-foreground">{desc}</p>
  </div>
);
