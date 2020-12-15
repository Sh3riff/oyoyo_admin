interface CategoryProps {
  id: number;
  name: string;
  image_url: string;
  image?: any;
  num_of_item: number;
  created_at: string;
  updated_at: string;
}

interface CategoryStateProps {
  isLoading: boolean;
  data: CategoryProps[];
  refetchCategories: () => void;
}

export type { CategoryProps, CategoryStateProps };
