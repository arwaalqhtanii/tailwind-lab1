const HeadphoneAd = () => {
    return (
      <section className="container mx-auto mt-8 bg-gray-100 p-8 rounded-lg flex items-center justify-between">
        {/*   الكلام اللي ع اليسار */}
        <div className="mr-8">
          <h2 className="text-3xl mb-2">Bose Bluetooth 
            Wireless Headphones</h2>
           
          <p className="text-gray-500 mb-4">Crisp powerful sound from the best sounding wireless headphone in its class</p>
        </div>
  
        {/*     السعر والزر */}
        <div className="text-center mr-8">
          <p className="line-through text-gray-400">$260.50</p>
          <p className="text-green-600 text-3xl font-bold mb-4">$219.05</p>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md font-bold">Shop Now</button>
        </div>
  
        {/*   الصووووورة */}
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRP9ncncapPaM8Uw6F7MkL7ruDK_UyrUppgtnVFLhPwQ2IrgDQ8" 
          alt="Bose Headphones"
          className="w-64 h-auto object-cover ml-8"
        />
      </section>
    );
  };
  
  export default HeadphoneAd;
  