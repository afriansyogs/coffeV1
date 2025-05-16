const Category = ({ categoryData }) => {
  // Group 2 category
  const groupedForLg = [];
  for (let i = 0; i < categoryData.length; i += 2) {
    groupedForLg.push(categoryData.slice(i, Math.min(i + 2, categoryData.length)));
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 space-y-12">
        {/* For medium screens and smaller - one category per row with alternating layout */}
        <div className="block lg:hidden bg-white">
          {categoryData.map((category, index) => {
            // Alternate layout based on even/odd index for sm/md
            const imageFirst = index % 2 === 0;
            
            return (
              <div key={category.category_name} className="mb-12">
                <div className={`flex flex-col ${imageFirst ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-6`}>
                  <img 
                    src={category.category_img} 
                    alt={category.category_name} 
                    className="w-full sm:w-1/2 h-64 object-cover rounded shadow" 
                  />
                  <div className="text-center sm:text-left px-4">
                    <h3 className="text-xl font-bold mb-2">{category.category_name}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* For large screens - two categories per row with alternating row layouts */}
        <div className="hidden lg:block bg-white">
          {groupedForLg.map((pair, rowIndex) => {
            // Determine layout direction for this row
            const isEvenRow = rowIndex % 2 === 0;
            // For even rows (0, 2, 4...) - image on left
            // For odd rows (1, 3, 5...) - image on right
            
            return (
              <div key={rowIndex} className="grid grid-cols-2 gap-8 mb-12">
                {pair.map((category, indexInPair) => (
                  <div key={category.category_name} className="flex items-center gap-6">
                    <div className={`flex w-full ${isEvenRow ? 'flex-row' : 'flex-row-reverse'} items-center gap-6`}>
                      <img 
                        src={category.category_img} 
                        alt={category.category_name} 
                        className="w-1/2 h-64 object-cover rounded shadow" 
                      />
                      <div className="text-left px-4">
                        <h3 className="text-xl font-bold mb-2">{category.category_name}</h3>
                        <p className="text-gray-600 mb-3">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;