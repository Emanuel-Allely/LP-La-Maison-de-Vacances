import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { SiAirbnb } from "react-icons/si";
import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";

const contactSchema = z.object({
  name: z.string().min(2, "Veuillez entrer votre nom"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.coerce.number().min(1).max(5).optional(),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caract\u00e8res"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  useSEO({
    title: "Contact | Maison de Charme Hiersac - R\u00e9servation & Renseignements",
    description: "Contactez-nous pour r\u00e9server votre s\u00e9jour dans notre maison charentaise \u00e0 Hiersac. Formulaire de contact, informations pratiques et liens de r\u00e9servation.",
  });

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: undefined,
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message envoy\u00e9 !",
        description: "Nous vous r\u00e9pondrons dans les plus brefs d\u00e9lais.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Un probl\u00e8me est survenu. Veuillez r\u00e9essayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Contactez-nous
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une question, une demande de r&eacute;servation ou besoin d'informations compl&eacute;mentaires ?
            N'h&eacute;sitez pas &agrave; nous &eacute;crire.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {submitted ? (
              <Card className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-2">Merci !</h2>
                <p className="text-muted-foreground mb-6">
                  Votre message a bien &eacute;t&eacute; envoy&eacute;. Nous vous r&eacute;pondrons dans les meilleurs d&eacute;lais.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" data-testid="button-new-message">
                  Envoyer un autre message
                </Button>
              </Card>
            ) : (
              <Card className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="votre@email.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>T&eacute;l&eacute;phone (optionnel)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+33 6 XX XX XX XX" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="checkIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Arriv&eacute;e</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid="input-checkin" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="checkOut"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>D&eacute;part</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid="input-checkout" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Voyageurs</FormLabel>
                            <FormControl>
                              <Input type="number" min={1} max={5} placeholder="1-5" {...field} data-testid="input-guests" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="D&eacute;crivez votre demande..."
                              className="resize-none min-h-[120px]"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={mutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {mutation.isPending ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Informations pratiques</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Adresse</p>
                    <p className="text-sm text-muted-foreground">4 Rue d'Angoul&ecirc;me, 16290 Hiersac</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Horaires</p>
                    <p className="text-sm text-muted-foreground">Arriv&eacute;e &agrave; partir de 15h00</p>
                    <p className="text-sm text-muted-foreground">D&eacute;part avant 11h00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">R&eacute;servation directe</h3>
              <p className="text-sm text-muted-foreground mb-4">
                R&eacute;servez directement via nos plateformes partenaires :
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.airbnb.fr/rooms/1482578037265572057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start" data-testid="button-contact-airbnb">
                    <SiAirbnb className="w-5 h-5 mr-3 text-[#FF5A5F]" />
                    R&eacute;server sur Airbnb
                  </Button>
                </a>
                <a
                  href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start" data-testid="button-contact-booking">
                      R&eacute;server sur Booking
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">&Agrave; proximit&eacute;</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Boulangerie, pharmacie, &eacute;picerie &agrave; 5 min &agrave; pied</li>
                <li>March&eacute; les mercredis et dimanches</li>
                <li>Gare TGV Angoul&ecirc;me &agrave; 15 min</li>
                <li>Cognac &agrave; 22 km</li>
                <li>A&eacute;roport de Limoges &agrave; 108 km</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
