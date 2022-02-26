import React, { useContext, useEffect, useState } from "react";
import ThemeContext from './Context'

import Carousel from "./Carousel";
import List from "./List";
import Market from "./Market";
import PaymentButton from "./Payment";
import { AdsHorizontal, AdsSquare } from "./Ads";

import Image_3 from "../Images/image_3.jpg"
import Image_4 from "../Images/image_4.jpg"
import Image_5 from "../Images/image_5.jpg"
import Image_6 from "../Images/image_6.jpg"
import Image_7 from "../Images/image_7.jpg"
import Image_8 from "../Images/image_8.jpg"
import Image_9 from "../Images/image_9.jpg"
import Image_10 from "../Images/image_10.jpg"












const contents = [
   { 
      title: '"เรามาเกินครึ่งทางแล้ว" ผู้ก่อตั้ง Ethereum กล่าวถึงความคืบหน้าของการอัพเกรด ETH 2.0', 
      imageUrl: 'https://blockchainstock.blob.core.windows.net/features/9239618D9FA002F271AA5C4F3BDB3F40C40D4EAC6D37377CDEDAD7904D7436A8.jpg' , 
      datetime: 'January 5, 2022', 
      category: 'crypto',
      content: 'Vitalik Buterin ผู้ก่อตั้ง Ethereum ได้อัพเดตความคืบหน้าของโปรเจกต์ผ่านโร้ดแมพที่แบ่งออกเป็น 5 ส่วนในพอดคาสต์ของ Bankless ตอนล่าสุด และเขายังสรุปขั้นตอนที่จำเป็นสำหรับ Ethereum เพื่อให้อยู่รอดและเติบโตเพิ่มขึ้นต่อไป\n\nเพื่อให้บรรลุความสามารถในการปรับขนาดและการกระจายอำนาจในระดับสูงสุด Butalik อ้างว่า Ethereum จำเป็นต้องมีความคล่องตัวและน้ำหนักเบามากขึ้นในแง่ของข้อมูลบล็อคเชน เพื่อให้ผู้คนจำนวนมากขึ้นสามารถจัดการและใช้งานได้\n\nสำหรับเฟสแรกนั้นจะเรียกว่า ‘Merge’ ซึ่งหมายถึงการเปลี่ยนผ่านจาก Proof-of-work ไปเป็น proof-of-stake โดยสมบูรณ์ ซึ่งจะเกิดขึ้นในช่วงครึ่งแรกของปี 2022 ตามมาด้วยเฟสที่สองที่เรียกว่า ‘Surge’ ที่ทำจะให้ Ethereum มีความยืดหยุ่นเพิ่มขึ้น แบนด์วิดธ์และปริมาณงานที่มีจำนวนมากขึ้น โดยเฉพาะใน zk-rollups ซึ่งเป็นการอัพเกรดส่วนที่สำคัญที่สุด'
   }, 
   { 
      title: 'ภาวะตลาดทองคำนิวยอร์ก: ทองปิดบวก 8.2 ดอลล์ จากแรงซื้อหลังผิดหวังตัวเลขจ้างงาน', 
      imageUrl: 'https://kingworldnews.com/wp-content/uploads/2019/04/King-World-News-Trey-Reik-Asks-WTF-Is-Going-On-At-The-COMEX-864x400_c.jpg' , 
      datetime: 'January 8, 2022', 
      category: 'metal',
      content: 'สัญญาทองคำตลาดนิวยอร์กปิดบวกในวันศุกร์ (7 ม.ค.) เนื่องจากนักลงทุนเข้าซื้อสัญญาทองคำในฐานะสินทรัพย์ที่ปลอดภัย หลังจากที่ผิดหวังกับการเปิดเผยข้อมูลการจ้างงานของสหรัฐที่ต่ำกว่าคาด\n\nทั้งนี้ สัญญาทองคำตลาด COMEX (Commodity Exchange) ส่งมอบเดือนก.พ. เพิ่มขึ้น 8.2 ดอลลาร์ หรือ 0.46% ปิดที่ 1,797.4 ดอลลาร์/ออนซ์ แต่ในรอบสัปดาห์นี้ สัญญาทองปรับตัวลงราว 1.7% \n ขณะที่ตัวเลขเศรษฐกิจสหรัฐฯ ที่สำคัญ ได้แก่ ดัชนีราคาผู้บริโภค ดัชนีราคาผู้ผลิต ดัชนีราคานำเข้า/ส่งออก ยอดค้าปลีก การผลิตภาคอุตสาหกรรมเดือนธ.ค. ดัชนีความเชื่อมั่นผู้บริโภค (เบื้องต้น) เดือนม.ค. และจำนวนผู้ขอรับสวัสดิการว่างงานรายสัปดาห์\nนอกจากนี้ตลาดยังรอติดตามดัชนีราคาผู้บริโภค ดัชนีราคาผู้ผลิต ยอดปล่อยกู้ใหม่สกุลเงินหยวน การส่งออกเดือนธ.ค. ของจีน และข้อมูลการผลิตภาคอุตสาหกรรม อัตราว่างงานเดือนพ.ย. ของยุโรป ด้วยเช่นกัน\nสัปดาห์ที่ผ่านมาเงินบาทผันผวนโดยแข็งค่าในช่วงแรก ก่อนจะพลิกแตะระดับอ่อนค่าสุดรอบ 2 สัปดาห์ โดยเงินบาทแข็งค่าขึ้นในช่วงวันทำการแรกๆ ของปีสอดคล้องกับสัญญาณเงินทุนไหลเข้า โดยเฉพาะแรงซื้อสุทธิในพันธบัตรระยะสั้นและหุ้นไทยของนักลงทุนต่างชาติ อย่างไรก็ดีเงินบาทพลิกกลับมาอ่อนค่าตั้งแต่ช่วงกลางสัปดาห์ ขณะที่เงินดอลลาร์ฯ แข็งค่าขึ้นตามสัญญาณคุมเข้มนโยบายการเงินของสหรัฐฯ ที่สะท้อนผ่านรายงานการประชุมเฟด ซึ่งบ่งชี้ว่า เฟดมีการหารือเรื่องการบริหารจัดการระดับงบดุล ซึ่งอาจจะเกิดขึ้นในช่วงที่เฟดทยอยปรับขึ้นอัตราดอกเบี้ย หลังยุติมาตรการ QE ในปีนี้',  
   },
   { 
      title: 'KBANK มองกรอบเงินบาทสัปดาห์หน้า 33.20-34.00 บาท จับตา Fund Flow-โควิด', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToS1lhSuivGlmrgEMb8T_c33hCi7K_raQV20JEIFTMKKjXFWrb9ESFXWL6t-x8uD1o0U&usqp=CAU ', 
      datetime: 'January 8, 2022', 
      category: 'fx',
      content: 'ธนาคารกสิกรไทย (KBANK) มองกรอบการเคลื่อนไหวของเงินบาทในสัปดาห์หน้า (10-14 ม.ค.65) ไว้ที่ 33.20-34.00 บาท/ดอลลาร์ ขณะที่ศูนย์วิจัยกสิกรไทยประเมินปัจจัยสำคัญที่ต้องติดตาม ได้แก่ ทิศทางเงินทุนของต่างชาติ และสถานการณ์โควิด-19',  
   },
   {  
      title: 'ดาวโจนส์ปิดลบ 4.81 จุด ผิดหวังตัวเลขจ้างงาน-วิตกดอกเบี้ยขาขึ้น', 
      imageUrl: 'https://media.marketrealist.com/brand-img/HFrLXxgvN/2160x1130/dow-jones-what-is-a-point-1600349062137.jpg' , 
      datetime: '6 Jan 2022 17:00', 
      category: 'stock',
      content: 'ดัชนีดาวโจนส์ตลาดหุ้นนิวยอร์กปิดลบในวันศุกร์ (7 ม.ค.) และปรับตัวลงในสัปดาห์แรกของปีใหม่นี้ เนื่องจากนักลงทุนขายหุ้นออกมาท่ามกลางความวิตกเกี่ยวกับแนวโน้มการปรับขึ้นอัตราดอกเบี้ยในสหรัฐ และการแพร่ระบาดของไวรัสโควิด-19 สายพันธุ์โอมิครอน \nทั้งนี้ ดัชนีเฉลี่ยอุตสาหกรรมดาวโจนส์ปิดที่ 36,231.66 จุด ลดลง 4.81 จุด หรือ -0.013%, ดัชนี S&P500 ปิดที่ 4,677.03 จุด ลดลง 19.02 จุด หรือ -0.41% และดัชนี Nasdaq ปิดที่ 14,935.90 จุด ลดลง 144.96 จุด หรือ -0.96%\nในสัปดาห์แรกของปีใหม่นี้ ดัชนีดาวโจนส์ติดลบ 0.3%, ดัชนี S&P500 ลดลง 1.9% และดัชนี Nasdaq ปรับตัวลง 4.5% ซึ่งเป็นการปรับตัวลงรายสัปดาห์รุนแรงที่สุดนับตั้งแต่เดือนก.พ. 2564\nตลาดหุ้นนิวยอร์กปรับตัวลง หลังรายงานการจ้างงานล่าสุดของสหรัฐได้ตอกย้ำความวิตกของนักลงทุนที่ว่า ธนาคารกลางสหรัฐ (เฟด) จะเร่งปรับขึ้นอัตราดอกเบี้ยเพื่อสกัดกั้นเงินเฟ้อ',  },
   { title: 'Fifth Blog', imageUrl: Image_5 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quam eaque similique hic eos architecto quisquam temporibus veritatis totam fugiat? Sed ipsa quis corrupti minima optio deleniti quia, vero harum!',  },
   { title: 'Sixth Blog', imageUrl: Image_6 , datetime: '6 Jan 2022 17:00', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor sapiente minus consectetur voluptas harum soluta atque reiciendis? Consequatur unde, commodi tempora dolorem vero alias veniam omnis consectetur laudantium a?',  },
   { title: 'Seventh Blog', imageUrl: Image_7 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis, rem saepe totam non est delectus veritatis eos obcaecati dolor, aspernatur, itaque nisi quae? Dolores deleniti error saepe ex dignissimos.',  },
   { title: 'Eigth Blog', imageUrl: Image_8 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit officia explicabo provident ducimus similique aperiam cupiditate vitae culpa sint, esse aliquam, iure impedit at maxime nostrum quaerat rem ut a?',  },
   { title: 'Ninth Blog', imageUrl: Image_9 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate eveniet vitae doloribus culpa, fuga asperiores dignissimos, aperiam similique consectetur illo quo quis odit sed facilis. At, illo? Facilis, maxime!',  },
   { title: 'Tenth Blog', imageUrl: Image_10 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, fugiat. Quaerat unde praesentium quae? Praesentium, voluptatibus aliquid! Eaque omnis error quibusdam quis dolores, veritatis facilis ipsum fuga itaque quae adipisci!',  },
   { title: 'Eleventh Blog', imageUrl: Image_8 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit officia explicabo provident ducimus similique aperiam cupiditate vitae culpa sint, esse aliquam, iure impedit at maxime nostrum quaerat rem ut a?',  },
   { title: 'Twelveth Blog', imageUrl: Image_9 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi cupiditate eveniet vitae doloribus culpa, fuga asperiores dignissimos, aperiam similique consectetur illo quo quis odit sed facilis. At, illo? Facilis, maxime!',  },
   { title: 'Thrirteenth Blog', imageUrl: Image_10 , datetime: '6 Jan 2022 17:00', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, fugiat. Quaerat unde praesentium quae? Praesentium, voluptatibus aliquid! Eaque omnis error quibusdam quis dolores, veritatis facilis ipsum fuga itaque quae adipisci!',  },
]



const carouselLimit = 3;
const Body = () => {
   const theme = useContext(ThemeContext)



   return (
      <div className={`${theme.body.backgroundColor} ${theme.body.textColor} py-4 px-2 sm:px-4 `}>
         <div className={`max-w-3xl mx-auto grid gap-4 `}>
            <div className={`flex justify-between`}>
               <div>Topic</div>
               <button className="material-icons">menu</button>
            </div>
            <Carousel contents={contents} limit={carouselLimit} />
            <div className="grid sm:grid-cols-3 gap-4">
               <div className="sm:col-span-2">
                  {/* <AdsHorizontal /> */}
                  <List contents={contents} skip={carouselLimit} />
               </div>
               <div className="sm:col-span-1">
                  <Market />
                  <PaymentButton />
                  <AdsSquare />
               </div>
            </div>
         </div>
      </div>      
   )
}

export default Body