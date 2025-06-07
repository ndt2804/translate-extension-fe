import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Globe,
  Zap,
  Shield,
  Star,
  Languages,
  Chrome,
  MousePointer,
  Layers,
  Play,
  Check,
  ArrowRight,
  Brain,
  Rocket,
  Heart,
  Award,
  Coffee,
  BookOpen,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                TranslateX
              </span>
              <div className="text-xs text-slate-500 -mt-1 font-medium">AI Translation</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 hover:text-slate-900 font-semibold transition-all duration-300 hover:scale-105"
            >
              Reviews
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold">
              <Download className="w-4 h-4 mr-2" />
              Try Free
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30"></div>
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

      {/* Stats Section - Realistic for startup */}
      <section className="py-20 bg-white/60 backdrop-blur-sm border-y border-slate-200/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-slate-600 font-semibold text-lg">Beta Users</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <div className="text-slate-600 font-semibold text-lg">Pages Translated</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-purple-600 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-slate-600 font-semibold text-lg">Languages</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                0.5s
              </div>
              <div className="text-slate-600 font-semibold text-lg">Translation Speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900">Tired of language barriers?</h2>
            <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">
              We know the struggle. You find amazing content but can't understand it. Copy-pasting to Google Translate
              breaks your flow and kills the experience.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">😤</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Great content, wrong language</h3>
                <p className="text-slate-600 leading-relaxed">
                  Found the perfect manga or article but it's in Japanese, Korean, or another language you don't speak
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">⏰</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Wasting time copy-pasting</h3>
                <p className="text-slate-600 leading-relaxed">
                  Constantly switching between tabs, copying text to Google Translate, losing your reading flow
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">🤔</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Poor translation quality</h3>
                <p className="text-slate-600 leading-relaxed">
                  Basic translators miss context, slang, and cultural nuances, giving you confusing results
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-8 text-slate-900">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TranslateX solves everything!
              </span>
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Just hover your mouse over any text and get instant, context-aware translations. Keep reading naturally
              while understanding everything perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 font-bold">
              Powerful Features
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900">Built for modern readers</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              More than just translation - it's a complete reading experience transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Hover to Translate</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  No clicking, no copy-pasting. Just hover your mouse over any text and get instant translations that
                  feel magical.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-indigo-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Intelligence</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Advanced AI understands context, slang, and cultural nuances for translations that actually make
                  sense.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">25+ Languages</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  From Japanese manga to Korean webtoons, Chinese novels to European news - read content from around the
                  world.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-emerald-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Preserves Layout</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Translations appear seamlessly without breaking the website design. Read naturally as if it was always
                  in your language.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-amber-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Lightning Fast</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Translations appear in under 0.5 seconds. No waiting, no interruptions. Just smooth, instant
                  understanding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-rose-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-rose-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-3">Privacy First</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  Zero data storage, end-to-end encryption. Your reading habits and personal data stay completely
                  private.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-indigo-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 border-blue-200 px-4 py-2 font-bold">
              Simple Pricing
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900">Start free, upgrade when ready</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Perfect for individuals and early adopters</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">Free</CardTitle>
                <div className="mt-6 mb-4">
                  <span className="text-6xl font-black">$0</span>
                  <span className="text-slate-500 text-xl">/forever</span>
                </div>
                <CardDescription className="text-lg">Perfect for trying out</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">Hover translation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">10 popular languages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">100 translations/day</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">Basic AI translation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-slate-600 hover:bg-slate-700 text-lg py-4 font-bold rounded-xl">
                  Start Free
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl bg-white relative scale-105 shadow-xl">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 text-sm font-bold shadow-lg rounded-full">
                  🚀 Early Bird
                </Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold">Pro</CardTitle>
                <div className="mt-6 mb-4">
                  <span className="text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    $5
                  </span>
                  <span className="text-slate-500 text-xl">/month</span>
                </div>
                <CardDescription className="text-lg">For power readers</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg font-semibold">Everything in Free</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">25+ languages</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg font-semibold">Unlimited translations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">Advanced AI</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">Full page translation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-lg">Priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-lg py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  Upgrade to Pro
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6 text-lg">💰 7-day free trial for Pro • Cancel anytime</p>
            <Button
              variant="outline"
              className="border-2 border-slate-300 hover:border-slate-400 text-lg px-8 py-3 font-semibold"
            >
              Questions? Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Early adopters */}
      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2 font-bold">
              Early Adopters
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-slate-900">Beta users are loving TranslateX</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">Real feedback from our early community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed font-medium">
                  "Finally! I can read Japanese manga without constantly switching tabs. The hover feature is genius -
                  feels like magic!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">Alex M.</div>
                    <div className="text-sm text-slate-500">Beta User • Manga Reader</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-indigo-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed font-medium">
                  "As a developer, I read a lot of international tech blogs. This extension saves me hours every week.
                  The AI is surprisingly accurate!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">Sarah K.</div>
                    <div className="text-sm text-slate-500">Beta User • Software Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed font-medium">
                  "I'm learning Korean and this helps me read webtoons naturally. The context-aware translations are way
                  better than Google Translate!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">Mike L.</div>
                    <div className="text-sm text-slate-500">Beta User • Language Learner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-7xl font-black mb-8 text-white leading-tight">
            Join the reading
            <br />
            revolution
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Be among the first to experience the future of web translation.
            <br className="hidden md:block" />
            Your favorite international content awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 group font-bold"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Try Free Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-blue-800/50 hover:bg-blue-800/70 backdrop-blur-sm text-xl px-12 py-4 rounded-2xl border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 font-bold"
            >
              View Pro Features
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">30-second setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black">TranslateX</span>
                  <div className="text-xs text-slate-400 -mt-1 font-medium">AI Translation</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                The smartest AI translation extension for modern readers. Break language barriers with a simple hover.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Award className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Star className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Chrome Extension
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Firefox Extension
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors font-medium">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Feature Requests
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Community</h3>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-medium">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0 font-medium">
              &copy; 2024 TranslateX. All rights reserved. Made with ❤️ for global readers
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors font-medium">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors font-medium">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
