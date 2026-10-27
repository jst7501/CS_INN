import ChemicalList from "@/components/msds/ChemicalList";
import { getSummaries } from "@/data/msds";

export default function Home() {
  return <ChemicalList items={getSummaries()} />;
}
