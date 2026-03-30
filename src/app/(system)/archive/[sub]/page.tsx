import SubListView from "@/components/layout/SubListView";
import { CATEGORY_MAP, ContentType } from "@/types/system";

export const dynamicParams = false;
export function generateStaticParams() {
  return CATEGORY_MAP.archive.map(sub => ({ sub }));
}

export default async function Page({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <SubListView category="archive" sub={sub as ContentType} />;
}