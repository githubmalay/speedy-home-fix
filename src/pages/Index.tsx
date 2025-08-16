import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import RequestForm from "@/components/RequestForm";
import WorkerDashboard from "@/components/WorkerDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <RequestForm />
      <WorkerDashboard />
    </div>
  );
};

export default Index;
