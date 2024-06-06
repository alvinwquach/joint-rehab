function AboutUs() {
  return (
    <div id="about-us" className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-lg">
              To be a center of excellence in the provision of physiotherapy
              services.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-lg">
              To provide the best possible care to maximize each patient’s
              rehabilitation potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
