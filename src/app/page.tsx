import Header from "@/components/Header";
import WeddingPackages from "@/components/WeddingPackages";
import ThumbsUp from "@/assets/images/thumbsup.svg";
import CreditCard from "@/assets/images/credit-card.svg";
import Hometown from "@/assets/images/hometown-feature.svg";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />
      <WeddingPackages show="popular" type="slider" />
      <section className="container mx-auto flex flex-col">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">Alasan Mereka Memilih Wedding Package Samawa</h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <ThumbsUp />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <a href="#" className="text-color2 hover:underline">Learn More</a>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <CreditCard />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <a href="#" className="text-color2 hover:underline">Learn More</a>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <Hometown />
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya</p>
            </span>
            <a href="#" className="text-color2 hover:underline">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
}
