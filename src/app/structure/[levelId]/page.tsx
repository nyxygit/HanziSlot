import { allLevels } from "@/data/levels";
import StructureDetailPage from "@/components/StructureDetailPage";
import { notFound } from "next/navigation";

// Generate static params for structure levels only
export function generateStaticParams() {
  return allLevels
    .filter((l) => l.category === "structure")
    .map((l) => ({ levelId: l.id }));
}

type Props = {
  params: Promise<{ levelId: string }>;
};

export default async function StructureDetail({ params }: Props) {
  const { levelId } = await params;
  const level = allLevels.find((l) => l.id === levelId);

  if (!level || level.category !== "structure") {
    notFound();
  }

  return <StructureDetailPage level={level} />;
}
