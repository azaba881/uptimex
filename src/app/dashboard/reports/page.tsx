import Link from "next/link"
import { ArrowLeft, Calendar, Download, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Retour</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Rapports</h1>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sélectionner un site" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les sites</SelectItem>
              <SelectItem value="example.com">example.com</SelectItem>
              <SelectItem value="blog.example.com">blog.example.com</SelectItem>
              <SelectItem value="api.example.com">api.example.com</SelectItem>
              <SelectItem value="store.example.com">store.example.com</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Derniers 7 jours
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtrer
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="uptime">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="uptime">Disponibilité</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
        </TabsList>
        <TabsContent value="uptime" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Disponibilité</CardTitle>
              <CardDescription>Disponibilité de vos sites web au cours des 7 derniers jours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/50 rounded-md">
                <p className="text-muted-foreground">Graphique de disponibilité</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Disponibilité par site</CardTitle>
                <CardDescription>Pourcentage de disponibilité pour chaque site surveillé.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique de disponibilité par site</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Disponibilité par région</CardTitle>
                <CardDescription>Pourcentage de disponibilité par région géographique.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique de disponibilité par région</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>Temps de réponse de vos sites web au cours des 7 derniers jours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/50 rounded-md">
                <p className="text-muted-foreground">Graphique de performance</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Temps de réponse par site</CardTitle>
                <CardDescription>Temps de réponse moyen pour chaque site surveillé.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique de temps de réponse par site</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Temps de chargement</CardTitle>
                <CardDescription>Temps de chargement des pages par site.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique de temps de chargement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="incidents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Incidents</CardTitle>
              <CardDescription>Historique des incidents au cours des 7 derniers jours.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center bg-muted/50 rounded-md">
                <p className="text-muted-foreground">Graphique d&apos;incidents</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Résumé des incidents</CardTitle>
              <CardDescription>Résumé des incidents par type et par site.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique d&apos;incidents par type</p>
                </div>
                <div className="h-[300px] flex items-center justify-center bg-muted/50 rounded-md">
                  <p className="text-muted-foreground">Graphique d&apos;incidents par site</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Rapports programmés</CardTitle>
          <CardDescription>Configurez des rapports automatiques envoyés par email.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Rapport hebdomadaire</h3>
                  <p className="text-sm text-muted-foreground">Envoyé chaque lundi à 8h00 à john.doe@example.com</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Rapport mensuel</h3>
                  <p className="text-sm text-muted-foreground">
                    Envoyé le 1er du mois à 8h00 à john.doe@example.com, team@example.com
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Ajouter un rapport programmé</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

