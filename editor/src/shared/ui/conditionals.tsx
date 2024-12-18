//
interface MapProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => JSX.Element;
  renderEmpty?: () => JSX.Element;
}

export const LazyMap = <T,>({
  items,
  renderItem,
  renderEmpty
}: MapProps<T>) => {
  if (!items || items.length === 0) {
    if (renderEmpty) return renderEmpty();
    return null;
  }

  return (
    <>
      { items.map(renderItem) }
    </>
  );
}
