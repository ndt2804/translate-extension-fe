"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Languages,
  Wand2,
  Edit3,
  Layers,
  Download,
  Upload,
  Eye,
  Check,
  Star,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Rocket,
  Play,
  ArrowRight,
  Chrome,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-lavender-500 to-blue-500">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-lavender-600 to-blue-600 bg-clip-text text-transparent">
                VisualTranslate
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-lavender-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-lavender-600 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-gray-600 hover:text-lavender-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-gray-600 hover:text-lavender-600 transition-colors"
              >
                Reviews
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" className="text-gray-600 hover:text-lavender-600">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-lavender-500 to-blue-500 hover:from-lavender-600 hover:to-blue-600 text-white shadow-lg">
                Try Free
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col gap-4 py-4">
                <Link href="#features" className="text-sm font-medium text-gray-600">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-sm font-medium text-gray-600">
                  How It Works
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-gray-600">
                  Pricing
                </Link>
                <Link href="#testimonials" className="text-sm font-medium text-gray-600">
                  Reviews
                </Link>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="ghost" className="justify-start">
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-lavender-500 to-blue-500 text-white">Try Free</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 overflow-hidden bg-white">
          {/* Background Elements */}
          <div className="absolute inset-0"></div>
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

          <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200/50 px-6 py-3 text-sm font-bold backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />🚀 New AI-powered translation extension
            </Badge>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Read anything
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                in your language
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              The smartest AI translation extension that instantly translates any web content.
              <br className="hidden md:block" />
              From Japanese manga to international news - just hover your mouse!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg px-12 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group font-bold"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Start Free Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-4 rounded-2xl border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105 group font-bold"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators - Realistic for startup */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-slate-500">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-3 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold">Early adopters love it</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Chrome className="w-6 h-6 text-blue-500" />
                <span className="text-sm font-semibold">Chrome Web Store</span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/50 via-transparent to-blue-100/50" />
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-lavender-100 to-blue-100 text-lavender-700 border-lavender-200">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI-Powered Translation
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Translate Manga & Comics{" "}
                    <span className="bg-gradient-to-r from-lavender-600 to-blue-600 bg-clip-text text-transparent">
                      Instantly
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-[600px]">
                    AI-powered translation & text overlay tool for visual stories — in your browser or online.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-lavender-500 to-blue-500 hover:from-lavender-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Try Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-lavender-200 text-lavender-700 hover:bg-lavender-50"
                  >
                    Add Extension
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" />
                    Free forever plan
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-lavender-200 shadow-2xl bg-white">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Extension Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lavender-500/20 to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-lavender-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-lavender-400 rounded-full opacity-20 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-lavender-100 text-lavender-700 border-lavender-200">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Everything you need to translate visual content
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Our AI-powered platform makes translating comics, manga, and visual stories effortless and accurate.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Wand2 className="h-8 w-8 text-lavender-500" />}
                title="AI Text Detection"
                description="Advanced OCR technology automatically detects and extracts text from any image with high precision."
              />
              <FeatureCard
                icon={<Edit3 className="h-8 w-8 text-blue-500" />}
                title="Edit Translations Inline"
                description="Review and perfect translations with our intuitive inline editing interface before applying."
              />
              <FeatureCard
                icon={<Layers className="h-8 w-8 text-lavender-500" />}
                title="Overlay on Image"
                description="Seamlessly overlay translated text onto images while maintaining the original design and layout."
              />
              <FeatureCard
                icon={<Download className="h-8 w-8 text-blue-500" />}
                title="Download as PDF/Image"
                description="Export your translated content as high-quality images or PDFs for offline reading."
              />
              <FeatureCard
                icon={<Globe className="h-8 w-8 text-lavender-500" />}
                title="Support for Vietnamese & More"
                description="Translate to and from Vietnamese, Japanese, Korean, Chinese, and 50+ other languages."
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8 text-blue-500" />}
                title="Lightning Fast"
                description="Process translations in seconds with our optimized AI pipeline and cloud infrastructure."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-lavender-50 to-blue-50">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-white text-lavender-700 border-lavender-200">How It Works</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Translate in 4 simple steps</h2>
              <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
                From upload to download, our streamlined process makes translation effortless
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StepCard
                number="1"
                icon={<Upload className="h-8 w-8 text-lavender-500" />}
                title="Upload or Select"
                description="Upload your manga page or comic panel, or use our browser extension on any website"
              />
              <StepCard
                number="2"
                icon={<Eye className="h-8 w-8 text-blue-500" />}
                title="AI Detects & Translates"
                description="Our AI automatically detects text in the image and translates it to your preferred language"
              />
              <StepCard
                number="3"
                icon={<Edit3 className="h-8 w-8 text-lavender-500" />}
                title="Edit if Needed"
                description="Review and fine-tune translations using our intuitive editing interface"
              />
              <StepCard
                number="4"
                icon={<Download className="h-8 w-8 text-blue-500" />}
                title="Export & Enjoy"
                description="Download your translated content as an image or PDF and enjoy reading"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-lavender-100 text-lavender-700 border-lavender-200">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Loved by thousands of users</h2>
              <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
                See what our community says about their translation experience
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="This tool has revolutionized how I read manga. The translations are incredibly accurate and the overlay feature is seamless!"
                author="Sarah Chen"
                role="Manga Enthusiast"
                avatar="/placeholder.svg?height=40&width=40"
                rating={5}
              />
              <TestimonialCard
                quote="As a language learner, this extension helps me understand Japanese comics while learning. The editing feature is perfect for corrections."
                author="Miguel Rodriguez"
                role="Language Student"
                avatar="/placeholder.svg?height=40&width=40"
                rating={5}
              />
              <TestimonialCard
                quote="Our scanlation team saves hours of work with this tool. The AI detection is spot-on and the export quality is professional-grade."
                author="Alex Kim"
                role="Scanlation Team Lead"
                avatar="/placeholder.svg?height=40&width=40"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-br from-lavender-50 to-blue-50">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-white text-lavender-700 border-lavender-200">Pricing</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Choose your plan</h2>
              <p className="text-xl text-gray-600 max-w-[700px] mx-auto">
                Start free and upgrade as you grow. All plans include our core translation features.
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <span className={`text-sm ${!isYearly ? "text-lavender-600 font-medium" : "text-gray-500"}`}>
                  Monthly
                </span>
                <Switch
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                  className="data-[state=checked]:bg-lavender-500"
                />
                <span className={`text-sm ${isYearly ? "text-lavender-600 font-medium" : "text-gray-500"}`}>
                  Yearly
                </span>
                <Badge className="bg-green-100 text-green-700 border-green-200 ml-2">Save 20%</Badge>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                name="Free"
                price={0}
                period="forever"
                description="Perfect for trying out our translation features"
                features={[
                  "5 translations per month",
                  "Basic AI text detection",
                  "Standard translation quality",
                  "Image export only",
                  "Community support",
                ]}
                buttonText="Start Free"
                buttonVariant="outline"
              />
              <PricingCard
                name="Pro"
                price={isYearly ? 96 : 12}
                period={isYearly ? "year" : "month"}
                description="For serious manga and comic readers"
                features={[
                  "Unlimited translations",
                  "Advanced AI text detection",
                  "Premium translation quality",
                  "PDF & Image export",
                  "Priority support",
                  "Batch processing",
                  "Custom fonts & styling",
                ]}
                buttonText="Start Pro Trial"
                buttonVariant="default"
                popular={true}
              />
              <PricingCard
                name="Team"
                price={isYearly ? 240 : 25}
                period={isYearly ? "year" : "month"}
                description="For scanlation teams and organizations"
                features={[
                  "Everything in Pro",
                  "Team collaboration tools",
                  "Project management",
                  "API access",
                  "Custom integrations",
                  "Dedicated support",
                  "Usage analytics",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-lavender-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 bg-cover bg-center" />
          <div className="container relative">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Ready to Translate Your Stories Smarter?
              </h2>
              <p className="text-xl text-lavender-100 max-w-2xl mx-auto">
                Join thousands of manga fans, language learners, and content creators who trust VisualTranslate for
                their translation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-lavender-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Demo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-lavender-100 pt-4">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  No setup required
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Cancel anytime
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  24/7 support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-lavender-500 to-blue-500">
                  <Languages className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-lavender-600 to-blue-600 bg-clip-text text-transparent">
                  VisualTranslate
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                AI-powered translation for visual content. Translate manga, comics, and stories instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Browser Extension
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-lavender-600">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} VisualTranslate. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-lavender-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-lavender-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-lavender-100 hover:border-lavender-200">
      <CardContent className="p-6 space-y-4">
        <div className="p-3 w-fit rounded-xl bg-gradient-to-br from-lavender-100 to-blue-100 group-hover:from-lavender-200 group-hover:to-blue-200 transition-all">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

interface StepCardProps {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 group">
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-lavender-500 to-blue-500 text-white text-sm font-bold flex items-center justify-center">
          {number}
        </div>
      </div>
      <h3 className="font-bold text-xl text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

function TestimonialCard({ quote, author, role, avatar, rating }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-lavender-100">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed italic">"{quote}"</p>
        <div className="flex items-center gap-3 pt-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-400 to-blue-400 flex items-center justify-center">
            <Image src={avatar || "/placeholder.svg"} alt={author} width={40} height={40} className="rounded-full" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface PricingCardProps {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular?: boolean
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={`relative hover:shadow-lg transition-all duration-300 ${popular ? "border-lavender-300 shadow-lg scale-105" : "border-lavender-100"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-lavender-500 to-blue-500 text-white border-none">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-gray-900">{name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${buttonVariant === "default" ? "bg-gradient-to-r from-lavender-500 to-blue-500 hover:from-lavender-600 hover:to-blue-600 text-white" : "border-lavender-200 text-lavender-700 hover:bg-lavender-50"}`}
          variant={buttonVariant}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
