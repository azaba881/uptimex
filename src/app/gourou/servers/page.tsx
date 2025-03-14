import {
  ArrowUpDown,
  CheckCircle,
  Clock,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  ServerIcon,
  Shield,
  Wifi,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ServersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Serveurs</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un serveur
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Ajouter un serveur</DialogTitle>
              <DialogDescription>Configurez un nouveau serveur de surveillance</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom du serveur</Label>
                <Input id="name" placeholder="srv-paris-03" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localisation</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Sélectionner une localisation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paris">Paris, France</SelectItem>
                    <SelectItem value="nyc">New York, USA</SelectItem>
                    <SelectItem value="tokyo">Tokyo, Japon</SelectItem>
                    <SelectItem value="sydney">Sydney, Australie</SelectItem>
                    <SelectItem value="saopaulo">São Paulo, Brésil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ip">Adresse IP</Label>
                <Input id="ip" placeholder="192.168.1.1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type de serveur</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Sélectionner un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monitoring">Monitoring</SelectItem>
                    <SelectItem value="proxy">Proxy</SelectItem>
                    <SelectItem value="database">Base de données</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="specs">Spécifications</Label>
                <Input id="specs" placeholder="4 CPU, 8GB RAM, 100GB SSD" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button>Ajouter le serveur</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Serveurs actifs</CardDescription>
            <CardTitle className="text-4xl">5</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">100%</span> disponibilité
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Charge moyenne</CardDescription>
            <CardTitle className="text-4xl">42%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">-5%</span> depuis hier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Sites surveillés</CardDescription>
            <CardTitle className="text-4xl">5,732</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+128</span> depuis le mois dernier
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Requêtes / minute</CardDescription>
            <CardTitle className="text-4xl">12,450</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              <span className="text-green-500 font-medium">+8.2%</span> depuis hier
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statut des serveurs</CardTitle>
          <CardDescription>État actuel des serveurs de monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher un serveur..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filtrer</span>
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" size="sm" className="-ml-4 h-8">
                    <span>Serveur</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Localisation</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Charge</TableHead>
                <TableHead>Mémoire</TableHead>
                <TableHead>Disque</TableHead>
                <TableHead>Dernière vérification</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">srv-paris-01</p>
                      <p className="text-xs text-muted-foreground">192.168.1.1</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Paris, France</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">En ligne</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>42%</span>
                    <Progress value={42} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>35%</span>
                    <Progress value={35} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>28%</span>
                    <Progress value={28} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>Il y a 2 minutes</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                      <DropdownMenuItem>Voir les logs</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Redémarrer</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Mettre hors ligne</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">srv-nyc-02</p>
                      <p className="text-xs text-muted-foreground">192.168.1.2</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>New York, USA</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">En ligne</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>38%</span>
                    <Progress value={38} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>42%</span>
                    <Progress value={42} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>30%</span>
                    <Progress value={30} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>Il y a 1 minute</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">srv-tokyo-01</p>
                      <p className="text-xs text-muted-foreground">192.168.1.3</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Tokyo, Japon</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">En ligne</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>51%</span>
                    <Progress value={51} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>45%</span>
                    <Progress value={45} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>32%</span>
                    <Progress value={32} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>Il y a 3 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">srv-sydney-01</p>
                      <p className="text-xs text-muted-foreground">192.168.1.4</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Sydney, Australie</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-amber-500" />
                    <span className="text-amber-500 font-medium">Charge élevée</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>78%</span>
                    <Progress value={78} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>65%</span>
                    <Progress value={65} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>40%</span>
                    <Progress value={40} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>Il y a 2 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <ServerIcon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">srv-saopaulo-01</p>
                      <p className="text-xs text-muted-foreground">192.168.1.5</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>São Paulo, Brésil</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-green-500 font-medium">En ligne</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>45%</span>
                    <Progress value={45} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>38%</span>
                    <Progress value={38} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>25%</span>
                    <Progress value={25} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>Il y a 4 minutes</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance planifiée</CardTitle>
          <CardDescription>Calendrier des opérations de maintenance à venir</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Mise à jour des serveurs Paris</p>
                    <p className="text-sm text-muted-foreground">Prévu pour le 20 mai 2023, 02:00 - 04:00 CEST</p>
                  </div>
                </div>
                <Badge>Planifié</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Mise à jour du système d&apos;exploitation et des logiciels de surveillance.
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Optimisation des bases de données</p>
                    <p className="text-sm text-muted-foreground">Prévu pour le 22 mai 2023, 03:00 - 05:00 UTC</p>
                  </div>
                </div>
                <Badge>Planifié</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Optimisation des performances des bases de données sur tous les serveurs.
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Mise à jour de sécurité</p>
                    <p className="text-sm text-muted-foreground">Prévu pour le 25 mai 2023, 01:00 - 02:00 UTC</p>
                  </div>
                </div>
                <Badge>Planifié</Badge>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Application des derniers correctifs de sécurité sur tous les serveurs.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

