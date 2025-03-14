import { ArrowUpDown, Calendar, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Logs et incidents</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Derniers 7 jours
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher dans les logs..." className="pl-10" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filtrer</span>
        </Button>
      </div>

      <Tabs defaultValue="incidents">
        <TabsList>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="system">Logs système</TabsTrigger>
          <TabsTrigger value="user">Logs utilisateurs</TabsTrigger>
        </TabsList>
        <TabsContent value="incidents" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Incidents récents</CardTitle>
              <CardDescription>Liste des incidents détectés sur les sites surveillés</CardDescription>
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
                    <TableHead>Propriétaire</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 14:32</TableCell>
                    <TableCell>store.example.com</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Hors ligne</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">En cours</Badge>
                    </TableCell>
                    <TableCell>32 minutes</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-14 09:15</TableCell>
                    <TableCell>api.example.com</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Hors ligne</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Résolu</Badge>
                    </TableCell>
                    <TableCell>15 minutes</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-13 22:47</TableCell>
                    <TableCell>blog.example.com</TableCell>
                    <TableCell>
                      <Badge variant="warning">Lent</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Résolu</Badge>
                    </TableCell>
                    <TableCell>28 minutes</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-12 16:03</TableCell>
                    <TableCell>example.com</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Hors ligne</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Résolu</Badge>
                    </TableCell>
                    <TableCell>45 minutes</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-10 08:22</TableCell>
                    <TableCell>api.example.com</TableCell>
                    <TableCell>
                      <Badge variant="warning">Lent</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="success">Résolu</Badge>
                    </TableCell>
                    <TableCell>12 minutes</TableCell>
                    <TableCell>John Doe</TableCell>
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
        </TabsContent>
        <TabsContent value="system" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Logs système</CardTitle>
              <CardDescription>Logs des opérations système et des serveurs</CardDescription>
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
                    <TableHead>Serveur</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 15:32:45</TableCell>
                    <TableCell>srv-paris-01</TableCell>
                    <TableCell>
                      <Badge>INFO</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">Scheduled maintenance completed successfully</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 14:45:12</TableCell>
                    <TableCell>srv-nyc-02</TableCell>
                    <TableCell>
                      <Badge variant="warning">WARNING</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">High CPU usage detected (85%)</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 14:32:01</TableCell>
                    <TableCell>srv-tokyo-01</TableCell>
                    <TableCell>
                      <Badge variant="destructive">ERROR</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">Database connection failed: timeout after 30s</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 13:15:45</TableCell>
                    <TableCell>srv-paris-01</TableCell>
                    <TableCell>
                      <Badge>INFO</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">Scheduled maintenance started</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 12:05:32</TableCell>
                    <TableCell>srv-sydney-01</TableCell>
                    <TableCell>
                      <Badge variant="warning">WARNING</Badge>
                    </TableCell>
                    <TableCell className="max-w-md truncate">Disk space running low (85% used)</TableCell>
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
        </TabsContent>
        <TabsContent value="user" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Logs utilisateurs</CardTitle>
              <CardDescription>Historique des actions des utilisateurs</CardDescription>
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
                    <TableHead>Utilisateur</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Détails</TableHead>
                    <TableHead>IP</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 16:45:12</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge>LOGIN</Badge>
                    </TableCell>
                    <TableCell>Connexion réussie</TableCell>
                    <TableCell>192.168.1.1</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 15:32:45</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>
                      <Badge>UPDATE</Badge>
                    </TableCell>
                    <TableCell>Modification des paramètres de notification</TableCell>
                    <TableCell>192.168.1.2</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 14:22:18</TableCell>
                    <TableCell>Robert Johnson</TableCell>
                    <TableCell>
                      <Badge>CREATE</Badge>
                    </TableCell>
                    <TableCell>Ajout d&apos;un nouveau site: blog.startup.io</TableCell>
                    <TableCell>192.168.1.3</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 13:15:45</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>
                      <Badge variant="destructive">DELETE</Badge>
                    </TableCell>
                    <TableCell>Suppression d&apos;un site: old-site.example.com</TableCell>
                    <TableCell>192.168.1.4</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2023-05-15 12:05:32</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge variant="warning">FAILED</Badge>
                    </TableCell>
                    <TableCell>Tentative de connexion échouée</TableCell>
                    <TableCell>192.168.1.5</TableCell>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

