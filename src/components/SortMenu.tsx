
import { useState } from "react";
import { SortOptions } from "@/pages/DealExplorer";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";

type SortMenuProps = {
  currentSort: SortOptions;
  onSortChange: (sort: SortOptions) => void;
};

type SortOption = {
  label: string;
  field: SortOptions['field'];
};

const sortOptions: SortOption[] = [
  { label: "Price", field: "amount" },
  { label: "Multiple", field: "multiple" },
  { label: "Cash Flow", field: "cashFlow" },
];

const SortMenu = ({ currentSort, onSortChange }: SortMenuProps) => {
  const [open, setOpen] = useState(false);
  
  const handleSelect = (field: SortOptions['field']) => {
    // If selecting the same field, toggle direction
    const direction = field === currentSort.field && currentSort.direction === "desc" ? "asc" : "desc";
    onSortChange({ field, direction });
    setOpen(false);
  };

  // Find the current sort option label
  const currentOption = sortOptions.find(option => option.field === currentSort.field);
  
  return (
    <DropdownMenu open={open} onOpenChange={setOpen} >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>Sort by: {currentOption?.label}</span>
          {currentSort.direction === "desc" ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {sortOptions.map((option) => (
          <DropdownMenuItem 
            key={option.field}
            onClick={() => handleSelect(option.field)}
            className="cursor-pointer flex items-center justify-between"
          >
            <span>{option.label}</span>
            {option.field === currentSort.field && (
              currentSort.direction === "desc" ? 
                <ArrowDown className="h-4 w-4" /> : 
                <ArrowUp className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => onSortChange({ ...currentSort, direction: currentSort.direction === "desc" ? "asc" : "desc" })}
          className="cursor-pointer"
        >
          {currentSort.direction === "desc" ? "Sort Ascending" : "Sort Descending"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortMenu;
