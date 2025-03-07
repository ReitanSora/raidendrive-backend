import { Injectable } from '@nestjs/common';


@Injectable()
export class PaymentService {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly baseURL = 'https://api-m.sandbox.paypal.com';

  constructor() {
    this.clientId = '';
    this.clientSecret = '';
  }

  private async generateAccessToken() {
    const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');
    const response = await fetch(`${this.baseURL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Generate',data)
    return data.access_token;
  }

  async createOrder(amount: string, name: string, description: string) {
    const accessToken = await this.generateAccessToken();
    
    const response = await fetch(`${this.baseURL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: amount,
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: amount
              }
            }
          },
          items: [
            {
              name: name,
              description: description,
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: amount
              }
            }
          ]
        }]
      })
    });
    console.log('Create',response)
    if (!response.ok) {
      throw new Error(`Failed to create order: ${response.statusText}`);
    }

    const data = await response.json();
    return { id: data.id }
  }

  async captureOrder(orderId: string) {
    const accessToken = await this.generateAccessToken();
    
    const response = await fetch(
      `${this.baseURL}/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to capture order: ${response.statusText}`);
    }
    console.log('Capture',response)
    return response.json();
  }

}
