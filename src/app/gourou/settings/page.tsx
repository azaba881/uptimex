import { Badge } from "@/components/ui/badge"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Paramètres</h1>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">Général</TabsTrigger>
          <TabsTrigger value="monitoring">Surveillance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="billing">Facturation</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres généraux</CardTitle>
              <CardDescription>Configurez les paramètres généraux de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site-name">Nom du site</Label>
                <Input id="site-name" defaultValue="UptimeX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-url">URL du site</Label>
                <Input id="site-url" defaultValue="https://uptimex.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email administrateur</Label>
                <Input id="admin-email" defaultValue="admin@uptimex.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Fuseau horaire par défaut</Label>
                <Select defaultValue="europe-paris">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Sélectionner un fuseau horaire" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
                    <SelectItem value="america-new_york">America/New_York (UTC-5)</SelectItem>
                    <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                    <SelectItem value="australia-sydney">Australia/Sydney (UTC+10)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Langue par défaut</Label>
                <Select defaultValue="fr">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Sélectionner une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Maintenance</CardTitle>
              <CardDescription>Gérez le mode maintenance et les sauvegardes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Mode maintenance</Label>
                  <p className="text-sm text-muted-foreground">
                    Activez le mode maintenance pour empêcher l&apos;accès aux utilisateurs pendant les mises à jour
                  </p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maintenance-message">Message de maintenance</Label>
                <Textarea
                  id="maintenance-message"
                  placeholder="Le site est actuellement en maintenance. Veuillez réessayer plus tard."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Sauvegardes automatiques</Label>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-backup">Activer les sauvegardes automatiques</Label>
                    <p className="text-sm text-muted-foreground">
                      Sauvegardez automatiquement la base de données et les configurations
                    </p>
                  </div>
                  <Switch id="auto-backup" defaultChecked />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Fréquence des sauvegardes</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="backup-frequency">
                    <SelectValue placeholder="Sélectionner une fréquence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Toutes les heures</SelectItem>
                    <SelectItem value="daily">Quotidienne</SelectItem>
                    <SelectItem value="weekly">Hebdomadaire</SelectItem>
                    <SelectItem value="monthly">Mensuelle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de surveillance</CardTitle>
              <CardDescription>Configurez les paramètres de surveillance par défaut</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="check-interval">Intervalle de vérification par défaut</Label>
                <Select defaultValue="5">
                  <SelectTrigger id="check-interval">
                    <SelectValue placeholder="Sélectionner un intervalle" />
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
              <div className="space-y-2">
                <Label htmlFor="timeout">Délai d&apos;expiration (secondes)</Label>
                <Input id="timeout" type="number" defaultValue="30" min="1" max="120" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="retry-attempts">Tentatives de nouvelle vérification</Label>
                <Input id="retry-attempts" type="number" defaultValue="3" min="1" max="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="retry-interval">Intervalle entre les tentatives (secondes)</Label>
                <Input id="retry-interval" type="number" defaultValue="10" min="1" max="60" />
              </div>
              <div className="space-y-2">
                <Label>Seuil de temps de réponse (ms)</Label>
                <div className="pt-2">
                  <Slider defaultValue={[2000]} max={10000} step={100} />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Rapide: 500ms</span>
                  <span>Moyen: 2000ms</span>
                  <span>Lent: 5000ms+</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Serveurs de surveillance</CardTitle>
              <CardDescription>Configurez les serveurs utilisés pour la surveillance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Serveurs actifs</Label>
                <div className="rounded-md border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="server-paris" defaultChecked />
                      <Label htmlFor="server-paris">Paris, France</Label>
                    </div>
                    <Badge>Principal</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="server-nyc" defaultChecked />
                      <Label htmlFor="server-nyc">New York, USA</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="server-tokyo" defaultChecked />
                      <Label htmlFor="server-tokyo">Tokyo, Japon</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="server-sydney" defaultChecked />
                      <Label htmlFor="server-sydney">Sydney, Australie</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="server-saopaulo" defaultChecked />
                      <Label htmlFor="server-saopaulo">São Paulo, Brésil</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="load-balancing">Méthode de répartition de charge</Label>
                <Select defaultValue="round-robin">
                  <SelectTrigger id="load-balancing">
                    <SelectValue placeholder="Sélectionner une méthode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="round-robin">Round Robin</SelectItem>
                    <SelectItem value="least-connections">Least Connections</SelectItem>
                    <SelectItem value="ip-hash">IP Hash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de notification</CardTitle>
              <CardDescription>Configurez les paramètres de notification par défaut</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Canaux de notification</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications">Notifications par email</Label>
                      <p className="text-sm text-muted-foreground">Envoyer des notifications par email</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-notifications">Notifications par SMS</Label>
                      <p className="text-sm text-muted-foreground">Envoyer des notifications par SMS</p>
                    </div>
                    <Switch id="sms-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="slack-notifications">Notifications Slack</Label>
                      <p className="text-sm text-muted-foreground">Envoyer des notifications sur Slack</p>
                    </div>
                    <Switch id="slack-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="webhook-notifications">Webhooks</Label>
                      <p className="text-sm text-muted-foreground">Déclencher des webhooks personnalisés</p>
                    </div>
                    <Switch id="webhook-notifications" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-from">Email expéditeur</Label>
                <Input id="email-from" defaultValue="notifications@uptimex.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-template">Modèle d&apos;email</Label>
                <Textarea
                  id="email-template"
                  className="min-h-[100px]"
                  defaultValue="Alerte UptimeX: Le site {site_name} est {status} depuis {duration}."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sms-template">Modèle de SMS</Label>
                <Textarea
                  id="sms-template"
                  className="min-h-[100px]"
                  defaultValue="UptimeX: {site_name} est {status} depuis {duration}."
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de sécurité</CardTitle>
              <CardDescription>Configurez les paramètres de sécurité de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Authentification</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="2fa">Authentification à deux facteurs (2FA)</Label>
                      <p className="text-sm text-muted-foreground">
                        Exiger l&apos;authentification à deux facteurs pour tous les utilisateurs
                      </p>
                    </div>
                    <Switch id="2fa" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-policy">Politique de mot de passe stricte</Label>
                      <p className="text-sm text-muted-foreground">
                        Exiger des mots de passe forts (min. 12 caractères, majuscules, minuscules, chiffres, symboles)
                      </p>
                    </div>
                    <Switch id="password-policy" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="password-expiry">Expiration des mots de passe</Label>
                      <p className="text-sm text-muted-foreground">
                        Forcer le changement de mot de passe tous les 90 jours
                      </p>
                    </div>
                    <Switch id="password-expiry" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Délai d&apos;expiration de session (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" min="5" max="1440" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-attempts">Tentatives de connexion maximales</Label>
                <Input id="login-attempts" type="number" defaultValue="5" min="1" max="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lockout-duration">Durée de verrouillage (minutes)</Label>
                <Input id="lockout-duration" type="number" defaultValue="15" min="1" max="1440" />
              </div>
              <div className="space-y-2">
                <Label>Protection contre les attaques</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="rate-limiting">Limitation de débit</Label>
                      <p className="text-sm text-muted-foreground">Limiter le nombre de requêtes par IP</p>
                    </div>
                    <Switch id="rate-limiting" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="csrf-protection">Protection CSRF</Label>
                      <p className="text-sm text-muted-foreground">Activer la protection contre les attaques CSRF</p>
                    </div>
                    <Switch id="csrf-protection" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="xss-protection">Protection XSS</Label>
                      <p className="text-sm text-muted-foreground">Activer la protection contre les attaques XSS</p>
                    </div>
                    <Switch id="xss-protection" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de facturation</CardTitle>
              <CardDescription>Configurez les paramètres de facturation et de paiement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Devise</Label>
                <Select defaultValue="eur">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Sélectionner une devise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">Euro (€)</SelectItem>
                    <SelectItem value="usd">Dollar US ($)</SelectItem>
                    <SelectItem value="gbp">Livre Sterling (£)</SelectItem>
                    <SelectItem value="jpy">Yen Japonais (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-rate">Taux de TVA (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="20" min="0" max="100" />
              </div>
              <div className="space-y-2">
                <Label>Plans tarifaires</Label>
                <div className="rounded-md border p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="plan-free" defaultChecked />
                      <Label htmlFor="plan-free">Plan Free</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="plan-pro" defaultChecked />
                      <Label htmlFor="plan-pro">Plan Pro</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="plan-enterprise" defaultChecked />
                      <Label htmlFor="plan-enterprise">Plan Enterprise</Label>
                    </div>
                    <Badge>Actif</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="invoice-prefix">Préfixe des factures</Label>
                <Input id="invoice-prefix" defaultValue="INV-" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-methods">Méthodes de paiement</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="payment-card">Carte de crédit</Label>
                      <p className="text-sm text-muted-foreground">Accepter les paiements par carte de crédit</p>
                    </div>
                    <Switch id="payment-card" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="payment-paypal">PayPal</Label>
                      <p className="text-sm text-muted-foreground">Accepter les paiements via PayPal</p>
                    </div>
                    <Switch id="payment-paypal" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="payment-bank">Virement bancaire</Label>
                      <p className="text-sm text-muted-foreground">Accepter les paiements par virement bancaire</p>
                    </div>
                    <Switch id="payment-bank" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

