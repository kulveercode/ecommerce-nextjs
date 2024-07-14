import HeroBanner from "../../components/HeroBanner";
import Wrapper from "../../components/Wrapper";

export default function Home() {
  return (
    <main className="h-[1500px]">
        {/* <HeroBanner /> */}
        <Wrapper>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Cushing of your miles</div>
            <div className="text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam alias a, qui unde labore.</div>
          </div>
        </Wrapper>
    </main>
  );
}
