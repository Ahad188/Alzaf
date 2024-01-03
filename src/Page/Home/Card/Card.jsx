import img1 from '../../../assets/img/card/Flash sell.png'
import img2 from '../../../assets/img/card/Flash sell (1).png'
import img3 from '../../../assets/img/card/Flash sell (2).png'

const Card = () => {
     return (
          <div className='flex gap-[12px]'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
          </div>
     );
};

export default Card;