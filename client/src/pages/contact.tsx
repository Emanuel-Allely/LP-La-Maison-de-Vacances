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
import { MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SiAirbnb } from "react-icons/si";
import { BookingIcon } from "@/components/booking-icon";
import { useState } from "react";
import { useSEO } from "@/hooks/use-seo";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { lang, t } = useI18n();

  useSEO({
    title: t("seo.contact.title"),
    description: t("seo.contact.desc"),
  });

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, t("contact.nameError")),
    email: z.string().email(t("contact.emailError")),
    phone: z.string().optional(),
    checkIn: z.string().optional(),
    checkOut: z.string().optional(),
    guests: z.coerce.number().min(1).max(5).optional(),
    message: z.string().min(10, t("contact.messageError")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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
        title: t("contact.successTitle"),
        description: t("contact.successDesc"),
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t("contact.errorTitle"),
        description: t("contact.errorDesc"),
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
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            {submitted ? (
              <Card className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-2">{t("contact.thanks")}</h2>
                <p className="text-muted-foreground mb-6">
                  {t("contact.sent")}
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline" data-testid="button-new-message">
                  {t("contact.newMessage")}
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
                            <FormLabel>{t("contact.name")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("contact.namePlaceholder")} {...field} data-testid="input-name" />
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
                            <FormLabel>{t("contact.email")}</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
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
                          <FormLabel>{t("contact.phone")}</FormLabel>
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
                            <FormLabel>{t("contact.checkIn")}</FormLabel>
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
                            <FormLabel>{t("contact.checkOut")}</FormLabel>
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
                            <FormLabel>{t("contact.guests")}</FormLabel>
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
                          <FormLabel>{t("contact.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.messagePlaceholder")}
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
                        t("contact.sending")
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t("contact.send")}
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
              <h3 className="font-semibold mb-4">{t("contact.info")}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{t("contact.address")}</p>
                    <p className="text-sm text-muted-foreground">Rue d'Angoul&ecirc;me, 16290 Hiersac</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{t("contact.hours")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.checkInTime")}</p>
                    <p className="text-sm text-muted-foreground">{t("contact.checkOutTime")}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">{t("contact.directBooking")}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("contact.bookVia")}
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
                    {t("contact.bookAirbnb")}
                  </Button>
                </a>
                <a
                  href="https://www.booking.com/hotel/fr/maison-charentaise-de-charme-avec-piscine-jardin-et-salle-de-sport.fr.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start" data-testid="button-contact-booking">
                    <BookingIcon className="w-5 h-5 mr-3 text-[#003580]" />
                    {t("contact.bookBooking")}
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">{t("contact.nearby")}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t("contact.nearby1")}</li>
                <li>{t("contact.nearby2")}</li>
                <li>{t("contact.nearby3")}</li>
                <li>{t("contact.nearby4")}</li>
                <li>{t("contact.nearby5")}</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
