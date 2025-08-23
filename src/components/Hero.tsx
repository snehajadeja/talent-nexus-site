import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Building, Briefcase, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import Header from "@/components/Header";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Heading Section */}
      <section className="px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Find Your Perfect Career Match
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("hero.tagline")}
          </p>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/job-seeker")}
                className="w-full h-28 flex-col gap-3 text-base"
              >
                <Users className="h-7 w-7" />
                <span>{t("hero.jobSeeker")}</span>
              </Button>
            </div>
            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/recruiter")}
                className="w-full h-28 flex-col gap-3 text-base"
              >
                <Building className="h-7 w-7" />
                <span>{t("hero.recruiter")}</span>
              </Button>
            </div>
            <div className="group">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate("/departments")}
                className="w-full h-28 flex-col gap-3 text-base"
              >
                <Briefcase className="h-7 w-7" />
                <span>{t("hero.departments")}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US Section */}
      <section className="px-6 py-12 md:py-16 bg-gradient-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">WHY US?</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>In today’s fast-paced and competitive business environment, talent is the single most important driver of success. Across industries and geographies, organizations face an ever-growing challenge — the shortage of skilled and reliable manpower. Traditional hiring processes often fall short in addressing these evolving needs, leaving companies struggling to find the right people for the right roles.</p>
            <p>That’s where [Your Company Name] steps in. We specialize in delivering tailored manpower solutions designed to meet your unique business requirements. Whether you need permanent employees or contractual staff, we ensure you get access to highly trained, efficient, and motivated professionals. By partnering with us, you save valuable time, reduce operational overheads, and boost organizational productivity.</p>
            <p>Our service offerings span multiple industries, making us a trusted manpower partner across PAN India. With years of dedicated experience in understanding human potential, we know how to identify talent that not only fits your technical needs but also aligns with your company culture. Our proven methodology ensures measurable results, helping you achieve your business objectives faster and more effectively.</p>
            <p className="text-foreground font-medium">When our expertise meets your ambition, excellence follows.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            To deliver top-quality manpower solutions that enable our clients to operate smoothly, achieve higher efficiency, and continuously improve work quality.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-12 md:py-16 bg-gradient-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            To serve over 5,000+ clients across India and expand into 10+ developed countries by 2038, achieving a turnover of ₹10,000 Cr+ while maintaining service excellence.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Customer</h3>
                  <p className="text-muted-foreground">Deliver unmatched service quality, foster strong relationships, and aim for complete customer delight.</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Money</h3>
                  <p className="text-muted-foreground">Drive sustainable profitability to fuel organizational growth.</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Team</h3>
                  <p className="text-muted-foreground">Value our employees as our greatest asset, empowering them to achieve shared goals.</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Work/Business</h3>
                  <p className="text-muted-foreground">Serve diverse sectors with a commitment to the highest quality standards.</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg border bg-card md:col-span-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Growth</h3>
                  <p className="text-muted-foreground">Strive for progress and expansion — without limits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information at bottom */}
      <footer className="px-6 py-12 md:py-16 bg-gradient-secondary mt-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Information</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground">+91 9664854676</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground">gracehospitalityandmanpower@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-muted-foreground">Jamnagar, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;