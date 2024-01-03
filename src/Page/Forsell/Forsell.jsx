import icon from '../../assets/img/Expand_rightC.png'
import Card from '../Home/Card/Card';

const Forsell = () => {
     return (
          <section className="w-[1220px] h-[375px] ml-[350px] mt-[54px]">
               <div className="w-[1170px] h-[33px] flex justify-between ">
                    <div className="flex justify-between items-center w-[452px]">
                         <h6 className="font-[400] text-[20px] text-[#F97316]">FlashSale</h6>
                         <div className="items-center gap-10">
                         <span className="text-[16px] font-[400] text-[#707070] mr-2">Ending in</span>
                              <span className="bg-[#F97316] p-1 text-white rounded">14</span> 
                              <span className="text-[#F97316] m-1">:</span> 
                              <span className="bg-[#F97316] p-1 text-white rounded">28</span> 
                              <span className="text-[#F97316] m-1">:</span> 
                              <span className="bg-[#F97316] p-1 text-white rounded">45</span> 
                         </div>
                         <h6 className="text-[#F97316] font-[400]">See More</h6>
                    </div>
                         <h6 className="text-[#F97316] font-[400] flex item-center">See More <img className='text-[#F97316]' src={icon} alt="" /></h6>
               </div>
               <div className="mt-[24px]">

               <Card ></Card>
               </div>
          </section>
     );
};

export default Forsell;