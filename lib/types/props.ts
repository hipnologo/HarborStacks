// lib/types/props.ts
export interface SearchHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onToggleAdvanced?: () => void;  // Made optional since it's not used in current implementation
}