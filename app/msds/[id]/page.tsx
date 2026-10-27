import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MsdsDetail from "@/components/msds/MsdsDetail";
import { chemicals, cleanName, getChemical } from "@/data/msds";

export function generateStaticParams() {
  return chemicals.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const chem = getChemical(id);
  if (!chem) return {};
  return {
    title: `${cleanName(chem.data.ko.header.productName)} MSDS | (주) 씨에스이노베이션`,
  };
}

export default async function MsdsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chem = getChemical(id);
  if (!chem) notFound();

  return <MsdsDetail chemical={chem} />;
}
