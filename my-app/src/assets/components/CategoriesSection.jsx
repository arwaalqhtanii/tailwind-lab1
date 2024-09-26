const CategoriesSection = () => {
    return (
      <section className="container mx-auto mt-8 px-4">
        <h2 className="text-left text-2xl mb-8">Top Categories Of The Month</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
       
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDezG_9s2j9u_y88RuU6iBFI22ZcD7RqzcqH3VY8hY2KBEYxrw" 
              alt="Electronics" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl  mb-2">Electronics</h3>
              <ul className="text-gray-700">
                <li>TV Televisions</li>
                <li className="font-bold underline">Air Conditioners</li>
                <li>Washing Machines</li>
                <li>Audio & Theaters</li>
                <li>Office Electronics</li>
              </ul>
            </div>
          </div>
  
        
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSaj5ebbPqi6c8Va56QXmqqOkrO3_OXd3-91MSiFsoByQ9ETlT" 
              alt="Clothings" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl  mb-2">Clothings</h3>
              <ul className="text-gray-700">
                <li>Womens</li>
                <li>Mens</li>
                <li>Bags & Backpacks</li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
  
      
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2plAaT4x-Zp6HnxcX0Rd-uMKjV7CaD8PVAEUMGZ5ZZM3Aa8pk" 
              alt="Computers" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl  mb-2">Computers</h3>
              <ul className="text-gray-700">
                <li>Desktop PC</li>
                <li>Laptop</li>
                <li>PC Gaming</li>
                <li>Storage & Memory</li>
                <li>PC Components</li>
              </ul>
            </div>
          </div>
  
     
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://i.pinimg.com/474x/6d/c1/d7/6dc1d77aecc53b922f29bd7230ebea1d.jpg" 
              alt="Home & Kitchen" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl  mb-2">Home & Kitchen</h3>
              <ul className="text-gray-700">
                <li>Furnitures</li>
                <li>Decor</li>
                <li>Cookwares</li>
                <li>Utensil & Gadgets</li>
                <li>Garden Tools</li>
              </ul>
            </div>
          </div>
  
         
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPboe_BRXtngZ94pPyW_NmbbVFbBuBDA1O8s-P4gpTl09KuD97" 
              alt="Healthy & Beauty" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl  mb-2">Healthy & Beauty</h3>
              <ul className="text-gray-700">
                <li>Makeup</li>
                <li>Skin Care</li>
                <li>Hair Care</li>
                <li>Tools & Equipments</li>
                <li>Perfumes</li>
              </ul>
            </div>
          </div>
  
    
          <div className="border p-4 rounded-lg flex flex-col sm:flex-row items-center">
            <img 
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKmZZdjx66Xavy0hEkTQuGJhlWTQBtAw1VdXgbELUrYkPFcVzh" 
              alt="Jewelry & Watch" 
              className="w-full sm:w-1/3 h-40 object-cover mb-4 sm:mb-0 sm:mr-4"
            />
            <div>
              <h3 className="text-xl mb-2">Jewelry & Watch</h3>
              <ul className="text-gray-700">
                <li>Pendant</li>
                <li>Necklace</li>
                <li>Watch</li>
                <li>Bracelets</li>
                <li>Accessories</li>
              </ul>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default CategoriesSection;
  