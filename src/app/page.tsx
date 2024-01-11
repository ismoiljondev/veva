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
      </div>
    </Container>
  );
}
