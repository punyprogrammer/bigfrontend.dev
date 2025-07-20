const fetchListWithAmount = async (amount = 5) => {
  let lastIdCalled = undefined;
  let items = [];

  while (items.length < amount) {
    const response = await fetchList(lastIdCalled);
    const newItems = response.items;

    if (newItems.length === 0) break; // no more data

    // Optional: apply a filter here
    const filtered = newItems.filter(item => /* your condition */ true);

    if (filtered.length === 0) {
      // Still need to update lastId to avoid infinite loop
      lastIdCalled = newItems.at(-1)?.id;
      continue;
    }

    const remaining = amount - items.length;
    items.push(...filtered.slice(0, remaining));

    if (items.length < amount) {
      lastIdCalled = newItems.at(-1).id;
    }
  }

  return items;
};
