import Image from "next/image"
import { Cpu, HardDrive, MemoryStickIcon as Memory, Server, Globe, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const languages = [
    { name: "NodeJS", icon: "nodejs.svg", color: "bg-gradient-to-br from-green-400 to-green-600" },
    { name: "Python", icon: "python.svg", color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: "javascript.svg", color: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
    { name: "Java", icon: "java.svg", color: "bg-gradient-to-br from-orange-400 to-orange-600" },
    { name: "Go", icon: "go.svg", color: "bg-gradient-to-br from-cyan-400 to-cyan-600" },
    { name: "PHP", icon: "php.svg", color: "bg-gradient-to-br from-indigo-400 to-indigo-600" },
    { name: "Ruby", icon: "ruby.svg", color: "bg-gradient-to-br from-red-400 to-red-600" },
    { name: "Rust", icon: "rust.svg", color: "bg-gradient-to-br from-orange-400 to-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-2 shadow-lg shadow-blue-500/30">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Kurdish Host Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Kurdish Host
            </h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#languages" className="hover:text-cyan-400 transition font-medium">
                  Languages
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none shadow-lg shadow-blue-700/30"
          >
            Sign In
          </Button>
        </header>

        {/* Hero Content */}
        <section className="container mx-auto py-20 px-4 text-center relative z-10">
          <Badge className="mb-4 bg-blue-900/50 text-cyan-300 hover:bg-blue-900/50 px-4 py-1 text-sm border border-blue-700/50">
            Free Discord Bot Hosting
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-200">
            Power Your Discord Bots
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Host your Discord bots for free with reliable performance and easy management using Pterodactyl panel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none shadow-lg shadow-blue-700/30 text-lg px-8"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-300 hover:text-blue-200 hover:bg-blue-900/30 text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto">
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-blue-300">Active Bots</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-blue-300">Uptime</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-blue-300">Support</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-blue-300">Languages</div>
            </div>
          </div>
        </section>
      </div>

      {/* Languages Section */}
      <section id="languages" className="container mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <Badge className="mb-2 bg-blue-900/50 text-cyan-300 hover:bg-blue-900/50 px-3 py-1 text-xs">
            Multiple Languages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Supported Programming Languages
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
            Build your Discord bots in your favorite programming language with our flexible hosting platform.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <div key={index} className="group">
              <div
                className={`${lang.color} p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center h-full transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-900/30`}
              >
                <div className="w-16 h-16 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <Image src={`/placeholder.svg?height=40&width=40`} alt={`${lang.name} icon`} width={40} height={40} />
                </div>
                <h3 className="font-bold text-lg">{lang.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20 px-4 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <Badge className="mb-2 bg-blue-900/50 text-cyan-300 hover:bg-blue-900/50 px-3 py-1 text-xs">
            Premium Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Hosting Specifications
          </h2>
          <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
            Our free hosting plan provides everything you need to run your Discord bots efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <Card className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 border-blue-800/50 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">CPU</h3>
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                35%
              </div>
              <p className="text-blue-200">
                Dedicated CPU allocation for your Discord bots to ensure smooth performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 border-blue-800/50 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Memory className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">RAM</h3>
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                350MB
              </div>
              <p className="text-blue-200">Sufficient memory allocation to handle your bot's operations efficiently.</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/80 to-blue-950/80 border-blue-800/50 overflow-hidden group hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="pt-8 pb-6 px-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <HardDrive className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Disk Space</h3>
              <div className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                1GB
              </div>
              <p className="text-blue-200">Ample storage space for your bot files, databases, and assets.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pterodactyl Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900/50 to-blue-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-2 bg-blue-900/50 text-cyan-300 hover:bg-blue-900/50 px-3 py-1 text-xs">
                Easy Management
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Powered by Pterodactyl Panel
              </h2>
              <p className="text-blue-200 mb-8">
                Manage your Discord bots with ease using the powerful Pterodactyl control panel. Full console access,
                file management, and one-click deployments.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg mt-1">
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Console Access</h3>
                    <p className="text-blue-200 text-sm">Full terminal access to your bot</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg mt-1">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">File Manager</h3>
                    <p className="text-blue-200 text-sm">Easy upload and edit files</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg mt-1">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Secure Access</h3>
                    <p className="text-blue-200 text-sm">Protected with 2FA security</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-lg mt-1">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">One-Click Start</h3>
                    <p className="text-blue-200 text-sm">Instant deployment</p>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none shadow-lg shadow-blue-700/30">
                Try It Now
              </Button>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-2 rounded-2xl shadow-2xl shadow-blue-900/50 border border-blue-800/50">
                <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-xl overflow-hidden">
                  <div className="bg-blue-950 px-4 py-3 flex items-center gap-2 border-b border-blue-800/50">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-blue-300 text-sm ml-2">Pterodactyl Panel</div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Pterodactyl Panel Screenshot"
                    width={600}
                    height={400}
                    className="rounded-b-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/80 to-blue-950/80 p-12 rounded-3xl border border-blue-800/50 shadow-lg shadow-blue-900/20">
          <Badge className="mb-4 bg-blue-900/50 text-cyan-300 hover:bg-blue-900/50 px-4 py-1 text-sm">
            Free Forever
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Ready to Host Your Discord Bot?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Get started with free Discord bot hosting today. No credit card required.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 border-none shadow-lg shadow-blue-700/30 text-lg px-8 py-6"
          >
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12 border-t border-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-2 shadow-lg shadow-blue-500/30">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Kurdish Host Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Kurdish Host
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675c0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646a4.118 4.118 0 001.804-2.27a8.224 8.224 0 01-2.605.996a4.107 4.107 0 00-6.993 3.743a11.65 11.65 0 01-8.457-4.287a4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022a4.095 4.095 0 01-1.853.07a4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 py-8 border-t border-blue-900/50">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-300 hover:text-cyan-300 transition">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-blue-900/50 text-blue-400 text-sm">
            © {new Date().getFullYear()} Kurdish Host. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

