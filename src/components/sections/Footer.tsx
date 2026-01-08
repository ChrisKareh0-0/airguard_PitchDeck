import { contentData } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center">
        <p>{contentData.footer.copyright}</p>
        <p className="text-sm mt-2">{contentData.footer.tagline}</p>
      </div>
    </footer>
  );
}
