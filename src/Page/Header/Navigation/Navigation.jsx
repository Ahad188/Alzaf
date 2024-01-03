import HeaderTop from '../HeaderTop/HeaderTop';
// import { FaCartPlus } from "react-icons/fa";
// import { FaSistrix } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
import { FaHeart,FaCloud, FaRegUser,FaSistrix ,FaCartPlus } from "react-icons/fa";
// import { FaCloud } from "react-icons/fa";
const Navigation = () => {
     return (
          <section>
               <HeaderTop></HeaderTop>
                <nav className="w-[1920px] h-[70px] bg-[#fff] flex items-center">
                    <img src="../../../assets/Alzaf-Logo.jpg" className='w-[129px] h-[37px] ms-[350px]' alt="" />
                    <div className='w-[704px] h-[44px] bg-[#EFF0F5] text-[#707070] rounded-xl text-[14px] font-[400] leading-[130%] ml-[28px] flex justify-between items-center p-[13px]'>
                         search
                         <span className='w-[47px] h-[44px] bg-[#F97316] rounded-[10px] ml-[542px]'><FaSistrix className='w-[17px] h-[17px] mx-auto mt-[15px]' /></span>
                    </div>
                    <div className='flex relative items-center'>
                         <div className='w-[32px] h-[32px] bg-[#F5F5F5] ml-[25px]'>
                              <span className='mx-auto absolute top-[12px] left-[40px]'>
                                   <FaRegUser/>
                              </span>
                         </div>
                          <div className='w-[32px] h-[32px] bg-[#F5F5F5] ml-[12px]'>
                              <span className='mx-auto absolute top-[12px] left-[82px]'>
                                   <FaHeart/>
                              </span>
                          </div>
                          <div className='w-[32px] h-[32px] bg-[#F5F5F5] ml-3'>
                          <span className='mx-auto absolute top-[12px] left-[128px]'>
                                    <FaCartPlus></FaCartPlus>
                              </span>
                          </div> 
                          <div className="right ml-[10px] bg-[#F88D43] w-10 h-[44px]">
                               <FaCloud className='w-[39px] h-[44px] pl-2'/>
                               <div className='w-[167px] h-[44px] bg-#F88D43;'></div>
                          </div>
                          <div className='w-[168px] h-[44px] ml-[-1px] bg-[#F88D43] p-2 text-[16px] font-bold text-white'> Cloud Server</div>
                    </div>


                          
                </nav>
          </section>
     );
};

export default Navigation;