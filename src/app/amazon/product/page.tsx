export default function Product(){
    return (
        <main>
            <div className="flex flex-row">
                <Images/>
                <About/>
                <Shipping/>
            </div>
            <ProductInformation/>
            <Reviews/>
        </main>
    )
}

function Images(){
    return (
        <div className="flex flex-row">
            <div>
                <img src='/amazon/mini_pro' className="w-[40px] h-[40px] border border-black rounded-lg"/>
                <img src='' className="w-[40px] h-[40px] border border-black rounded-lg"/>
                <img src='' className="w-[40px] h-[40px] border border-black rounded-lg"/>
                <img src='' className="w-[40px] h-[40px] border border-black rounded-lg"/>
                <img src='' className="w-[40px] h-[40px] border border-black rounded-lg"/>
            </div>
            <div>
                <a className="h-6 w-6 border border-black" style={{backgroundImage: "url('https://m.media-amazon.com/images/G/01/share-icons/share-std.svg')"}}></a>
                <div>
                    <img src='w-[100px] h-[100px]' />
                    <p className="text-[14px] text-[#565959]">Roll over to zoom in</p>
                </div>
            </div>
        </div>
    )
}

function About(){
    return (
        <div className="grow border border-black">
            <h1 className="text-[24px]">Redragon S101 Gaming Keyboard, M601 Mouse, RGB Backlit Gaming Keyboard, Programmable Backlit Gaming Mouse, Value Combo Set [New Version]</h1>
            <p className="text-[14px]"><a>Visit the Redgragon Store</a></p>
            <p className="text-[14px]">
                <span>4.6/5</span>
                <span>45,981 ratings</span> |
                <a>Search this page</a>
            </p>
            <p className="text-[14px]">
                <a>
                    <span>#1 Best Seller</span>
                    <span>in PC Gaming Keyboards</span>
                </a>
            </p>
            <p className="text-[12px] border border-black">4K+ bought in past month</p>

            <div>
                <p className="text-[24px]">-25%</p>
                <p className="flex flex-row items-start">
                    <span className="text-[13px]">$</span>
                    <span className="text-[28px]">39</span>
                    <span className="text-[13px]">99</span>
                </p>
            </div>

            <p className="flex flex-row text-[12px]">
                <span>List Price:</span>
                <span>$53.48</span>
                <svg aria-hidden="true" className="w-[12px] h-[12px]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256,9C119,9,8,120.08,8,257S119,505,256,505,504,394,504,257,393,9,256,9Zm0,76.31A47.69,47.69,0,1,1,208.31,133,47.69,47.69,0,0,1,256,85.31Zm38.15,332.38a12.18,12.18,0,0,1-12.21,12H229.67a11.85,11.85,0,0,1-11.82-12V249.92a11.86,11.86,0,0,1,11.82-12h52.27a12.18,12.18,0,0,1,12.21,12Z"></path>
                </svg>
            </p>

            <p className="text-[14px]">
                <span>$49.98 Shipping & Import Fees Deposit to Nigeria</span>
                <a>Details </a>
            </p>

            <p className="text-[14px]">
                <span>Sales taxes may apply at checkout</span>
            </p>

            <p className="text-[14px]">
                <span>Coupon:</span>
                <input type='checkbox' className="w-[16px] h-[16px]"/>
                <span>Apply 15% coupon</span>
                <span>Shop items ::after</span>
                <span>|</span>
                <span>Terms</span>
            </p>

            <p className="text-[14px]">
                <a>30-day refund/replacement</a>|
                <a>Product support included</a>
            </p>

            <p>
                <span>Color:</span>
                <b>Color: Black</b>
            </p>
            <div>
                <img src='' className="w-[36px] h-[36px] border border-black"/>
                <img src='' className="w-[36px] h-[36px] border border-black"/>
            </div>

            <div>
                <p className="text-[14px] font-bold">Bundles with this item</p>
                <div className="flex flex-row gap-x-[10px] border border-bottom">
                    <div className="w-[30%]">
                        <img src='' className="w-[100%] h-[150px]"/>
                        <p>Redragon Ergonomic Gaming Mouse and S101</p>
                        <p className="text-[24px]">
                            <span>-33%</span>
                            <span>$49.99</span>
                        </p>
                        <p className="text-[12px]">
                            <span>List:</span>
                            <span>75.47</span>
                        </p>
                    </div>
                    <div className="w-[30%]">
                        <img src='' className="w-[100%] h-[150px]"/>
                        <p>Redragon 94 Compact Mechanical Keyboard and S101</p>
                        <p className="text-[24px]">
                            <span>-18%</span>
                            <span>$69.99</span>
                        </p>
                        <p className="text-[12px]">
                            <span>Was:</span>
                            <span>85.98</span>
                        </p>
                    </div>
                    <div className="w-[30%]">
                        <img src='' className="w-[100%] h-[150px]"/>
                        <p>Redragon RGB Programmable Mechanical Keyboard and S101</p>
                        <p className="text-[24px]">
                            <span>-33%</span>
                            <span>$49.99</span>
                        </p>
                        <p className="text-[12px]">
                            <span>List:</span>
                            <span>75.47</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="border border-black">
                <table>
                    <tbody>
                        <tr>
                            <th>Brand</th>
                            <td>Reddragon</td>
                        </tr>
                        <tr>
                            <th>Color</th>
                            <td>Black</td>
                        </tr>
                        <tr>
                            <th>Connectivity Technology</th>
                            <td>Usb</td>
                        </tr>
                        <tr>
                            <th>Special Feature</th>
                            <td>RGB Backlit, Ergonomic, Wrist Rest, Programmable Buttons</td>
                        </tr>
                        <tr>
                            <th>Compatible Devices</th>
                            <td>🅣⓿🅟 🅢🅔🅛🅛🅔🅡</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <p className="text-[16px]">About this item</p>
                <ul className="text-[14px]">
                    <li>🌟PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version)</li>
                    <li>🌟RGB BACKLIT GAMING KEYBOARD; 7 different RGB Lighting modes & effects, 4 backlight brightness levels, adjustable breathing speed. The keycaps offer clear uniform backlighting WIN key can be disabled for gaming. The PC Gaming Keyboard has been ergonomically designed to be a superb typing tool for office work as well. The gaming Keyboard is built to withstand the average liquid spill. The integrated wristrest gives you the comfort you need for marathon gaming sessions</li>
                    <li>🌟MULTI MEDIA & ANTI GHOSTING; The Gaming Keyboard has 25 conflict-free (n-Key Rollover) 10 Dedicated Multimedia keys plus 12 additional FN+ Multimedia keys (Total 114 keys). Keys are quiet, designed for longevity, and durability delivering precise tactile feedback. Comes with a Full numeric keypad and a gold-plated corrosion-free USB connector for a reliable connection and ultimate Gaming performance</li>
                    <li>🌟WIRED PROGRAMABLE GAMING MOUSE; Ergonomic Redragon RED Backlit Gaming Mouse up to 3200 DPI (user adjustable 800/1600/2400/3200 DPI), 30G acceleration and Weight Tuning set. Total 6 Buttons of which 5 are programmable. The High-Precision Sensor delivers Pinpoint Accuracy while the Gaming Grade Micro Switches ensure longevity, greater durability, and extreme responsiveness, giving you an even greater edge over your competition</li>
                    <li>🌟PC GAMING KEYBOARD AND MOUSE COMPATIBILITY: Windows 10, Windows 8, Windows 7, Windows Vista, or Windows XP, Limited Mac OS keyboard support. Works well with all major computer brands and Gaming PCs</li>
                </ul>
            </div>
        </div>
    )
}

