import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('/create-order')
  async createOrder(@Body() body: { amount: string, name: string, description: string }) {
    try {
      const order = await this.paymentService.createOrder(
        body.amount,
        body.name,
        body.description
      );
      console.log('Order response from PayPal:', order);
      return { id: order.id };
    } catch (error) {
      throw new Error(`Error creating order: ${error.message}`);
    }
  }

  @Post('/capture-order')
  async captureOrder(@Body() body: { orderId: string }) {
    try {
      const capture = await this.paymentService.captureOrder(body.orderId);
      return {
        status: capture.status,
        details: capture.purchase_units[0].payments.captures[0]
      };
    } catch (error) {
      console.error('Error capturing order:', error);
      throw new Error(`Error capturing order: ${error.message}`);
    }
  }

}
