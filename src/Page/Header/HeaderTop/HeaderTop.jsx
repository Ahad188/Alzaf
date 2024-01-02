const HeaderTop = () => {
  return (
    <header className="w-[1920px] h-[25px] bg-[#F0F1F1] flex justify-between">
      <ul className="flex pt-[5px]">
        <li className="text-[12px] font-[400] leading-[130%] ml-[353px] text-[#434343]">Language</li>
        <li className="text-[12px] font-[400] leading-[130%] ml-[35px] text-[#434343]">
          Help Center
        </li>
        <li className="text-[12px] font-[400] leading-[130%] ml-[37px] text-[#434343]">
          Helpline: 0964781656
        </li>
      </ul>
      <ul className="flex pt-[5px]">
        <li className="text-[12px] font-[400] leading-[130%] mr-[30px] text-[#434343]">Language</li>
        <li className="text-[12px] font-[400] leading-[130%] mr-[38px] text-[#434343]">
          Help Center
        </li>
        <li className="text-[12px] font-[400] leading-[130%] mr-[350px] text-[#F97316]">
          Helpline: 0964781656
        </li>
      </ul>
    </header>
  );
};

export default HeaderTop;
