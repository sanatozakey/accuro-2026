import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  productCategory?: string;
  title?: string;
  description?: string;
}

export function ContactCTA({
  productCategory,
  title = "Ready to learn more?",
  description = "Have questions or need a quote? Our team is here to help you find the right calibration solution for your needs."
}: ContactCTAProps) {
  const contactUrl = productCategory
    ? `/contact?product=${encodeURIComponent(productCategory)}`
    : '/contact';

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-2 border-white/20 shadow-2xl bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-h2-mobile md:text-h2-desktop font-bold mb-4 text-white">
                {title}
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to={contactUrl}>
                <Button
                  size="lg"
                  className="bg-white text-navy-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="border-t border-white/20 pt-6 mt-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-200">
                <a
                  href="tel:+639171507737"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+63 917 150 7737</span>
                </a>
                <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                <a
                  href="mailto:info@accuro.ph"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@accuro.ph</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
