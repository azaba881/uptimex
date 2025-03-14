import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddWebsitePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Retour</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Ajouter un site web</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations du site</CardTitle>
          <CardDescription>Entrez les informations de base du site web que vous souhaitez surveiller.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="url">URL du site</Label>
                <Input id="url" placeholder="https://example.com" />
                <p className="text-sm text-muted-foreground">
                  Entrez l&apos;URL complète du site web, y compris https:// ou http://
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="name">Nom du site (optionnel)</Label>
                <Input id="name" placeholder="Mon site web" />
                <p className="text-sm text-muted-foreground">
                  Un nom pour identifier facilement ce site dans votre tableau de bord.
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="frequency">Fréquence de vérification</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Sélectionnez une fréquence" />
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
                <p className="text-sm text-muted-foreground">
                  À quelle fréquence souhaitez-vous que nous vérifions votre site.
                </p>
              </div>
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

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="email" defaultChecked />
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <p className="text-sm text-muted-foreground">Recevez des notifications par email.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="sms" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="sms">SMS</Label>
                    <p className="text-sm text-muted-foreground">Recevez des notifications par SMS.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="slack" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="slack">Slack</Label>
                    <p className="text-sm text-muted-foreground">Recevez des notifications sur Slack.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-y-0">
                  <Checkbox id="webhook" />
                  <div className="grid gap-1.5">
                    <Label htmlFor="webhook">Webhook</Label>
                    <p className="text-sm text-muted-foreground">Déclenchez un webhook personnalisé.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link href="/dashboard">Annuler</Link>
              </Button>
              <Button>Démarrer la surveillance</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

