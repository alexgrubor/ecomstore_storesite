import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            About Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About Us"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                aliquet arcu id laoreet fringilla. Phasellus eget turpis a quam
                eleifend malesuada. Nulla facilisi. Proin in metus eu nulla
                consequat venenatis. Vivamus sit amet dui sed ipsum malesuada
                efficitur. Nullam consequat nunc in quam congue, a elementum
                ligula hendrerit. Nulla id nisl nec turpis tincidunt faucibus a
                sit amet libero. Integer auctor urna ut ante mattis, sit amet
                malesuada quam bibendum. Sed ac tincidunt dui, a scelerisque
                felis.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                Fusce bibendum velit a quam sollicitudin, a laoreet mi
                hendrerit. Praesent bibendum mi nec ipsum malesuada, eget
                feugiat nulla malesuada. Vestibulum gravida quam nec felis
                interdum bibendum. Nullam vehicula vel felis id venenatis. Sed
                fermentum, ex in viverra ultrices, libero est vulputate leo, nec
                dictum nisl elit id arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
