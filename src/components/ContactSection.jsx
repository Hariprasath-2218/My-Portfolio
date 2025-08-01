import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useToast } from "@/hooks/use-toast"

export const ContactSection = () => {

        const { toast } = useToast();
        const [ isSubmitting, setIsSubmitting ] = useState(false);

        const initialState = {
          name:"",
          email:"",
          message:""
        }
        const [formData, setFormData] = useState(initialState)

        const handleFormInput = (e) => {
            const {name, value} = e.target;
            setFormData({...formData,[name]:value});
        }
      
      const SERVICE_ID = import.meta.env.SERVICE_ID
      const TEMPLATE_ID = import.meta.env.TEMPLATE_ID
      const PUBLIC_KEY = import.meta.env.PUBLIC_KEY
      const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true);
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target, PUBLIC_KEY).then(() => {
          setTimeout(() => {
           toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
           });
           setIsSubmitting(false);
        },1500);
          setFormData(initialState)
        }).catch(() => {
          setTimeout(() => {
           toast({
            title: "Message not sent!",
            description: "Oops! Something went wrong. Please try again.",
           });
           setIsSubmitting(false);
        },1500)
        })
      }  

    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30"> 
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a 
                                  href="mailto:ailearner2218@gmail.com"
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    ailearner2218@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a 
                                  href="tel:+91 7200255570" 
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 7200255570
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-6">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a 
                                  className="text-muted-foreground hover:text-primary transition-colors">
                                    Tiruvannamalai,TN
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                      <h4 className="font-medium mb-4"> Connect With Me</h4>
                      <div className="flex space-x-4 justify-center">
                        <a 
                          target="_black"
                          href="https://www.linkedin.com/in/hari-prasath-4072362a2/">
                            <Linkedin/>
                        </a>
                        <a 
                          target="_black"
                          href="https://x.com/Hari_2218?t=eblnjc-4qSxlRiA1hA-iXA&s=09">
                            <Twitter/>
                        </a>
                        <a 
                          target="_black"
                          href="https://www.instagram.com/hari_prasath2218?igsh=MWY3bmM2c3c5aTRpcg==">
                            <Instagram/>
                        </a>
                        <a 
                          target="_black"
                          href="https://www.facebook.com/profile.php?id=61577622581929&mibextid=ZbWKwL">
                            <Facebook/>
                        </a>
                        {/* <a
                          target="_black"
                          href="https://www.linkedin.com/in/hari-prasath-4072362a2/">
                            <Twitch/>
                        </a> */}
                      </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium mb-2"
                        > 
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required
                          value={formData.name}
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                          placeholder="Hari Prasath..."
                          onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium mb-2"
                        > 
                          Your Email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required
                          value={formData.email}
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                          placeholder="john@gmail.com"
                          onChange={handleFormInput}
                        />
                    </div>
                    <div>
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium mb-2"
                        > 
                          Your Message
                        </label>
                        <textarea
                          id="message" 
                          name="message" 
                          required
                          value={formData.message}
                          className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Hello, I'd like take about..."
                          onChange={handleFormInput}
                        />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting} 
                      className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2",
                        
                    )}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send size={16}/>
                    </button>
                  </form>
                </div>
            </div>
        </div>
      </section>
    );
}
