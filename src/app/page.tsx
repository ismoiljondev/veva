import AboutCard from "@/components/about/about";
import Header from "@/components/header/header";
import Swiper from "@/components/swiper/swiper";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-[10px] w-[80%] m-auto">
      <div className="col-span-2">
        <AboutCard
          desc="Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, 
которую вы пьете, свободна от примесей и загрязнений."
          title="Максимальная чистота"
          key={1}
        />
      </div>
      <AboutCard
        desc="Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, "
        title="Максимальная чистота"
        key={1}
      />
      <AboutCard
        desc="Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, 
"
        title="Максимальная чистота"
        key={1}
      />
      <div className="col-span-2">
        <AboutCard
          desc="Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, 
которую вы пьете, свободна от примесей и загрязнений."
          title="Максимальная чистота"
          key={1}
        />
      </div>
    </div>
  );
}
