
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-finx-light">
        <div className="section-container flex flex-col items-center justify-center min-h-[70vh]">
          <h1 className="headline text-center">
            Shaping the future of Fintech,<br />One Innovation at a Time
          </h1>
          <p className="subheadline text-center max-w-3xl">
            FinXBridge creates tailored digital solutions for NBFCs, banks, e-commerce, and fintech companies to embrace digital transformation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/about">
              <Button className="bg-finx-primary hover:bg-finx-blue text-white px-8 py-6 text-lg">
                About Us
              </Button>
            </Link>
            <Button variant="outline" className="border-finx-primary text-finx-primary hover:bg-finx-primary/5 px-8 py-6 text-lg">
              Our Solutions
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