function Shipping(){
    return (
        <div className="border border-black">
            <p>
                <span className="text-[13px]">$</span>
                <span className="text-[28px]">39</span>
                <span className="text-[13px]">99</span>
            </p>
            <p className="text-[14px]">$49.98 Shipping & Import Fees Deposit to Nigeria </p>
            <p className="text-[14px]">Sales taxes may apply at checkout</p>
            <p className="text-[14px]">Delivery November 4 - 13</p>
            <p className="text-[14px]">Or fastest delivery Monday, October 28. Order within 5 hrs 4 mins</p>
            <p className="text-[12px]">Deliver to Nigeria</p>
            <p className="text-[18px]">In Stock</p>

            <select className="text-[9px]">
                <option>QTY: 1</option>
            </select>

            <button className="text-[12px] border border-black">Add to Cart</button>
            <button className="text-[12px] border border-black">Buy Now</button>

            <div className="text-[12px]">
                <table>
                    <tbody>
                    <tr>
                        <td>Ships from</td>
                        <td>Amazon</td>
                    </tr>
                    <tr>
                        <td>Sold by</td>
                        <td>Redragon zone</td>
                    </tr>
                    <tr>
                        <td>Returns</td>
                        <td>30-day refund/replacement</td>
                    </tr>
                    <tr>
                        <td>Support</td>
                        <td>Product support included</td>
                    </tr>
                    </tbody>
                    
                </table>
                <a className="text-[12px]">See more</a>
                <p>
                    <input type='checkbox' />
                    <span className="text-[14px]">Add a gift receipt for easy returns</span>
                </p>
            </div>
        </div>
    )
}

