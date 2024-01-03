import banner from "../../../assets/img/slide-2banner.png"
import icon from '../../../assets/img/Frame.jpg'
import icon2 from '../../../assets/img/Frame (1).jpg'
import icon3 from '../../../assets/img/Frame (2).jpg'
import icon4 from '../../../assets/img/Frame (3).jpg'
import icon5 from '../../../assets/img/Frame (4).jpg'
import iconR from '../../../assets/img/Expand_right.jpg'
const Banner = () => {
     return (
          <section className=" ">
               <div className="relative">
               <img src={banner} alt="" />
               </div>
               <div className="w-[230px] h-[381px] border border-gray-500 ml-[350px] absolute top-[14.2%] bg-white">
                    <ul>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Womens’ & Girls’ Fashion</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Health & Beauty</li>
                         <li className="text-[12px] font-[400] text-[#F97316] ms-2 p-[4px]">Watches, Bags, Jewellery</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Men's & Boys' Fashion</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Mother & Baby</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Electronics Devices</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">TV & Home Appliances</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Electronic Accessories</li>    
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Groceries</li>
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Sports & Outdoors</li>  
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Home & Lifestyle</li> 
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Automobile </li> 
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Computer and laptop</li>                 
                         <li className="text-[12px] font-[400] text-[#2E2E2E] ms-2 p-[4px]">Pet Supplies</li>

                    </ul>
               </div>

               <div className="ml-[364px] mt-[15px] flex gap-[10px]">
                    <div className="w-[236px] h-[52px] rounded-xl flex justify-between border border-gray-400 items-center px-3">
                         <div className="flex items-center gap-2">
                              <img src={icon} alt="" />
                              Mart
                         </div>
                         <img src={iconR} alt="" />
                    </div>
                    <div className="w-[236px] h-[52px] rounded-xl flex justify-between border border-gray-400 items-center px-3">
                         <div className="flex items-center gap-2">
                              <img src={icon2} alt="" />
                               
                              <span  className="font-[500] text-[16px]">Fashion</span>
                         </div>
                         <img src={iconR} alt="" />
                    </div>
                    <div className="w-[236px] h-[52px] rounded-xl flex justify-between border border-gray-400 items-center px-3">
                         <div className="flex items-center gap-2">
                              <img src={icon3} alt="" />
                              <span  className="font-[500] text-[16px]">Beauty & Glamour</span>
                         </div>
                         <img src={iconR} alt="" />
                    </div>
                    <div className="w-[236px] h-[52px] rounded-xl flex justify-between border border-gray-400 items-center px-3">
                         <div className="flex items-center gap-2">
                              <img src={icon4} alt="" />
                              <span  className="font-[500] text-[16px]">Home Makeover</span>
                         </div>
                         <img src={iconR} alt="" />
                    </div>
                    <div className="w-[236px] h-[52px] rounded-xl flex justify-between border border-gray-400 items-center px-3">
                         <div className="flex items-center gap-2">
                              <img src={icon5} alt="" />
                              <span className="font-[500] text-[16px]">Free Daliery</span>
                         </div>
                         <img src={iconR} alt="" />
                    </div>
               </div>
          
          </section>
     );
};

export default Banner;