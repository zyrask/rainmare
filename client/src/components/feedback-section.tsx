import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";

export default function FeedbackSection() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both name and message fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your feedback has been sent successfully.",
        });
        setFormData({ name: '', message: '' });
      } else {
        throw new Error('Failed to send feedback');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send feedback. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-rain-glow">
          <i className="fas fa-comment mr-4"></i>Send Feedback
        </h2>
        <p className="text-gray-300 text-center mb-12 text-lg">
          Share your thoughts, suggestions, or report issues directly with our team
        </p>
        
        <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-rain-glow">
                Name / Username
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name or username"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-black border-rain-glow/30 text-white placeholder:text-gray-400 focus:border-rain-glow focus:shadow-lg focus:shadow-rain-glow/20 glow-outline-green"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-rain-glow">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Share your feedback, suggestions, or report any issues..."
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="bg-black border-rain-glow/30 text-white placeholder:text-gray-400 focus:border-rain-glow focus:shadow-lg focus:shadow-rain-glow/20 min-h-[120px] glow-outline-green"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-rain-blue to-rain-accent hover:from-rain-accent hover:to-rain-blue transition-all duration-300 transform hover:scale-105 btn-glow-primary"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Feedback
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-rain-surface rounded-lg">
            <p className="text-sm text-gray-300 text-center">
              <i className="fas fa-info-circle mr-2 text-rain-glow"></i>
              Your feedback goes directly to our development team via Discord
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}