function ProductInformation(){
    return (
        <div>
            <h2 className="text-[24px]">Product information</h2>
            <div className="flex flex-row">
                <div>
                    <p className="text-[18px]">Features & Specs</p>
                    <table className="text-[14px]">
                        <tbody>
                        <tr>
                            <td>Hand Orientation</td>
                            <td>Ambidextrous</td>
                        </tr>
                        <tr>
                            <td>Are Batteries Required</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Number of Keys</td>
                            <td>114</td>
                        </tr>
                        <tr>
                            <td>Power Source</td>
                            <td>Corded Electric</td>
                        </tr>
                        <tr>
                            <td>Keyboard Layout</td>
                            <td>QWERTY</td>
                        </tr>
                        <tr>
                            <td>Movement Detection</td>
                            <td>Optical</td>
                        </tr>
                        <tr>
                            <td>Keyboard Backlighting Color Support</td>
                            <td>RGB</td>
                        </tr>
                        <tr>
                            <td>Operating System</td>
                            <td>Linux, Win xp, Win 2000, Win vista, Win7, Win8</td>
                        </tr>
                        <tr>
                            <td>Special Features</td>
                            <td>RGB Backlit, Ergonomic, Wrist Rest, Programmable Buttons</td>
                        </tr>
                        <tr>
                            <td>Compatible Devices</td>
                            <td>🅣⓿🅟 🅢🅔🅛🅛🅔🅡</td>
                        </tr>
                        </tbody>
                        
                    </table>
                </div>
                <div className="text-[14px]">
                    <p className="font-bold">Warranty & Support</p>
                    <p>Amazon.com Return Policy:You may return any new computer purchased from Amazon.com that is "dead on arrival," arrives in damaged condition, or is still in unopened boxes, for a full refund within 30 days of purchase. Amazon.com reserves the right to test "dead on arrival" returns and impose a customer fee equal to 15 percent of the product sales price if the customer misrepresents the condition of the product. Any returned computer that is damaged through customer misuse, is missing parts, or is in unsellable condition due to customer tampering will result in the customer being charged a higher restocking fee based on the condition of the product. Amazon.com will not accept returns of any desktop or notebook computer more than 30 days after you receive the shipment. New, used, and refurbished products purchased from Marketplace vendors are subject to the returns policy of the individual vendor.</p>
                    <p><b>Product Warranty:</b> For warranty information about this product, please click here</p>
                </div>
                <div>
                    <div>
                        <p className="text-[18px]">Item details</p>
                        <table className="text-[14px]">
                            <tbody>
                            <tr>
                                <td>Global Trade Identification Number</td>
                                <td>00780411789670</td>
                            </tr>
                            <tr>
                                <td>Customer Reviews</td>
                                <td> 45,981 ratings | 4.6 out of 5 stars</td>
                            </tr>
                            <tr>
                                <td>UPC</td>
                                <td>780411789670</td>
                            </tr>
                            <tr>
                                <td>Best Sellers Rank</td>
                                <td>#119 in Video Games (See Top 100 in Video Games)
#1 in Mac Gaming Keyboards
#1 in PC Gaming Keyboards</td>
                            </tr>
                            <tr>
                                <td>Manufacturer</td>
                                <td>Redragon</td>
                            </tr>
                            <tr>
                                <td>Brand Name</td>
                                <td>Redragon</td>
                            </tr>
                            <tr>
                              <td>Keyboard Description</td>
                              <td>RGB Gaming Keyboard with Programmable Keys</td>  
                            </tr>
                            </tbody>
                           
                        </table>
                    </div>
                    <div>
                        <p className="text-[18px]">Additional details</p>
                        <table className="text-[14px]">
                            <tbody>
                            <tr>
                                <td>Item Weight</td>
                                <td>0.98 Kilograms</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>Black</td>
                            </tr>
                            </tbody>
                            
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

function Reviews(){
    return (
        <div className="flex flex-row">
            <div>
                <p className="text-[21px]">Customer reviews</p>
                <p className="text-[18px]">4.6 out of 5</p>
                <p className="text-[14px]">45,981 global ratings</p>
                <div>
                    <div className="flex flex-row text-[14px]">
                        <p>5 star</p>
                        <div className="grow bg-black ml-1 mr-1">.</div>
                        <p>75%</p>
                    </div>
                    <div className="flex flex-row text-[14px]">
                        <p>4 star</p>
                        <div className="grow bg-black ml-1 mr-1">.</div>
                        <p>14%</p>
                    </div>
                    <div className="flex flex-row text-[14px]">
                        <p>3 star</p>
                        <div className="grow bg-black ml-1 mr-1">.</div>
                        <p>5%</p>
                    </div>
                    <div className="flex flex-row text-[14px]">
                        <p>2 star</p>
                        <div className="grow bg-black ml-1 mr-1">.</div>
                        <p>2%</p>
                    </div>
                    <div className="flex flex-row text-[14px]">
                        <p>1 star</p>
                        <div className="grow bg-black ml-1 mr-1">.</div>
                        <p>3%</p>
                    </div>
                </div>
                <p className="text-[14px]">How customer reviews and ratings work</p>
            </div>

            <div>
                <div>
                    <p className="text-[16px]">Customer say</p>
                    <p className="text-[14px]">Customers like the value for money and appearance of the keyboard mouse set. They mention it looks great, the colors are bright and vibrant, and it's comfortable. Some also like the brightness and quietness of the keyboard. However, some customers disagree on the functionality, keyboard quality, and build quality.</p>
                    <p className="text-[12px]">AI-generated from the text of customer reviews</p>
                </div>
                <div>
                    <p className="font-bold text-[14px]">Select to learn more</p>
                    <div className="flex flex-row gap-x-[10px]">
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Value for money&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Value for money&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Looks great&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Brightness&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Comfort&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Keyboard quietness&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Keyboard functionality&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Keyboard quality&nbsp;|&nbsp;</p>
                        </a>
                        <a className="text-[15px]">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg" data-icon-treatment="C-POSITIVE"><path d="M30.0002 57.4601C44.9119 57.4601 57.0002 45.3718 57.0002 30.4601C57.0002 15.5485 44.9119 3.46014 30.0002 3.46014C15.0885 3.46014 3.00018 15.5485 3.00018 30.4601C3.00018 45.3718 15.0885 57.4601 30.0002 57.4601Z" fill="#067D62"></path><path d="M24.0051 42.4601L15.8817 34.7588C15.3173 34.2217 15.0002 33.4932 15.0002 32.7336C15.0002 31.974 15.3173 31.2455 15.8817 30.7084C16.4462 30.1713 17.2117 29.8696 18.01 29.8696C18.8082 29.8696 19.5738 30.1713 20.1383 30.7084L24.0051 34.4165L39.8621 19.299C40.4266 18.7619 41.1921 18.4601 41.9904 18.4601C42.7886 18.4601 43.5542 18.7619 44.1186 19.299C44.6831 19.8361 45.0002 20.5646 45.0002 21.3242C45.0002 22.0838 44.6831 22.8122 44.1186 23.3493L24.0051 42.4601Z" fill="white"></path></svg>
                            <p>Build quality</p>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-[18px]">Reviews with images</p>
                        <a className="text-[14px]">See all photos</a>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-[18px] border border-black p-2 rounded-lg">&lt;</div>
                        <div className="grow overflow-scroll">
                            <img src='' className="w-[30%] h-[100px] rounded-lg border border-black"/>
                            <img src='' className="w-[30%] h-[100px] rounded-lg border border-black"/>
                            <img src='' className="w-[30%] h-[100px] rounded-lg border border-black"/>
                            <img src='' className="w-[30%] h-[100px] rounded-lg border border-black"/>
                        </div>
                        <div className="text-[18px] border border-black p-2 rounded-lg">&gt;</div>
                    </div>
                </div>

                <div>
                    <select className="text-[12px]">
                        <option>Top review</option>
                        <option>Most recent</option>
                    </select>

                    <p className="text-[18px]">Top reviews from the United States</p>

                    <div>
                        <div>
                            <img src='' className="w-[34px] h-[34px] border border-black rounded-full"/>
                            <p className="text-[13px]">Lloyd Garrick</p>
                            <p className="text-[14px] font-bold">Excellent and very good price.</p>
                            <p className="text-[14px]" >Reviewed in the United States on August 13, 2024</p>
                            <p>
                                <span className="text-[14px]">Color: Black</span>
                                <span className="text-[12px]">Verified Purchase</span>
                            </p>
                            <p className="text-[14px]">
                            Nice and compact, yet has all keys, special functions and more!
Can change backlight color and display, I prefer steady red - awesome when working at night or dark room, as I often do.
Key press is soft, not a mechanical "click".
Mouse has very good steady weighted and smooth feel.
I bought a second one for my other system!
                            </p>
                            <p className="text-[14px]">One person found this helpful</p>
                            <p className="flex flex-row items-center gap-x-[10px] text-[14px]">
                                <span className="p-[10px] border border-black rounded-full">Helpful</span>
                                <span>Report</span>
                            </p>
                        </div>

                        <div>
                            <img src='' className="w-[34px] h-[34px] border border-black rounded-full"/>
                            <p className="text-[13px]">Cam</p>
                            <p className="text-[14px] font-bold">Great gaming set when you’re on a budget!</p>
                            <p className="text-[14px]" >Reviewed in the United States on August 28, 2024</p>
                            <p>
                                <span className="text-[14px]">Color: Black</span>
                                <span className="text-[12px]">Verified Purchase</span>
                            </p>
                            <p className="text-[14px]">
                            Needed a major upgrade on my keyboard and mouse I’ve had for a couple years and was looking for something that is of good quality and also decently priced. I’ve had another keyboard from the same brand and loved the mechanical feel to it and how compact it was, hence my interest in purchasing another one from this same brand and a much fuller keyboard. My last RedDragon keyboard has lasted me since 2017 and just broke in 2024.

When it arrived it was neatly packaged with a great presentation once you open it. It’s very lightweight and easy to install and connect well, just plug it in and you’re set! It does have different light settings for the keyboard, which you will be able to see in the manual. The keyboard I purchased were soft keys, although I wish I purchased the mechanical one - so be mindful on your preference of keys. The soft keys are very lightweight and easy to press, no issues. Keyboard quality is great for the price, and is perfect for my needs as I just need a keyboard that works and can handle simple gaming, not much expectations in terms of speed, performance, etc. Mouse is also great for the price, but don’t expect a high quality/pro mouse as there is a big difference when you feel it/use it. You can also adjust the mouse speed from the middle button as well. Overall you get a good deal with quality & affordability.

10/10, great option to choose for beginners, those who are looking for affordable sets, looking for a spare/backup set, or interested in giving as a gift. I would choose purchasing this over the cheaper in-store options since there are more reliable reviews for this product and can also vouch via my experience.
                            </p>
                            <p className="text-[14px]">4 people found this helpful</p>
                            <p className="flex flex-row items-center gap-x-[10px] text-[14px]">
                                <span className="p-[10px] border border-black rounded-full">Helpful</span>
                                <span>Report</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}