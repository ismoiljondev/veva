import AboutCard from "@/components/about/about";
import Container from "@/components/container/container";
export default function Home() {
  return (
    <Container>
      <AboutCard desc="hello" title="lorem" key={1}/>
    </Container>
  );
}
