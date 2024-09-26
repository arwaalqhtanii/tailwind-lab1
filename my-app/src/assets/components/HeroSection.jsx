const HeroSection = () => {
    return (
      <section className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* أول قسم - عرض الكراسي */}
          <div className="relative bg-gray-100 p-6 col-span-2 flex items-center justify-between">
            {/* أزرار الأسهم للتنقل */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md">
              <button className="text-gray-500 text-2xl">{'<'}</button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md">
              <button className="text-gray-500 text-2xl">{'>'}</button>
            </div>
  
            {/* الكلام */}
            <div className="flex-grow">
              <h2 className="text-4xl mb-4">WOODEN MINIMALISTIC CHAIRS</h2>
              <p className="text-gray-700 mb-2">SALE UP TO</p>
              <p className="text-green-900 text-3xl mb-4">40% Off</p>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded-md font-bold">Shop Now</button>
            </div>
  
            {/*   الكرسي البني */}
            <div className="w-1/2">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8RXAEiwBJxJd5-xinvjU0r8vw1N09KP1YQfRMOxfuLLhpNfSb" 
                alt="Wooden Chairs"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
  
          {/* التيشرتات */}
          <div className="bg-gray-100 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl  mb-4">PACK 5 T-SHIRTS FOR SUMMER</h2>
              <p className="text-gray-700 mb-2">Starting at</p>
              <p className="text-red-600 text-3xl  mb-4">$99.99</p>
            </div>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxuZ79i3XJMLDsKAMMoOZAvj3euqfAOV4JYQsb11DDnGL_UgAy" 
              alt="T-shirts Pack"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  