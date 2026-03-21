import React from 'react';
import { FaFacebookF, FaInstagram, FaTripadvisor, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#503408] text-[#F8F8F2] py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

                <div>
                    <h2 className="text-2xl font-bold mb-4">Taverna Li-Ro</h2>
                    <p className="text-sm opacity-80">
                        From the very beginning, our priority has been to create a warm and welcoming atmosphere, making every guest feel at home.
                        For two generations, the Metaj family has been dedicated to serving simple, traditional, and flavorful dishes, crafted with care and authenticity every day.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/menu" className="hover:underline">Menu</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact & Hours</h3>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2"><FaMapMarkerAlt /><a href="https://maps.app.goo.gl/hi28GTzAbao9MMif7" rel="noopener noreferrer" target="_blank"> Taverna Li-Ro</a></li>
                        <li className="flex items-center gap-2"><FaPhone /> <a href="tel:+355693304188" rel="noopener noreferrer" target="_blank">+355 69 33 04 188</a></li>
                        <li className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:tavernaliro@gmail.com" rel="noopener noreferrer" target="_blank">tavernaliro@gmail.com</a></li>
                        <li className="mt-4">
                            <span className="font-semibold">Opening Hours:</span> <br />
                            Mon, Wed-Sun: 11:00 - 22:00 <br />
                            Tuesday: Day Off
                        </li>
                    </ul>
                </div>
            </div>


            <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm opacity-80 border-t border-[#A97C50] pt-4">
                <p>© {new Date().getFullYear()} Taverna Li-Ro. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="https://www.facebook.com/p/Taverna-Li-Ro-100069603669636/" className="hover:text-[#A97C50]" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/taverna_li_ro/" className="hover:text-[#A97C50]" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
                    <a href="https://www.tripadvisor.com/Restaurant_Review-g678774-d13564665-Reviews-Taverna_Li_Ro-Vlore_Vlore_County.html?m=69573" className="hover:text-[#A97C50]" rel="noopener noreferrer" target="_blank"><FaTripadvisor /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
