import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  stripePromise: Promise<Stripe | null>;

  constructor(private http: HttpClient) {
    this.stripePromise = this.loadStripe();
  }

  private async loadStripe(): Promise<Stripe | null> {
    try {
      const stripeKey: string | undefined = await this.http.get(`${environment.apiUrl}/api/v1/payments/stripe-key`, { responseType: 'text' }).toPromise();
      if (!stripeKey) {
        return null;
      }
      return await loadStripe(stripeKey);
    } catch (error) {
      return null;
    }
  }

  async pay(payment: any): Promise<void> {
    const stripe = await this.stripePromise;

    if (!stripe) {
      return;
    }

    try {
      const data: any = await this.http.post(`${environment.apiUrl}/api/v1/payments`, payment).toPromise();
      stripe.redirectToCheckout({
        sessionId: data.id,
      });
    } catch (error) {
      // Handle error silently or rethrow if needed
    }
  }

}
