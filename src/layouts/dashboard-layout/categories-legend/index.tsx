import { CATEGORIES } from '@/constants/categories';

export const CategoriesLegend = () => {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto px-8 pb-3">
      <div className="grid w-full min-w-[1400px] grid-cols-9 items-center gap-x-2 gap-y-2">
        {Object.values(CATEGORIES).map((category) => (
          <div
            key={category.label}
            className="inline-flex w-fit items-center gap-2"
          >
            <span className="whitespace-nowrap text-xs font-medium uppercase">
              {category.label}
            </span>
            <span
              className="size-3 rounded-full"
              style={{
                backgroundColor: category.color,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center self-stretch border-l border-primary pl-2">
        <span className="text-[22px]/[22px] font-[900] text-new-york-primary-1">
          LEGEND
        </span>
      </div>
    </div>
  );
};
