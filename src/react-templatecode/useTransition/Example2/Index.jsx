import React, { useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function DemouseTransitionExample2() {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    startTransition(() => {
      const updatedItems = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(updatedItems);
    });
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
