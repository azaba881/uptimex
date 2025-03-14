import { ArrowUpDown, Download, Filter, Globe, MoreHorizontal, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function WebsitesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sites surveillés</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un site
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Ajouter un site web</DialogTitle>
              <DialogDescription>Entrez les informations du site web à surveiller</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="url">URL du site</Label>
                <Input id="url" placeholder="https://example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Nom du site (optionnel)</Label>
                <Input id="name" placeholder="Mon site web" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="owner">Propriétaire</Label>
                <Select>
                  <SelectTrigger id="owner">
                    <SelectValue placeholder="Sélectionner un utilisateur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john">John Doe</SelectItem>
                    <SelectItem value="jane">Jane Smith</SelectItem>
                    <SelectItem value="robert">Robert Johnson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="frequency">Fréquence de vérification</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Sélectionner une fréquence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Toutes les minutes</SelectItem>
                    <SelectItem value="5">Toutes les 5 minutes</SelectItem>
                    <SelectItem value="10">Toutes les 10 minutes</SelectItem>
                    <SelectItem value="15">Toutes les 15 minutes</SelectItem>
                    <SelectItem value="30">Toutes les 30 minutes</SelectItem>
                    <SelectItem value="60">Toutes les heures</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Type de surveillance</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start space-x-3 space-y-0">
                    <Checkbox id="ping" defaultChecked />
                    <div className="grid gap-1.5">
                      <Label htmlFor="ping">Ping</Label>
                      <p className="text-sm text-muted-foreground">Vérifie si le serveur répond à une requête ping.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-y-0">
                    <Checkbox id="http" defaultChecked />
                    <div className="grid gap-1.5">
                      <Label htmlFor="http">HTTP</Label>
                      <p className="text-sm text-muted-foreground">Vérifie si le site répond avec un code HTTP 200.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-y-0">
                    <Checkbox id="keyword" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="keyword">Mot-clé</Label>
                      <p className="text-sm text-muted-foreground">
                        Vérifie si un mot-clé spécifique est présent sur la page.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 space-y-0">
                    <Checkbox id="ssl" />
                    <div className="grid gap-1.5">
                      <Label htmlFor="ssl">Certificat SSL</Label>
                      <p className="text-sm text-muted-foreground">
                        Vérifie si le certificat SSL est valide et n&apos;expire pas bientôt.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Annuler</Button>
              <Button>Ajouter le site</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher un site..." className="pl-10" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filtrer</span>
        </Button>
        <Button variant="outline" size="icon">
          <Download className="h-4 w-4" />
          <span className="sr-only">Exporter</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sites surveillés</CardTitle>
          <CardDescription>Liste de tous les sites web surveillés sur la plateforme</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button variant="ghost" size="sm" className="-ml-4 h-8">
                    <span>Site</span>
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead>Propriétaire</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Disponibilité</TableHead>
                <TableHead>Temps de réponse</TableHead>
                <TableHead>Dernière vérification</TableHead>
                <TableHead className="w-[80px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">example.com</p>
                      <p className="text-xs text-muted-foreground">https://example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <Badge variant="success">En ligne</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>99.9%</span>
                    <Progress value={99.9} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>245ms</TableCell>
                <TableCell>Il y a 2 minutes</TableCell>
                <TableCell>
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
                      <DropdownMenuItem>Voir les alertes</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Modifier</DropdownMenuItem>
                      <DropdownMenuItem>Suspendre la surveillance</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">blog.example.com</p>
                      <p className="text-xs text-muted-foreground">https://blog.example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <Badge variant="success">En ligne</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>99.7%</span>
                    <Progress value={99.7} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>320ms</TableCell>
                <TableCell>Il y a 5 minutes</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">api.example.com</p>
                      <p className="text-xs text-muted-foreground">https://api.example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <Badge variant="success">En ligne</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>99.8%</span>
                    <Progress value={99.8} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>156ms</TableCell>
                <TableCell>Il y a 2 minutes</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">store.example.com</p>
                      <p className="text-xs text-muted-foreground">https://store.example.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <Badge variant="destructive">Hors ligne</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>98.2%</span>
                    <Progress value={98.2} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>--</TableCell>
                <TableCell>Il y a 1 minute</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">mywebsite.com</p>
                      <p className="text-xs text-muted-foreground">https://mywebsite.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>Jane Smith</TableCell>
                <TableCell>
                  <Badge variant="success">En ligne</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>100%</span>
                    <Progress value={100} className="h-2 w-16" />
                  </div>
                </TableCell>
                <TableCell>189ms</TableCell>
                <TableCell>Il y a 3 minutes</TableCell>
                <TableCell>
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
    </div>
  )
}

