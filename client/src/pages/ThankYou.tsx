import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary font-montserrat">Thank You!</h1>
          </CardHeader>
          
          <CardContent className="text-center">
            <p className="text-xl mb-4">Your application has been successfully submitted.</p>
            <div className="mb-6 bg-neutral p-6 rounded-lg text-left">
              <h2 className="font-bold text-lg mb-3 font-montserrat">What's Next?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <p>A Moment Motor Co. agent will contact you within 24-48 hours to confirm your details.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                  <p>Check your email for sticker samples and additional program information.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 h-6 w-6 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                  <p>You'll receive your first week's payment once approved, followed by the decal installation.</p>
                </li>
              </ul>
            </div>
            <p>We're excited to have you join our auto wrap campaign!</p>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/" className="btn-primary">
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
