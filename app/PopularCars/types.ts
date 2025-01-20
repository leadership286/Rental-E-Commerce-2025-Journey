export interface CarCardProps {
    name: string;
    type: string;
    image: string;
    fuelCapacity: string;
    transmission: string;
    capacity: string;
    price: number;
    originalPrice?: number;
    liked?: boolean;
  }
  
  export interface SectionHeaderProps {
    title: string;
    showViewAll?: boolean;
  }