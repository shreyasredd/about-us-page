
import React from "react";
import {
  Briefcase, Users, Award, TrendingUp, Shield,
  Rocket, Eye, Lightbulb, Heart, Zap, Layers
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import SectionHeading from "@/components/SectionHeading";
import ValueCard from "@/components/ValueCard";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section - Simplified */}
      <div className="relative py-24 bg-finx-primary">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-roboto font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            About FinXBridge
          </h1>
          <p className="font-inter text-xl text-white/90 max-w-2xl mx-auto">
            Shaping the future of Fintech, One Innovation at a Time
          </p>
        </div>
      </div>

      {/* Our Story Section - Elegant Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Our Story" centered={false} />
            <p className="font-inter text-gray-600 mb-6 leading-relaxed">
              FinXBridge began with a singular vision: to bridge the gap between our clients and cutting-edge technology. Recognizing the challenges faced by NBFCs, banks, e-commerce, and fintech companies in embracing digital transformation, we set out to create tailored solutions that simplify complexity and empower businesses to thrive in the digital era.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed">
              At FinXBridge, our team is the cornerstone of our success. Guided by a senior leadership with over 20+ years of collective technical expertise, we excel in delivering innovative and impactful solutions. Our team embodies cohesiveness, combining diverse perspectives and skill sets to achieve seamless collaboration and effectiveness.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="FinXBridge Story"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section - NEW */}
      <section className="py-20 bg-gradient-to-r from-[#144F5D]/5 to-[#76A4B1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="text-finx-primary" size={24} />
                </div>
                <h2 className="font-roboto font-bold text-3xl text-finx-primary">Our Mission</h2>
              </div>
              <p className="font-inter text-gray-600 leading-relaxed">
                At <span className="font-semibold">FinXBridge</span>, our mission is to empower financial and eCommerce enterprises
                to embrace digital transformation with confidence. We are committed to delivering innovative,
                tailored solutions that simplify complex challenges, foster growth, and build sustainable value.
                Through seamless integration of technology, strategy, and collaboration, we aim to redefine possibilities
                and enable businesses to thrive in an evolving digital ecosystem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Eye className="text-finx-primary" size={24} />
                </div>
                <h2 className="font-roboto font-bold text-3xl text-finx-primary">Our Vision</h2>
              </div>
              <p className="font-inter text-gray-600 leading-relaxed">
                To redefine the financial and eCommerce landscape by empowering businesses with innovative,
                secure, and scalable digital solutions. We aim to bridge the gap between technology and opportunity,
                enabling organizations to thrive in an ever-evolving digital world while fostering trust,
                growth, and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B.R.I.D.G.E. Values Section - NEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="B.R.I.D.G.E. Values"
          subtitle="The core principles that guide everything we do"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ValueCard
            title="Bold Innovation"
            description="Embrace creativity and forward-thinking solutions to drive progress and redefine possibilities in the fintech space."
            icon={Rocket}
          />

          <ValueCard
            title="Resilience"
            description="Stay adaptable and persistent in overcoming challenges, delivering consistent excellence even in a rapidly changing landscape."
            icon={Shield}
          />

          <ValueCard
            title="Integrity"
            description="Act with honesty and transparency, building trust with clients, partners, and team members at every level."
            icon={Heart}
          />

          <ValueCard
            title="Dedication"
            description="Commit wholeheartedly to client success and delivering meaningful impact in all our endeavors."
            icon={Award}
          />

          <ValueCard
            title="Growth"
            description="Foster continuous learning, development, and improvement, both as a company and as individuals."
            icon={TrendingUp}
          />

          <ValueCard
            title="Empowerment"
            description="Create an inclusive environment that values collaboration, enables innovation, and inspires people to achieve their full potential."
            icon={Zap}
          />
        </div>
      </section>

      {/* Core Values Section - Clean Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our innovative solutions"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-finx-primary" size={24} />
              </div>
              <h3 className="font-roboto font-bold text-xl text-finx-primary mb-3">Innovation</h3>
              <p className="font-inter text-gray-600">We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-finx-primary" size={24} />
              </div>
              <h3 className="font-roboto font-bold text-xl text-finx-primary mb-3">Trust</h3>
              <p className="font-inter text-gray-600">We build lasting relationships based on reliability, transparency, and integrity.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="text-finx-primary" size={24} />
              </div>
              <h3 className="font-roboto font-bold text-xl text-finx-primary mb-3">Collaboration</h3>
              <p className="font-inter text-gray-600">We believe in the power of teamwork and partnership to achieve exceptional results.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
              <div className="w-12 h-12 bg-finx-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-finx-primary" size={24} />
              </div>
              <h3 className="font-roboto font-bold text-xl text-finx-primary mb-3">Excellence</h3>
              <p className="font-inter text-gray-600">We are committed to the highest standards in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Elegant Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeading
          title="Leadership Team"
          subtitle="The visionaries behind FinXBridge"
        />

        <div className="mt-12">
          <h3 className="font-roboto font-medium text-2xl mb-8 text-finx-primary">Founding Team</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <TeamCard
              name="Sreedhar Reddy"
              position="Co-Founder & CEO"
              description="As the Co-Founder and CEO of Finxbridge, Sreedhar stands as the visionary leader driving the company to redefine the boundaries of fintech innovation. With a proven track record across retail, e-commerce, healthcare, and digital payments in both the USA and India."
            />

            <TeamCard
              name="Hanumantha Rao"
              position="Co-Founder, CFO & COO"
              description="Meet Rao, the Co-Founder, CFO, and COO of Finxbridge—a master multitasker who balances numbers, operations, and outcomes with finesse. From financial wizardry to operational execution, Rao ensures everything runs smoothly, efficiently, and profitably."
            />
          </div>

          <Separator className="my-10" />

          <h3 className="font-roboto font-medium text-2xl mb-8 text-finx-primary">Management Team</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <TeamCard
              name="Sannith"
              position="Chief Business Officer"
              description="As CBO of Finxbridge, Sannith oversees business development and client relationships. With a proven record in driving revenue growth for over 15 years in Fintech and banking space."
            />

            <TeamCard
              name="Sandeep"
              position="Chief Technology Officer"
              description="Sandeep leads the company's technology strategy and innovation. With deep expertise in developing scalable fintech solutions, Sandeep ensures the technological infrastructure supports business goals seamlessly."
            />

            <TeamCard
              name="Jhanshi"
              position="Chief People Officer"
              description="At FinXBridge, Jhanshi ensures that people are at the heart of everything we do. She leads all aspects of talent management, organizational development, and employee engagement."
            />

            <TeamCard
              name="Akhil"
              position="Tech and Product Lead"
              description="Akhil brings the perfect blend of technological depth and product vision to FinXBridge. He spearheads the design and development of scalable, user-centric fintech products."
            />
          </div>

          <Separator className="my-10" />

          <h3 className="font-roboto font-medium text-2xl mb-8 text-finx-primary">Advisory Board</h3>
          <div className="max-w-lg mx-auto">
            <TeamCard
              name="Shyam"
              position="Strategic Advisor"
              description="With a wealth of experience in the financial and technology sectors, Shyam serves as a key strategic advisor to FinXBridge. He brings a unique perspective shaped by years of executive leadership, guiding fintech ventures through growth, innovation, and market expansion."
            />
          </div>
        </div>
      </section>

      {/* Solutions Section - Simplified Design */}
      <section className="py-20 bg-gradient-to-r from-finx-primary/90 to-finx-blue/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Solutions"
            subtitle="Innovative fintech solutions tailored to your business needs"
            titleClass="text-white"
            subtitleClass="text-white/90"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Lending & Credit Management",
                description:
                  "Streamline lending processes and optimize credit management with our advanced financial solutions.",
              },
              {
                title: "Integrations & Connectivity",
                description:
                  "Seamlessly connect your systems and services with our robust integration framework.",
              },
              {
                title: "Payments & Cards",
                description:
                  "Modernize payment systems and card management with secure, flexible solutions.",
              },
              {
                title: "Wealth Management",
                description:
                  "Empower wealth managers with tools for portfolio optimization and client relationship management.",
              },
              {
                title: "Customer-Centric Solutions",
                description:
                  "Create exceptional customer experiences with personalized, intuitive financial interfaces.",
              },
              {
                title: "Digital Banking Solutions",
                description:
                  "Transform traditional banking with innovative digital solutions that enhance efficiency and user experience.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 border border-white/20 rounded-xl bg-[#618992] backdrop-blur-sm hover:bg-[#477681] transition duration-300"
              >
                <h3 className="font-roboto font-bold text-xl mb-3">{card.title}</h3>
                <p className="font-inter text-white/80">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-roboto font-bold text-3xl text-finx-primary mb-6">
            Ready to transform your financial technology?
          </h2>
          <p className="font-inter text-lg text-finx-blue mb-8">
            Partner with FinXBridge to unlock the full potential of your business with our innovative fintech solutions.
          </p>
          <a
            href="#"
            className="inline-block bg-finx-primary hover:bg-finx-blue text-white py-3 px-8 rounded-lg font-inter font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
