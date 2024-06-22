import { ArrayProps } from "@/types/Array";

export const CheckNewDocs = (array: ArrayProps[]): string | undefined => {
  const latestItem = array.reduce(
    (latest: ArrayProps | undefined, item: ArrayProps) => {
      if (!latest || !latest.createdAt) return item;
      if (!item.createdAt) return latest;
      return new Date(item.createdAt) > new Date(latest.createdAt)
        ? item
        : latest;
    },
    undefined
  );
  return latestItem?.key;
};
