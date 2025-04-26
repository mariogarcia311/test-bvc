"use client";
import { CategoryFilterProps } from "./CategoryFilter.type";
import { CategoryButton, FilterContainer } from "./CategoryFilter.styled";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const { currentCategory, handleCategoryChange } = useCategoryFilter();
  return (
    <FilterContainer>
      <CategoryButton
        $isActive={!currentCategory}
        onClick={() => handleCategoryChange(null)}
        aria-label="Mostrar todos los productos"
      >
        Todos
      </CategoryButton>

      {categories.map((category) => (
        <CategoryButton
          key={category}
          $isActive={currentCategory === category}
          onClick={() => handleCategoryChange(category)}
          aria-label={`Filtrar por ${category}`}
        >
          {category}
        </CategoryButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter;
