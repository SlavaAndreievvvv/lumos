import { ModalProductPage } from "@/ui/pages/Product/ModalProductPage";

export default function Product({
  params: { link },
}: {
  params: { link: string };
}) {
  return <ModalProductPage link={link} />;
}
