import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { registrationFormSchema } from '@shared/schema';
import type { InsertRegistration } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type State = {
  value: string;
  label: string;
};

const RegistrationForm: React.FC = () => {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  
  // Fetch states for dropdown
  const { data: states = [] } = useQuery<State[]>({
    queryKey: ['/api/states'],
  });
  
  // Form setup with validation
  const form = useForm<InsertRegistration>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: '',
      duration: '1 Month',
      firstName: '',
      lastName: '',
      address: '',
      state: '',
      city: '',
      zipCode: '',
      cellNumber: '',
      confirmCellNumber: '',
      confirmEmail: '',
      carModel: '',
      paymentType: 'Check',
      bankName: '',
      termsAccepted: false,
    },
  });
  
  // Registration mutation
  const registerMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await apiRequest('POST', '/api/register', data);
      const result = await response.json();
      return result;
    },
    onSuccess: (data) => {
      toast({
        title: "Registration Successful",
        description: "Your application has been submitted successfully.",
      });
      navigate('/thank-you');
    },
    onError: (error) => {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: InsertRegistration) => {
    registerMutation.mutate(data);
  };
  
  return (
    <section id="register" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Apply for the Wrap Campaign</h2>
          <p className="section-description">
            Complete the form below to join our program and start earning $350 weekly.
            A Moment Motor Co. agent will contact you within 24-48 hours.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md overflow-hidden">
            <CardHeader className="bg-primary text-white">
              <h3 className="text-xl font-montserrat font-bold">Registration Form</h3>
              <p className="opacity-90">Fields marked with * are required</p>
            </CardHeader>
            
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Email Section */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Campaign Duration */}
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">Minimum Period For Advert</FormLabel>
                        <div className="space-y-4">
                          <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            <div className="relative flex">
                              <RadioGroupItem 
                                value="1 Month" 
                                id="duration1Month" 
                                className="peer sr-only" 
                              />
                              <Label
                                htmlFor="duration1Month"
                                className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200 peer-data-[state=checked]:bg-gray-100 peer-data-[state=checked]:border-primary"
                              >
                                <div className="radio-marker mr-3 h-6 w-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <div className={`h-3 w-3 rounded-full ${field.value === '1 Month' ? 'bg-primary' : 'hidden'}`}></div>
                                </div>
                                <div>
                                  <span className="block font-medium">1 Month</span>
                                  <span className="text-sm text-gray-500">4 weeks program</span>
                                </div>
                              </Label>
                            </div>
                            
                            <div className="relative flex">
                              <RadioGroupItem 
                                value="3 Month" 
                                id="duration3Month" 
                                className="peer sr-only" 
                              />
                              <Label
                                htmlFor="duration3Month"
                                className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200 peer-data-[state=checked]:bg-gray-100 peer-data-[state=checked]:border-primary"
                              >
                                <div className="radio-marker mr-3 h-6 w-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <div className={`h-3 w-3 rounded-full ${field.value === '3 Month' ? 'bg-primary' : 'hidden'}`}></div>
                                </div>
                                <div>
                                  <span className="block font-medium">3 Months</span>
                                  <span className="text-sm text-gray-500">12 weeks program</span>
                                </div>
                              </Label>
                            </div>
                          </RadioGroup>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Address Information */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">ADDRESS (No PO Box)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">State</FormLabel>
                          <Select 
                            value={field.value} 
                            onValueChange={field.onChange}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select State" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {states.map((state) => (
                                <SelectItem key={state.value} value={state.value}>
                                  {state.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">City</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">Zip Code</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="cellNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">Cell Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="confirmCellNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="required">Reconfirm Cell Number</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="confirmEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">Reconfirm Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Vehicle Information */}
                  <FormField
                    control={form.control}
                    name="carModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">Car Type/Model</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Payment Type */}
                  <FormField
                    control={form.control}
                    name="paymentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">Payment Type</FormLabel>
                        <div className="space-y-4">
                          <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          >
                            <div className="relative flex">
                              <RadioGroupItem 
                                value="Check" 
                                id="paymentCheck" 
                                className="peer sr-only" 
                              />
                              <Label
                                htmlFor="paymentCheck"
                                className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200 peer-data-[state=checked]:bg-gray-100 peer-data-[state=checked]:border-primary"
                              >
                                <div className="radio-marker mr-3 h-6 w-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <div className={`h-3 w-3 rounded-full ${field.value === 'Check' ? 'bg-primary' : 'hidden'}`}></div>
                                </div>
                                <div>
                                  <span className="block font-medium">Check</span>
                                  <span className="text-sm text-gray-500">Delivered via USPS/FedEx</span>
                                </div>
                              </Label>
                            </div>
                            
                            <div className="relative flex">
                              <RadioGroupItem 
                                value="Direct Deposit" 
                                id="paymentDirectDeposit" 
                                className="peer sr-only" 
                              />
                              <Label
                                htmlFor="paymentDirectDeposit"
                                className="flex p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition duration-200 peer-data-[state=checked]:bg-gray-100 peer-data-[state=checked]:border-primary"
                              >
                                <div className="radio-marker mr-3 h-6 w-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                  <div className={`h-3 w-3 rounded-full ${field.value === 'Direct Deposit' ? 'bg-primary' : 'hidden'}`}></div>
                                </div>
                                <div>
                                  <span className="block font-medium">Direct Deposit</span>
                                  <span className="text-sm text-gray-500">Electronic bank transfer</span>
                                </div>
                              </Label>
                            </div>
                          </RadioGroup>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  {/* Bank Information */}
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="required">BANK NAME (NOTE: YOUR BANK DETAILS IS NOT REQUIRED)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Terms and Conditions */}
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                            id="terms" 
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel htmlFor="terms">
                            I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                          </FormLabel>
                          <FormDescription>
                            By submitting this form, you confirm all information provided is accurate.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow"
                    disabled={registerMutation.isPending}
                  >
                    {registerMutation.isPending ? "Processing..." : "Submit Application"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
