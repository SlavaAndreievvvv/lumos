import { ProductPage } from "@/ui/pages";

export default function Product({
  params: { link },
}: {
  params: { link: string };
}) {
  return <ProductPage link={link} />;
}
