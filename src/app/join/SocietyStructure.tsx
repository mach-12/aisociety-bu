import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function SocietyStructure() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-center mb-6">
        Society Structure
      </h2>
      <Tabs defaultValue="new-structure" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new-structure">AI Society Structure</TabsTrigger>
          <TabsTrigger value="old-structure">Generic Structure</TabsTrigger>
        </TabsList>
        <TabsContent value="new-structure">
          <Card>
            <CardContent className="space-y-2">
              <Image
                src="/new-ais.png"
                width={800}
                height={800}
                alt="Logo"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="old-structure">
          <Card>
            <CardContent className="space-y-2">
              <Image
                src="/legacy-ais.png"
                width={800}
                height={800}
                alt="Logo"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
