interface ItemProps {
  category_name: string;
  created_at: string;
  description: string;
  id: number;
  image: any;
  image_url: string;
  is_active: boolean;
  market: string;
  name: string;
  price: string;
  rating: any;
  status: string;
  updated_at: string;
  weight: string;
}

interface ItemStateProps {
  isLoading: boolean;
  data: ItemProps[];
  refetchItems: () => void;
}

export type { ItemProps, ItemStateProps };
