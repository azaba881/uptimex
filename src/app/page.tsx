import type React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, Cpu, Globe, LineChart, Menu, Server, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { LoginButton, RegisterButton } from "@/components/auth-modals"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-slow">
              <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                  U
                </span>
              </div>
            </div>
            <span className="font-bold text-xl">UptimeX</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Fonctionnalités
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Tarifs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors relative group"
            >
              Témoignages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/gourou" className="text-sm font-medium hover:text-primary transition-colors relative group">
              Gourou
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <div className="hidden md:flex items-center gap-2">
              <LoginButton />
              <RegisterButton />
            </div>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="mb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link href="#features" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      Fonctionnalités
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#pricing" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      Tarifs
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#testimonials" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      Témoignages
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/gourou" className="flex items-center py-2 px-3 rounded-md hover:bg-muted">
                      Gourou
                    </Link>
                  </SheetClose>
                  <div className="h-px bg-border my-2"></div>
                  {/* <SheetClose asChild>
                    <LoginButton className="w-full justify-center" />
                  </SheetClose>
                  <SheetClose asChild>
                    <RegisterButton className="w-full justify-center" />
                  </SheetClose> */}
                </div> 
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
              <div className="space-y-6 mb-10">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <span className="animate-pulse mr-1">•</span> Surveillance en temps réel
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="block">Restez en ligne,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-x">
                    restez performant.
                  </span>
                </h1>
                <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  UptimeX surveille vos sites web 24/7 et vous alerte instantanément en cas de panne ou de problème de
                  performance.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row mb-12">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  asChild
                >
                  <Link href="/dashboard">
                    <span className="relative z-10">Commencer l&apos;essai gratuit</span>
                    <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="#demo">
                    <span>Voir une démo</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                    >
                      <span className="text-xs font-medium">U{i}</span>
                    </div>
                  ))}
                </div>
                <span>+1,200 entreprises nous font confiance</span>
              </div>

              <div className="w-full max-w-[900px] mx-auto">
                <div className="relative z-10 rounded-xl border bg-background/80 backdrop-blur-sm shadow-2xl overflow-hidden animate-float">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
                  <div className="relative p-1">
                    <div className="flex items-center gap-2 border-b p-3">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 text-center text-xs font-medium">UptimeX Dashboard</div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="rounded-lg border bg-card p-3 text-center">
                          <div className="text-2xl font-bold text-primary">99.9%</div>
                          <div className="text-xs text-muted-foreground">Disponibilité</div>
                        </div>
                        <div className="rounded-lg border bg-card p-3 text-center">
                          <div className="text-2xl font-bold text-secondary">245ms</div>
                          <div className="text-xs text-muted-foreground">Temps de réponse</div>
                        </div>
                        <div className="rounded-lg border bg-card p-3 text-center">
                          <div className="text-2xl font-bold">5</div>
                          <div className="text-xs text-muted-foreground">Sites surveillés</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">example.com</span>
                          </div>
                          <span className="text-xs text-muted-foreground">2m ago</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">api.example.com</span>
                          </div>
                          <span className="text-xs text-muted-foreground">1m ago</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="font-medium">store.example.com</span>
                          </div>
                          <span className="text-xs text-red-500 font-medium">Down</span>
                        </div>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">blog.example.com</span>
                          </div>
                          <span className="text-xs text-muted-foreground">5m ago</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                            <span className="font-medium">shop.example.com</span>
                          </div>
                          <span className="text-xs text-amber-500 font-medium">Slow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background elements */}
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-gradient-radial from-background/0 to-background/70 dark:from-background/0 dark:to-background/80"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="mx-auto mb-16 max-w-[800px] text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                Fonctionnalités
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Tout ce dont vous avez besoin</h2>
              <p className="text-muted-foreground md:text-xl">
                Une suite complète d&apos;outils pour surveiller et optimiser vos sites web
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Surveillance de disponibilité"
                description="Vérifie en continu si votre site est en ligne et accessible à vos utilisateurs."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Suivi des performances"
                description="Analyse le temps de chargement, les erreurs et les performances globales de votre site."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Alertes instantanées"
                description="Recevez des notifications par email, SMS ou Slack en cas de panne ou de ralentissement."
              />
              <FeatureCard
                icon={<LineChart className="h-10 w-10 text-primary" />}
                title="Rapports détaillés"
                description="Statistiques d&apos;incidents et analyses de performance pour optimiser votre site."
              />
              <FeatureCard
                icon={<Server className="h-10 w-10 text-primary" />}
                title="Points de contrôle globaux"
                description="Tests de disponibilité depuis plusieurs localisations dans le monde entier."
              />
              <FeatureCard
                icon={<Cpu className="h-10 w-10 text-primary" />}
                title="Intégration facile"
                description="API et webhooks pour automatiser les actions et intégrer avec vos outils existants."
              />
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/50">
          <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="mx-auto mb-16 max-w-[800px] text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                Processus
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Comment ça marche</h2>
              <p className="text-muted-foreground md:text-xl">Commencez à surveiller votre site en quelques minutes</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center relative">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-2xl font-bold text-primary-foreground shadow-lg">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">Ajoutez votre site</h3>
                <p className="text-muted-foreground">
                  Entrez l&apos;URL de votre site et configurez les paramètres de surveillance.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <div className="flex flex-col items-center text-center relative">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 text-2xl font-bold text-primary-foreground shadow-lg">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">Configurez les alertes</h3>
                <p className="text-muted-foreground">
                  Choisissez comment et quand vous souhaitez être alerté en cas de problème.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-secondary/80 to-secondary text-2xl font-bold text-primary-foreground shadow-lg">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">Surveillez et optimisez</h3>
                <p className="text-muted-foreground">
                  Consultez les rapports et améliorez les performances de votre site.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="mx-auto mb-16 max-w-[800px] text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                Tarifs
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Plans et tarifs</h2>
              <p className="text-muted-foreground md:text-xl">Choisissez le plan qui correspond à vos besoins</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Pour les petits projets</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">0€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <PricingFeature>1 site surveillé</PricingFeature>
                  <PricingFeature>10 requêtes/minute</PricingFeature>
                  <PricingFeature>Alertes par email uniquement</PricingFeature>
                  <PricingFeature>Rapports basiques</PricingFeature>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/dashboard">Commencer gratuitement</Link>
                </Button>
              </div>
              <div className="relative rounded-xl border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-b before:from-primary/20 before:to-secondary/20 before:blur-xl before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-sm font-medium text-white">
                  Populaire
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Pour les entreprises</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">5€</span>
                  <span className="text-muted-foreground">/mois</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <PricingFeature>5 sites surveillés</PricingFeature>
                  <PricingFeature>30 requêtes/minute</PricingFeature>
                  <PricingFeature>Alertes par email, SMS et Slack</PricingFeature>
                  <PricingFeature>Rapports détaillés</PricingFeature>
                  <PricingFeature>Points de contrôle globaux</PricingFeature>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  asChild
                >
                  <Link href="/dashboard">Commencer l&apos;essai</Link>
                </Button>
              </div>
              <div className="relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">Pour les grandes entreprises</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Sur mesure</span>
                </div>
                <ul className="mb-6 space-y-2">
                  <PricingFeature>Sites illimités</PricingFeature>
                  <PricingFeature>Requêtes illimitées</PricingFeature>
                  <PricingFeature>Toutes les méthodes d&apos;alerte</PricingFeature>
                  <PricingFeature>API et Webhooks</PricingFeature>
                  <PricingFeature>Support dédié</PricingFeature>
                  <PricingFeature>SLA personnalisé</PricingFeature>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
          <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-5"></div>
          <div className="container">
            <div className="mx-auto mb-16 max-w-[800px] text-center">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                Démarrer
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Prêt à commencer?</h2>
              <p className="text-muted-foreground md:text-xl">
                Rejoignez des milliers d&apos;entreprises qui font confiance à UptimeX
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                asChild
              >
                <Link href="/dashboard">
                  <span className="relative z-10">Commencer l&apos;essai gratuit</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <Link href="/contact">
                  <span>Contactez-nous</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary">
                  <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                      U
                    </span>
                  </div>
                </div>
                <span className="font-bold text-xl">UptimeX</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Surveillance de sites web en temps réel pour les entreprises de toutes tailles.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Témoignages
                  </Link>
                </li>
                <li>
                  <Link href="/gourou" className="text-muted-foreground hover:text-foreground transition-colors">
                    Gourou
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Conditions d&apos;utilisation
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                    Politique de cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} UptimeX. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-primary" />
      <span>{children}</span>
    </li>
  )
}

