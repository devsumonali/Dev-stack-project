export default function Footer() {
     return (
          <footer className="bg-white py-5 lg:py-10 border-t border-[#f0f2f7]">
               <div className="container mx-auto p-5 lg:p-0">
                    <div className=" grid grid-cols-2 gap-5 justify-between lg:grid-cols-4 md:grid-cols-2 border-b border-[#f0f2f7] pb-4">
                         <div className="flex gap-5 flex-col col-span-2 md:col-span-1">
                              <a href="#home">
                                   <img
                                        src="/images/logo-text.png"
                                        alt="Dev Stack Logo"
                                        className="w-32.5"
                                   />
                              </a>
                              <p className="text-[14px] font-normal text-brand-text">
                                   Curated tools, technologies, and resources for developers
                                   building modern software.
                              </p>
                              <div>
                                   <ul className="font-bold text-[16px] text-brand-text flex gap-5">
                                        <li>
                                             <a href="#">Github</a>
                                        </li>
                                        <li>
                                             <a href="#">Twitter</a>
                                        </li>
                                        <li>
                                             <a href="#">Linkedin</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div>
                              <h3 className="mb-3 font-bold text-[16px]">PRODUCT</h3>

                              <ul className="flex flex-col gap-2 font-normal text-[14px] text-brand-text">
                                   <li>
                                        <a href="#">Home</a>
                                   </li>
                                   <li>
                                        <a href="#">Technologies</a>
                                   </li>
                                   <li>
                                        <a href="#">Project</a>
                                   </li>
                              </ul>
                         </div>
                         <div>
                              <h3 className="mb-3 font-bold text-[16px]">COMPANY</h3>

                              <ul className="flex flex-col gap-2 font-normal text-[14px] text-brand-text">
                                   <li>
                                        <a href="#">About</a>
                                   </li>
                                   <li>
                                        <a href="#">Contact</a>
                                   </li>
                                   <li>
                                        <a href="#">Careers</a>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-span-2 md:col-span-1">
                              <h3 className="mb-3 font-bold text-[16px]">LEGAL</h3>

                              <ul className="flex flex-col gap-2 font-normal text-[14px] text-brand-text ">
                                   <li>
                                        <a href="#">Privacy Policy</a>
                                   </li>
                                   <li>
                                        <a href="#">Terms and Conditions</a>
                                   </li>
                                   <li>
                                        <a href="#">Careers</a>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-5 py-4">
                         <p className="text-brand-text text-sm">
                              © 2026 Dev Stack. All rights reserved.
                         </p>
                         <ul className="flex gap-5 text-brand-text">
                              <li>
                                   <a href="#">Privacy</a>
                              </li>
                              <li>
                                   <a href="#">terms</a>
                              </li>
                         </ul>
                    </div>
               </div>
          </footer>
     );
}
