interface subheading {
  headText: string;
  subHeadText: string;
  linkText?: string;
  route?: string;
}
function SectionHeading({
  headText,
  subHeadText,
  linkText,
  route,
}: subheading) {
  return (
    <div>
      <div className="uppercase text-red-600 text-xl ">{headText}</div>
      <div></div>
    </div>
  );
}

export default SectionHeading;
