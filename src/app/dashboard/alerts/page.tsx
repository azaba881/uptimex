import Link from "next/link"
import { ArrowLeft, ArrowUpDown, CheckCircle, Clock, ExternalLink, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Retour</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Alertes</h1>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Historique des alertes</CardTitle>
              <CardDescription>Toutes les alertes générées pour vos sites web.</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrer
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                Dernière mise à jour: il y a 5 minutes
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" size="sm" className="-ml-4 h-8">
                    <span>Date</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Site</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Durée</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">2023-05-15 14:32</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>store.example.com</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Hors ligne</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">En cours</Badge>
                </TableCell>
                <TableCell>32 minutes</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Détails de l&apos;alerte</DialogTitle>
                        <DialogDescription>Informations détaillées sur l&apos;incident</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-muted-foreground">Site</Label>
                            <p className="font-medium">store.example.com</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Date</Label>
                            <p className="font-medium">2023-05-15 14:32</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Type</Label>
                            <p className="font-medium">Hors ligne</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Statut</Label>
                            <p className="font-medium">En cours</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Durée</Label>
                            <p className="font-medium">32 minutes</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Notifications envoyées</Label>
                            <p className="font-medium">Email, SMS</p>
                          </div>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Description</Label>
                          <p className="mt-1">
                            Le site est inaccessible depuis l&apos;adresse IP 192.168.1.1. Erreur HTTP 503 - Service
                            Unavailable.
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Logs</Label>
                          <pre className="mt-1 rounded-md bg-muted p-4 text-sm">
                            [2023-05-15 14:32:01] Tentative de connexion échouée [2023-05-15 14:32:15] Nouvelle
                            tentative échouée [2023-05-15 14:32:45] Alerte déclenchée
                          </pre>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Marquer comme résolu</Button>
                        <Button>Relancer la vérification</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-05-14 09:15</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>api.example.com</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Hors ligne</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="success">Résolu</Badge>
                </TableCell>
                <TableCell>15 minutes</TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Détails de l&apos;alerte</DialogTitle>
                        <DialogDescription>Informations détaillées sur l&apos;incident</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-muted-foreground">Site</Label>
                            <p className="font-medium">api.example.com</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Date</Label>
                            <p className="font-medium">2023-05-14 09:15</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Type</Label>
                            <p className="font-medium">Hors ligne</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Statut</Label>
                            <p className="font-medium">Résolu</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Durée</Label>
                            <p className="font-medium">15 minutes</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Notifications envoyées</Label>
                            <p className="font-medium">Email, SMS</p>
                          </div>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Description</Label>
                          <p className="mt-1">
                            Le site est inaccessible depuis l&apos;adresse IP 192.168.1.1. Erreur HTTP 500 - Internal
                            Server Error.
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Logs</Label>
                          <pre className="mt-1 rounded-md bg-muted p-4 text-sm">
                            [2023-05-14 09:15:01] Tentative de connexion échouée [2023-05-14 09:15:15] Nouvelle
                            tentative échouée [2023-05-14 09:15:45] Alerte déclenchée [2023-05-14 09:30:01] Site à
                            nouveau accessible
                          </pre>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button>Voir le rapport complet</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-05-13 22:47</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>blog.example.com</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="warning">Lent</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="success">Résolu</Badge>
                </TableCell>
                <TableCell>28 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Détails
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-05-12 16:03</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>example.com</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Hors ligne</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="success">Résolu</Badge>
                </TableCell>
                <TableCell>45 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Détails
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-05-10 08:22</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>api.example.com</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="warning">Lent</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="success">Résolu</Badge>
                </TableCell>
                <TableCell>12 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Détails
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Paramètres d&apos;alerte</CardTitle>
              <CardDescription>Configurez quand et comment vous souhaitez être alerté.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-medium">Canaux de notification</h3>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Email: john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>SMS: +33 6 12 34 56 78</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Slack: Non configuré</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Webhook: Non configuré</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Seuils d&apos;alerte</h3>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Site hors ligne: Immédiatement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Temps de réponse: &gt; 2 secondes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Certificat SSL: Expire dans &lt; 7 jours</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Modifier les paramètres</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Paramètres d&apos;alerte</DialogTitle>
                    <DialogDescription>
                      Configurez vos préférences de notification et les seuils d&apos;alerte
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Canaux de notification</h3>
                      <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="sms">SMS</Label>
                          <Input id="sms" defaultValue="+33 6 12 34 56 78" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="slack">Webhook Slack</Label>
                          <Input id="slack" placeholder="https://hooks.slack.com/services/..." />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="webhook">Webhook personnalisé</Label>
                          <Input id="webhook" placeholder="https://example.com/webhook" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Seuils d&apos;alerte</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="offline">Site hors ligne</Label>
                          <Select defaultValue="immediate">
                            <SelectTrigger id="offline" className="w-[180px]">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immédiatement</SelectItem>
                              <SelectItem value="1min">Après 1 minute</SelectItem>
                              <SelectItem value="5min">Après 5 minutes</SelectItem>
                              <SelectItem value="15min">Après 15 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="response-time">Temps de réponse</Label>
                          <Select defaultValue="2s">
                            <SelectTrigger id="response-time" className="w-[180px]">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1s">&gt; 1 seconde</SelectItem>
                              <SelectItem value="2s">&gt; 2 secondes</SelectItem>
                              <SelectItem value="5s">&gt; 5 secondes</SelectItem>
                              <SelectItem value="10s">&gt; 10 secondes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="ssl">Certificat SSL</Label>
                          <Select defaultValue="7days">
                            <SelectTrigger id="ssl" className="w-[180px]">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3days">Expire dans &lt; 3 jours</SelectItem>
                              <SelectItem value="7days">Expire dans &lt; 7 jours</SelectItem>
                              <SelectItem value="14days">Expire dans &lt; 14 jours</SelectItem>
                              <SelectItem value="30days">Expire dans &lt; 30 jours</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Options supplémentaires</h3>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-3 space-y-0">
                          <Checkbox id="retry" defaultChecked />
                          <div className="grid gap-1.5">
                            <Label htmlFor="retry">Réessayer avant d&apos;alerter</Label>
                            <p className="text-sm text-muted-foreground">
                              Effectue une seconde vérification avant de déclencher une alerte
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 space-y-0">
                          <Checkbox id="group" defaultChecked />
                          <div className="grid gap-1.5">
                            <Label htmlFor="group">Regrouper les alertes similaires</Label>
                            <p className="text-sm text-muted-foreground">
                              Regroupe les alertes similaires pour éviter les notifications multiples
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Annuler</Button>
                    <Button>Enregistrer les modifications</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

