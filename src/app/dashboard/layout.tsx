import type React from "react"
import Link from "next/link"
import { Bell, ChevronDown, Home, LineChart, LogOut, PlusCircle, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="ml-auto flex items-center gap-4">
              <NotificationsDialog />
              <ThemeToggle />
              <UserMenu />
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-primary to-secondary">
            <div className="absolute inset-[2px] rounded-full bg-background flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                U
              </span>
            </div>
          </div>
          <span className="font-bold text-xl">UptimeX</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive>
              <Link href="/dashboard">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/add-website">
                <PlusCircle className="h-4 w-4" />
                <span>Ajouter un site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/alerts">
                <Bell className="h-4 w-4" />
                <span>Alertes</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/reports">
                <LineChart className="h-4 w-4" />
                <span>Rapports</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/settings">
                <Settings className="h-4 w-4" />
                <span>Paramètres</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-2">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

function NotificationsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Notifications</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
          <DialogDescription>Vos notifications récentes</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 max-h-[60vh] overflow-auto">
          <div className="rounded-lg border p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Site hors ligne</h4>
              <span className="text-xs text-muted-foreground">Il y a 5 minutes</span>
            </div>
            <p className="text-sm">store.example.com est hors ligne depuis 5 minutes.</p>
            <div className="flex justify-end gap-2 mt-2">
              <Button variant="outline" size="sm">
                Ignorer
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/alerts">Voir</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Temps de réponse élevé</h4>
              <span className="text-xs text-muted-foreground">Il y a 2 heures</span>
            </div>
            <p className="text-sm">api.example.com a un temps de réponse élevé (2.3s).</p>
            <div className="flex justify-end gap-2 mt-2">
              <Button variant="outline" size="sm">
                Ignorer
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/alerts">Voir</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Site à nouveau en ligne</h4>
              <span className="text-xs text-muted-foreground">Il y a 1 jour</span>
            </div>
            <p className="text-sm">blog.example.com est à nouveau en ligne après 28 minutes d&apos;indisponibilité.</p>
            <div className="flex justify-end gap-2 mt-2">
              <Button variant="outline" size="sm">
                Ignorer
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard/alerts">Voir</Link>
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/alerts">Voir toutes les notifications</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <div className="h-6 w-6 rounded-full bg-muted" />
          <span>John Doe</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profil</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            <span>Paramètres</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

