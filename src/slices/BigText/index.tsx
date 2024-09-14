import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;


const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7] text-[#FEE832]">
        <div className="text-[34vw]">soda</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that</span>
          <span className="inline-block max-md:text-[27vw]">makes</span>
          <span className="inline-block max-md:text-[40vw]">you</span>
          </div>
          <div className="text-[32vw]">smile</div>
      </h2>
    </section>
  );
};

export default BigText;
