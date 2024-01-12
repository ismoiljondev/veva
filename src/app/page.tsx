import AboutCard from "@/components/about/about";
import Container from "@/components/container/container";
import Swipers from "@/components/swiper/swiper";
import Swiperx from "@/components/swiperhome/swiper";
export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-14 mt-40">
        <div className="max-md:hidden">
          <Swiperx />
        </div>
        <div className="hidden max-md:block w-full">
          <Swipers />
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="col-span-2">
            <AboutCard
              desc="Наша вода проходит через двойной процесс очистки - обратный осмос и ультрафильтрация. Это означает, что каждая капля, 
которую вы пьете, свободна от примесей и загрязнений."
              title="Максимальная чистота"
              key={1}
            />
          </div>
          <AboutCard
            desc="Доступная свежая вода в удобное для вас время в течении 24 часов."
            title="Бесплатная доставка в Ташкенте"
            key={1}
          />
          <AboutCard
            desc="Всего 3 бутыля - это наш ответ на потребности семей. 
Это значит, что у вас всегда есть запас воды."
            title="Минимальный заказ"
            key={1}
          />
          <div className="col-span-2">
            <AboutCard
              desc="Мы не берем с вас предоплату за бутыли, потому что верим, что вместе мы заботимся о нашей планете. Каждая бутыль, которую 
вы вернете, помогает нам в устойчивой переработке. Ваш выбор имеет значение - для вас, для нас и для будущих поколений."
              title="Без предоплаты, вы платите только за воду!"
              key={1}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
